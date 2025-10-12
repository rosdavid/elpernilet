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
    "Nuestra Historia | elpernilet - +15 Años Creando Momentos Inolvidables",
  description:
    "Descubre la historia de elpernilet: desde nuestros humildes comienzos en 2009 hasta convertirnos en un referente en el corte de jamón y servicios para eventos en España. Una trayectoria de pasión, excelencia y compromiso.",
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
    title: "Nuestra Historia | elpernilet - +15 Años de Excelencia",
    description:
      "Conoce nuestra historia desde 2009: cómo comenzamos, nuestros hitos más importantes y la evolución que nos ha convertido en referentes del sector.",
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
    title: "Nuestra Historia | elpernilet - +15 Años de Excelencia",
    description: "Descubre nuestra trayectoria desde 2009 hasta hoy.",
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

      <main className="min-h-screen">
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
