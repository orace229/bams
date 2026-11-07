import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingCallButton } from "@/components/layout/floating-call-button";

export const metadata: Metadata = {
  metadataBase: new URL("https://bams.bj"),
  title: "BAMS — Bénin Assistance Multi Services | Conciergerie, Facility Management & Événementiel",
  description: "Bénin Assistance Multi Services (BAMS) : conciergerie et gestion de solutions. Conciergerie & Assistance, Facility Management BAMS (maison, bureau, immeuble), et Planification Événementielle. Le temps, l'énergie et le confort. Call Center Dédié (01 41 26 33 72).",
  keywords: ["Bénin", "BAMS", "Conciergerie Bénin", "Facility Management Bénin", "Gestion maison Bénin", "Gestion immeuble", "Assistance Cotonou", "Événementiel Bénin", "Diaspora Bénin", "Call Center Bénin"],
  icons: {
    icon: "/bams-logo.png",
    shortcut: "/bams-logo.png",
    apple: "/bams-logo.png",
  },
  openGraph: {
    title: "BAMS — Bénin Assistance Multi Services",
    description: "Un seul contact. Plusieurs solutions pour votre cadre de vie, vos affaires et vos événements au Bénin.",
    url: "https://bams.bj",
    siteName: "BAMS Bénin",
    images: [{ url: "/bams-logo.jpg", width: 1024, height: 1024, alt: "Logo BAMS Bénin" }],
    locale: "fr_BJ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans bg-white text-slate-900 antialiased min-h-screen flex flex-col selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  );
}
