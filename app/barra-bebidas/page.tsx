import { Metadata } from "next";
import { getBreadcrumbSchema } from "@/lib/breadcrumb-schema";
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
  title:
    "Barra de Bebidas para Bodas y Eventos en Barcelona. Desde 10€ por Persona",
  description:
    "Sorprende con cócteles premium y barra de bebidas para bodas y eventos en Barcelona. Desde 10€ por persona, bartenders expertos y presupuesto gratis en 24h. ¡Contrata ahora!",
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
    "cocktail España",
    "mixología eventos Barcelona",
    "barra gin tonic eventos",
    "servicio bebidas premium",
    "barra bebidas boda Barcelona precio",
    "cócteles premium bodas Catalunya",
    "bartender para eventos corporativos España",
    "barra móvil bodas Barcelona",
    "servicio mixología eventos",
  ],
  alternates: {
    canonical: "https://elpernilet.com/barra-bebidas",
  },
  openGraph: {
    title:
      "Barra de Bebidas para Bodas y Eventos en Barcelona. Desde 10€ por Persona",
    description:
      "¿Sueñas con una barra de bebidas que anime cualquier fiesta? Bartenders expertos, cócteles únicos y todo incluido. 5/5 de clientes felices. Pide presupuesto gratis hoy.",
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
    title:
      "Barra de Bebidas para Bodas y Eventos en Barcelona. Desde 10€ por Persona",
    description:
      "¿Sueñas con una barra de bebidas que anime cualquier fiesta? Bartenders expertos, cócteles únicos y todo incluido. 5/5 de clientes felices. Pide presupuesto gratis hoy.",
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
    name: "Barra de Bebidas para Bodas y Eventos en Barcelona. Desde 10€ por Persona",
    description:
      "¿Sueñas con una barra de bebidas que anime cualquier fiesta? Bartenders expertos, cócteles únicos y todo incluido. 5/5 de clientes felices. Pide presupuesto gratis hoy.",
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
    serviceType: "Catering Services",
    category: "Food and Beverage Service",
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
              { name: "Barra de bebidas", url: "/barra-bebidas" },
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
                name: "¿Qué incluye el servicio de barra de bebidas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Incluye bartenders profesionales certificados, barra equipada, cristalería, hielo, decoración temática, selección de bebidas premium (alcohólicas y sin alcohol), cócteles artesanales, montaje y desmontaje completo, y limpieza final.",
                },
              },
              {
                "@type": "Question",
                name: "¿Pueden crear cócteles personalizados para mi evento?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, diseñamos cartas de bebidas personalizadas, cócteles únicos y adaptados a la temática, colores corporativos o preferencias especiales. Nombres personalizados y creaciones exclusivas para tu evento.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuántos bartenders incluye el servicio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Incluimos 1 bartender profesional hasta 80 personas, 2 bartenders para 80-150 personas, y más para eventos grandes. Todos certificados y con experiencia en eventos premium.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué tipos de bebidas están incluidas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Cócteles clásicos, gin tonics premium, mojitos, cosmopolitans, bebidas sin alcohol, refrescos artesanales, aguas saborizadas y más. Adaptamos la carta según tus preferencias y presupuesto.",
                },
              },
              {
                "@type": "Question",
                name: "¿Necesito aportar algo para el servicio de barra?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "No necesitas aportar nada. Nos encargamos de todo: barra, cristalería, hielo, decoración, ingredientes frescos, bebidas y equipamiento. Llegamos completamente autónomos para tu comodidad.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuál es el horario del servicio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Servicio flexible: normalmente de 4 a 8 horas, pero nos adaptamos a tus necesidades. Llegamos 2 horas antes para el montaje y nos quedamos hasta completar el desmontaje y limpieza. Disponibles 24/7 para eventos especiales.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo se calcula el precio del servicio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio depende del número de invitados, duración, selección de bebidas (estándar/premium), servicios adicionales, ubicación y época del año. Presupuestos personalizados en menos de 24 horas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué medidas de seguridad y licencias tienen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Contamos con certificados de manipulación de alimentos y cumplimos todas las normativas sanitarias. Bartenders y camareros formados en servicio responsable de alcohol y gestión de eventos seguros.",
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
