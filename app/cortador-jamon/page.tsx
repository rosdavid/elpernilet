import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { HamSlicingHero } from "@/components/ham-slicing/hero";
import { HamSlicingServices } from "@/components/ham-slicing/services";
import { HamSlicingProcess } from "@/components/ham-slicing/process";
import { HamSlicingGallery } from "@/components/ham-slicing/gallery";
import { HamSlicingTestimonials } from "@/components/ham-slicing/testimonials";
import { HamSlicingFAQ } from "@/components/ham-slicing/faq";
import { HamSlicingCTA } from "@/components/ham-slicing/cta";

export const metadata: Metadata = {
  title: "Cortadores de Jamón Profesionales para Bodas y Eventos | elpernilet",
  description:
    "Maestros cortadores de jamón ibérico para bodas, eventos corporativos y celebraciones. Espectáculo gastronómico en vivo. Presupuesto gratuito en 24h.",
  keywords: [
    "cortador de jamón",
    "maestro cortador jamón",
    "jamón ibérico bodas",
    "cortador jamón eventos",
    "corte jamón en vivo",
    "jamón ibérico Barcelona",
    "cortador jamón profesional",
    "jamón bodega eventos",
    "espectáculo corte jamón",
    "maestro jamonero",
    "cortador jamón Madrid",
    "jamón bellota eventos",
    "show cooking jamón",
    "corte jamón artesanal",
    "jamón premium eventos",
  ],
  alternates: {
    canonical: "https://elpernilet.com/cortador-jamon",
  },
  openGraph: {
    title:
      "Cortadores de Jamón Profesionales para Bodas y Eventos | elpernilet",
    description:
      "Maestros cortadores de jamón ibérico para bodas, eventos corporativos y celebraciones. Espectáculo gastronómico en vivo.",
    url: "https://elpernilet.com/cortador-jamon",
    siteName: "elpernilet",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://elpernilet.com/cortador-jamon-hero.webp",
        width: 1200,
        height: 630,
        alt: "Maestros cortadores de jamón ibérico en evento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortadores de Jamón Profesionales para Bodas y Eventos",
    description:
      "Maestros cortadores de jamón ibérico para eventos. Espectáculo gastronómico en vivo.",
    images: ["https://elpernilet.com/cortador-jamon-hero.webp"],
  },
};

export default function CortadorJamonPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cortadores de Jamón Profesionales",
    description:
      "Servicio de maestros cortadores de jamón ibérico para bodas, eventos corporativos y celebraciones privadas",
    provider: {
      "@type": "Organization",
      name: "elpernilet",
      url: "https://elpernilet.com",
      telephone: "+34-654-127-391",
      address: {
        "@type": "PostalAddress",
        addressCountry: "ES",
        addressLocality: "Barcelona",
      },
    },
    areaServed: [
      {
        "@type": "Country",
        name: "España",
      },
      {
        "@type": "AdministrativeArea",
        name: "Cataluña",
      },
    ],
    serviceType: "Catering Services",
    category: "Food Service",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "47",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Header />

      <main className="min-h-screen">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/#services" },
            { label: "Cortador de Jamón" },
          ]}
        />

        <HamSlicingHero />
        <HamSlicingServices />
        <HamSlicingProcess />
        <HamSlicingGallery />
        <HamSlicingTestimonials />
        <HamSlicingFAQ />
        <HamSlicingCTA />
      </main>

      <Footer />
    </>
  );
}
