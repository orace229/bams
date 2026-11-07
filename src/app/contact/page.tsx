import Link from "next/link";
import { BAMS_INFO } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/utils";
import { Phone, Mail, MapPin, Headphones, MessageSquare, Clock, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Contact Call Center — BAMS Bénin | Assistance 24/7",
  description: "Contactez le Call Center officiel de Bénin Assistance Multi Services au 01 41 26 33 72 ou par email à bamsservice01@gmail.com.",
};

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppUrl(
    BAMS_INFO.whatsappPhone,
    "Bonjour BAMS Call Center, je désire échanger avec un conseiller pour une assistance."
  );

  return (
    <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          Ligne Directe BAMS
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Contact &amp; Call Center Dédié
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          BAMS : conciergerie, facility management et gestion de solutions. « Votre besoin, notre mission. » Contactez-nous au 01 41 26 33 72 pour demander votre diagnostic ou confier vos projets.
        </p>
      </div>

      {/* Main Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Phone / Call */}
        <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-4 text-center hover:border-blue-400 hover:shadow-lg transition-all">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 border border-blue-200 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <Phone className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">Appel Téléphonique</h3>
            <p className="text-xs text-slate-500 mt-1">Numéro unique officiel</p>
          </div>
          <p className="text-xl font-black text-slate-900">{BAMS_INFO.phoneDisplay}</p>
          <a
            href={`tel:${BAMS_INFO.phone}`}
            className="inline-block w-full py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-xl text-xs transition-colors"
          >
            Composer le numéro
          </a>
        </div>

        {/* Card 2: WhatsApp */}
        <div className="p-8 bg-blue-50/60 border border-blue-200 rounded-3xl space-y-4 text-center hover:border-blue-400 hover:shadow-lg transition-all">
          <div className="w-14 h-14 bg-white text-blue-600 border border-blue-200 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <MessageSquare className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">WhatsApp Direct</h3>
            <p className="text-xs text-slate-500 mt-1">Échange instantané Call Center</p>
          </div>
          <p className="text-xl font-black text-blue-700">{BAMS_INFO.phoneDisplay}</p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-colors shadow-sm"
          >
            Ouvrir la discussion
          </a>
        </div>

        {/* Card 3: Email */}
        <div className="p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-4 text-center hover:border-blue-400 hover:shadow-lg transition-all">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 border border-blue-200 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
            <Mail className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-slate-900">Email Officiel</h3>
            <p className="text-xs text-slate-500 mt-1">Dossiers et demandes formelles</p>
          </div>
          <p className="text-sm font-black text-slate-900 break-all">{BAMS_INFO.email}</p>
          <a
            href={`mailto:${BAMS_INFO.email}`}
            className="inline-block w-full py-3 bg-slate-900 hover:bg-black text-white font-bold rounded-xl text-xs transition-colors"
          >
            Envoyer un email
          </a>
        </div>

      </div>

      {/* Commitments Bar */}
      <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start space-x-3">
          <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-black text-slate-900">Engagement &lt; 30 minutes</h4>
            <p className="text-xs text-slate-600 mt-1">Prise en charge et accusé de réception garantis dès l&apos;arrivée de votre message.</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-black text-slate-900">Confidentialité &amp; Sécurité</h4>
            <p className="text-xs text-slate-600 mt-1">Vos coordonnées et la nature de votre intervention restent strictement confidentielles.</p>
          </div>
        </div>

        <div className="flex items-start space-x-3">
          <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-black text-slate-900">Localisation</h4>
            <p className="text-xs text-slate-600 mt-1">Présence opérationnelle : Cotonou, Abomey-Calavi, Porto-Novo et toute la Diaspora.</p>
          </div>
        </div>
      </div>

      {/* Online Request CTA */}
      <div className="bg-white border-2 border-dashed border-slate-300 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-xl font-black text-slate-900">Vous préférez détailler votre demande en ligne ?</h3>
        <p className="text-xs text-slate-600 max-w-md mx-auto">
          Utilisez notre formulaire guidé pour nous donner tous les détails de votre besoin.
        </p>
        <div>
          <Link
            href="/demande"
            className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-xl text-xs transition-colors shadow-md"
          >
            <span>Accéder au formulaire de demande</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

    </div>
  );
}
