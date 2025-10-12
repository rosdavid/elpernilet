"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "¿Qué incluye el servicio de barra de aperitivos?",
    answer:
      "Nuestro servicio incluye barra completamente equipada, vajilla, decoración temática, selección de aperitivos gourmet (calientes y fríos), canapés artesanales, montaje y desmontaje completo, y limpieza final. Todo lo necesario para un servicio impecable.",
  },
  {
    question: "¿Pueden crear aperitivos personalizados para mi evento?",
    answer:
      "¡Por supuesto! Especializamos en crear menús de aperitivos personalizados que se adapten a tu temática, restricciones dietéticas, o preferencias especiales. Podemos diseñar canapés únicos con nombres personalizados para tu evento, celebración familiar, o fiesta especial.",
  },
  {
    question: "¿Qué tipos de aperitivos están incluidos?",
    answer:
      "Incluimos una amplia selección: canapés clásicos, finger foods gourmet, aperitivos calientes, opciones vegetarianas, veganas y sin gluten, tapas tradicionales, y más. Adaptamos el menú según tus preferencias y presupuesto. También ofrecemos opciones premium con ingredientes de alta gama.",
  },
  {
    question: "¿Necesito aportar algo para el servicio de barra?",
    answer:
      "No necesitas aportar nada. Nos encargamos de todo: barra, vajilla, decoración, ingredientes frescos, aperitivos, y todo el equipamiento necesario. Llegamos completamente autónomos para tu comodidad. Si fuera necesario, podemos coordinar con el lugar del evento.",
  },
  {
    question: "¿Cuál es el horario del servicio?",
    answer:
      "Nuestro servicio es completamente flexible. Típicamente ofrecemos servicios de 4-8 horas, pero podemos adaptarnos a tus necesidades específicas. Llegamos 2 horas antes para el montaje y nos quedamos hasta completar el desmontaje y limpieza.",
  },
  {
    question: "¿Cómo se calcula el precio del servicio?",
    answer:
      "El precio se calcula según: número de invitados, duración del servicio, selección de aperitivos (estándar/premium), servicios adicionales (show culinario, aperitivos personalizados), ubicación del evento, y época del año. Ofrecemos presupuestos personalizados sin compromiso en menos de 24 horas.",
  },
  {
    question: "¿Qué medidas de seguridad y licencias tienen?",
    answer:
      "Contamos con certificados de manipulación de alimentos y cumplimiento de normativas sanitarias.",
  },
];

export function AppetizerBarFAQ() {
  const navigateToContactForm = () => {
    // Si estamos en la página principal, hacer scroll directo
    if (window.location.pathname === "/") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar a la principal y luego hacer scroll
      window.location.href = "/#contact";
    }
  };

  // JSON-LD para FAQs
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <section
        id="faq"
        className="py-24 bg-gradient-to-b from-accent/10 to-background"
      >
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-green-100 text-green-800 border-green-200"
            >
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Resolvemos tus Dudas
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Todo lo que necesitas saber sobre nuestro servicio de barra de
              aperitivos. Si tienes más preguntas, no dudes en contactarnos
            </p>
          </div>

          <Card className="border-2 border-green-50">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-green-50"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-green-50/50 [&[data-state=open]]:bg-green-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-green-700 flex-shrink-0" />
                        <span className="font-medium">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="pl-8 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-100">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                ¿No encuentras la respuesta?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestro equipo está aquí para ayudarte. Contáctanos y
                resolveremos todas tus dudas sobre el servicio de barra de
                aperitivos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={navigateToContactForm}
                  className="bg-green-700 hover:bg-green-800 cursor-pointer"
                >
                  Contactar Ahora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
