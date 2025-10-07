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
    question: "¿Qué incluye el servicio de cortador de jamón?",
    answer:
      "Nuestro servicio incluye el maestro cortador profesional, jamón ibérico de calidad premium (7-9kg según el paquete) o paleta ibérica, soporte jamonero, cuchillería profesional, presentación profesional y montaje y desmontaje completo. También ofrecemos coordinación previa con el venue y catering.",
  },
  {
    question: "¿Cuánto jamón necesito para mi evento?",
    answer:
      "Recomendamos aproximadamente 80-100g por persona como aperitivo, y 120-150g si es parte del menú principal. Un jamón de 8kg sirve para 80-100 invitados como aperitivo aproximadamente. Nuestro equipo te asesorará según el tipo de evento y duración.",
  },
  {
    question: "¿Cuánto tiempo antes debo reservar?",
    answer:
      "Recomendamos reservar con al menos 4-6 semanas de antelación, especialmente para bodas y eventos en temporada alta (mayo-octubre). Para eventos corporativos o celebraciones entre semana, 2-3 semanas suele ser suficiente.",
  },
  {
    question: "¿Trabajan en toda España?",
    answer:
      "Sí, ofrecemos servicio en toda España. Tenemos cobertura especial en Cataluña. Para distancias superiores a 50km desde nuestras bases, aplicamos un suplemento de desplazamiento de €0.60/km.",
  },
  {
    question: "¿Qué tipo de jamón utilizan?",
    answer:
      "Trabajamos exclusivamente con jamón ibérico o paletas ibéricas de gran calidad y de productores con stock limitado para garantizar su calidad.",
  },
  {
    question: "¿Puedo personalizar el servicio?",
    answer:
      "Absolutamente. Cada evento es único y adaptamos nuestro servicio a tus necesidades: duración, número de invitados, espacios específicos, coordinación con otros proveedores, acompañamientos especiales, etc. Solicita un presupuesto personalizado.",
  },
  {
    question: "¿Qué pasa si sobra jamón?",
    answer:
      "Incluimos envasado al vacío de los sobrantes para que puedas llevártelos.",
  },
  {
    question: "¿Tienen seguro y certificaciones?",
    answer:
      "Sí, todos nuestros cortadores están certificados profesionalmente. Cumplimos con todas las normativas sanitarias y de manipulación de alimentos vigentes.",
  },
  {
    question: "¿Ofrecen degustación previa?",
    answer:
      "Sí, podemos organizar una degustación previa en nuestras instalaciones. Disponemos de muestras y certificados de calidad de nuestros jamones.",
  },
];

export function HamSlicingFAQ() {
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
              className="mb-4 bg-red-100 text-red-800 border-red-200"
            >
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Resolvemos tus Dudas
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Todo lo que necesitas saber sobre nuestro servicio de cortador de
              jamón. Si tienes más preguntas, no dudes en contactarnos
            </p>
          </div>

          <Card className="border-2 border-red-50">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-red-50"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-red-50/50 [&[data-state=open]]:bg-red-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-red-700 flex-shrink-0" />
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-red-100">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                ¿No encuentras la respuesta?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestro equipo está aquí para ayudarte. Contáctanos y
                resolveremos todas tus dudas sobre el servicio de cortador de
                jamón.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={navigateToContactForm}
                  className="bg-red-700 hover:bg-red-800 cursor-pointer"
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
