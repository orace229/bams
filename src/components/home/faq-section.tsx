"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall, MessageSquare } from "lucide-react";
import { BAMS_INFO } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

interface FAQItem {
  q: string;
  a: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const faqs: FAQItem[] = [
    {
      q: "Comment contacter le Call Center BAMS et quelles sont les disponibilités ?",
      a: "BAMS dispose d'un numéro unique : 01 41 26 33 72 (ou +229 01 41 26 33 72). Notre Call Center est joignable 24/7 aussi bien par appel téléphonique direct que par messagerie instantanée WhatsApp."
    },
    {
      q: "Quel est le délai de prise en charge de ma demande ?",
      a: "Dès que vous soumettez votre demande sur la plateforme ou sur WhatsApp, un coordinateur BAMS vous répond sous 30 minutes pour qualifier le besoin, définir le périmètre et vous proposer une solution chiffrée."
    },
    {
      q: "En quoi consiste le Facility Management BAMS et comment est calculé le budget ?",
      a: "Le Facility Management BAMS consiste à prendre soin de votre cadre de vie ou de travail (maison, bureau, immeuble) : entretien quotidien, projets/chantiers, gestion immobilière et aménagement. Notre carte n’est pas un forfait imposé : votre budget repose sur les honoraires de gestion BAMS, les prestations prévues à votre programme personnalisé et les dépenses exceptionnelles que vous approuvez avant engagement."
    },
    {
      q: "Comment BAMS sélectionne-t-il ses prestataires et techniciens ?",
      a: "Chaque professionnel intégré à notre réseau passe un processus rigoureux de vérification : antécédents, références vérifiées, test de compétence sur le terrain et engagement contractuel sur la charte de qualité BAMS."
    },
    {
      q: "Je vis à l'étranger (diaspora), comment puis-je régler les prestations ?",
      a: "Nous acceptons les virements bancaires internationaux, les transferts sécurisés ainsi que les solutions Mobile Money locales (MTN Mobile Money et Moov Money). Une facture officielle et des rapports d'exécution détaillés vous sont systématiquement délivrés."
    },
    {
      q: "Que se passe-t-il en cas d'insatisfaction ou d'imprévu lors d'une intervention ?",
      a: "BAMS assure la maîtrise d'ouvrage et la responsabilité de la coordination. En cas de non-conformité, nous mobilisons immédiatement les mesures correctives nécessaires sans surcoût pour le client."
    },
    {
      q: "Dans quelles zones du Bénin BAMS intervient-il ?",
      a: "Notre base opérationnelle couvre prioritairement Cotonou, Abomey-Calavi, Sèmè-Kpodji et Porto-Novo avec des délais ultra-courts. Nous intervenons également sur Parakou, Bohicon, Ouidah et l'ensemble du territoire national pour des missions planifiées."
    }
  ];

  const directWhatsAppUrl = buildWhatsAppUrl(
    BAMS_INFO.whatsappPhone,
    "Bonjour BAMS Call Center, j'ai une question spécifique à vous poser."
  );

  return (
    <section id="faq" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-white">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          FAQ &amp; Réponses Claires
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Questions Fréquentes
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
          Tout ce que vous devez savoir sur le fonctionnement du guichet unique BAMS et de notre Call Center au Bénin.
        </p>
      </div>

      <div className="space-y-3">
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border rounded-2xl transition-all duration-200 overflow-hidden ${
                isOpen ? "bg-slate-50 border-blue-300 shadow-sm" : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-3 focus:outline-none"
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    isOpen ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600"
                  }`}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span className="text-xs sm:text-sm font-black text-slate-900">
                    {item.q}
                  </span>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                    isOpen ? "transform rotate-180 text-blue-600" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 ml-11 mr-4">
                  {item.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Call Center help card */}
      <div className="mt-10 p-5 sm:p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-sm font-black text-slate-900">Vous avez une autre question spécifique ?</h4>
          <p className="text-xs text-slate-600">Nos coordinateurs du Call Center sont à votre disposition 24/7.</p>
        </div>
        <div className="flex items-center space-x-2.5 shrink-0">
          <a
            href={`tel:${BAMS_INFO.phone}`}
            className="flex items-center space-x-1.5 bg-slate-900 hover:bg-black text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5 text-blue-400" />
            <span>{BAMS_INFO.phoneDisplay}</span>
          </a>
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors shadow-md shadow-blue-600/20"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
