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
    "Cortador de Jamón para Bodas y Eventos en Barcelona. Show en Vivo Desde 350€",
  description:
    "Sorprende a tus invitados con un maestro cortador de jamón ibérico en vivo para bodas y eventos en Barcelona. Servicio premium desde 350€, 5 estrellas y presupuesto gratis en 24h. ¡Contrata ahora!",
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
    "cortador jamón ibérico España",
    "cortador de jamón boda Barcelona precio",
    "servicio cortador jamón eventos España",
    "maestro cortador jamón bodas Catalunya",
    "jamón ibérico para eventos corporativos",
    "cortador jamón en vivo bodas Barcelona",
  ],
  alternates: {
    canonical: "https://elpernilet.com/cortador-jamon",
  },
  openGraph: {
    title:
      "Cortador de Jamón para Bodas y Eventos en Barcelona. Show en Vivo Desde 350€",
    description:
      "Imagina un maestro cortador trayendo magia a tu evento con jamón ibérico premium. Asesoramiento personalizado, 5 estrellas de verdad. ¿Listo para el mejor evento? Presupuesto gratis ahora.",
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
    title:
      "Cortador de Jamón para Bodas y Eventos en Barcelona. Show en Vivo Desde 350€",
    description:
      "Imagina un maestro cortador trayendo magia a tu evento con jamón ibérico premium. Asesoramiento personalizado, 5 estrellas de verdad. ¿Listo para el mejor evento? Presupuesto gratis ahora.",
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
    name: "Cortador de Jamón para Bodas y Eventos en Barcelona. Show en Vivo Desde 350€",
    description:
      "Imagina un maestro cortador trayendo magia a tu evento con jamón ibérico premium. Asesoramiento personalizado, 5 estrellas de verdad. ¿Listo para el mejor evento? Presupuesto gratis ahora.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Qué incluye el servicio de cortador de jamón?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Incluye maestro cortador profesional, jamón ibérico premium (7-9kg según el paquete) o paleta ibérica, soporte jamonero, cuchillería profesional, presentación gourmet y montaje/desmontaje completo. Coordinación previa con el venue y catering.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto jamón necesito para mi evento?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recomendamos 80-100g por persona como aperitivo, y 120-150g si es parte del menú principal. Un jamón de 8kg sirve para 80-100 invitados. Te asesoramos según el tipo de evento y duración.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuánto tiempo antes debo reservar?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Reserva con al menos 4-6 semanas de antelación para bodas y eventos en temporada alta. Para eventos corporativos o celebraciones entre semana, 2-3 semanas suele ser suficiente.",
                },
              },
              {
                "@type": "Question",
                name: "¿Trabajan en toda España?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, ofrecemos servicio en toda España, con cobertura especial en Cataluña. Para distancias superiores a 50km, aplicamos suplemento de desplazamiento.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué tipo de jamón utilizan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Solo trabajamos con jamón ibérico y paletas ibéricas de máxima calidad, seleccionados de productores con stock limitado para garantizar la excelencia.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo personalizar el servicio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, adaptamos el servicio a tus necesidades: duración, número de invitados, espacios, coordinación con otros proveedores, acompañamientos especiales, etc. Solicita tu presupuesto personalizado.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué pasa si sobra jamón?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Incluimos envasado al vacío de los sobrantes para que puedas llevártelos y disfrutarlos después del evento.",
                },
              },
              {
                "@type": "Question",
                name: "¿Tienen seguro y certificaciones?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Todos nuestros cortadores están certificados profesionalmente y cumplimos con todas las normativas sanitarias y de manipulación de alimentos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Ofrecen degustación previa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, podemos organizar una degustación previa en nuestras instalaciones. Disponemos de muestras y certificados de calidad de nuestros jamones.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Cómo contratar un cortador de jamón para tu evento",
            description:
              "Guía paso a paso para contratar un servicio de cortador de jamón ibérico profesional en Barcelona y España.",
            image: "https://elpernilet.com/cortador-jamon-hero.webp",
            totalTime: "PT30M",
            supply: [
              {
                "@type": "HowToSupply",
                name: "Información del evento (fecha, número de invitados, tipo de celebración)",
              },
              {
                "@type": "HowToSupply",
                name: "Preferencias de jamón (ibérico, bellota, etc.)",
              },
            ],
            tool: [
              {
                "@type": "HowToTool",
                name: "Teléfono o formulario de contacto",
              },
            ],
            step: [
              {
                "@type": "HowToStep",
                name: "Paso 1: Contacta con nosotros",
                text: "Llama al +34654127391 o envía un mensaje por WhatsApp con los detalles básicos de tu evento.",
                image: "https://elpernilet.com/cortador-jamon-hero.webp",
                position: 1,
              },
              {
                "@type": "HowToStep",
                name: "Paso 2: Recibe asesoramiento personalizado",
                text: "Nuestro equipo te asesorará sobre cantidades de jamón, precios y opciones según tus invitados y presupuesto.",
                image: "https://elpernilet.com/cortador-jamon-hero.webp",
                position: 2,
              },
              {
                "@type": "HowToStep",
                name: "Paso 3: Elige tu paquete y confirma",
                text: "Selecciona el servicio que mejor se adapte (Esencial, Premium o VIP) y confirma fecha y detalles.",
                image: "https://elpernilet.com/cortador-jamon-hero.webp",
                position: 3,
              },
              {
                "@type": "HowToStep",
                name: "Paso 4: Disfruta del show en tu evento",
                text: "Nuestros maestros cortadores llegan puntuales, montan todo y ofrecen un espectáculo inolvidable.",
                image: "https://elpernilet.com/cortador-jamon-hero.webp",
                position: 4,
              },
            ],
          }),
        }}
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
