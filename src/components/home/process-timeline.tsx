import React from "react";
import Link from "next/link";
import { FileText, Search, UserCheck, ArrowRight } from "lucide-react";

export function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      title: "1. Vous exprimez votre besoin",
      description: "Vous soumettez votre demande sur la plateforme ou directement au Call Center WhatsApp (01 41 26 33 72). Vous indiquez l'urgence, la zone et la description du service."
    },
    {
      num: "02",
      icon: <Search className="w-6 h-6 text-blue-600" />,
      title: "2. Le Call Center BAMS qualifie",
      description: "Notre équipe analyse la faisabilité sous 30 minutes, établit la proposition claire (devis / périmètre) et sélectionne les compétences certifiées."
    },
    {
      num: "03",
      icon: <UserCheck className="w-6 h-6 text-blue-600" />,
      title: "3. Mobilisation & Suivi rigoureux",
      description: "BAMS déploie l'intervention, coordonne l'exécution sur le terrain au Bénin et vous informe en temps réel jusqu'à validation finale."
    }
  ];

  return (
    <section id="processus" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl my-8 relative overflow-hidden shadow-sm">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100/70 px-3.5 py-1.5 rounded-full border border-blue-200">
          Transparence &amp; Rigueur
        </span>
        <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
          Comment BAMS prend le relais au Bénin
        </h2>
        <p className="text-sm text-slate-600 leading-relaxed">
          Un parcours simplifié en 3 étapes clés pour garantir efficacité, réactivité et sérénité.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="p-8 bg-white border border-slate-200 rounded-2xl relative space-y-4 hover:border-blue-400 hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                {step.icon}
              </div>
              <span className="text-3xl font-black text-slate-200 select-none">
                {step.num}
              </span>
            </div>

            <h3 className="text-lg font-black text-slate-900">
              {step.title}
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/comment-ca-marche"
          className="bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold px-6 py-3 rounded-xl text-xs transition-colors flex items-center space-x-2"
        >
          <span>En savoir plus sur nos engagements</span>
          <ArrowRight className="w-4 h-4 text-blue-600" />
        </Link>
        <Link
          href="/demande"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs transition-colors shadow-md shadow-blue-600/20"
        >
          Déposer une demande maintenant
        </Link>
      </div>
    </section>
  );
}
