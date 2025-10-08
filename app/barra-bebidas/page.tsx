import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DrinkBarHero } from "@/components/drink-bar/hero";
import { DrinkBarServices } from "@/components/drink-bar/services";
import { DrinkBarProcess } from "@/components/drink-bar/process";
/* import { DrinkBarGallery } from "@/components/drink-bar/gallery"; */
import { DrinkBarTestimonials } from "@/components/drink-bar/testimonials";
import { DrinkBarFAQ } from "@/components/drink-bar/faq";
import { DrinkBarCTA } from "@/components/drink-bar/cta";

export const metadata: Metadata = {
  title: "Barra de Bebidas y Cócteles para Bodas y Eventos | elpernilet",
  description:
    "Bartenders profesionales, barra de bebidas premium y cócteles artesanales para bodas, eventos corporativos y celebraciones. Servicio en Barcelona y toda España.",
  keywords: [
    "barra de bebidas Barcelona",
    "bartender profesional Catalunya",
    "cócteles bodas Barcelona",
    "barra móvil eventos España",
    "cocktail bar bodas",
    "bartender eventos corporativos",
    "barra premium Barcelona",
    "cócteles artesanales eventos",
    "servicio bebidas bodas",
    "bartender profesional España",
    "barra bebidas Madrid Valencia",
    "cocktail catering España",
    "mixología eventos Barcelona",
    "barra gin tonic eventos",
    "servicio bebidas premium",
  ],
  alternates: {
    canonical: "https://elpernilet.com/barra-bebidas",
  },
  openGraph: {
    title: "Barra de Bebidas y Cócteles para Bodas y Eventos | elpernilet",
    description:
      "Bartenders profesionales, barra de bebidas premium y cócteles artesanales para bodas y eventos corporativos.",
    url: "https://elpernilet.com/barra-bebidas",
    siteName: "elpernilet",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://elpernilet.com/elpernilet-event-image.webp",
        width: 1200,
        height: 630,
        alt: "Bartender profesional preparando cócteles en evento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barra de Bebidas y Cócteles para Bodas y Eventos",
    description:
      "Bartenders profesionales y cócteles artesanales para eventos únicos.",
    images: ["https://elpernilet.com/elpernilet-event-image.webp"],
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

export default function BarraBebidas() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Barra de Bebidas y Cócteles Profesional",
    description:
      "Servicio de bartenders profesionales con barra de bebidas premium y cócteles artesanales para bodas, eventos corporativos y celebraciones privadas",
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
    category: "Food and Beverage Service",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "42",
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
            { label: "Barra de Bebidas" },
          ]}
        />

        <DrinkBarHero />
        <DrinkBarServices />
        <DrinkBarProcess />
        {/* <DrinkBarGallery /> */}
        <DrinkBarTestimonials />
        <DrinkBarFAQ />
        <DrinkBarCTA />
      </main>

      <Footer />
    </>
  );
}
