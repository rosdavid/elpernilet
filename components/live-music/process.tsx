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
    title: "Consulta y Preferencias",
    description:
      "Conocemos tu evento, estilo musical preferido, momento del día y atmósfera deseada. Te asesoramos sobre formaciones y repertorios.",
    image: "/music-1.webp",
    details: [
      "Entrevista previa",
      "Preferencias musicales",
      "Formación recomendada",
    ],
  },
  {
    number: "02",
    title: "Selección de Músicos",
    description:
      "Presentamos propuestas de músicos o grupos según tu presupuesto y estilo. Audiciones o vídeos disponibles para que elijas con confianza.",
    image: "/music-2.webp",
    details: [
      "Propuestas personalizadas",
      "Audiciones disponibles",
      "Repertorio a medida",
    ],
  },
  {
    number: "03",
    title: "Coordinación y Ensayos",
    description:
      "Coordinamos horarios con el venue, catering y planificación. Ensayos si se requieren temas especiales o versiones personalizadas.",
    image: "/music-3.webp",
    details: [
      "Coordinación con venue",
      "Ensayos opcionales",
      "Timing perfecto",
    ],
  },
  {
    number: "04",
    title: "Día del Evento",
    description:
      "Los músicos llegan puntuales, montan el equipo de sonido y ofrecen una actuación impecable. Montaje y desmontaje incluidos.",
    image: "/music-4.webp",
    details: [
      "Montaje profesional",
      "Actuación en vivo",
      "Desmontaje incluido",
    ],
  },
];

export function LiveMusicProcess() {
  const navigateToContactForm = () => {
    trackCtaFormClick("process_musica_en_directo");
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
    <section className="py-24 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-amber-100 text-amber-800 border-amber-200"
          >
            Nuestro Proceso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Del Contacto al Escenario
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada paso está pensado para que la música sea el alma de tu evento
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
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-amber-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
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
                      <CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center gap-2 mt-8 text-amber-700">
                    <span className="text-sm font-medium">Siguiente paso</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>

              <div className="w-full mt-6 block lg:hidden">
                <Card className="overflow-hidden shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Proceso música en directo`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </Card>
              </div>

              <div className="flex-1 hidden lg:block">
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={step.image}
                      alt={`${step.title} - Proceso música en directo`}
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

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-amber-700 to-orange-800 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Experiencia Garantizada
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Más de 15 años llevando música en vivo a bodas y eventos
                inolvidables.
              </p>
              <Button
                onClick={navigateToContactForm}
                className="bg-white text-amber-700 hover:bg-gray-100 cursor-pointer"
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
