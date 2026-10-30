# 🇧🇯 BAMS — Bénin Assistance Multi Services (Plateforme Digital Web App)

> **Slogan** : « Un seul contact. Plusieurs solutions. »  
> **Cible** : Bénin (Cotonou, Abomey-Calavi, Porto-Novo, Parakou) & Diaspora International

---

## 📌 Architecture Technique & Décisions d'Ingénierie

Cette plateforme a été conçue pour répondre aux exigences élevées d'une solution digitale professionnelle, évolutive et adaptée aux réalités du marché béninois :

1. **Frontend & SSR** : **Next.js 15 (App Router)**
   - Rendu serveur optimisé pour le référencement naturel (SEO) et une vitesse d'affichage instantanée sur réseau mobile.
   - PWA ready (installable sur l'écran d'accueil sans passer par l'App Store / Play Store).

2. **Système de Design & CSS** : **Tailwind CSS v4 + Plus Jakarta Sans + Lucide Icons**
   - Charte graphique premium basée sur les teintes Vert Émeraude BAMS, Or Ambré et Neutres Ardoise.
   - Support natif des modes Sombre & Clair avec variables CSS sémantiques.

3. **Validation & Formulaires** : **React Hook Form + Zod Schema Validation**
   - Formulaire guidé en 3 étapes (*Domaine ➔ Description ➔ Coordonnées*).
   - Contrôle de saisie strict avec messages d'erreur contextualisés en français.

4. **Persistance & Backend** : **Supabase (PostgreSQL + Row Level Security)**
   - Persistance sécurisée des demandes d'intake avec politique d'accès RLS.
   - Script d'initialisation de base de données inclus (`schema.sql`).

5. **Moteur d'Intégration WhatsApp** :
   - Génération dynamique de charges utiles structurées vers `wa.me/229...` avec numéro de référence automatique (*REF: BAMS-2026-XXXX*).

---

## 📁 Structure du Projet

```
bams-platform/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── intake/route.ts      # Endpoint API de traitement des demandes
│   │   ├── globals.css              # Directives Tailwind & Thèmes
│   │   ├── layout.tsx               # Shell global & Métadonnées SEO
│   │   └── page.tsx                 # Page d'accueil officielle
│   ├── components/
│   │   ├── home/                    # Hero, ServicesGrid, ProcessTimeline, WhyBams
│   │   ├── intake/                  # MultiStepIntakeForm
│   │   └── layout/                  # Header, Footer
│   └── lib/
│       ├── constants.ts             # Données institutionnelles BAMS
│       ├── types.ts                 # Interfaces TypeScript (BAMSRequest, OfferDetail)
│       ├── utils.ts                 # Générateur de REF & helper WhatsApp
│       ├── validations/             # Schéma Zod (intake-schema.ts)
│       └── supabase/                # Client Supabase
├── schema.sql                       # Migration PostgreSQL Supabase
├── tailwind.config.js               # Thème graphique BAMS
├── tsconfig.json                    # Configuration TypeScript
└── package.json                     # Dépendances du projet
```

---

## 🚀 Démarrage Rapide (Développement Local)

1. **Installer les dépendances** :
   ```bash
   npm install
   ```

2. **Lancer le serveur de développement** :
   ```bash
   npm run dev
   ```
   Rendez-vous sur `http://localhost:3000`.

3. **Valider la compilation de production** :
   ```bash
   npm run build
   ```

---

## 🌐 Déploiement Recommandé (Vercel)

- **Plateforme d'hébergement** : Vercel (gratuit, performance globale maximale pour Next.js).
- **Variables d'environnement optionnelles** :
  - `NEXT_PUBLIC_SUPABASE_URL` : URL de votre projet Supabase
  - `NEXT_PUBLIC_SUPABASE_ANON_KEY` : Clé publique anonyme Supabase
