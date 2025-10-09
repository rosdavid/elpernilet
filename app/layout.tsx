// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { CookieBanner } from "@/components/cookie-banner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { GoogleAnalytics } from "@/components/google-analytics";
import { Roboto } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

// Optimizar fuentes - solo peso necesario
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"], // Solo peso necesario
  variable: "--font-roboto",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title:
    "Servicio de cortador de jamón para bodas y eventos en Barcelona | elpernilet",
  description:
    "Maestros cortadores de jamón, barra de bebidas y camareros para bodas y eventos. Servicio en Barcelona y resto de España. Pide presupuesto en 24h.",
  keywords: [
    "catering España",
    "cortador de jamón",
    "jamón ibérico",
    "catering bodas",
    "eventos corporativos",
    "catering profesional",
    "barra de bebidas",
    "camareros eventos",
    "catering Barcelona",
    "catering Madrid",
    "catering lujo España",
    "servicios eventos",
  ],
  authors: [{ name: "elpernilet" }],
  creator: "elpernilet",
  publisher: "elpernilet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://elpernilet.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Servicio de cortador de jamón para bodas y eventos en Barcelona | elpernilet",
    description:
      "Cortador de jamón ibérico en vivo, barra de bebidas gourmet y camareros profesionales para eventos corporativos y privados.",
    url: "https://elpernilet.com",
    siteName: "elpernilet",
    images: [
      {
        url: "/elpernilet-event-image.webp",
        width: 1200,
        height: 630,
        alt: "Servicios de catering elpernilet",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Servicio de cortador de jamón para bodas y eventos en Barcelona | elpernilet",
    description:
      "Cortador de jamón en vivo y servicios de catering para eventos",
    images: ["/elpernilet-event-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Meta tags explícitos para Lighthouse */}
        <meta
          name="description"
          content="Maestros cortadores de jamón, barra de bebidas y camareros para bodas y eventos. Servicio en Barcelona y resto de España. Pide presupuesto en 24h."
        />
        <meta
          name="keywords"
          content="catering España, cortador de jamón, jamón ibérico, catering bodas, eventos corporativos, catering profesional, barra de bebidas, camareros eventos"
        />
        <meta name="author" content="elpernilet" />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"
        />

        {/* Canonical URL será definido por cada página individualmente */}

        {/* Open Graph tags explícitos */}
        <meta
          property="og:title"
          content="Servicio de cortador de jamón para bodas y eventos en Barcelona | elpernilet"
        />
        <meta
          property="og:description"
          content="Cortador de jamón ibérico en vivo, barra de bebidas gourmet y camareros profesionales para eventos corporativos y privados."
        />
        <meta property="og:url" content="https://elpernilet.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_ES" />
        <meta property="og:site_name" content="elpernilet" />
        <meta
          property="og:image"
          content="https://elpernilet.com/elpernilet-event-image.webp"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Servicios de catering elpernilet"
        />

        {/* Twitter Card tags explícitos */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Servicio de cortador de jamón para bodas y eventos en Barcelona | elpernilet"
        />
        <meta
          name="twitter:description"
          content="Cortador de jamón en vivo y servicios de catering para eventos"
        />
        <meta
          name="twitter:image"
          content="https://elpernilet.com/elpernilet-event-image.webp"
        />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/elpernilet-logo.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* JSON-LD Schema - Caterer */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Caterer",
              "@id": "https://elpernilet.com/#Caterer",
              name: "elpernilet",
              alternateName: "elpernilet - Servicios de Catering Premium",
              description:
                "Servicios premium para eventos: cortador de jamón ibérico en vivo, barra de bebidas y aperitivos, y camareros profesionales en toda España.",
              url: "https://elpernilet.com",
              telephone: "+34654127391",
              email: "hola@elpernilet.com",
              foundingDate: "2015",
              currenciesAccepted: "EUR",
              paymentAccepted: "Transferencia bancaria, Tarjeta de crédito",
              priceRange: "€€-€€€",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Carrer Nou, 41",
                addressLocality: "Navarcles",
                postalCode: "08270",
                addressRegion: "Barcelona",
                addressCountry: "ES",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 41.7891,
                longitude: 1.9034,
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
                {
                  "@type": "AdministrativeArea",
                  name: "Andalucía",
                },
              ],
              serviceArea: {
                "@type": "Country",
                name: "España",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Catering Premium",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Cortador de Jamón Ibérico en Vivo",
                      description:
                        "Maestros cortadores profesionales con jamón ibérico premium para bodas y eventos",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Barra de Bebidas y Aperitivos",
                      description:
                        "Selección gourmet de bebidas premium y aperitivos artesanales",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Servicio de Camareros Profesionales",
                      description:
                        "Personal profesional y experimentado para eventos",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "María González",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  reviewBody:
                    "El cortador de jamón fue el punto culminante de nuestra boda. Los invitados no paraban de hablar del espectáculo y la calidad del jamón ibérico era excepcional.",
                  itemReviewed: {
                    "@type": "Service",
                    name: "Cortador de Jamón Ibérico en Vivo",
                  },
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Carlos Ruiz",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                  },
                  reviewBody:
                    "Profesionalidad absoluta. Llegaron puntuales, montaron todo perfectamente y el show fue impresionante. Nuestros clientes internacionales quedaron fascinados.",
                  itemReviewed: {
                    "@type": "Service",
                    name: "Cortador de Jamón Ibérico en Vivo",
                  },
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                },
              ],
              sameAs: [
                "https://www.instagram.com/elpernilet",
                "https://www.facebook.com/elpernilet",
                "https://www.bodas.net/food-truck-y-mesas-dulces/el-pernilet-cortador-de-jamon--e115395",
              ],
              logo: {
                "@type": "ImageObject",
                url: "https://elpernilet.com/elpernilet-logo.svg",
                width: 240,
                height: 64,
              },
              image: [
                "https://elpernilet.com/elpernilet-event-image.webp",
                "https://elpernilet.com/evento-boda-1.webp",
                "https://elpernilet.com/evento-corporativo-1.webp",
              ],

              potentialAction: [
                {
                  "@type": "ReserveAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://elpernilet.com/#contact",
                  },
                  object: {
                    "@type": "Service",
                    name: "Reservar Servicio de Catering",
                  },
                },
              ],
              knowsAbout: [
                "Cortador de jamón ibérico",
                "Jamón de bellota",
                "Catering para bodas",
                "Eventos corporativos",
                "Barra de bebidas premium",
                "Servicio de camareros",
                "Gastronomía española",
                "Eventos en Cataluña",
                "Catering Barcelona",
                "Maestro jamonero",
              ],
              slogan:
                "Experiencias gastronómicas excepcionales para eventos inolvidables",
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} font-sans`}>
        {children}
        <CookieBanner />
        <WhatsAppFloat />
        <Toaster
          position="top-right"
          expand={true}
          richColors={true}
          closeButton={true}
        />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics GA_MEASUREMENT_ID="G-D99RVH7B6J" />
      </body>
    </html>
  );
}
