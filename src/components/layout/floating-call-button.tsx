"use client";

import React, { useState } from "react";
import { Headphones, Phone, MessageSquare, X } from "lucide-react";
import { BAMS_INFO } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

export function FloatingCallButton() {
  const [expanded, setExpanded] = useState(false);

  const directWhatsAppUrl = buildWhatsAppUrl(
    BAMS_INFO.whatsappPhone,
    "Bonjour BAMS Call Center, je désire une assistance immédiate pour un besoin au Bénin."
  );

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Expanded quick action panel */}
      {expanded && (
        <div className="mb-3 bg-white border border-slate-200 rounded-2xl p-4 shadow-2xl w-72 sm:w-80 space-y-3 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span className="text-xs font-black text-slate-900 uppercase tracking-wider">
                Call Center BAMS
              </span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              aria-label="Fermer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] text-slate-600 leading-relaxed">
            Un besoin urgent ou une question ? Nos coordinateurs vous répondent immédiatement :
          </p>

          <div className="space-y-2">
            <a
              href={`tel:${BAMS_INFO.phone}`}
              className="w-full flex items-center justify-between bg-slate-900 hover:bg-black text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors"
            >
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>Appel Direct</span>
              </div>
              <span className="text-[11px] text-slate-300 font-mono">{BAMS_INFO.phoneDisplay}</span>
            </a>

            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-colors shadow-md shadow-blue-600/20"
            >
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Instantané</span>
              </div>
              <span className="text-[10px] uppercase font-black bg-blue-700/60 px-1.5 py-0.5 rounded">24/7</span>
            </a>
          </div>

          <div className="pt-1 text-center">
            <span className="text-[10px] text-slate-400">
              « {BAMS_INFO.tagline} »
            </span>
          </div>
        </div>
      )}

      {/* Main Trigger Pill Button */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center space-x-2.5 bg-slate-900 hover:bg-black text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl border border-slate-700 hover:border-blue-500 transition-all duration-200 group focus:outline-none"
        aria-label="Contacter le Call Center"
      >
        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
          <Headphones className="w-4 h-4" />
        </div>
        <div className="text-left">
          <div className="flex items-center space-x-1.5">
            <span className="text-xs font-black tracking-wide">Call Center</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
          </div>
          <span className="block text-[10px] text-slate-300 font-mono leading-none mt-0.5">
            {BAMS_INFO.phoneDisplay}
          </span>
        </div>
      </button>
    </div>
  );
}
