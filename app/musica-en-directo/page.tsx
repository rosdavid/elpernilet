import { Metadata } from "next";
import { getBreadcrumbSchema } from "@/lib/breadcrumb-schema";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { LiveMusicHero } from "@/components/live-music/hero";
import { LiveMusicServices } from "@/components/live-music/services";
import { LiveMusicProcess } from "@/components/live-music/process";
import { LiveMusicTestimonials } from "@/components/live-music/testimonials";
import { LiveMusicFAQ } from "@/components/live-music/faq";
import { LiveMusicCTA } from "@/components/live-music/cta";

export const metadata: Metadata = {
  title:
    "Música en Directo para Bodas y Eventos en Barcelona. Jazz, Acústico, DJ y Más",
  description:
    "Música en directo para bodas y eventos en Barcelona. Jazz, acústico, orquestas, DJ y grupos profesionales. Presupuesto gratis en 24h. ¡Da vida a tu evento!",
  keywords: [
    "música en directo Barcelona",
    "músicos bodas Catalunya",
    "jazz eventos España",
    "DJ bodas Barcelona",
    "trío jazz eventos",
    "música en vivo bodas",
    "ceremonia nupcial música",
    "grupos musicales eventos España",
    "orquesta bodas Barcelona",
    "música acústica eventos",
    "animación musical bodas",
    "músicos profesionales España",
    "música en directo boda Barcelona precio",
    "DJ eventos corporativos Barcelona",
    "trío jazz bodas Catalunya",
    "música ceremonia boda España",
    "grupos música en vivo eventos",
  ],
  alternates: {
    canonical: "https://elpernilet.com/musica-en-directo",
  },
  openGraph: {
    title:
      "Música en Directo para Bodas y Eventos en Barcelona. Jazz, Acústico, DJ y Más",
    description:
      "Jazz, bossa nova, flamenco, acústico, DJ... Músicos profesionales para bodas y eventos. Da vida a tu celebración con música en directo. Presupuesto gratis en 24h.",
    url: "https://elpernilet.com/musica-en-directo",
    siteName: "elpernilet",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://elpernilet.com/elpernilet-event-image.webp",
        width: 1200,
        height: 630,
        alt: "Música en directo en evento de boda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Música en Directo para Bodas y Eventos en Barcelona. Jazz, Acústico, DJ y Más",
    description:
      "Jazz, bossa nova, flamenco, acústico, DJ... Músicos profesionales para bodas y eventos. Da vida a tu celebración. Presupuesto gratis en 24h.",
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

export default function MusicaEnDirecto() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Música en Directo para Bodas y Eventos en Barcelona. Jazz, Acústico, DJ y Más",
    description:
      "Jazz, bossa nova, flamenco, acústico, DJ... Músicos profesionales para bodas y eventos. Da vida a tu celebración con música en directo. Presupuesto gratis en 24h.",
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
    serviceType: "Entertainment Services",
    category: "Live Music",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    additionalType: [
      "https://schema.org/EntertainmentBusiness",
      "https://schema.org/PerformingGroup",
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
              { name: "Música en directo", url: "/musica-en-directo" },
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
                name: "¿Qué tipos de música en directo ofrecen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Ofrecemos jazz, bossa nova, flamenco, música clásica, acústico, pop, rock suave, DJs y más. Puedes combinar formaciones: trío de jazz para el cóctel y DJ para la fiesta.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué formaciones están disponibles?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Desde solistas hasta dúos, tríos, cuartetos u orquestas completas. La elección depende del tamaño del evento, presupuesto y momento.",
                },
              },
              {
                "@type": "Question",
                name: "¿Incluyen el equipo de sonido?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, normalmente incluimos amplificación básica adaptada al tamaño del espacio. Para eventos grandes o exteriores podemos ampliar el equipo.",
                },
              },
              {
                "@type": "Question",
                name: "¿Puedo solicitar canciones concretas?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí. Puedes indicar canciones imprescindibles y el repertorio general deseado. Si necesitan ensayos para temas especiales, lo coordinamos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cómo se calcula el precio?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "El precio depende de la formación, duración, equipo de sonido, ubicación y época del año. Presupuestos personalizados en menos de 24 horas.",
                },
              },
              {
                "@type": "Question",
                name: "¿Trabajan en toda España?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, disponemos de una red de músicos en toda España con especial cobertura en Cataluña, Madrid, Valencia y costa mediterránea.",
                },
              },
              {
                "@type": "Question",
                name: "¿Ofrecen DJ además de música en vivo?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Sí, ofrecemos DJs profesionales. Muchos clientes combinan música en vivo para ceremonia, cóctel y cena con DJ para el baile.",
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
            { label: "Música en Directo" },
          ]}
        />

        <LiveMusicHero />
        <LiveMusicServices />
        <LiveMusicProcess />
        <LiveMusicTestimonials />
        <LiveMusicFAQ />
        <LiveMusicCTA />
      </main>

      <Footer />
    </>
  );
}
