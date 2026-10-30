import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BAMS_INFO, FACILITY_MANAGEMENT_DATA } from "@/lib/constants";
import { FileText, Search, UserCheck, ShieldCheck, Clock, Headphones, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Comment ça marche — BAMS Bénin | Notre Méthode & Budget Clair",
  description: "Découvrez le processus en 3 étapes de BAMS pour prendre en charge vos besoins au Bénin avec notre Call Center sous 30 minutes, ainsi que notre modèle de budget transparent sans forfait imposé.",
};

export default function CommentCaMarchePage() {
  return (
    <div className="bg-white min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          Notre Méthode de Travail
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Comment BAMS prend le relais au Bénin
        </h1>
        <p className="text-base text-slate-600 leading-relaxed font-normal">
          « Un seul contact. Plusieurs solutions. » Découvrez comment notre organisation interne et notre Call Center qualifient et traitent vos demandes dans des délais stricts.
        </p>
      </div>

      {/* Visual Method Banner with 16:10 / 4:3 ratios and object-top */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
          <Image
            src="/images/facility_management_hero.jpeg"
            alt="Supervision et coordination professionnelle BAMS"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
            <span className="text-xs font-bold text-white">Guichet Unique &amp; Coordination des Prestataires</span>
          </div>
        </div>

        <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
          <Image
            src="/images/service_livraison_famille.jpeg"
            alt="Intervention de proximité et services aux occupants"
            fill
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
            <span className="text-xs font-bold text-white">Livraison, Intendance &amp; Sérénité à Domicile</span>
          </div>
        </div>
      </div>

      {/* 3 Steps in Depth */}
      <div className="space-y-8">
        
        {/* Step 1 */}
        <div className="p-6 sm:p-10 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center">
              1
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Expression du besoin &amp; Prise de contact
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Vous arrivez sur la plateforme ou contactez directement notre Call Center au <strong>{BAMS_INFO.phoneDisplay}</strong>. Vous formulez votre demande en sélectionnant l&apos;offre concernée (Consulting &amp; Assistance, Facility Management BAMS ou Planification Événementielle), le niveau d&apos;urgence et votre localisation.
          </p>
          <div className="p-4 bg-white border border-slate-200 rounded-2xl text-xs text-slate-700">
            <strong>Résultat immédiat :</strong> Vous recevez un numéro de dossier unique (ex: <code>REF: BAMS-2026-XXXX</code>) confirmant la prise en charge immédiate.
          </div>
        </div>

        {/* Step 2 */}
        <div className="p-6 sm:p-10 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 rounded-xl bg-slate-900 text-white font-black text-lg flex items-center justify-center">
              2
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Analyse Call Center, Diagnostic &amp; Mobilisation
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            Notre équipe analyse votre environnement et la faisabilité de votre demande en moins de 30 minutes. Pour le Facility Management, nous planifions un diagnostic du site afin de bâtir votre programme sur mesure (interventions, fréquences, modalités).
          </p>
          <div className="p-4 bg-white border border-slate-200 rounded-2xl text-xs text-slate-700">
            <strong>Garantie BAMS :</strong> Vous recevez une proposition claire sans frais cachés avant tout engagement.
          </div>
        </div>

        {/* Step 3 */}
        <div className="p-6 sm:p-10 bg-slate-50 border border-slate-200 rounded-3xl space-y-4">
          <div className="flex items-center space-x-3">
            <span className="w-10 h-10 rounded-xl bg-blue-600 text-white font-black text-lg flex items-center justify-center">
              3
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Supervision sur le terrain &amp; Contrôle Qualité
            </h2>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            BAMS ne se contente pas de vous mettre en relation : nous coordonnons l&apos;intervention sur place, contrôlons la qualité des travaux et vous transmettons des comptes-rendus réguliers (photos/vidéos pour la diaspora et propriétaires). Le dossier n&apos;est clôturé qu&apos;après votre entière satisfaction.
          </p>
          <div className="p-4 bg-white border border-slate-200 rounded-2xl text-xs text-slate-700">
            <strong>Tranquillité absolue :</strong> Un interlocuteur unique dédié répond à toutes vos questions en continu.
          </div>
        </div>

      </div>

      {/* Focus Facility Management Method */}
      <section className="p-6 sm:p-10 bg-blue-50/60 border border-blue-200 rounded-3xl space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-white px-3 py-1 rounded-full border border-blue-200">
            Méthode Facility Management
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Comment se déroule un contrat de gestion d&apos;espace ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600">
            Pour votre maison, votre bureau ou votre immeuble, nous appliquons une démarche en 4 étapes simples :
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FACILITY_MANAGEMENT_DATA.method.map((step) => (
            <div key={step.step} className="p-4 bg-white border border-blue-100 rounded-2xl space-y-1.5 shadow-sm">
              <span className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                {step.step}
              </span>
              <h4 className="text-xs sm:text-sm font-black text-slate-900">{step.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Un budget clair, jamais un forfait imposé */}
      <section className="space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Modèle Économique Transparent
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Un budget clair, jamais un forfait imposé
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
            Notre carte n’est pas un forfait : elle sert à identifier ce que vous souhaitez nous confier. Votre budget repose sur trois éléments simples :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FACILITY_MANAGEMENT_DATA.budget.elements.map((el, idx) => (
            <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 text-blue-600 flex items-center justify-center font-bold text-xs shadow-sm">
                0{idx + 1}
              </div>
              <h4 className="text-sm font-black text-slate-900">{el.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{el.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Call Center Direct */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">
            Prise en charge personnalisée
          </span>
          <h3 className="text-xl sm:text-2xl font-bold">Prêt à confier votre cadre à BAMS ?</h3>
          <p className="text-xs text-slate-300">
            Appelez-nous au <strong>{BAMS_INFO.phoneDisplay}</strong> pour votre premier diagnostic.
          </p>
        </div>

        <Link
          href="/demande"
          className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm transition-colors shadow-md"
        >
          Déposer une demande ➔
        </Link>
      </div>

    </div>
  );
}
