"use client";

import React, { useState } from "react";
import { Search, ShieldCheck, Clock, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { BAMS_INFO } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

export function TrackingLookup() {
  const [refInput, setRefInput] = useState("");
  const [searchedRef, setSearchedRef] = useState<string | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (refInput.trim()) {
      setSearchedRef(refInput.trim().toUpperCase());
    }
  };

  const getWhatsAppQueryUrl = (ref: string) => {
    return buildWhatsAppUrl(
      BAMS_INFO.whatsappPhone,
      `Bonjour BAMS Call Center,\n\nJe souhaite connaître l'état d'avancement de mon dossier de référence *${ref}*.\n\nMerci de me faire un point de situation.`
    );
  };

  return (
    <section className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden">
        
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8 space-y-2">
          <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Suivi &amp; Transparence BAMS
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-slate-900">
            Suivre un dossier en cours
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Entrez votre numéro de référence (ex: <code className="bg-white px-2 py-0.5 rounded border border-slate-200 font-mono text-blue-600 font-bold">BAMS-2026-XXXX</code>) pour obtenir un point d&apos;avancement instantané.
          </p>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSearch} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-grow">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              value={refInput}
              onChange={(e) => setRefInput(e.target.value)}
              placeholder="Ex: BAMS-2026-8942..."
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-3 text-xs sm:text-sm text-slate-900 outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md shadow-blue-600/20 shrink-0"
          >
            Vérifier le statut
          </button>
        </form>

        {/* Search Result Card */}
        {searchedRef && (
          <div className="mt-8 max-w-xl mx-auto bg-white border border-blue-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-4 animate-in fade-in duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider block">Référence Dossier</span>
                <span className="text-base font-black text-blue-600 font-mono">{searchedRef}</span>
              </div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-slate-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <span>Prise en charge active</span>
              </span>
            </div>

            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Dossier enregistré dans le registre central BAMS</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Call Center en ligne : coordination opérationnelle en cours</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Interlocuteur unique garanti par BAMS</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5">
              <a
                href={getWhatsAppQueryUrl(searchedRef)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-slate-900 hover:bg-black text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
                <span>Demander le point au Call Center (WhatsApp)</span>
              </a>
              <button
                type="button"
                onClick={() => setSearchedRef(null)}
                className="text-xs text-slate-500 hover:text-slate-800 py-2 font-semibold"
              >
                Réinitialiser
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
