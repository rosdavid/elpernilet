import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WaitersHero } from "@/components/camareros/hero";
import { WaitersServices } from "@/components/camareros/services";
import { WaitersProcess } from "@/components/camareros/process";
import { WaitersGallery } from "@/components/camareros/gallery";
import { WaitersTestimonials } from "@/components/camareros/testimonials";
import { WaitersFAQ } from "@/components/camareros/faq";
import { WaitersCTA } from "@/components/camareros/cta";

export const metadata: Metadata = {
  title: "Servicio de Camareros Profesionales para Eventos | elpernilet",
  description:
    "Camareros profesionales certificados para bodas, eventos corporativos y celebraciones. Servicio completo de atención al cliente y catering en Barcelona y toda España.",
  keywords: [
    "camareros profesionales Barcelona",
    "servicio camareros eventos España",
    "personal catering bodas Catalunya",
    "camareros certificados eventos corporativos",
    "servicio atención cliente bodas",
    "personal eventos profesionales",
    "catering camareros España",
    "servicio camareros premium",
    "personal eventos Barcelona",
    "camareros bodas profesionales",
  ],
  alternates: {
    canonical: "https://elpernilet.com/camareros",
  },
  openGraph: {
    title: "Servicio de Camareros Profesionales para Eventos | elpernilet",
    description:
      "Camareros certificados y atención profesional para eventos únicos.",
    url: "https://elpernilet.com/camareros",
    siteName: "elpernilet",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://elpernilet.com/elpernilet-event-image.webp",
        width: 1200,
        height: 630,
        alt: "Camareros profesionales en evento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicio de Camareros Profesionales para Eventos",
    description: "Camareros certificados para eventos únicos.",
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

export default function Camareros() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Servicio de Camareros Profesionales",
    description:
      "Servicio completo de camareros profesionales certificados para bodas, eventos corporativos y celebraciones privadas",
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
    category: "Waiter Service",
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
                name: "¿Qué incluye el servicio de camareros?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Incluye camareros profesionales certificados, uniforme completo, vajilla premium, servicio de mesa, atención al cliente, montaje y desmontaje completo, y limpieza final.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuántos camareros necesito para mi evento?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Recomendamos 1 camarero por cada 15-20 invitados para servicio estándar, o 1 por cada 10-12 para servicio premium. Adaptamos según el tipo de evento y menú.",
                },
              },
              {
                "@type": "Question",
                name: "¿Están certificados los camareros?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, todos nuestros camareros están certificados en manipulación de alimentos, atención al cliente y protocolos de servicio profesional.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué tipo de servicio ofrecen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ofrecemos servicio a la rusa, buffet asistido, cóctel, mesas redondas, y servicio personalizado según las necesidades del evento.",
                },
              },
              {
                "@type": "Question",
                name: "¿Incluyen uniforme y vajilla?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, incluimos uniforme profesional completo, vajilla premium, cristalería, mantelería y todo el equipamiento necesario para un servicio impecable.",
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
                  text: "Depende del número de camareros, duración, tipo de servicio, ubicación y época. Presupuestos personalizados en menos de 24 horas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué medidas de seguridad tienen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Certificados de manipulación de alimentos, formación en higiene y seguridad alimentaria, y cumplimiento de normativas sanitarias.",
                },
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
            { label: "Camareros" },
          ]}
        />

        <WaitersHero />
        <WaitersServices />
        <WaitersProcess />
        <WaitersGallery />
        <WaitersTestimonials />
        <WaitersFAQ />
        <WaitersCTA />
      </main>

      <Footer />
    </>
  );
}
