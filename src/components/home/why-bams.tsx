import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Sliders, LineChart, RefreshCw, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { BAMS_INFO } from "@/lib/constants";

export function WhyBams() {
  const points = [
    {
      icon: <Users className="w-5 h-5 text-blue-600" />,
      title: "Un seul interlocuteur",
      desc: "Un point de contact unique pour tous vos prestataires, artisans et besoins au Bénin. Fini la dispersion."
    },
    {
      icon: <Sliders className="w-5 h-5 text-blue-600" />,
      title: "Un programme sur mesure",
      desc: "Chaque prestation et contrat est adapté avec précision à votre cadre de vie, bureau, immeuble ou projet."
    },
    {
      icon: <LineChart className="w-5 h-5 text-blue-600" />,
      title: "Un suivi en temps réel",
      desc: "Un suivi régulier et transparent (photos, rapports) qui vous permet de rester informé sans perdre de temps."
    },
    {
      icon: <RefreshCw className="w-5 h-5 text-blue-600" />,
      title: "Une offre qui évolue avec vous",
      desc: "Votre contrat et vos interventions s'ajustent avec souplesse au fil du développement de vos activités."
    }
  ];

  return (
    <section id="engagement" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Text & 4 Pillars Grid */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
              L&apos;Engagement BAMS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight">
              Pourquoi BAMS ?
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Le temps est devenu un luxe. Nous vous aidons à le retrouver. Vous vivez. Vous travaillez. Vous développez vos activités. <strong className="text-slate-900 font-bold">Nous nous occupons de votre environnement.</strong>
            </p>
          </div>

          {/* Devise Callout */}
          <div className="p-4 sm:p-5 bg-blue-50/70 border border-blue-200 rounded-2xl space-y-1">
            <p className="text-xs font-bold text-blue-900 leading-relaxed">
              « Bénin Assistance Multi Services (BAMS) : entreprise de consulting et de gestion de solutions. Un seul contact. Plusieurs solutions. »
            </p>
            <p className="text-[11px] text-blue-700 font-semibold">
              Devise officielle : <strong>Le temps, l&apos;énergie et le confort</strong>
            </p>
          </div>

          {/* 4 Points Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
            {points.map((pt, idx) => (
              <div
                key={idx}
                className="p-4 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm hover:border-blue-400 hover:shadow-md transition-all space-y-2"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                  {pt.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-black text-slate-900">
                  {pt.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 text-xs font-extrabold text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Demander un diagnostic auprès du Call Center ({BAMS_INFO.phoneDisplay})</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Right Column: Full Square Image Showcase (Natural 1:1 Aspect Ratio) */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-3 sm:p-4 shadow-xl space-y-3">
            
            {/* Aspect Square: 1254x1254 fits at 100% with no cut heads! */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <Image
                src="/images/facility_management_immeuble.jpeg"
                alt="Supervision technique d'immeuble et gestion de chantiers par BAMS"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>

            {/* Clear, un-obscuring caption below the image */}
            <div className="p-2 space-y-1">
              <div className="flex items-center space-x-2 text-blue-700">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span className="text-xs font-black uppercase tracking-wider">
                  Supervision &amp; Rigueur Opérationnelle
                </span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Coordination sur place de chaque corps de métier (techniciens, agents d&apos;entretien, sécurité et chantiers) avec reporting régulier.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
