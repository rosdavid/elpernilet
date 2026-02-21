import { Metadata } from "next";
import { getBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AppetizerBarHero } from "@/components/appetizer-bar/hero";
import { AppetizerBarServices } from "@/components/appetizer-bar/services";
import { AppetizerBarProcess } from "@/components/appetizer-bar/process";
// import { AppetizerBarGallery } from "@/components/appetizer-bar/gallery";
import { AppetizerBarTestimonials } from "@/components/appetizer-bar/testimonials";
import { AppetizerBarFAQ } from "@/components/appetizer-bar/faq";
import { AppetizerBarCTA } from "@/components/appetizer-bar/cta";

export const metadata: Metadata = {
  title:
    "Canapés Gourmet para Bodas y Eventos en Barcelona. Aperitivos Premium Desde 10€ por Persona",
  description:
    "Sorprende con canapés gourmet y aperitivos premium para bodas y eventos en Barcelona. Desde 10€ por persona, opciones vegetarianas y presupuesto gratis en 24h. ¡Contrata ahora!",
  keywords: [
    "barra aperitivos Barcelona",
    "canapés bodas Catalunya",
    "aperitivos gourmet eventos España",
    "finger foods bodas Barcelona",
    "barra tapas eventos corporativos",
    "aperitivos premium bodas",
    "barra aperitivos España",
    "barra canapés bodas",
    "aperitivos artesanales eventos",
    "servicio aperitivos premium",
    "barra aperitivos boda Barcelona precio",
    "canapés gourmet bodas Catalunya",
    "aperitivos para eventos corporativos España",
    "barra tapas premium bodas",
    "servicio aperitivos eventos Barcelona",
  ],
  alternates: {
    canonical: "https://elpernilet.com/barra-aperitivos",
  },
  openGraph: {
    title:
      "Canapés Gourmet para Bodas y Eventos en Barcelona. Aperitivos Premium Desde 10€ por Persona",
    description:
      "Deliciosos canapés y aperitivos que harán que tus invitados hablen de tu evento por semanas. Opciones vegetarianas, montaje fácil. Combínalo con nuestro jamón y wow. Presupuesto en 24h.",
    url: "https://elpernilet.com/barra-aperitivos",
    siteName: "elpernilet",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://elpernilet.com/elpernilet-event-image.webp",
        width: 1200,
        height: 630,
        alt: "Barra de aperitivos gourmet en evento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Canapés Gourmet para Bodas y Eventos en Barcelona. Aperitivos Premium Desde 10€ por Persona",
    description:
      "Deliciosos canapés y aperitivos que harán que tus invitados hablen de tu evento por semanas. Opciones vegetarianas, montaje fácil. Combínalo con nuestro jamón y wow. Presupuesto en 24h.",
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

export default function BarraAperitivos() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Canapés Gourmet para Bodas y Eventos en Barcelona. Aperitivos Premium Desde 10€ por Persona",
    description:
      "Deliciosos canapés y aperitivos que harán que tus invitados hablen de tu evento por semanas. Opciones vegetarianas, montaje fácil. Combínalo con nuestro jamón y wow. Presupuesto en 24h.",
    provider: {
      "@type": ["LocalBusiness", "Caterer"],
      "@id": "https://elpernilet.com/#business",
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
    ],
    serviceType: "Food and Beverage Service",
    category: "Appetizer Catering",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getBreadcrumbSchema([
              { name: "Inicio", url: "/" },
              { name: "Barra de aperitivos", url: "/barra-aperitivos" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué incluye el servicio de barra de aperitivos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Incluye barra equipada, vajilla, decoración temática, selección de aperitivos gourmet (calientes y fríos), canapés artesanales, montaje y desmontaje completo, y limpieza final.",
                },
              },
              {
                "@type": "Question",
                name: "¿Pueden crear aperitivos personalizados para mi evento?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, diseñamos menús personalizados según la temática, restricciones dietéticas y preferencias. Desde canapés tradicionales hasta creaciones innovadoras.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuántos aperitivos por persona recomiendan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recomendamos 6-8 piezas por persona como aperitivo, dependiendo del evento. Adaptamos según duración y tipo de celebración.",
                },
              },
              {
                "@type": "Question",
                name: "¿Ofrecen opciones vegetarianas, veganas, sin gluten y para alérgenos?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutamente, tenemos una amplia selección de aperitivos vegetarianos, veganos, sin gluten y para alérgenos. Indicamos al solicitar presupuesto.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuál es el horario del servicio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Servicio flexible: normalmente de 4 a 8 horas, pero nos adaptamos. Llegamos 2 horas antes para montaje y nos quedamos hasta desmontaje y limpieza.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo se calcula el precio del servicio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Depende del número de invitados, duración, selección de aperitivos, servicios adicionales, ubicación y época. Presupuestos personalizados en menos de 24 horas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué medidas de seguridad y licencias tienen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Certificados de manipulación de alimentos y cumplimiento de normativas sanitarias.",
                },
              },
            ],
          }),
        }}
      />

      <Header />

      <main id="main-content" className="min-h-screen">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Servicios", href: "/#services" },
            { label: "Barra de Aperitivos" },
          ]}
        />

        <AppetizerBarHero />
        <AppetizerBarServices />
        <AppetizerBarProcess />
        {/* <AppetizerBarGallery /> */}
        <AppetizerBarTestimonials />
        <AppetizerBarFAQ />
        <AppetizerBarCTA />
      </main>

      <Footer />
    </>
  );
}
