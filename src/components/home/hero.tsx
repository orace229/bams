"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Users, Headphones, CheckCircle2 } from "lucide-react";
import { BAMS_INFO } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Hero() {
  const directWhatsAppUrl = buildWhatsAppUrl(
    BAMS_INFO.whatsappPhone,
    "Bonjour BAMS Call Center, je désire une assistance directe pour mon besoin au Bénin."
  );

  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24 bg-gradient-to-b from-blue-50/40 via-white to-white text-slate-900 border-b border-slate-100">
      
      {/* Subtle ambient light */}
      <div className="absolute top-0 right-0 w-80 sm:w-[480px] h-80 sm:h-[480px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left">
            
            {/* Top Motto / Devise Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 text-blue-900 text-[11px] sm:text-xs font-bold px-3.5 py-1.5 rounded-full shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse shrink-0" />
              <span>Devise : <strong>Le temps, l&apos;énergie et le confort</strong></span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15] text-slate-900">
              Un seul contact. <br />
              <span className="text-blue-600">Plusieurs solutions</span> pour votre environnement.
            </h1>

            {/* Subtitle with Conciergerie, Facility Management & Événementiel */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              Le temps est devenu un luxe. Nous vous aidons à le retrouver. Que ce soit de la <strong className="text-slate-900 font-bold">Conciergerie &amp; Assistance</strong>, du <strong className="text-blue-600 font-bold">Facility Management BAMS</strong> (gestion de votre maison, bureau ou immeuble) ou de la <strong className="text-slate-900 font-bold">Planification Événementielle</strong>, BAMS prend soin de votre cadre au quotidien.
            </p>

            {/* Call Center Info Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 p-3.5 sm:p-4 bg-white border border-slate-200 rounded-2xl shadow-sm max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shrink-0">
                  <Headphones className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Call Center Dédié</p>
                  <a href={`tel:${BAMS_INFO.phone}`} className="text-base font-black text-slate-900 hover:text-blue-600 transition-colors">
                    {BAMS_INFO.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="hidden sm:block h-8 w-px bg-slate-200" />
              <div className="text-xs text-slate-500 text-center sm:text-left">
                <span className="block text-[10px] uppercase font-bold text-slate-400">Guichet Unique BAMS</span>
                <span className="text-slate-900 font-bold break-all">{BAMS_INFO.email}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <Link
                href="/demande"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 sm:py-4 rounded-xl shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.01] flex items-center justify-center space-x-2"
              >
                <span>Déposer une demande</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={directWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white font-bold text-sm px-6 py-3.5 sm:py-4 rounded-xl transition-all flex items-center justify-center space-x-2 shadow-sm"
              >
                <span>💬 WhatsApp Direct</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="pt-5 sm:pt-6 grid grid-cols-1 sm:grid-cols-3 gap-3 border-t border-slate-200 text-left">
              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex sm:flex-col items-center sm:items-start justify-between sm:justify-start">
                <div>
                  <div className="flex items-center space-x-1.5 text-blue-600 mb-0.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Prise en charge</span>
                  </div>
                  <p className="text-sm font-black text-slate-900">&lt; 30 minutes</p>
                </div>
                <p className="text-[11px] text-slate-500 hidden sm:block">Diagnostic initial rapide</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex sm:flex-col items-center sm:items-start justify-between sm:justify-start">
                <div>
                  <div className="flex items-center space-x-1.5 text-blue-600 mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Réseau BAMS</span>
                  </div>
                  <p className="text-sm font-black text-slate-900">Prestataires Vérifiés</p>
                </div>
                <p className="text-[11px] text-slate-500 hidden sm:block">Coordination certifiée</p>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm flex sm:flex-col items-center sm:items-start justify-between sm:justify-start">
                <div>
                  <div className="flex items-center space-x-1.5 text-blue-600 mb-0.5">
                    <Users className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Couverture</span>
                  </div>
                  <p className="text-sm font-black text-slate-900">Bénin &amp; Diaspora</p>
                </div>
                <p className="text-[11px] text-slate-500 hidden sm:block">Maison, bureau &amp; immeuble</p>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Showcase */}
          <div className="lg:col-span-5 relative w-full">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
              
              {/* Primary Visual: Facility Manager supervising operations (Natural 4:3 / 16:11 ratio with object-top) */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-slate-100">
                <Image
                  src="/images/facility_management_hero.jpeg"
                  alt="Facility Management BAMS - Gestion de vos locaux et immeubles"
                  fill
                  priority
                  className="object-cover object-top transform hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
                
                {/* Subtle gradient overlay at bottom only to preserve image clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Floating Top Badge: Call Center Active */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="bg-white/95 backdrop-blur-md border border-white/40 text-slate-900 px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-black uppercase tracking-wider">Call Center Actif</span>
                  </div>
                  <div className="bg-blue-600/95 backdrop-blur-md text-white text-[11px] font-black px-3 py-1.5 rounded-full shadow-lg">
                    {BAMS_INFO.phoneDisplay}
                  </div>
                </div>

                {/* Bottom Overlay Info on Main Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-blue-300">
                    Conciergerie, Facility Management &amp; Événementiel
                  </span>
                  <p className="text-sm sm:text-base font-black leading-snug">
                    « Vous vivez. Vous travaillez. Nous nous occupons de votre environnement. »
                  </p>
                </div>
              </div>

              {/* Secondary Sub-Card: Devise & Family Comfort Showcase with wide ratio */}
              <div className="p-4 sm:p-5 bg-white border-t border-slate-100 space-y-3">
                <div className="flex items-center space-x-3.5">
                  <div className="relative w-24 h-16 sm:w-28 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-blue-500 shadow-md">
                    <Image
                      src="/images/famille_confort_temps.jpeg"
                      alt="Famille sereine - Le temps, l'énergie et le confort"
                      fill
                      className="object-cover object-top"
                      sizes="112px"
                    />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-black text-slate-900">
                      Le temps est devenu un luxe.
                    </p>
                    <p className="text-[11px] text-slate-500 leading-snug">
                      BAMS vous aide à le retrouver en prenant en charge l&apos;intégralité de vos besoins techniques et logistiques.
                    </p>
                  </div>
                </div>

                {/* Quick Interactive Links */}
                <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-100">
                  <Link
                    href="/offres/facility-management"
                    className="text-center py-2 bg-slate-50 hover:bg-blue-50 text-blue-700 hover:text-blue-800 border border-slate-200 rounded-xl text-[11px] font-bold transition-colors"
                  >
                    Facility Management ➔
                  </Link>
                  <Link
                    href="/demande"
                    className="text-center py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[11px] font-bold transition-colors shadow-sm"
                  >
                    Demander un diagnostic
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
