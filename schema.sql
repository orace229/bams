-- ============================================================
-- SCHÉMA DE BASE DE DONNÉES POSTGRESQL (SUPABASE) - PROJET BAMS
-- ============================================================

-- 1. Table principale : bams_intakes (Demandes clients)
CREATE TABLE IF NOT EXISTS public.bams_intakes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ref_id VARCHAR(50) UNIQUE NOT NULL,
  category VARCHAR(50) NOT NULL, -- 'consulting', 'conciergerie', 'evenementiel', 'sur_mesure'
  service_type VARCHAR(100),
  description TEXT NOT NULL,
  urgency VARCHAR(30) NOT NULL, -- 'standard', 'urgent', 'planned'
  location VARCHAR(50) NOT NULL, -- 'cotonou', 'calavi', 'portonovo', 'parakou', 'diaspora'
  client_name VARCHAR(150) NOT NULL,
  client_phone VARCHAR(50) NOT NULL,
  client_email VARCHAR(150),
  preferred_contact VARCHAR(30) DEFAULT 'whatsapp',
  status VARCHAR(30) DEFAULT 'pending', -- 'pending', 'reviewing', 'assigned', 'completed', 'cancelled'
  assigned_partner_id UUID,
  internal_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Table des Prestataires & Partenaires : bams_partners (Réseau certifié BAMS)
CREATE TABLE IF NOT EXISTS public.bams_partners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name VARCHAR(150) NOT NULL,
  company_name VARCHAR(150),
  specialty VARCHAR(100) NOT NULL, -- 'electricien', 'plombier', 'traiteur', 'avocat', 'logistique'
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(150),
  location VARCHAR(50) NOT NULL,
  rating DECIMAL(3,2) DEFAULT 5.00,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Configuration Row Level Security (RLS)
ALTER TABLE public.bams_intakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.bams_partners ENABLE ROW LEVEL SECURITY;

-- Politique d'insertion publique pour le formulaire web client
CREATE POLICY "Permettre l'insertion anonyme des demandes" 
ON public.bams_intakes 
FOR INSERT 
TO anon, authenticated 
WITH CHECK (true);

-- Politique de lecture restreinte pour l'équipe interne BAMS
CREATE POLICY "Seule l'équipe BAMS authentifiée peut lire toutes les demandes" 
ON public.bams_intakes 
FOR SELECT 
TO authenticated 
USING (true);

-- Indexes de performance
CREATE INDEX IF NOT EXISTS idx_bams_intakes_ref ON public.bams_intakes(ref_id);
CREATE INDEX IF NOT EXISTS idx_bams_intakes_status ON public.bams_intakes(status);
CREATE INDEX IF NOT EXISTS idx_bams_intakes_created ON public.bams_intakes(created_at DESC);
