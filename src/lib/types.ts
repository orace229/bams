export type OfferCategory = 
  | 'consulting' 
  | 'facility_management'
  | 'conciergerie' 
  | 'evenementiel' 
  | 'sur_mesure';

export type UrgencyLevel = 'standard' | 'urgent' | 'planned';

export type BeninLocation = 
  | 'cotonou' 
  | 'calavi' 
  | 'portonovo' 
  | 'parakou' 
  | 'autre_benin' 
  | 'diaspora';

export interface BAMSRequest {
  id?: string;
  ref_id: string;
  category: OfferCategory;
  service_type?: string;
  description: string;
  urgency: UrgencyLevel;
  location: BeninLocation;
  client_name: string;
  client_phone: string;
  client_email?: string;
  preferred_contact: 'whatsapp' | 'phone' | 'email';
  status: 'pending' | 'reviewing' | 'assigned' | 'completed' | 'cancelled';
  created_at?: string;
}

export interface OfferDetail {
  id: OfferCategory;
  title: string;
  subtitle: string;
  iconName: string;
  badge: string;
  color: string;
  subServices: {
    title: string;
    description: string;
    features: string[];
  }[];
}
