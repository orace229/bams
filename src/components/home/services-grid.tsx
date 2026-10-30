"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { OFFERS_DATA } from "@/lib/constants";
import { OfferCategory } from "@/lib/types";
import { Briefcase, Building2, Calendar, CheckCircle, ArrowRight, ShieldCheck, Wrench, Building } from "lucide-react";

export function ServicesGrid() {
  const [activeTab, setActiveTab] = useState<OfferCategory>("facility_management");
  const [facilityVisualTab, setFacilityVisualTab] = useState<"recurrent" | "building">("recurrent");

  const activeOffer = OFFERS_DATA.find((o) => o.id === activeTab) || OFFERS_DATA[1];

  const getIcon = (id: string) => {
    switch (id) {
      case "consulting": return <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />;
      case "facility_management": return <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />;
      case "evenementiel": return <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />;
      default: return <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 shrink-0" />;
    }
  };

  const getOfferSlug = (id: string) => {
    if (id === "facility_management") return "facility-management";
    return id;
  };

  // Image mapping tailored to natural aspect ratios
  const getOfferVisual = () => {
    switch (activeTab) {
      case "facility_management":
        if (facilityVisualTab === "recurrent") {
          return {
            src: "/images/facility_recurrent_maintenance.jpeg",
            alt: "Techniciens BAMS en intervention maintenance climatisation, plomberie et électricité",
            tag: "Entretien Récurrent en Résidence",
            title: "Maintenance Climatisation, Plomberie & Électricité",
            caption: "Nos techniciens interviennent chez vous avec rigueur : dépannage, vidange de tanks, propreté et installations.",
            aspect: "aspect-square",
          };
        } else {
          return {
            src: "/images/facility_management_hero.jpeg",
            alt: "Facility manager supervisant les opérations en immeuble et locaux d'entreprises",
            tag: "Gestion d'Immeuble & Chantiers",
            title: "Supervision Globale de Sites & Locaux",
            caption: "Un facility manager dédié pour coordonner les prestataires, la sécurité, le confort et les travaux.",
            aspect: "aspect-[4/3]",
          };
        }
      case "consulting":
        return {
          src: "/images/consulting_executive_femme.jpeg",
          alt: "Consultante exécutive BAMS supervisant les démarches APIEx et juridiques",
          tag: "Affaires & Formalités au Bénin",
          title: "Accompagnement Stratégique & Implantation",
          caption: "Création d'entreprise (APIEx, IFU), conformité fiscale, représentation d'intérêts et relais pour la diaspora.",
          aspect: "aspect-[4/3]",
        };
      case "evenementiel":
        return {
          src: "/images/planification_event.jpeg",
          alt: "Directeur de projet événementiel BAMS supervisant une réception de prestige",
          tag: "Événements & Réceptions",
          title: "Régie Générale & Coordination du Jour J",
          caption: "Sélection traiteurs, scénographie, sonorisation et présence d'un régisseur dédié pour une tranquillité totale.",
          aspect: "aspect-[4/3]",
        };
      default:
        return {
          src: "/images/facility_recurrent_maintenance.jpeg",
          alt: "Service BAMS",
          tag: "Excellence BAMS",
          title: "Intervention Certifiée",
          caption: "Un seul contact, plusieurs solutions.",
          aspect: "aspect-square",
        };
    }
  };

  const visual = getOfferVisual();

  return (
    <section id="offres" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 space-y-2.5">
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Domaines d&apos;Expertise BAMS
        </span>
        <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-slate-900">
          Trois grandes offres. Une excellence opérationnelle sans faille.
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Sélectionnez un pilier ci-dessous pour découvrir le périmètre d&apos;intervention BAMS et demander un diagnostic ou une prise en charge sur-mesure.
        </p>
      </div>

      {/* Navigation Tabs - Adaptive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-10 max-w-4xl mx-auto">
        {OFFERS_DATA.map((offer) => {
          const isActive = activeTab === offer.id;
          return (
            <button
              key={offer.id}
              onClick={() => setActiveTab(offer.id)}
              className={`flex items-center justify-center space-x-2 px-3 sm:px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 border ${
                isActive
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                  : "bg-white text-slate-700 border-slate-200 hover:border-blue-400 hover:text-blue-600"
              }`}
            >
              <span className={isActive ? "text-white" : "text-blue-600"}>
                {getIcon(offer.id)}
              </span>
              <span className="truncate">{offer.title}</span>
            </button>
          );
        })}
      </div>

      {/* Active Offer Detail Container (Two-column layout on Desktop) */}
      <div className="bg-slate-50/80 border border-slate-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-sm relative overflow-hidden space-y-8">
        
        {/* Top Header of Active Offer */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 sm:gap-6 pb-6 border-b border-slate-200">
          <div>
            <span className="text-[10px] sm:text-xs font-bold text-blue-700 uppercase tracking-widest bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200">
              {activeOffer.badge}
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 mt-2">
              {activeOffer.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl font-medium">
              {activeOffer.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 w-full lg:w-auto shrink-0">
            <Link
              href={`/offres/${getOfferSlug(activeOffer.id)}`}
              className="w-full sm:w-auto bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold text-xs px-4 py-2.5 sm:py-3 rounded-xl shadow-sm transition-all flex items-center justify-center space-x-1.5"
            >
              <span>Page détaillée</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <Link
              href={`/demande?offre=${activeOffer.id}`}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-2.5 sm:py-3 rounded-xl shadow-md shadow-blue-600/20 transition-all flex items-center justify-center space-x-2"
            >
              <span>Demander un diagnostic</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* 2-Column Content: Subservices on Left (7 cols), Well-Proportioned Photo on Right (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Subservices Cards */}
          <div className="lg:col-span-7">
            <div className={`grid grid-cols-1 ${activeOffer.subServices.length >= 4 ? 'sm:grid-cols-2' : 'sm:grid-cols-1'} gap-4`}>
              {activeOffer.subServices.map((sub, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3 hover:border-blue-400 hover:shadow-md transition-all group flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                      0{idx + 1}
                    </span>
                    <h4 className="text-sm font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                      {sub.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {sub.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {sub.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center space-x-2 text-[11px] text-slate-700">
                        <CheckCircle className="w-3 h-3 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Full-Height, Natural Aspect Ratio Visual Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-slate-200 rounded-3xl p-4 shadow-md space-y-3">
              
              {/* Optional Visual Switcher for Facility Management */}
              {activeTab === "facility_management" && (
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl text-[11px] font-bold">
                  <button
                    onClick={() => setFacilityVisualTab("recurrent")}
                    className={`flex-1 py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      facilityVisualTab === "recurrent"
                        ? "bg-white text-blue-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Wrench className="w-3 h-3" />
                    <span>Maintenance</span>
                  </button>
                  <button
                    onClick={() => setFacilityVisualTab("building")}
                    className={`flex-1 py-1.5 px-2 rounded-lg transition-all flex items-center justify-center gap-1 ${
                      facilityVisualTab === "building"
                        ? "bg-white text-blue-700 shadow-sm"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <Building className="w-3 h-3" />
                    <span>Immeuble</span>
                  </button>
                </div>
              )}

              {/* Natural Aspect Ratio Photo Container - Heads fully visible! */}
              <div className={`relative ${visual.aspect} w-full rounded-2xl overflow-hidden border border-slate-200 bg-slate-100 shadow-sm`}>
                <Image
                  src={visual.src}
                  alt={visual.alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
              </div>

              {/* Clean, Bright Caption & Details */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider block">
                  {visual.tag}
                </span>
                <h4 className="text-sm font-black text-slate-900">
                  {visual.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {visual.caption}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  href={`/demande?offre=${activeOffer.id}`}
                  className="w-full bg-slate-900 hover:bg-black text-white font-bold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <span>Demander un diagnostic personnalisé ➔</span>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
