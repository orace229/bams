import React, { Suspense } from "react";
import { MultiStepIntakeForm } from "@/components/intake/multi-step-form";
import { BAMS_INFO } from "@/lib/constants";
import { Headphones, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Déposer une Demande ou Diagnostic — BAMS Bénin",
  description: "Exprimez votre besoin ou demandez un diagnostic Facility Management, Conciergerie & Assistance ou Événementiel. Analyse et prise en charge par notre Call Center sous 30 minutes.",
};

export default async function DemandePage({
  searchParams,
}: {
  searchParams?: Promise<{ offre?: string; solution?: string }>;
}) {
  const params = await searchParams;
  const offreParam = params?.offre as any;

  return (
    <div className="bg-white min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
      
      {/* Top Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          Guichet Unique BAMS
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Formuler votre Demande &amp; Diagnostic
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed font-normal">
          Prenez 1 minute pour décrire votre situation. Le Call Center BAMS analyse votre demande et vous recontacte sous 30 minutes.
        </p>
      </div>

      {/* Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
          <Clock className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
          <p className="text-xs font-black text-slate-900">Réponse sous 30 minutes</p>
          <p className="text-[11px] text-slate-500">Prise en charge prioritaire</p>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
          <ShieldCheck className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
          <p className="text-xs font-black text-slate-900">Programme sur mesure</p>
          <p className="text-[11px] text-slate-500">Budget clair sans forfait imposé</p>
        </div>
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
          <Headphones className="w-5 h-5 text-blue-600 mx-auto mb-1.5" />
          <p className="text-xs font-black text-slate-900">Call Center Dédié</p>
          <p className="text-[11px] text-slate-500">{BAMS_INFO.phoneDisplay}</p>
        </div>
      </div>

      {/* Multi-step form container */}
      <Suspense fallback={<div className="text-center py-12 text-sm text-slate-500">Chargement du formulaire...</div>}>
        <MultiStepIntakeForm initialCategory={offreParam} />
      </Suspense>

    </div>
  );
}
