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
  title:
    "Cortadores de Jamón Profesionales para Bodas y Eventos | elpernilet Barcelona",
  description:
    "Maestros cortadores de jamón ibérico para bodas, eventos corporativos y celebraciones en Barcelona y toda España. Espectáculo gastronómico en vivo. Presupuesto gratuito en 24h.",
  keywords: [
    "cortador de jamón Barcelona",
    "maestro cortador jamón Catalunya",
    "jamón ibérico bodas Barcelona",
    "cortador jamón eventos España",
    "corte jamón en vivo Barcelona",
    "jamón ibérico bellota eventos",
    "cortador jamón profesional España",
    "jamón bodega eventos Barcelona",
    "espectáculo corte jamón Catalunya",
    "maestro jamonero profesional",
    "cortador jamón Madrid Valencia",
    "jamón premium eventos España",
    "show cooking jamón Barcelona",
    "corte jamón artesanal eventos",
    "catering jamón ibérico España",
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
  other: {
    "geo.region": "ES-CT",
    "geo.placename": "Barcelona, Navarcles",
    "geo.position": "41.7891;1.9034",
    ICBM: "41.7891, 1.9034",
    "business.contact_data.locality": "Navarcles",
    "business.contact_data.region": "Barcelona",
    "business.contact_data.country": "Spain",
  },
};

export default function CortadorJamonPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Cortadores de Jamón Profesionales",
    description:
      "Servicio de maestros cortadores de jamón ibérico para bodas, eventos corporativos y celebraciones privadas",
    provider: {
      "@type": "Caterer",
      "@id": "https://elpernilet.com/#Caterer",
      name: "elpernilet",
      url: "https://elpernilet.com",
      telephone: "+34654127391",
      email: "hola@elpernilet.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carrer Nou, 41",
        addressLocality: "Navarcles",
        postalCode: "08270",
        addressRegion: "Barcelona",
        addressCountry: "ES",
      },
      areaServed: {
        "@type": "Country",
        name: "España",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de Cortador de Jamón",
        itemListElement: [
          {
            "@type": "Offer",
            name: "Cortador de Jamón Esencial",
            price: "350-450",
            priceCurrency: "EUR",
            description: "Servicio básico de cortador de jamón profesional",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Cortador de Jamón Premium",
            price: "500-650",
            priceCurrency: "EUR",
            description:
              "Experiencia premium con jamón de bellota y presentación gourmet",
            availability: "https://schema.org/InStock",
          },
          {
            "@type": "Offer",
            name: "Experiencia VIP Completa",
            price: "750-1200",
            priceCurrency: "EUR",
            description:
              "Servicio completo con múltiples cortadores y equipo de apoyo",
            availability: "https://schema.org/InStock",
          },
        ],
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
      {
        "@type": "City",
        name: "Barcelona",
      },
      {
        "@type": "City",
        name: "Madrid",
      },
      {
        "@type": "City",
        name: "Valencia",
      },
    ],
    serviceType: "Catering Services",
    category: "Food Service",
    offers: {
      "@type": "AggregateOffer",
      priceRange: "€350-€1200",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      lowPrice: "350",
      highPrice: "1200",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    additionalType: [
      "https://schema.org/FoodService",
      "https://schema.org/CateringBusiness",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
