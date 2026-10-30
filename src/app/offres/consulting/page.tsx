import Image from "next/image";
import Link from "next/link";
import { OFFERS_DATA, BAMS_INFO } from "@/lib/constants";
import { CheckCircle, ArrowRight, ArrowLeft, Headphones, ShieldCheck, FileText } from "lucide-react";

export const metadata = {
  title: "1. Consulting & Assistance — BAMS Bénin",
  description: "Accompagnement administratif, création d'entreprise au Bénin (APIEx), conseil d'affaires et relais pour la diaspora.",
};

export default function ConsultingPage() {
  const offer = OFFERS_DATA.find((o) => o.id === "consulting") || OFFERS_DATA[0];

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-14">
      
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

      {/* Hero Header */}
      <div className="space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-extrabold text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
            Offre Pilier N°1 — Pôle Consulting
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Consulting &amp; Assistance Professionnelle
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed">
            {offer.subtitle} Nous vous déchargeons de la lourdeur des démarches locales, représentons vos intérêts et sécurisons vos initiatives au Bénin.
          </p>
        </div>

        {/* Dual Visual Showcase with natural 16:10 / 4:3 ratios and object-top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
            <Image
              src="/images/consulting_executive_femme.jpeg"
              alt="Consultante exécutive BAMS supervisant les démarches et implantations au Bénin"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-bold text-white">Conseil d&apos;Affaires &amp; Stratégie Locale</span>
            </div>
          </div>

          <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
            <Image
              src="/images/consulting_executive_homme.jpeg"
              alt="Consultant BAMS en examen de contrats et formalités APIEx"
              fill
              priority
              className="object-cover object-top"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-5">
              <span className="text-xs font-bold text-white">Création d&apos;Entreprise &amp; Formalités Juridiques</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Services list */}
      <div className="space-y-8">
        <div className="space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Prestations
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
            Nos domaines d&apos;intervention en Consulting
          </h2>
        </div>

        {offer.subServices.map((sub, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-4 hover:border-blue-300 transition-all"
          >
            <div className="flex items-center space-x-3">
              <span className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center">
                0{idx + 1}
              </span>
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {sub.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {sub.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
              {sub.features.map((feat, fIdx) => (
                <div key={fIdx} className="p-3 bg-white border border-slate-200 rounded-xl flex items-center space-x-2 text-xs font-bold text-slate-800 shadow-sm">
                  <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Call Center & Order Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-blue-400 text-xs font-bold">
            <Headphones className="w-4 h-4" />
            <span>Call Center BAMS disponible</span>
          </div>
          <h3 className="text-xl font-bold">Besoin d&apos;une intervention en Consulting ?</h3>
          <p className="text-xs text-slate-300">
            Contact direct : <strong>{BAMS_INFO.phoneDisplay}</strong> | Réponse garantie sous 30 min.
          </p>
        </div>

        <Link
          href="/demande?offre=consulting"
          className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-xs transition-colors shadow-md"
        >
          Déposer votre demande ➔
        </Link>
      </div>

    </div>
  );
}
