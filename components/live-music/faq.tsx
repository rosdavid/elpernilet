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
    question: "¿Qué tipos de música en directo ofrecen?",
    answer:
      "Ofrecemos jazz, bossa nova, flamenco, música clásica, acústico, pop, rock suave, DJs y más. Puedes combinar formaciones: por ejemplo, trío de jazz para el cóctel y DJ para la fiesta. Adaptamos el repertorio a la atmósfera de tu evento.",
  },
  {
    question: "¿Qué formaciones están disponibles?",
    answer:
      "Desde solistas (pianista, guitarrista, violinista) hasta dúos, tríos, cuartetos u orquestas completas. La elección depende del tamaño del evento, presupuesto y momento (ceremonia, cóctel, cena, baile). Te asesoramos sobre la formación óptima.",
  },
  {
    question: "¿Incluyen el equipo de sonido?",
    answer:
      "Sí, normalmente incluimos amplificación básica adaptada al tamaño del espacio. Para eventos grandes o exteriores, podemos ampliar el equipo. Todo se coordina en la fase de planificación.",
  },
  {
    question: "¿Puedo solicitar canciones concretas?",
    answer:
      "Sí. Puedes indicar canciones imprescindibles (entrada, primer baile, etc.) y el repertorio general deseado. Si necesitan ensayos para temas especiales, lo coordinamos.",
  },
  {
    question: "¿Cómo se calcula el precio?",
    answer:
      "El precio depende de la formación (solista, dúo, trío, orquesta, DJ), duración de la actuación, equipo de sonido, ubicación y época del año. Presupuestos personalizados en menos de 24 horas.",
  },
  {
    question: "¿Trabajan en toda España?",
    answer:
      "Sí, disponemos de una red de músicos en toda España con especial cobertura en Cataluña, Madrid, Valencia y costa mediterránea. Para desplazamientos largos puede aplicarse suplemento.",
  },
  {
    question: "¿Qué pasa si un músico se pone enfermo?",
    answer:
      "Tenemos reservas y suplentes para cubrir imprevistos. En caso de emergencia, garantizamos una solución alternativa de calidad.",
  },
  {
    question: "¿Ofrecen DJ además de música en vivo?",
    answer:
      "Sí, ofrecemos DJs profesionales para animar la fiesta. Muchos clientes combinan música en vivo (ceremonia, cóctel, cena) con DJ para el baile. Te asesoramos sobre la mejor combinación.",
  },
];

export function LiveMusicFAQ() {
  const navigateToContactForm = () => {
    if (window.location.pathname === "/") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
  };

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
              className="mb-4 bg-amber-100 text-amber-800 border-amber-200"
            >
              Preguntas Frecuentes
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Resolvemos tus Dudas
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Todo lo que necesitas saber sobre música en directo para eventos.
              Si tienes más preguntas, no dudes en contactarnos
            </p>
          </div>

          <Card className="border-2 border-amber-50">
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-amber-50"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-amber-50/50 [&[data-state=open]]:bg-amber-50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <HelpCircle className="w-5 h-5 text-amber-700 flex-shrink-0" />
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

          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-amber-100">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                ¿No encuentras la respuesta?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Nuestro equipo está aquí para ayudarte. Contáctanos y
                resolveremos todas tus dudas sobre música en directo para tu
                evento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={navigateToContactForm}
                  className="bg-amber-700 hover:bg-amber-800 cursor-pointer"
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
