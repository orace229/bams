import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRefId(): string {
  const dateStr = new Date().getFullYear().toString();
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  return `BAMS-${dateStr}-${randomDigits}`;
}

export function buildWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}
