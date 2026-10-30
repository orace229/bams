import { NextResponse } from "next/server";
import { intakeSchema } from "@/lib/validations/intake-schema";
import { supabase } from "@/lib/supabase/client";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate payload against Zod schema
    const validationResult = intakeSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        { error: "Payload invalide", details: validationResult.error.format() },
        { status: 400 }
      );
    }

    const {
      ref_id,
      category,
      description,
      urgency,
      location,
      client_name,
      client_phone,
      client_email,
      preferred_contact,
    } = body;

    const timestamp = new Date().toISOString();

    // Log internally for debugging / audit trace
    console.log(
      `[BAMS CALL CENTER] Nouvelle demande reçue -> Ref: ${ref_id} | Client: ${client_name} (${client_phone}) | Catégorie: ${category} | Urgence: ${urgency}`
    );

    // =========================================================================
    // OPTION A : ALERTE INSTANTANÉE CALL CENTER & GROUPE WHATSAPP INTERNE
    // =========================================================================
    const webhookUrl =
      process.env.INTERNAL_TEAM_WEBHOOK_URL ||
      process.env.BAMS_CALL_CENTER_WEBHOOK;

    const alertMessage = `🚨 *NOUVELLE DEMANDE ENTRANTE — CALL CENTER BAMS*

📋 *RÉFÉRENCE :* ${ref_id}
👤 *Demandeur :* ${client_name}
📞 *Téléphone :* ${client_phone}
✉️ *Email :* ${client_email || "Non renseigné"}
📍 *Zone :* ${location}
🏷️ *Offre :* ${category}
⚡ *Urgence :* ${urgency}
💬 *Canal préféré :* ${preferred_contact}

📝 *Description du besoin :*
${description}

⏱️ *Rappel :* Prise en charge et retour client sous 30 minutes max !`;

    if (webhookUrl && !webhookUrl.includes("placeholder") && !webhookUrl.includes("your-webhook")) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            event: "new_intake_request",
            ref_id,
            client_name,
            client_phone,
            client_email,
            category,
            urgency,
            location,
            preferred_contact,
            description,
            timestamp,
            text: alertMessage, // Compatible avec webhook WhatsApp/Slack/Telegram/Make
            content: alertMessage,
          }),
        });
        console.log(`[BAMS NOTIFICATION] Alerte Call Center transmise avec succès au Webhook.`);
      } catch (webhookErr) {
        console.error("[BAMS NOTIFICATION ERROR] Échec de transmission au webhook:", webhookErr);
      }
    }

    // =========================================================================
    // BASE DE DONNÉES SUPABASE (Si configurée)
    // =========================================================================
    if (
      process.env.NEXT_PUBLIC_SUPABASE_URL &&
      !process.env.NEXT_PUBLIC_SUPABASE_URL.includes("placeholder")
    ) {
      try {
        const { error } = await supabase.from("bams_intakes").insert([
          {
            ref_id,
            category,
            description,
            urgency,
            location,
            client_name,
            client_phone,
            client_email: client_email || null,
            preferred_contact,
            status: "pending",
            created_at: timestamp,
          },
        ]);

        if (error) {
          console.error("[SUPABASE ERROR] Erreur enregistrement:", error);
        }
      } catch (dbErr) {
        console.error("[DATABASE EXCEPTION]", dbErr);
      }
    }

    return NextResponse.json({
      success: true,
      ref_id,
      message: "Demande enregistrée et transmise au Call Center BAMS",
      call_center_phone: "01 41 26 33 72",
      timestamp,
    });
  } catch (err: any) {
    console.error("Intake API Route Error:", err);
    return NextResponse.json(
      { error: "Erreur serveur lors de la soumission de la demande" },
      { status: 500 }
    );
  }
}
