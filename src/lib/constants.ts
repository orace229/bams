import { OfferDetail } from "./types";

export const BAMS_INFO = {
  name: "Bénin Assistance Multi Services",
  shortName: "BAMS",
  companyType: "Conciergerie, facility management et gestion de solutions",
  tagline: "Un seul contact. Plusieurs solutions.",
  devise: "Le temps, l'énergie et le confort",
  phone: "+229 01 41 26 33 72",
  phoneDisplay: "01 41 26 33 72",
  whatsappPhone: "2290141263372",
  email: "bamsservice01@gmail.com",
  callCenter: "Call Center BAMS",
  address: "Cotonou, République du Bénin",
  responseGuarantee: "Moins de 30 minutes",
  coverage: ["Cotonou", "Abomey-Calavi", "Porto-Novo", "Parakou", "Diaspora"],
};

export const FACILITY_MANAGEMENT_DATA = {
  title: "Facility Management BAMS",
  tagline: "La gestion complète de votre maison, de votre bureau ou de votre immeuble",
  hook: "Le temps est devenu un luxe. Nous vous aidons à le retrouver.",
  punchline: "Vous vivez. Vous travaillez. Vous développez vos activités. Nous nous occupons de votre environnement.",
  description: "Le Facility Management BAMS consiste à prendre soin de votre cadre de vie ou de travail, à l’organiser et à le suivre, pour en assurer le bon fonctionnement, l’entretien, le confort et l’évolution. Notre mission est simple : vous permettre de profiter pleinement de votre environnement sans avoir à gérer chaque détail. Un seul contact, plusieurs solutions.",
  targets: [
    {
      title: "Pour les particuliers",
      desc: "qui veulent déléguer l’entretien de leur maison en toute sérénité."
    },
    {
      title: "Pour les entreprises",
      desc: "qui souhaitent confier la coordination de leurs services généraux à un seul interlocuteur."
    },
    {
      title: "Pour les propriétaires",
      desc: "qui veulent suivre et valoriser leurs biens sans tout gérer eux-mêmes."
    }
  ],
  solutions: [
    {
      id: "recurrent",
      number: "01",
      title: "Solutions récurrentes : l’entretien et le suivi au quotidien",
      summary: "Nettoyage et entretien, jardinage et espaces extérieurs, dératisation, désinsectisation, nettoyage des tanks et réservoirs, gestion des installations (électricité, plomberie, climatisation, équipements), amélioration du confort des espaces, gestion du linge et suivi général de votre cadre de vie ou de travail. Lorsqu’une installation tombe en panne ou demande un entretien, BAMS organise et coordonne l’intervention appropriée.",
      items: [
        "Nettoyage professionnel et entretien régulier",
        "Jardinage et entretien des espaces extérieurs",
        "Dératisation et désinsectisation préventive",
        "Nettoyage et désinfection des tanks et réservoirs d'eau",
        "Gestion des installations (électricité, plomberie, climatisation, équipements)",
        "Amélioration du confort des espaces et gestion du linge",
        "Suivi général et organisation d'intervention immédiate en cas de panne"
      ]
    },
    {
      id: "projets",
      number: "02",
      title: "Projets et chantiers : construire, rénover, aménager",
      summary: "Construction et suivi de chantier, rénovation et réhabilitation, aménagement intérieur, aménagement extérieur et paysager, installation d’équipements (solution solaire, vidéosurveillance…) et travaux d’amélioration. Quand un besoin dépasse la gestion courante, BAMS prend en charge l’organisation et la coordination du projet.",
      items: [
        "Construction et suivi rigoureux de chantier",
        "Rénovation et réhabilitation immobilière",
        "Aménagement intérieur sur-mesure",
        "Aménagement extérieur et paysager",
        "Installation d’équipements (solutions solaires, vidéosurveillance…)",
        "Travaux d'amélioration et modernisation"
      ]
    },
    {
      id: "patrimoine",
      number: "03",
      title: "Gestion immobilière et patrimoine : pour les propriétaires",
      summary: "Suivi de vos biens, gestion des locations et des loyers selon le périmètre défini au contrat, suivi des occupants, entretien et interventions, coordination et reporting. Vous suivez la situation de vos biens sans avoir à gérer personnellement chaque intervention.",
      items: [
        "Suivi technique et préservation de la valeur de vos biens",
        "Gestion des locations et des loyers selon contrat",
        "Suivi des occupants et relations locatives",
        "Entretien technique et coordination des interventions",
        "Reporting clair et régulier sans charge mentale"
      ]
    },
    {
      id: "exploitation",
      number: "04",
      title: "Mise en exploitation, aménagement et déménagement : préparer et réorganiser vos espaces",
      summary: "Préparation d’un logement, d’un bureau ou d’un local pour qu’il soit utilisable dans de bonnes conditions, aménagement et installation, déménagement résidentiel ou professionnel, réorganisation des espaces.",
      items: [
        "Préparation de logement, bureau ou local clé en main",
        "Aménagement fonctionnel et installation des équipements",
        "Déménagement résidentiel ou professionnel sécurisé",
        "Réorganisation et optimisation ergonomique des espaces"
      ]
    }
  ],
  method: [
    {
      step: "1",
      title: "Choix des solutions",
      desc: "Vous choisissez les solutions qui vous intéressent selon vos priorités actuelles."
    },
    {
      step: "2",
      title: "Analyse & Diagnostic du site",
      desc: "Nous analysons votre environnement pour comprendre vos besoins et les caractéristiques réelles du site."
    },
    {
      step: "3",
      title: "Programme personnalisé",
      desc: "Nous établissons votre programme personnalisé : interventions, fréquences, ressources et modalités."
    },
    {
      step: "4",
      title: "Signature & Démarrage",
      desc: "Vous validez, nous signons et nous démarrons. Le programme devient la base de votre contrat, réévaluable et ajustable si vos besoins évoluent."
    }
  ],
  budget: {
    title: "Un budget clair, jamais un forfait imposé",
    subtitle: "Notre carte n’est pas un forfait : elle sert à identifier ce que vous souhaitez nous confier.",
    elements: [
      {
        title: "Les honoraires de gestion BAMS",
        desc: "Pour la coordination globale, le contrôle qualité continu et votre interlocuteur unique dédié."
      },
      {
        title: "Les prestations prévues à votre programme",
        desc: "Calendrier et ressources validés ensemble en toute transparence."
      },
      {
        title: "Les dépenses exceptionnelles approuvées",
        desc: "Toujours approuvées au préalable par vos soins avant qu’elles ne soient engagées."
      },
      {
        title: "Facturation au réel effectué",
        desc: "Les prestations réalisées par des prestataires externes sont facturées selon ce qui est réellement effectué."
      }
    ]
  },
  whyBams: [
    {
      title: "Un seul interlocuteur",
      desc: "Un point de contact unique pour tous vos prestataires et besoins techniques."
    },
    {
      title: "Un programme sur mesure",
      desc: "Construit sur mesure selon votre cadre de vie, bureau ou immeuble."
    },
    {
      title: "Un suivi en temps réel",
      desc: "Un reporting transparent qui vous permet de rester informé sans perdre de temps."
    },
    {
      title: "Une offre qui évolue avec vous",
      desc: "Ajustable à tout moment selon l'évolution de vos activités et de vos espaces."
    }
  ],
  ctaDiagnostic: "Votre besoin, notre mission. Contactez-nous au 01 41 26 33 72 pour demander votre diagnostic."
};

export const OFFERS_DATA: OfferDetail[] = [
  {
    id: "conciergerie",
    title: "1. Conciergerie & Assistance",
    subtitle: "Intendance personnalisée, démarches administratives, logistique du quotidien et relais de confiance au Bénin.",
    iconName: "Sparkles",
    badge: "Intendance & Démarches",
    color: "from-blue-600 to-indigo-700",
    subServices: [
      {
        title: "Démarches Administratives & Formalités Locales",
        description: "Prise en charge de vos démarches administratives, légalisations, formalités foncières, immatriculations (APIEx) et représentations au Bénin.",
        features: ["Formalités administratives & notariales", "Démarches foncières & immatriculation", "Suivi et dépôt de dossiers sur place"]
      },
      {
        title: "Conciergerie Privée & Intendance du Quotidien",
        description: "Gestion de vos courses, réservations, intendance, accueil séjour, livraisons sécurisées et assistance personnalisée pour vous faire gagner du temps.",
        features: ["Intendance & logistique de proximité", "Accueil séjour & réservations", "Services sur-mesure pour particuliers & familles"]
      },
      {
        title: "Relais Diaspora & Représentation de Confiance",
        description: "Vos yeux et vos bras de confiance au Bénin : suivi de vos affaires, inspection de projets, courses urgentes et reporting transparent.",
        features: ["Inspection et visites sur le terrain", "Reporting régulier (photos/vidéos)", "Représentation auprès des organismes locaux"]
      }
    ]
  },
  {
    id: "facility_management",
    title: "2. Facility Management BAMS",
    subtitle: "La gestion complète de votre maison, de votre bureau ou de votre immeuble.",
    iconName: "Key",
    badge: "Gestion Complète Cadre de Vie & Travail",
    color: "from-blue-600 to-slate-900",
    subServices: [
      {
        title: "Solutions récurrentes : entretien & suivi au quotidien",
        description: "Nettoyage, jardinage, dératisation/désinsectisation, tanks à eau, gestion des installations (électricité, plomberie, climatisation) et suivi général.",
        features: ["Nettoyage & entretien régulier", "Électricité, plomberie, clim", "Dépannage d'urgence coordonné"]
      },
      {
        title: "Projets et chantiers : construire, rénover, aménager",
        description: "Construction et suivi de chantier, rénovation, aménagement intérieur et paysager, solutions solaires et vidéosurveillance.",
        features: ["Suivi de chantiers rigoureux", "Rénovation & aménagement", "Énergie solaire & sécurité"]
      },
      {
        title: "Gestion immobilière et patrimoine : pour les propriétaires",
        description: "Suivi technique des biens, gestion locative et des loyers au contrat, suivi des occupants, coordination et reporting sans charge mentale.",
        features: ["Gestion locative & loyers", "Préservation du patrimoine", "Reporting continu aux propriétaires"]
      },
      {
        title: "Mise en exploitation, aménagement & déménagement",
        description: "Préparation de locaux et logements clé en main, installation d’équipements, déménagement résidentiel ou pro et réorganisation d'espaces.",
        features: ["Mise en exploitation clé en main", "Déménagement sécurisé", "Réorganisation des espaces"]
      }
    ]
  },
  {
    id: "evenementiel",
    title: "3. Planification Événementielle",
    subtitle: "Organisation clé en main de vos événements privés et professionnels d'exception.",
    iconName: "Calendar",
    badge: "Organisation & Logistique",
    color: "from-blue-700 to-sky-600",
    subServices: [
      {
        title: "Événements Privés & Familiaux",
        description: "Mariages, réceptions, cérémonies et anniversaires gérés de A à Z avec élégance et sérénité.",
        features: ["Scénographie & Décoration", "Sélection Traiteur & Protocole", "Coordination complète le jour J"]
      },
      {
        title: "Séminaires & Conférences Pro",
        description: "Organisation logistique complète pour entreprises, ONG et institutions au Bénin.",
        features: ["Réservation de lieux d'exception", "Régie technique audio/vidéo", "Accueil & Hôtesses d'événement"]
      },
      {
        title: "Mobilisation du Réseau Prestataires",
        description: "Accès au réseau BAMS de prestataires événementiels certifiés avec garantie de résultat et rigueur.",
        features: ["Négociation des meilleurs tarifs", "Supervision logistique", "Assurance qualité BAMS"]
      }
    ]
  }
];
