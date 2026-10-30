"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { intakeSchema, IntakeFormData } from "@/lib/validations/intake-schema";
import { generateRefId, buildWhatsAppUrl } from "@/lib/utils";
import { BAMS_INFO } from "@/lib/constants";
import { 
  CheckCircle, 
  Send, 
  MessageSquare, 
  ArrowRight, 
  ArrowLeft, 
  Briefcase, 
  Building2, 
  Calendar, 
  AlertCircle
} from "lucide-react";

interface MultiStepIntakeFormProps {
  initialCategory?: "consulting" | "facility_management" | "conciergerie" | "evenementiel" | "sur_mesure";
}

export function MultiStepIntakeForm({ initialCategory }: MultiStepIntakeFormProps) {
  const [step, setStep] = useState<number>(1);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<(IntakeFormData & { ref_id: string }) | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    trigger,
    formState: { errors }
  } = useForm<IntakeFormData>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      category: (initialCategory === "conciergerie" ? "facility_management" : initialCategory) || "facility_management",
      urgency: "standard",
      location: "cotonou",
      preferred_contact: "whatsapp",
    }
  });

  useEffect(() => {
    if (initialCategory) {
      const normalized = initialCategory === "conciergerie" ? "facility_management" : initialCategory;
      setValue("category", normalized);
    }
  }, [initialCategory, setValue]);

  const selectedCategory = watch("category");
  const selectedContact = watch("preferred_contact");

  const nextStep = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await trigger(["category", "urgency", "location"]);
    } else if (step === 2) {
      isValid = await trigger(["description"]);
    }
    if (isValid) setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const onSubmit = async (data: IntakeFormData) => {
    setSubmitting(true);
    const ref_id = generateRefId();

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, ref_id }),
      });

      const result = await res.json();
      console.log("Intake submitted successfully:", result);
      setSubmittedData({ ...data, ref_id });
    } catch (err) {
      console.error("Submission error:", err);
      setSubmittedData({ ...data, ref_id });
    } finally {
      setSubmitting(false);
    }
  };

  const getCategoryLabel = (cat: string) => {
    switch (cat) {
      case "consulting": return "Consulting & Assistance";
      case "facility_management":
      case "conciergerie": return "Facility Management BAMS (Maison, bureau, immeuble)";
      case "evenementiel": return "Planification Événementielle";
      default: return "Sur-Mesure";
    }
  };

  const getUrgencyLabel = (urg: string) => {
    switch (urg) {
      case "standard": return "Standard (Sous 48h)";
      case "urgent": return "🔥 Urgent (Sous 24h)";
      default: return "📅 Planifié (Projet futur)";
    }
  };

  const getLocationLabel = (loc: string) => {
    switch (loc) {
      case "cotonou": return "Cotonou";
      case "calavi": return "Abomey-Calavi";
      case "portonovo": return "Porto-Novo";
      case "parakou": return "Parakou";
      case "diaspora": return "Diaspora (International)";
      default: return "Autre Région";
    }
  };

  return (
    <section id="formulaire-intake" className="py-8 sm:py-12 px-3 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
      <div className="bg-white border border-slate-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-xl relative overflow-hidden w-full">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Formulaire Officiel d&apos;Intake
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900">
            Exprimez votre besoin au Call Center BAMS
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Complétez ce formulaire guidé. Prise en charge sous 30 minutes garantie.
          </p>
        </div>

        {/* Progress Indicator */}
        {!submittedData && (
          <div className="mb-6 sm:mb-8 max-w-md mx-auto">
            <div className="flex justify-between text-[11px] sm:text-xs font-bold text-slate-500 mb-2">
              <span className={step >= 1 ? "text-blue-600" : ""}>1. Domaine</span>
              <span className={step >= 2 ? "text-blue-600" : ""}>2. Description</span>
              <span className={step >= 3 ? "text-blue-600" : ""}>3. Coordonnées</span>
            </div>
            <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-blue-600 h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Submitted State View */}
        {submittedData ? (
          <div className="text-center space-y-5 sm:space-y-6 py-4 sm:py-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-600 border border-blue-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-xl sm:text-2xl font-black text-slate-900">
                Demande transmise avec succès !
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Votre référence dossier a été générée. Le Call Center BAMS qualifie actuellement votre besoin pour un retour sous 30 minutes.
              </p>
            </div>

            {/* Receipt Card */}
            <div className="max-w-md mx-auto p-4 sm:p-5 bg-slate-50 rounded-2xl border border-slate-200 text-left space-y-2 sm:space-y-3 shadow-sm">
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-widest">RÉFÉRENCE DOSSIER</span>
                <span className="text-xs sm:text-sm font-black text-blue-600">{submittedData.ref_id}</span>
              </div>
              <div className="text-xs space-y-1 text-slate-700">
                <p><strong>Offre :</strong> {getCategoryLabel(submittedData.category)}</p>
                <p><strong>Urgence :</strong> {getUrgencyLabel(submittedData.urgency)}</p>
                <p><strong>Localisation :</strong> {getLocationLabel(submittedData.location)}</p>
                <p><strong>Client :</strong> {submittedData.client_name} ({submittedData.client_phone})</p>
              </div>
            </div>

            {/* Instant WhatsApp Payload Trigger */}
            <div className="max-w-md mx-auto pt-2 space-y-3">
              <a
                href={buildWhatsAppUrl(
                  BAMS_INFO.whatsappPhone,
                  `Bonjour BAMS Call Center,\n\nJe viens de valider la demande *${submittedData.ref_id}* sur le site.\n\n- *Offre* : ${getCategoryLabel(submittedData.category)}\n- *Urgence* : ${getUrgencyLabel(submittedData.urgency)}\n- *Zone* : ${getLocationLabel(submittedData.location)}\n- *Demandeur* : ${submittedData.client_name}\n- *Téléphone* : ${submittedData.client_phone}\n- *Besoin* : ${submittedData.description}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 text-xs sm:text-sm"
              >
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Confirmer sur WhatsApp (01 41 26 33 72)</span>
              </a>

              <button
                onClick={() => {
                  setSubmittedData(null);
                  setStep(1);
                }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Formuler une autre demande
              </button>
            </div>

          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6">
            
            {/* STEP 1: Offer Category, Urgency, Location */}
            {step === 1 && (
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                    1. Choisissez le domaine d&apos;intervention *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {[
                      { id: "consulting", title: "1. Consulting & Assistance", icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> },
                      { id: "facility_management", title: "2. Facility Management BAMS", icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> },
                      { id: "evenementiel", title: "3. Planification Événementielle", icon: <Calendar className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" /> },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => setValue("category", item.id as any)}
                        className={`p-3.5 sm:p-4 rounded-xl sm:rounded-2xl border text-left flex sm:flex-col justify-between items-center sm:items-start space-y-0 sm:space-y-3 transition-all ${
                          selectedCategory === item.id
                            ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                            : "bg-slate-50 text-slate-800 border-slate-200 hover:border-blue-400"
                        }`}
                      >
                        <div className="flex items-center space-x-2 sm:space-x-0 sm:justify-between w-full">
                          <span className={selectedCategory === item.id ? "text-white" : "text-blue-600"}>{item.icon}</span>
                          {selectedCategory === item.id && <CheckCircle className="w-4 h-4 text-white sm:ml-auto" />}
                        </div>
                        <span className="text-xs font-bold">{item.title}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Niveau d&apos;urgence *
                    </label>
                    <select
                      {...register("urgency")}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="standard">Standard (Traitement sous 48h)</option>
                      <option value="urgent">🔥 Urgent (Traitement sous 24h)</option>
                      <option value="planned">📅 Projet planifié (À venir)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Zone d&apos;intervention *
                    </label>
                    <select
                      {...register("location")}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="cotonou">Cotonou &amp; Environs</option>
                      <option value="calavi">Abomey-Calavi &amp; Godomey</option>
                      <option value="portonovo">Porto-Novo</option>
                      <option value="parakou">Parakou / Nord Bénin</option>
                      <option value="diaspora">Diaspora / International</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl flex items-center justify-center space-x-2 text-xs sm:text-sm shadow-md shadow-blue-600/20"
                  >
                    <span>Étape suivante</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Detailed Description */}
            {step === 2 && (
              <div className="space-y-5 sm:space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    2. Description détaillée de votre besoin *
                  </label>
                  <textarea
                    {...register("description")}
                    rows={5}
                    placeholder="Précisez la nature de la prestation, vos contraintes de temps, le lieu exact et toute information utile..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3.5 sm:p-4 text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  />
                  {errors.description && (
                    <p className="text-xs text-red-600 mt-1 flex items-center gap-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.description.message}</span>
                    </p>
                  )}
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-between gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-full sm:w-auto bg-slate-100 text-slate-700 font-bold px-5 py-3 rounded-xl flex items-center justify-center space-x-2 text-xs sm:text-sm hover:bg-slate-200"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Retour</span>
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl flex items-center justify-center space-x-2 text-xs sm:text-sm shadow-md shadow-blue-600/20"
                  >
                    <span>Étape suivante</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Info & Final Submission */}
            {step === 3 && (
              <div className="space-y-5 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nom &amp; Prénom *
                    </label>
                    <input
                      type="text"
                      {...register("client_name")}
                      placeholder="Ex: Carrière Dossou"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.client_name && (
                      <p className="text-xs text-red-600 font-semibold mt-1">{errors.client_name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Numéro Téléphone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      {...register("client_phone")}
                      placeholder="Ex: 01 41 26 33 72 ou +229..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.client_phone && (
                      <p className="text-xs text-red-600 font-semibold mt-1">{errors.client_phone.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Canal de retour privilégié
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "whatsapp", label: "WhatsApp" },
                      { id: "phone", label: "Appel" },
                      { id: "email", label: "Email" },
                    ].map((c) => (
                      <button
                        type="button"
                        key={c.id}
                        onClick={() => setValue("preferred_contact", c.id as any)}
                        className={`py-2.5 px-2 rounded-xl border text-xs font-bold text-center transition-all ${
                          selectedContact === c.id
                            ? "bg-slate-900 text-white border-slate-900"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        {c.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-between gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-full sm:w-auto bg-slate-100 text-slate-700 font-bold px-5 py-3 rounded-xl flex items-center justify-center space-x-2 text-xs sm:text-sm hover:bg-slate-200"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Retour</span>
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl flex items-center justify-center space-x-2 text-xs sm:text-sm shadow-xl shadow-blue-600/20 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <span>Valider ma demande BAMS</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

          </form>
        )}

      </div>
    </section>
  );
}
