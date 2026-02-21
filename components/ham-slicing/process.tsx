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
    title: "Selección del Jamón",
    description:
      "Elegimos jamones ibéricos premium de las mejores dehesas, con certificación de origen y curación óptima.",
    image: "/evento-boda-6.webp",
    details: [
      "Denominación de Origen Protegida",
      "Inspección de calidad previa",
      "Certificado de trazabilidad",
    ],
  },
  {
    number: "02",
    title: "Preparación y Montaje",
    description:
      "Nuestro equipo llega con antelación para preparar el espacio, montar el soporte y afilar la cuchillería.",
    image: "/evento-boda-2.webp",
    details: [
      "Montaje 1 hora antes del evento",
      "Cuchillería afilada y desinfectada",
      "Coordinación con venue y catering",
    ],
  },
  {
    number: "03",
    title: "Arte del Corte",
    description:
      "El maestro cortador realiza el espectáculo gastronómico, explicando la técnica y origen del jamón.",
    image: "/evento-boda-3.webp",
    details: [
      "Técnica tradicional española",
      "Explicación del proceso",
      "Interacción con invitados",
    ],
  },
  {
    number: "04",
    title: "Presentación Gourmet",
    description:
      "Servimos el jamón con presentación premium, acompañamientos opcionales y emplatado profesional.",
    image: "/evento-boda-4.webp",
    details: [
      "Acompañamientos gourmet opcionales",
      "Servicio de mesa opcional",
      "Envasado de sobrantes al vacío",
    ],
  },
];

export function HamSlicingProcess() {
  const navigateToContactForm = () => {
    trackCtaFormClick("process_cortador_jamon");
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
    <section className="py-24 bg-gradient-to-b from-accent/20 to-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-red-100 text-red-800 border-red-200"
          >
            Nuestro Proceso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            El Arte del Corte de Jamón
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada paso de nuestro proceso está diseñado para ofrecer una
            experiencia gastronómica excepcional que deleitará a tus invitados
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
                  <div className="w-16 h-16 bg-red-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
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
                      <CheckCircle2 className="w-5 h-5 text-red-700 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center gap-2 mt-8 text-red-700">
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
                      alt={`${step.title} - Proceso de cortador de jamón profesional`}
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
                      alt={`${step.title} - Proceso de cortador de jamón profesional`}
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
          <Card className="bg-gradient-to-r from-neutral-700 to-neutral-800 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Experiencia Garantizada
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Con más de 15 años de experiencia y +500 eventos realizados,
                garantizamos un servicio impecable que supera las expectativas.
              </p>
              <Button
                onClick={navigateToContactForm}
                className="bg-white text-black hover:bg-gray-100 cursor-pointer"
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
