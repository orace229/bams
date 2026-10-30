import { z } from "zod";

export const intakeSchema = z.object({
  category: z.enum(['consulting', 'facility_management', 'conciergerie', 'evenementiel', 'sur_mesure'], {
    required_error: "Veuillez choisir le domaine de service.",
  }),
  service_type: z.string().optional(),
  description: z.string()
    .min(15, "Veuillez fournir une description plus détaillée (au moins 15 caractères).")
    .max(2000, "La description est trop longue (maximum 2000 caractères)."),
  urgency: z.enum(['standard', 'urgent', 'planned'], {
    required_error: "Veuillez préciser le niveau d'urgence.",
  }),
  location: z.enum(['cotonou', 'calavi', 'portonovo', 'parakou', 'autre_benin', 'diaspora'], {
    required_error: "Veuillez sélectionner la zone géographique.",
  }),
  client_name: z.string()
    .min(2, "Le nom doit comporter au moins 2 caractères."),
  client_phone: z.string()
    .min(8, "Veuillez indiquer un numéro de téléphone/WhatsApp valide."),
  client_email: z.string().email("Adresse email invalide.").optional().or(z.literal('')),
  preferred_contact: z.enum(['whatsapp', 'phone', 'email'], {
    required_error: "Veuillez choisir votre canal de contact privilégié.",
  }),
});

export type IntakeFormData = z.infer<typeof intakeSchema>;
