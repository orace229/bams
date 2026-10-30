import Image from "next/image";
import Link from "next/link";
import { OFFERS_DATA } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Nos Offres — BAMS | Bénin Assistance Multi Services",
  description: "Découvrez les 3 grands domaines d'intervention de BAMS au Bénin : Consulting, Facility Management BAMS, et Planification Événementielle.",
};

export default function OffresPage() {
  const getOfferSlug = (id: string) => {
    if (id === "facility_management") return "facility-management";
    return id;
  };

  const getOfferCover = (id: string) => {
    switch (id) {
      case "consulting": return "/images/consulting_executive_femme.jpeg";
      case "facility_management": return "/images/facility_management_hero.jpeg";
      case "evenementiel": return "/images/planification_event.jpeg";
      default: return "/images/facility_management_hero.jpeg";
    }
  };

  return (
    <div className="bg-white min-h-screen py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          Catalogue des Solutions BAMS
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Nos 3 Grandes Offres de Services
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Bénin Assistance Multi Services (BAMS) : entreprise de consulting et de gestion de solutions. Un guichet unique au Bénin pour piloter vos projets administratifs, votre environnement de vie/travail et vos événements.
        </p>
      </div>

      {/* Grid des 3 offres détaillées avec images de couverture */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {OFFERS_DATA.map((offer) => (
          <div
            key={offer.id}
            className="bg-white border border-slate-200 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-blue-400 hover:shadow-xl transition-all group"
          >
            {/* Image Header with 16:10 ratio and object-top */}
            <div className="relative aspect-[16/10] sm:aspect-video w-full overflow-hidden bg-slate-100">
              <Image
                src={getOfferCover(offer.id)}
                alt={offer.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/40 text-[10px] font-black uppercase tracking-wider text-blue-700">
                {offer.badge}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {offer.title}
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  {offer.subtitle}
                </p>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  {offer.subServices.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-0.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      <p className="text-xs font-bold text-slate-900">{sub.title}</p>
                      <p className="text-[11px] text-slate-500 leading-relaxed line-clamp-2">{sub.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-2.5">
                <Link
                  href={`/offres/${getOfferSlug(offer.id)}`}
                  className="w-full bg-slate-900 hover:bg-black text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Découvrir la page dédiée</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={`/demande?offre=${offer.id}`}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <span>Demander cette prestation</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-4">
        <h3 className="text-2xl font-black text-slate-900">Vous avez un besoin particulier ou hors catalogue ?</h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
          « Votre besoin, notre mission. » Exprimez votre situation et notre Call Center étudie la faisabilité sous 30 minutes avec nos coordinateurs qualifiés.
        </p>
        <div className="pt-2">
          <Link
            href="/demande"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3.5 rounded-xl text-xs sm:text-sm shadow-md"
          >
            <span>Déposer une demande sur-mesure</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
