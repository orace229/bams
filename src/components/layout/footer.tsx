import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, CheckCircle2, Headphones } from "lucide-react";
import { BAMS_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 border-t border-slate-200 text-xs">
      {/* Main Footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Col 1 & 2: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-3.5">
            <div className="relative w-12 h-12 rounded-2xl bg-white p-1 border border-slate-200 shadow-sm flex items-center justify-center overflow-hidden">
              <Image
                src="/bams-logo.png"
                alt="Logo BAMS Bénin"
                width={48}
                height={48}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <span className="text-xl font-black text-slate-900 tracking-tight">BAMS</span>
              <span className="block text-[10px] text-slate-500 font-bold tracking-widest uppercase">
                Bénin Assistance Multi Services
              </span>
            </div>
          </div>
          
          <p className="text-slate-600 leading-relaxed max-w-sm">
            BAMS : entreprise de consulting et de gestion de solutions au Bénin. Nous prenons en charge vos démarches, la gestion complète de vos espaces (Facility Management) et vos événements via notre Call Center dédié.
          </p>

          <div className="flex items-center space-x-2 text-blue-700 font-bold">
            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
            <span>« Un seul contact. Plusieurs solutions. »</span>
          </div>
        </div>

        {/* Col 3: Quick Links */}
        <div className="space-y-3">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Nos Piliers</h4>
          <ul className="space-y-2 text-slate-600 font-medium">
            <li><Link href="/offres/consulting" className="hover:text-blue-600 transition-colors">1. Consulting &amp; Assistance</Link></li>
            <li><Link href="/offres/facility-management" className="hover:text-blue-600 transition-colors">2. Facility Management BAMS</Link></li>
            <li><Link href="/offres/evenementiel" className="hover:text-blue-600 transition-colors">3. Planification Événementielle</Link></li>
            <li><Link href="/offres" className="hover:text-blue-600 transition-colors font-bold text-blue-600">Toutes les offres ➔</Link></li>
          </ul>
        </div>

        {/* Col 4: Processus & Intake */}
        <div className="space-y-3">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-slate-600 font-medium">
            <li><Link href="/" className="hover:text-blue-600 transition-colors">Page d&apos;accueil</Link></li>
            <li><Link href="/comment-ca-marche" className="hover:text-blue-600 transition-colors">Comment ça marche</Link></li>
            <li><Link href="/demande" className="hover:text-blue-600 transition-colors font-bold text-blue-600">Déposer une demande</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Call Center 24/7</Link></li>
          </ul>
        </div>

        {/* Col 5: Contact Direct & Call Center */}
        <div className="space-y-3">
          <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">Call Center Unique</h4>
          <div className="space-y-2.5 text-slate-600">
            <div className="flex items-center space-x-2 text-slate-900 font-black">
              <Headphones className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Assistance &amp; Écoute 24/7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-blue-600 shrink-0" />
              <a href={`tel:${BAMS_INFO.phone}`} className="hover:text-blue-600 font-bold text-slate-900 transition-colors">
                {BAMS_INFO.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <a href={`mailto:${BAMS_INFO.email}`} className="hover:text-blue-600 transition-colors font-semibold">
                {BAMS_INFO.email}
              </a>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>{BAMS_INFO.address}</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Disclaimer */}
      <div className="border-t border-slate-200 bg-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Bénin Assistance Multi Services (BAMS). Tous droits réservés.</p>
          <div className="flex space-x-6 text-[11px] font-semibold text-slate-600">
            <span className="hover:text-blue-600 cursor-pointer">Confidentialité</span>
            <span className="hover:text-blue-600 cursor-pointer">Conditions Générales</span>
            <span className="hover:text-blue-600 cursor-pointer">Mentions Légales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
