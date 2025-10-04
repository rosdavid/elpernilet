// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
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
    "elpernilet - Servicios de corte de jamón y personal de catering en España",
  description:
    "Servicios premium de catering en España: cortador de jamón ibérico en vivo, barra de bebidas y aperitivos gourmet, y camareros profesionales.",
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
    title: "elpernilet - Servicios premium de catering en España",
    description:
      "Cortador de jamón ibérico en vivo, barra de bebidas gourmet y camareros profesionales para eventos corporativos y privados.",
    url: "https://elpernilet.com",
    siteName: "elpernilet",
    images: [
      {
        url: "/elegant-spanish-event-catering-ham-carving.jpg",
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
    title: "elpernilet - Servicios premium de catering",
    description:
      "Cortador de jamón en vivo y servicios de catering para eventos",
    images: ["/elegant-spanish-event-catering-ham-carving.jpg"],
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
          content="Servicios premium de catering en España: cortador de jamón ibérico en vivo, barra de bebidas y aperitivos gourmet, y camareros profesionales."
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

        {/* Canonical URL */}
        <link rel="canonical" href="https://elpernilet.com/" />

        {/* Open Graph tags explícitos */}
        <meta
          property="og:title"
          content="elpernilet - Servicios premium de catering en España"
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
          content="https://elpernilet.com/elegant-spanish-event-catering-ham-carving.jpg"
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
          content="elpernilet - Servicios premium de catering"
        />
        <meta
          name="twitter:description"
          content="Cortador de jamón en vivo y servicios de catering para eventos"
        />
        <meta
          name="twitter:image"
          content="https://elpernilet.com/elegant-spanish-event-catering-ham-carving.jpg"
        />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/elegant-spanish-event-catering-ham-carving.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="/elpernilet-logo.svg"
          as="image"
          type="image/svg+xml"
        />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FoodEstablishment",
              name: "elpernilet",
              description:
                "Servicios premium de catering para eventos: cortador de jamón ibérico en vivo, barra de bebidas y aperitivos, y camareros profesionales.",
              url: "https://elpernilet.com",
              telephone: "+34-931-307-832",
              address: {
                "@type": "PostalAddress",
                addressCountry: "ES",
                addressLocality: "España",
              },
              servesCuisine: "Spanish",
              priceRange: "€€",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "50",
              },
              sameAs: [
                "https://www.instagram.com/elpernilet",
                "https://www.facebook.com/elpernilet",
              ],
              hasMenu: {
                "@type": "Menu",
                hasMenuSection: [
                  {
                    "@type": "MenuSection",
                    name: "Servicios de Catering",
                    hasMenuItem: [
                      {
                        "@type": "MenuItem",
                        name: "Cortador de Jamón en Vivo",
                        description:
                          "Maestro cortador profesional con jamón ibérico de bellota premium",
                      },
                      {
                        "@type": "MenuItem",
                        name: "Barra de Bebidas y Aperitivos",
                        description:
                          "Selección gourmet de bebidas premium y aperitivos artesanales",
                      },
                      {
                        "@type": "MenuItem",
                        name: "Servicio de Camareros",
                        description:
                          "Personal profesional y experimentado para tu evento",
                      },
                    ],
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} font-sans`}>
        {children}
        <Toaster
          position="top-right"
          expand={true}
          richColors={true}
          closeButton={true}
        />
      </body>
    </html>
  );
}
