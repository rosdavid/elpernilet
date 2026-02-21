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
import { trackCtaFormClick, trackFaqOpen } from "@/hooks/use-analytics";

const faqs = [
  {
    question: "¿Qué incluye el servicio de barra de bebidas?",
    answer:
      "Nuestro servicio incluye bartenders profesionales certificados o camareros de barra, barra completamente equipada, cristalería, hielo, decoración temática, selección de bebidas premium (alcoholicas y sin alcohol), cócteles artesanales, montaje y desmontaje completo, y limpieza final. Todo lo necesario para un servicio impecable. Decide lo que necesites.",
  },
  {
    question: "¿Pueden crear cócteles personalizados para mi evento?",
    answer:
      "¡Por supuesto! Especializamos en crear cartas de bebidas personalizadas que se adapten a tu temática, colores corporativos, o preferencias especiales. Podemos diseñar cócteles únicos con nombres personalizados para tu evento, bodega familiar, o celebración especial.",
  },
  {
    question: "¿Cuántos bartenders incluye el servicio?",
    answer:
      "El número de bartenders depende del tamaño del evento: para eventos de hasta 80 personas incluimos 1 bartender profesional, de 80-150 personas incluimos 2 bartenders, y para eventos mayores añadimos bartenders adicionales. Todos nuestros bartenders están certificados y tienen amplia experiencia en eventos. También contamos con camareros de barra para servicio más ágil.",
  },
  {
    question: "¿Qué tipos de bebidas están incluidas?",
    answer:
      "Incluimos una amplia selección: cócteles clásicos, gin tonics premium, mojitos, cosmopolitans, bebidas sin alcohol, refrescos artesanales, aguas saborizadas, y más. Adaptamos la carta según tus preferencias y presupuesto. También ofrecemos opciones premium con licores de alta gama.",
  },
  {
    question: "¿Necesito aportar algo para el servicio de barra?",
    answer:
      "No necesitas aportar nada. Nos encargamos de todo: barra, cristalería, hielo, decoración, ingredientes frescos, bebidas, y todo el equipamiento necesario. Llegamos completamente autónomos para tu comodidad. Para algunos lugares contaremos con la ayuda del local donde realices tu evento para reducir costes si es necesario",
  },
  {
    question: "¿Cuál es el horario del servicio?",
    answer:
      "Nuestro servicio es completamente flexible. Típicamente ofrecemos servicios de 4-8 horas, pero podemos adaptarnos a tus necesidades específicas. Llegamos 2 horas antes para el montaje y nos quedamos hasta completar el desmontaje y limpieza. Disponibles 24/7 para eventos especiales.",
  },
  {
    question: "¿Cómo se calcula el precio del servicio?",
    answer:
      "El precio se calcula según: número de invitados, duración del servicio, selección de bebidas (estándar/premium), servicios adicionales (show mixología, cócteles personalizados), ubicación del evento, y época del año. Ofrecemos presupuestos personalizados sin compromiso en menos de 24 horas.",
  },
  {
    question: "¿Qué medidas de seguridad y licencias tienen?",
    answer:
      "Contamos con certificados de manipulación de alimentos, y cumplimos todas las normativas sanitarias. Nuestros bartenders y camareros de barra están formados en servicio responsable de alcohol y gestión de eventos seguros.",
  },
];

export function DrinkBarFAQ() {
  const navigateToContactForm = () => {
    trackCtaFormClick("faq_barra_bebidas");
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
              className="mb-4 bg-blue-100 text-blue-800 border-blue-200"
            >
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Resolvemos tus Dudas
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Todo lo que necesitas saber sobre nuestro servicio de barra de
              bebidas. Si tienes más preguntas, no dudes en contactarnos
            </p>
          </div>

          <Card className="border-2 border-blue-50">
            <CardContent className="p-0">
              <Accordion
                type="single"
                collapsible
                className="w-full"
                onValueChange={(value) => {
                  const match = value?.match(/item-(\d+)/);
                  if (match) {
                    const idx = parseInt(match[1], 10);
                    if (faqs[idx])
                      trackFaqOpen(faqs[idx].question, "barra-bebidas");
                  }
                }}
              >
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-blue-50"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-blue-50/50 [&[data-state=open]]:bg-blue-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-blue-700 flex-shrink-0" />
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-100">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                ¿No encuentras la respuesta?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestro equipo está aquí para ayudarte. Contáctanos y
                resolveremos todas tus dudas sobre el servicio de barra de
                bebidas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={navigateToContactForm}
                  className="bg-blue-700 hover:bg-blue-800 cursor-pointer"
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
