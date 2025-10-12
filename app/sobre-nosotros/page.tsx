import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { AboutHero } from "@/components/sobre-nosotros/hero";
import { OurValues } from "@/components/sobre-nosotros/values";
// import { OurTeam } from "@/components/sobre-nosotros/team";
import { OurStats } from "@/components/sobre-nosotros/stats";
import { WhyChooseUs } from "@/components/sobre-nosotros/why-choose-us";
import { AboutCTA } from "@/components/sobre-nosotros/cta";

export const metadata: Metadata = {
  title:
    "Sobre Nosotros | elpernilet - +15 Años de Excelencia en Catering y Eventos",
  description:
    "Conoce la historia de elpernilet: más de 15 años creando experiencias inolvidables en bodas, eventos corporativos y celebraciones. Equipo experto, pasión por la excelencia y compromiso con la calidad.",
  keywords: [
    "sobre elpernilet",
    "historia catering Barcelona",
    "equipo eventos profesionales España",
    "experiencia catering bodas",
    "empresa catering Catalunya",
    "servicios eventos Barcelona",
    "catering premium España",
    "historia empresa catering",
    "equipo profesional eventos",
    "experiencia 15 años catering",
  ],
  alternates: {
    canonical: "https://elpernilet.com/sobre-nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros | elpernilet - +15 Años de Excelencia en Catering",
    description:
      "Descubre nuestra historia, valores y el equipo que hace posible experiencias inolvidables en tus eventos más importantes.",
    url: "https://elpernilet.com/sobre-nosotros",
    siteName: "elpernilet",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://elpernilet.com/elpernilet-event-image.webp",
        width: 1200,
        height: 630,
        alt: "Equipo de elpernilet trabajando en un evento",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sobre Nosotros | elpernilet - +15 Años de Excelencia",
    description:
      "Conoce el equipo y la historia detrás de experiencias inolvidables.",
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

export default function SobreNosotros() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://elpernilet.com/#organization",
    name: "elpernilet",
    alternateName: "elpernilet Catering",
    url: "https://elpernilet.com",
    logo: "https://elpernilet.com/elpernilet-logo.svg",
    description:
      "Empresa de catering y servicios para eventos con más de 15 años de experiencia especializada en bodas, eventos corporativos y celebraciones privadas en Barcelona y toda España.",
    foundingDate: "2009",
    founder: {
      "@type": "Person",
      name: "Equipo Fundador elpernilet",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Nou, 41",
      addressLocality: "Navarcles",
      postalCode: "08270",
      addressRegion: "Barcelona",
      addressCountry: "ES",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+34654127391",
      contactType: "customer service",
      availableLanguage: "Spanish",
    },
    sameAs: ["https://www.instagram.com/elpernilet"],
    areaServed: {
      "@type": "Country",
      name: "España",
    },
    serviceType: [
      "Catering Services",
      "Event Planning",
      "Wedding Services",
      "Corporate Event Services",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "47",
      bestRating: "5",
      worstRating: "1",
    },
    numberOfEmployees: "25",
    knowsAbout: [
      "Catering",
      "Event Management",
      "Wedding Planning",
      "Corporate Events",
      "Food Service",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
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
                name: "¿Cuántos años de experiencia tienen?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Más de 15 años creando experiencias inolvidables en bodas, eventos corporativos y celebraciones privadas en Barcelona y toda España.",
                },
              },
              {
                "@type": "Question",
                name: "¿Cuál es su especialidad?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Somos especialistas en catering integral para eventos, incluyendo corte de jamón en vivo, barras de bebidas y aperitivos, servicio de camareros profesionales y organización completa de eventos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Dónde operan?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Operamos en toda España con base en Barcelona, ofreciendo nuestros servicios en Cataluña, Madrid, Valencia, Andalucía y cualquier punto de la península.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué les diferencia de la competencia?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nuestra pasión por la excelencia, equipo altamente cualificado, atención personalizada, productos de primera calidad y compromiso con superar las expectativas de cada cliente.",
                },
              },
            ],
          }),
        }}
      />

      <Header />

      <main className="min-h-screen">
        <Breadcrumbs
          items={[{ label: "Inicio", href: "/" }, { label: "Sobre Nosotros" }]}
        />

        <AboutHero />
        <OurValues />
        <OurStats />
        {/* <OurTeam /> */}
        <WhyChooseUs />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}
