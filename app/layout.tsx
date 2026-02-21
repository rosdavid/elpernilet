// app/layout.tsx
import type React from "react";
import type { Metadata } from "next";
import { CookieBanner } from "@/components/cookie-banner";
import { SkipToContent } from "@/components/skip-to-content";
import { ScrollToContactTracker } from "@/components/scroll-to-contact-tracker";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { StickyCta } from "@/components/sticky-cta";
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
  title: "Cortador de Jamón para Bodas y Eventos en Barcelona. Desde 350€",
  description:
    "¿Quieres sorprender a tus invitados con un show de jamón ibérico en vivo? Barra de bebidas premium y camareros expertos en Barcelona. Amado por cientos, presupuesto gratis en 24h. Toda España.",
  keywords: [
    "cortador de jamón España",
    "cortador de jamón",
    "jamón ibérico",
    "cortador de jamón para bodas",
    "eventos corporativos",
    "cortador de jamón profesional",
    "barra de bebidas",
    "camareros eventos",
    "cortador de jamón Barcelona",
    "cortador de jamón Madrid",
    "cortador de jamón lujo España",
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
    title: "Cortador de Jamón para Bodas y Eventos en Barcelona. Desde 350€",
    description:
      "¿Quieres sorprender a tus invitados con un show de jamón ibérico en vivo? Barra de bebidas premium y camareros expertos en Barcelona. Amado por cientos, presupuesto gratis en 24h. Toda España.",
    url: "https://elpernilet.com",
    siteName: "elpernilet",
    images: [
      {
        url: "/elpernilet-event-image.webp",
        width: 1200,
        height: 630,
        alt: "Cortador de jamón en vivo, barra de bebidas y aperitivos y servicio de camareros para bodas y eventos.",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cortador de Jamón para Bodas y Eventos en Barcelona. Desde 350€",
    description:
      "¿Quieres sorprender a tus invitados con un show de jamón ibérico en vivo? Barra de bebidas premium y camareros expertos en Barcelona. Amado por cientos, presupuesto gratis en 24h. Toda España.",
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
              "@type": ["LocalBusiness", "Caterer"],
              "@id": "https://www.elpernilet.com/#business",
              name: "elpernilet",
              alternateName:
                "Cortador de Jamón para Bodas y Eventos en Barcelona. Desde 350€",
              description:
                "¿Quieres sorprender a tus invitados con un show de jamón ibérico en vivo? Barra de bebidas premium y camareros expertos en Barcelona. Amado por cientos, presupuesto gratis en 24h. Toda España.",
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
              ],
              serviceArea: {
                "@type": "Country",
                name: "España",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Cortador de Jamón Premium",
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
                    name: "Reservar Servicio de Cortador de Jamón",
                  },
                },
              ],
              knowsAbout: [
                "Cortador de jamón ibérico",
                "Jamón de bellota",
                "Cortador de jamón para bodas",
                "Eventos corporativos",
                "Barra de bebidas premium",
                "Servicio de camareros",
                "Gastronomía española",
                "Eventos en Cataluña",
                "Cortador de jamón Barcelona",
                "Maestro jamonero",
              ],
              slogan:
                "Experiencias gastronómicas excepcionales para eventos inolvidables",
            }),
          }}
        />
        {/* JSON-LD Schema - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Con cuánta antelación debo reservar vuestros servicios?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Recomendamos reservar con al menos 4-6 semanas de antelación para eventos grandes. Sin embargo, también podemos acomodar solicitudes de última hora dependiendo de nuestra disponibilidad. Contáctanos lo antes posible para asegurar tu fecha.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué incluye el servicio de cortador de jamón?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nuestro servicio incluye un maestro cortador profesional, jamón ibérico de primera calidad, soporte jamonero, cuchillos profesionales, y todo el material necesario. El cortador permanecerá durante el tiempo acordado cortando jamón fresco para tus invitados.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Ofrecéis servicio en toda España?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, ofrecemos nuestros servicios en toda España, especialmente en Barcelona, Madrid, Valencia y Andalucía. Consulta disponibilidad para tu ciudad.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puedo contratar solo el cortador sin el jamón?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, puedes contratar solo el servicio de cortador si ya dispones del jamón. Nos adaptamos a tus necesidades.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué incluye el servicio de barra de bebidas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nuestro servicio incluye bartenders profesionales certificados o camareros de barra, barra completamente equipada, cristalería, hielo, decoración temática, selección de bebidas premium (alcohólicas y sin alcohol), cócteles artesanales, montaje y desmontaje completo, y limpieza final.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tipo de eventos cubrís?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Realizamos bodas, eventos corporativos, fiestas privadas, aniversarios, comuniones y cualquier tipo de celebración donde se requiera un servicio gastronómico premium.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto dura el servicio de cortador de jamón?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La duración depende del número de invitados y el tipo de evento, pero normalmente el servicio dura entre 2 y 4 horas. Nos adaptamos a tus necesidades.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué tipo de jamón ofrecéis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ofrecemos jamón ibérico de bellota, jamón ibérico de cebo y paleta ibérica, siempre de máxima calidad y seleccionados para cada evento.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿El cortador va uniformado?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, nuestros cortadores acuden uniformados y con imagen profesional acorde al evento.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Puedo personalizar la barra de bebidas?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Por supuesto, personalizamos la barra según la temática del evento, preferencias de bebidas y decoración. Consúltanos para opciones especiales.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Ofrecéis camareros para otros servicios?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, disponemos de camareros profesionales para servicio de mesas, barra, cócteles y atención personalizada en eventos.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo solicito presupuesto?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puedes solicitar presupuesto a través del formulario de contacto, WhatsApp o llamando directamente. Respondemos en menos de 24h.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué métodos de pago aceptáis?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Aceptamos transferencia bancaria y tarjeta de crédito. Consulta condiciones para pagos fraccionados.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿El servicio incluye montaje y desmontaje?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, todos nuestros servicios incluyen montaje, desmontaje y limpieza final del espacio utilizado.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué pasa si hay cambios de última hora?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nos adaptamos a cambios siempre que sea posible. Avísanos lo antes posible para ajustar el servicio a tus necesidades.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} font-sans`}>
        <SkipToContent />
        <ScrollToContactTracker />
        {children}
        <CookieBanner />
        <StickyCta />
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
