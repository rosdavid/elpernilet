"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { trackFaqOpen } from "@/hooks/use-analytics";

const faqs = [
  {
    question: "¿Con cuánta antelación debo reservar vuestros servicios?",
    answer:
      "Recomendamos reservar con al menos 4-6 semanas de antelación para eventos grandes. Sin embargo, también podemos acomodar solicitudes de última hora dependiendo de nuestra disponibilidad. Contáctanos lo antes posible para asegurar tu fecha.",
  },
  {
    question: "¿Qué incluye el servicio de cortador de jamón?",
    answer:
      "Nuestro servicio incluye un maestro cortador profesional, jamón ibérico de primera calidad, soporte jamonero, cuchillos profesionales, y todo el material necesario. El cortador permanecerá durante el tiempo acordado cortando jamón fresco para tus invitados.",
  },
  {
    question: "¿Podéis adaptaros a restricciones dietéticas?",
    answer:
      "Sí, absolutamente. Podemos adaptar nuestro menú para acomodar alergias alimentarias, preferencias vegetarianas, veganas, sin gluten, y otras necesidades dietéticas. Simplemente indícanos los requisitos al hacer tu reserva.",
  },
  {
    question: "¿Cuál es el número mínimo y máximo de invitados?",
    answer:
      "No tenemos un mínimo estricto, pero nuestros servicios están optimizados para eventos de 20 personas en adelante. Para eventos más grandes de 500+ invitados, contamos con equipos adicionales para garantizar un servicio impecable.",
  },
  {
    question: "¿Trabajáis en toda España?",
    answer:
      "Sí, ofrecemos nuestros servicios en toda España. Para eventos fuera de nuestra área local, pueden aplicarse costes adicionales de desplazamiento que se discutirán en el presupuesto.",
  },
  {
    question: "¿Qué incluye el servicio de barra de bebidas y aperitivos?",
    answer:
      "Incluye bartenders profesionales, todo el equipo necesario (cristalería, coctelera, hielo), una selección de bebidas premium, y aperitivos gourmet. Podemos personalizar el menú de bebidas según tus preferencias y el tipo de evento.",
  },
  {
    question: "¿Proporcionáis el equipamiento y montaje?",
    answer:
      "Sí, nos encargamos de todo el equipamiento necesario para nuestros servicios, incluyendo mesas, manteles, cristalería, y decoración básica. También gestionamos el montaje y desmontaje completo.",
  },
  {
    question: "¿Cómo funciona el proceso de reserva y pago?",
    answer:
      "Primero, nos contactas para discutir tu evento. Luego preparamos un presupuesto personalizado. Una vez aceptado, se requiere un depósito del 30% para confirmar la reserva. El saldo restante se paga después del evento.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Respuestas a las preguntas más comunes sobre nuestros servicios
            </p>
          </div>

          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            onValueChange={(value) => {
              const match = value?.match(/item-(\d+)/);
              if (match) {
                const idx = parseInt(match[1], 10);
                if (faqs[idx]) trackFaqOpen(faqs[idx].question, "home");
              }
            }}
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6 cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
