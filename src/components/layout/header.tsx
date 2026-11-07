"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, PhoneCall, Menu, X, Headphones, ChevronDown } from "lucide-react";
import { BAMS_INFO } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offersDropdownOpen, setOffersDropdownOpen] = useState(false);

  const directWhatsAppUrl = buildWhatsAppUrl(
    BAMS_INFO.whatsappPhone,
    "Bonjour BAMS Call Center, je vous contacte depuis la plateforme web pour une demande d'assistance."
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-colors">
      
      {/* Top Announcement Bar - Responsive Mobile / Desktop */}
      <div className="bg-slate-900 text-white py-1.5 px-3 sm:px-4 text-xs font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-1 sm:gap-2">
          <div className="flex items-center space-x-2">
            <span className="bg-blue-600 text-white font-black px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider">
              BÉNIN 🇧🇯
            </span>
            <span className="hidden sm:inline text-slate-200 font-semibold text-[11px] sm:text-xs">
              « {BAMS_INFO.tagline} »
            </span>
            <span className="sm:hidden text-slate-200 text-[11px]">Un seul contact.</span>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3 text-slate-300">
            <span className="hidden md:inline text-[11px] text-slate-400">Call Center 24/7 :</span>
            <a 
              href={`tel:${BAMS_INFO.phone}`} 
              className="flex items-center space-x-1 hover:text-blue-300 transition-colors font-black text-white text-[11px] sm:text-xs tracking-wide"
            >
              <PhoneCall className="w-3 h-3 text-blue-400 shrink-0" />
              <span>{BAMS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3.5 group shrink-0">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shrink-0">
            <Image
              src="/bams-logo.png"
              alt="Logo BAMS Bénin"
              width={48}
              height={48}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 leading-none">
                BAMS
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                OFFICIEL
              </span>
            </div>
            <span className="block text-[9px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
              Bénin Assistance Multi Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-sm font-bold text-slate-700">
          <Link href="/" className="hover:text-blue-600 transition-colors">
            Accueil
          </Link>

          {/* Dropdown Offres */}
          <div className="relative" onMouseLeave={() => setOffersDropdownOpen(false)}>
            <button
              onClick={() => setOffersDropdownOpen(!offersDropdownOpen)}
              onMouseEnter={() => setOffersDropdownOpen(true)}
              className="flex items-center space-x-1 hover:text-blue-600 transition-colors focus:outline-none"
            >
              <span>Nos 3 Offres</span>
              <ChevronDown className="w-4 h-4" />
            </button>

            {offersDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 rounded-2xl shadow-xl py-2 mt-2 z-50">
                <Link
                  href="/offres/conciergerie"
                  onClick={() => setOffersDropdownOpen(false)}
                  className="block px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
                >
                  ✨ 1. Conciergerie &amp; Assistance
                </Link>
                <Link
                  href="/offres/facility-management"
                  onClick={() => setOffersDropdownOpen(false)}
                  className="block px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
                >
                  🏢 2. Facility Management BAMS
                </Link>
                <Link
                  href="/offres/evenementiel"
                  onClick={() => setOffersDropdownOpen(false)}
                  className="block px-4 py-2.5 text-xs font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-600"
                >
                  🎉 3. Planification Événementielle
                </Link>
                <div className="border-t border-slate-100 my-1"></div>
                <Link
                  href="/offres"
                  onClick={() => setOffersDropdownOpen(false)}
                  className="block px-4 py-2 text-[11px] font-bold text-blue-600 hover:bg-blue-50"
                >
                  Voir la vue d&apos;ensemble ➔
                </Link>
              </div>
            )}
          </div>

          <Link href="/comment-ca-marche" className="hover:text-blue-600 transition-colors">
            Comment ça marche
          </Link>
          <Link href="/demande" className="hover:text-blue-600 transition-colors">
            Déposer une demande
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition-colors">
            Contact Call Center
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <a
            href={directWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center space-x-1.5 bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 px-3.5 py-2 rounded-xl font-bold text-xs transition-all shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
            <span>WhatsApp</span>
          </a>

          <Link
            href="/demande"
            className="bg-blue-600 hover:bg-blue-700 text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl font-bold text-xs shadow-md shadow-blue-600/20 transition-all hover:shadow-lg whitespace-nowrap"
          >
            Déposer un besoin
          </Link>

          {/* Mobile menu toggle button (Touch-friendly 44px min target) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Menu Mobile"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Navigation (100% full-width responsive) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 sm:px-6 py-5 space-y-4 shadow-2xl max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-2.5 font-bold text-slate-800 text-sm">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Accueil</span>
              <span className="text-slate-400 text-xs">➔</span>
            </Link>

            <div className="py-2 px-3 bg-slate-50 rounded-xl space-y-2">
              <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">Nos 3 Grandes Offres</span>
              <Link
                href="/offres/conciergerie"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs text-slate-700 hover:text-blue-600 font-semibold"
              >
                ✨ 1. Conciergerie &amp; Assistance
              </Link>
              <Link
                href="/offres/facility-management"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs text-slate-700 hover:text-blue-600 font-semibold"
              >
                🏢 2. Facility Management BAMS
              </Link>
              <Link
                href="/offres/evenementiel"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-xs text-slate-700 hover:text-blue-600 font-semibold"
              >
                🎉 3. Planification Événementielle
              </Link>
              <Link
                href="/offres"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-[11px] text-blue-600 font-extrabold"
              >
                Voir tout le catalogue ➔
              </Link>
            </div>

            <Link
              href="/comment-ca-marche"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-slate-50 border-b border-slate-100 flex items-center justify-between"
            >
              <span>Comment ça marche</span>
              <span className="text-slate-400 text-xs">➔</span>
            </Link>

            <Link
              href="/demande"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl bg-blue-50 text-blue-700 font-black border border-blue-200 flex items-center justify-between"
            >
              <span>Formuler un besoin en ligne</span>
              <span className="text-blue-600 text-xs">➔</span>
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-3 rounded-xl hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Contact Call Center</span>
              <span className="text-slate-400 text-xs">➔</span>
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${BAMS_INFO.phone}`}
              className="w-full flex items-center justify-center space-x-2 bg-slate-900 text-white py-3.5 rounded-xl font-bold text-xs shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-blue-400" />
              <span>Appeler le Call Center ({BAMS_INFO.phoneDisplay})</span>
            </a>
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3.5 rounded-xl font-bold text-xs shadow-md shadow-blue-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
