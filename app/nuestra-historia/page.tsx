import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { OurStory } from "@/components/nuestra-historia/story";
import { HistoricalTestimonials } from "@/components/nuestra-historia/testimonials";
// import { CertificationsAndAchievements } from "@/components/nuestra-historia/certifications";
import { CommunityImpact } from "@/components/nuestra-historia/community";
// import { SuccessStories } from "@/components/nuestra-historia/success-stories";
import { AboutCTA } from "@/components/sobre-nosotros/cta";

export const metadata: Metadata = {
  title:
    "Nuestra Historia. De Sueño a +500 Eventos con Cortador de Jamón en Barcelona",
  description:
    "Desde un pequeño sueño en Barcelona hasta líderes en jamón ibérico y catering premium. +15 años creando momentos mágicos. ¿Quieres conocer nuestra aventura? Entra.",
  keywords: [
    "historia elpernilet",
    "trayectoria catering Barcelona",
    "evolución empresa eventos España",
    "orígenes catering Catalunya",
    "crecimiento empresa catering",
    "historia éxito catering",
    "evolución servicios eventos",
    "trayectoria profesional catering",
    "historia empresa familiar catering",
    "crecimiento negocio eventos Barcelona",
  ],
  alternates: {
    canonical: "https://elpernilet.com/nuestra-historia",
  },
  openGraph: {
    title:
      "Nuestra Historia. De Sueño a +500 Eventos con Cortador de Jamón en Barcelona",
    description:
      "Desde un pequeño sueño en Barcelona hasta líderes en jamón ibérico y catering premium. +15 años creando momentos mágicos. ¿Quieres conocer nuestra aventura? Entra.",
    url: "https://elpernilet.com/nuestra-historia",
    siteName: "elpernilet",
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: "https://elpernilet.com/elpernilet-event-image.webp",
        width: 1200,
        height: 630,
        alt: "Historia y evolución de elpernilet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Nuestra Historia. De Sueño a +500 Eventos con Cortador de Jamón en Barcelona",
    description:
      "Desde un pequeño sueño en Barcelona hasta líderes en jamón ibérico y catering premium. +15 años creando momentos mágicos. ¿Quieres conocer nuestra aventura? Entra.",
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

export default function NuestraHistoria() {
  return (
    <>
      <Header />

      <main id="main-content" className="min-h-screen">
        <Breadcrumbs
          items={[
            { label: "Inicio", href: "/" },
            { label: "Nuestra Historia" },
          ]}
        />

        <OurStory />
        <HistoricalTestimonials />
        {/* <CertificationsAndAchievements /> */}
        {/* <SuccessStories /> */}
        <CommunityImpact />
        <AboutCTA />
      </main>

      <Footer />
    </>
  );
}
