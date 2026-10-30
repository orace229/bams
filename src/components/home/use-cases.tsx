import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Building2, Home, Calendar, CheckCircle2, ArrowRight } from "lucide-react";

export function UseCases() {
  const cases = [
    {
      icon: <Home className="w-5 h-5 text-blue-600" />,
      tag: "Particuliers & Familles",
      image: "/images/famille_confort_temps.jpeg",
      imageAlt: "Famille africaine détendue profitant de son salon en toute sérénité",
      title: "Facility Management : Sérénité et confort pour votre maison",
      problem: "Le temps est devenu un luxe. Vous peinez à coordonner le nettoyage, la climatisation, la plomberie et l'entretien extérieur.",
      solution: "BAMS prend soin de votre cadre de vie : entretien quotidien, gestion des pannes et confort. Un seul contact, plusieurs solutions.",
      category: "facility_management",
      cta: "Demander un diagnostic"
    },
    {
      icon: <Building2 className="w-5 h-5 text-blue-600" />,
      tag: "Entreprises & Investisseurs",
      image: "/images/consulting_executive_homme.jpeg",
      imageAlt: "Consultant BAMS analysant des dossiers et contrats juridiques en salle de réunion",
      title: "Consulting & Assistance : Implantation APIEx & Affaires",
      problem: "Lenteurs des démarches d'immatriculation, de conformité fiscale ou besoin de déléguer la gestion de ses bureaux à un interlocuteur unique.",
      solution: "Nos consultants prennent en charge la création d'entreprise, les autorisations et supervisent les services généraux.",
      category: "consulting",
      cta: "Confier mes démarches"
    },
    {
      icon: <Calendar className="w-5 h-5 text-blue-600" />,
      tag: "Événements d'Excellence",
      image: "/images/event_reception_rooftop.jpeg",
      imageAlt: "Réception de mariage et banquet haut de gamme en terrasse au coucher du soleil",
      title: "Planification Événementielle : Du concept au jour J",
      problem: "Organisation d'un séminaire d'entreprise, d'un mariage ou d'une réception nécessitant la synchronisation de multiples prestataires fiables.",
      solution: "BAMS orchestre tout : sélection traiteurs, sonorisation, scénographie, sécurité et présence d'un régisseur dédié le jour J.",
      category: "evenementiel",
      cta: "Déposer un projet"
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
          Cas d&apos;Usage Concrets
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Comment BAMS résout vos défis quotidiens
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Découvrez des situations réelles où notre guichet unique apporte une réponse immédiate, mesurable et sécurisée.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {cases.map((item, idx) => (
          <div
            key={idx}
            className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all group"
          >
            {/* Top Illustrative Image with natural 16:10 / video ratio and object-top to preserve heads */}
            <div className="relative aspect-[16/10] sm:aspect-video w-full overflow-hidden bg-slate-100">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full border border-slate-200 text-[10px] font-black uppercase tracking-wider text-slate-800 shadow-sm">
                {item.tag}
              </div>
            </div>

            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="text-base font-black text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 text-slate-600 space-y-1">
                    <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">Le Défi :</span>
                    <p className="leading-relaxed">{item.problem}</p>
                  </div>

                  <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-200 text-slate-800 space-y-1">
                    <div className="flex items-center space-x-1.5 text-blue-700 font-extrabold text-[10px] uppercase tracking-wider">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>La Réponse BAMS :</span>
                    </div>
                    <p className="leading-relaxed font-medium">{item.solution}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href={`/demande?offre=${item.category}`}
                  className="w-full bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <span>{item.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
