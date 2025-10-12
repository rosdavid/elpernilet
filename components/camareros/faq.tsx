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
    question: "¿Qué incluye el servicio de camareros?",
    answer:
      "Nuestro servicio incluye camareros profesionales certificados, uniforme completo, vajilla, cristalería, mantelería, servicio de mesa, atención al cliente, montaje y desmontaje completo, y limpieza final. Todo lo necesario para un servicio impecable.",
  },
  {
    question: "¿Cuántos camareros necesito para mi evento?",
    answer:
      "Recomendamos 1 camarero por cada 15-20 invitados para servicio estándar, o 1 por cada 10-12 para servicio premium. Adaptamos según el tipo de evento, menú y duración. Evaluamos cada caso para darte la mejor recomendación.",
  },
  {
    question: "¿Están certificados los camareros?",
    answer:
      "Sí, todos nuestros camareros están certificados en manipulación de alimentos, atención al cliente, protocolo y servicio profesional. Contamos con formación continua y cumplimos todas las normativas sanitarias.",
  },
  {
    question: "¿Qué tipos de servicio ofrecen?",
    answer:
      "Ofrecemos servicio a la rusa, buffet asistido, cóctel, mesas redondas, servicio americano y servicio personalizado según las necesidades del evento. Adaptamos el estilo de servicio a tu preferencia.",
  },
  {
    question: "¿Incluyen uniforme y vajilla?",
    answer:
      "Sí, incluimos uniforme profesional completo (camisa, pantalón, chaleco, corbata, zapatos), vajilla, cristalería, mantelería y todo el equipamiento necesario. Todo de alta calidad y perfectamente coordinado.",
  },
  {
    question: "¿Cuál es el horario del servicio?",
    answer:
      "Servicio flexible: normalmente de 4 a 8 horas, pero podemos adaptarnos. Llegamos 2 horas antes para montaje y nos quedamos hasta desmontaje y limpieza. Disponibles 24/7 para eventos especiales.",
  },
  {
    question: "¿Cómo se calcula el precio del servicio?",
    answer:
      "El precio se calcula según: número de camareros, duración del servicio, tipo de servicio (estándar/premium), ubicación del evento, y época del año. Presupuestos personalizados en menos de 24 horas.",
  },
  {
    question: "¿Qué medidas de seguridad y licencias tienen?",
    answer:
      "Contamos con certificados de manipulación de alimentos, formación en higiene y seguridad alimentaria, y cumplimiento de normativas sanitarias. Todos nuestros camareros pasan revisiones médicas periódicas.",
  },
];

export function WaitersFAQ() {
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
              className="mb-4 bg-purple-100 text-purple-800 border-purple-200"
            >
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Resolvemos tus Dudas
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Todo lo que necesitas saber sobre nuestro servicio de camareros.
              Si tienes más preguntas, no dudes en contactarnos
            </p>
          </div>

          <Card className="border-2 border-purple-50">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-purple-50"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-purple-50/50 [&[data-state=open]]:bg-purple-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-purple-700 flex-shrink-0" />
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
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-100">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                ¿No encuentras la respuesta?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestro equipo está aquí para ayudarte. Contáctanos y
                resolveremos todas tus dudas sobre el servicio de camareros.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={navigateToContactForm}
                  className="bg-purple-700 hover:bg-purple-800 cursor-pointer"
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
