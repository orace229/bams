import React from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  Clock, 
  Home, 
  Building2, 
  Wrench, 
  Sparkles, 
  Layers, 
  Truck, 
  FileCheck, 
  HelpCircle 
} from "lucide-react";
import { BAMS_INFO, FACILITY_MANAGEMENT_DATA } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

export const metadata = {
  title: "Facility Management BAMS — Gestion complète maison, bureau, immeuble au Bénin",
  description: "Le Facility Management BAMS prend en charge l'entretien, les chantiers, la gestion immobilière et l'aménagement de votre cadre de vie ou de travail au Bénin.",
};

export default function FacilityManagementPage() {
  const directWhatsAppUrl = buildWhatsAppUrl(
    BAMS_INFO.whatsappPhone,
    "Bonjour BAMS Call Center, je souhaite demander un diagnostic Facility Management pour ma maison, mon bureau ou mon immeuble."
  );

  return (
    <div className="bg-white min-h-screen py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-16">
      
      {/* Back button */}
      <div>
        <Link
          href="/offres"
          className="inline-flex items-center space-x-2 text-xs font-bold text-slate-500 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Retour à toutes les offres</span>
        </Link>
      </div>

      {/* Hero Header with Visual Banner */}
      <div className="space-y-8">
        <div className="space-y-4 max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 text-blue-900 text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Offre Pilier N°2 — Facility Management BAMS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Facility Management BAMS
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-blue-600">
            La gestion complète de votre maison, de votre bureau ou de votre immeuble.
          </p>
        </div>

        {/* Hero Visual Card (Natural wide ratio with object-top to keep heads fully in frame) */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-200 aspect-[16/10] sm:aspect-[21/10] w-full shadow-lg">
          <Image
            src="/images/facility_management_hero.jpeg"
            alt="Facility Management BAMS - Gestion d'immeuble et maintenance au Bénin"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 1200px) 100vw, 1100px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white space-y-1.5 max-w-2xl">
              <span className="text-[11px] font-black uppercase tracking-wider text-blue-300">
                Devise BAMS : Le temps, l&apos;énergie et le confort
              </span>
              <p className="text-sm sm:text-lg font-bold leading-snug">
                « Vous vivez. Vous travaillez. Vous développez vos activités. Nous nous occupons de votre environnement. »
              </p>
            </div>
          </div>
        </div>

        {/* Accroche forte */}
        <div className="p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-3">
          <p className="text-base sm:text-xl font-black text-slate-900 italic">
            « Le temps est devenu un luxe. Nous vous aidons à le retrouver. »
          </p>
          <p className="text-sm sm:text-base font-semibold text-slate-700">
            Vous vivez. Vous travaillez. Vous développez vos activités. <span className="text-blue-600 font-bold">Nous nous occupons de votre environnement.</span>
          </p>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
            {FACILITY_MANAGEMENT_DATA.description}
          </p>
        </div>

        {/* CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
          <Link
            href="/demande?offre=facility_management"
            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm shadow-md shadow-blue-600/20 transition-all flex items-center justify-center space-x-2"
          >
            <span>Demander votre diagnostic</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white font-bold px-6 py-3.5 rounded-xl text-xs sm:text-sm transition-all flex items-center justify-center space-x-2"
          >
            <MessageSquare className="w-4 h-4 text-blue-400" />
            <span>Échanger sur WhatsApp (01 41 26 33 72)</span>
          </a>
        </div>
      </div>

      {/* Section Pour Qui ? avec visuels cibles */}
      <section className="space-y-6 pt-4 border-t border-slate-100">
        <div className="text-left space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Publics Cibles
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Pour qui ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Trois profils majeurs qui nous confient la gestion et le suivi de leur environnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Particuliers */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-300 transition-all flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/famille_confort_temps.jpeg"
                alt="Famille profitant d'une maison parfaitement entretenue"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 space-y-2.5">
              <div className="flex items-center space-x-2 text-blue-600">
                <Home className="w-5 h-5" />
                <h3 className="text-base font-black text-slate-900">Pour les particuliers</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                qui veulent déléguer l’entretien et le suivi technique de leur maison en toute sérénité et retrouver leur temps libre.
              </p>
            </div>
          </div>

          {/* Entreprises */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-300 transition-all flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/facility_management_immeuble.jpeg"
                alt="Gestion des locaux professionnels et entreprises"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 space-y-2.5">
              <div className="flex items-center space-x-2 text-blue-600">
                <Building2 className="w-5 h-5" />
                <h3 className="text-base font-black text-slate-900">Pour les entreprises</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                qui souhaitent confier la coordination de leurs services généraux et de leurs locaux à un seul interlocuteur professionnel.
              </p>
            </div>
          </div>

          {/* Propriétaires */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-300 transition-all flex flex-col justify-between">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/facility_recurrent_maintenance.jpeg"
                alt="Entretien et maintenance préventive pour valoriser le patrimoine immobilier"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-6 space-y-2.5">
              <div className="flex items-center space-x-2 text-blue-600">
                <ShieldCheck className="w-5 h-5" />
                <h3 className="text-base font-black text-slate-900">Pour les propriétaires</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                qui veulent suivre, entretenir et valoriser leurs biens immobiliers et locatifs sans avoir à tout gérer personnellement.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Les 4 Solutions selon vos besoins */}
      <section className="space-y-8 pt-4 border-t border-slate-100">
        <div className="text-left space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Notre Catalogue d&apos;Intervention
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900">
            Quatre solutions, selon vos besoins
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Du suivi récurrent aux chantiers d&apos;envergure, BAMS adapte ses interventions à la configuration de vos sites.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {FACILITY_MANAGEMENT_DATA.solutions.map((sol) => (
            <div
              key={sol.id}
              className="p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-4 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-blue-600 font-mono">{sol.number}</span>
                  <span className="text-[10px] uppercase font-extrabold bg-white border border-slate-200 px-2.5 py-0.5 rounded-full text-slate-600">
                    Solution BAMS
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-slate-900">
                  {sol.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {sol.summary}
                </p>

                <div className="pt-3 border-t border-slate-200 space-y-2">
                  {sol.items.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={`/demande?offre=facility_management&solution=${sol.id}`}
                  className="w-full bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold py-2.5 sm:py-3 rounded-xl text-xs transition-colors shadow-sm flex items-center justify-center space-x-1.5"
                >
                  <span>Demander un diagnostic pour cette solution</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mise en avant logistique & aménagement avec photo livraison */}
      <section className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8">
        <div className="relative w-full md:w-72 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-slate-200 shadow-sm bg-white">
          <Image
            src="/images/service_livraison_famille.jpeg"
            alt="Service de livraison, logistique et conciergerie à domicile"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 300px"
          />
        </div>
        <div className="space-y-2.5">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 bg-white px-2.5 py-1 rounded-full border border-slate-200 inline-block">
            Mise en exploitation &amp; Services aux occupants
          </span>
          <h3 className="text-lg sm:text-xl font-black text-slate-900">
            Préparer, équiper et faciliter votre quotidien
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Que ce soit pour emménager dans une nouvelle villa, réceptionner des équipements ou coordonner des livraisons et intendances à domicile, BAMS supervise tout avec discrétion et ponctualité.
          </p>
        </div>
      </section>

      {/* Comment ça marche ? (La Méthode en 4 étapes) */}
      <section className="p-8 sm:p-10 bg-slate-50 border border-slate-200 rounded-3xl space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Méthode BAMS
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Comment ça marche ?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Une démarche claire et structurée pour garantir la réussite de votre contrat de gestion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FACILITY_MANAGEMENT_DATA.method.map((step) => (
            <div key={step.step} className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-sm">
              <span className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-sm flex items-center justify-center">
                {step.step}
              </span>
              <h4 className="text-sm font-black text-slate-900 pt-1">{step.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Un budget clair, jamais un forfait imposé */}
      <section className="space-y-6 pt-4 border-t border-slate-100">
        <div className="text-left space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Transparence Tarifaire
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Un budget clair, jamais un forfait imposé
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
            Notre carte n’est pas un forfait : elle sert à identifier ce que vous souhaitez nous confier. Votre budget repose sur trois éléments simples :
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {FACILITY_MANAGEMENT_DATA.budget.elements.map((el, idx) => (
            <div key={idx} className="p-5 bg-white border border-slate-200 rounded-2xl space-y-2 shadow-sm">
              <span className="text-[10px] font-extrabold uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Composante {idx + 1}
              </span>
              <h4 className="text-sm font-black text-slate-900">{el.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{el.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pourquoi BAMS ? */}
      <section className="space-y-6 pt-4 border-t border-slate-100">
        <div className="text-left space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Nos Engagements
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Pourquoi BAMS ?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FACILITY_MANAGEMENT_DATA.whyBams.map((wb, idx) => (
            <div key={idx} className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold text-xs">
                ✓
              </div>
              <h4 className="text-sm font-black text-slate-900">{wb.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{wb.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Parlons de votre besoin & Diagnostic Call Center */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6 shadow-xl">
        <div className="space-y-3 max-w-2xl">
          <span className="text-[11px] uppercase font-bold text-blue-400 bg-blue-900/60 px-3 py-1 rounded-full border border-blue-700">
            Diagnostic Personnalisé
          </span>
          <h3 className="text-2xl sm:text-4xl font-black">Parlons de votre besoin</h3>
          <p className="text-base sm:text-lg text-slate-200 font-bold">
            {FACILITY_MANAGEMENT_DATA.ctaDiagnostic}
          </p>
          <p className="text-xs sm:text-sm text-slate-400">
            Bénin Assistance Multi Services (BAMS) : conciergerie, facility management et gestion de solutions. Un seul contact. Plusieurs solutions.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={`tel:${BAMS_INFO.phone}`}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm transition-colors shadow-lg flex items-center space-x-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Appeler le Call Center (01 41 26 33 72)</span>
          </a>

          <Link
            href="/demande?offre=facility_management"
            className="bg-white hover:bg-slate-100 text-slate-900 font-bold px-7 py-3.5 rounded-xl text-xs sm:text-sm transition-colors shadow-md flex items-center space-x-2"
          >
            <span>Remplir le formulaire en ligne ➔</span>
          </Link>
        </div>
      </div>

    </div>
  );
}
