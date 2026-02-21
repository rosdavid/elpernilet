"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { trackCtaFormClick } from "@/hooks/use-analytics";
import Image from "next/image";

const processSteps = [
  {
    number: "01",
    title: "Planificación del Servicio",
    description:
      "Evaluamos tus necesidades específicas, número de invitados y tipo de evento para determinar el número óptimo de camareros.",
    image: "/camareros-2.webp",
    details: [
      "Evaluación de necesidades",
      "Planificación del menú",
      "Coordinación logística",
    ],
  },
  {
    number: "02",
    title: "Preparación del Equipo",
    description:
      "Nuestros camareros se preparan con briefing completo, uniforme profesional y revisión de protocolos de servicio.",
    image: "/camareros-5.webp",
    details: [
      "Briefing completo",
      "Uniforme profesional",
      "Protocolos de servicio",
    ],
  },
  {
    number: "03",
    title: "Montaje y Servicio",
    description:
      "Llegamos con antelación para montar mesas, vajilla y comenzar el servicio con puntualidad y profesionalismo.",
    image: "/camareros-3.webp",
    details: ["Montaje completo", "Servicio puntual", "Atención profesional"],
  },
  {
    number: "04",
    title: "Desmontaje y Limpieza",
    description:
      "Finalizamos el servicio con desmontaje completo, limpieza profesional y recogida de todo el equipamiento.",
    image: "/camareros-4.webp",
    details: ["Desmontaje completo", "Limpieza profesional", "Recogida total"],
  },
];

export function WaitersProcess() {
  const navigateToContactForm = () => {
    trackCtaFormClick("process_camareros");
    if (window.location.pathname === "/") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-purple-50 to-violet-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-purple-100 text-purple-800 border-purple-200"
          >
            Nuestro Proceso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Servicio Profesional de Camareros
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada paso está pensado para que tu evento tenga el mejor servicio de
            atención al cliente y experiencia gastronómica.
          </p>
        </div>

        <div className="space-y-16">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12`}
            >
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-purple-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                <div className="grid md:grid-cols-2 gap-3">
                  {step.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-purple-700 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center gap-2 mt-8 text-purple-700">
                    <span className="text-sm font-medium">Siguiente paso</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Imagen solo visible en móvil */}
              <div className="w-full mt-6 block lg:hidden">
                <Card className="overflow-hidden shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Proceso servicio camareros`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Card>
              </div>

              {/* Imagen desktop */}
              <div className="flex-1 hidden lg:block">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Proceso servicio camareros`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-700 to-violet-800 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Experiencia Garantizada
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Más de 15 años creando servicios de camareros únicos para
                eventos inolvidables.
              </p>
              <Button
                onClick={navigateToContactForm}
                className="bg-white text-purple-700 hover:bg-gray-100 cursor-pointer"
              >
                Reservar tu Fecha
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
