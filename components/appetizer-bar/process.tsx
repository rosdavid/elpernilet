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
    title: "Selección de Ingredientes",
    description:
      "Escogemos ingredientes frescos y premium para crear aperitivos adaptados a tu evento.",
    image: "/appetizer-bar-1.webp",
    details: [
      "Ingredientes frescos",
      "Productos locales",
      "Opciones dietéticas",
    ],
  },
  {
    number: "02",
    title: "Preparación de Aperitivos",
    description:
      "Nuestra preparación es en base a tus requerimientos, garantizando calidad y sabor excepcionales.",
    image: "/appetizer-bar-2.webp",
    details: [
      "Técnicas artesanales",
      "Presentación elegante",
      "Sabores innovadores",
    ],
  },
  {
    number: "03",
    title: "Montaje de Barra",
    description:
      "Montamos la barra de aperitivos con vajilla y decoración temática para tu evento.",
    image: "/appetizer-bar-4.webp",
    details: ["Barra equipada", "Vajilla", "Decoración personalizada"],
  },
  {
    number: "04",
    title: "Servicio y Atención",
    description:
      "Atención personalizada durante todo el evento, asegurando la mejor experiencia culinaria.",
    image: "/appetizer-bar-5.webp",
    details: [
      "Servicio continuo",
      "Atención personalizada",
      "Recogida y limpieza",
    ],
  },
];

export function AppetizerBarProcess() {
  const navigateToContactForm = () => {
    trackCtaFormClick("process_barra_aperitivos");
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
    <section className="py-24 bg-gradient-to-b from-green-50 to-lime-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-green-100 text-green-800 border-green-200"
          >
            Nuestro Proceso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            El Arte de la Barra de Aperitivos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada paso está pensado para que tu evento tenga la mejor experiencia
            de aperitivos gourmet.
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
                  <div className="w-16 h-16 bg-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
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
                      <CheckCircle2 className="w-5 h-5 text-green-700 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center gap-2 mt-8 text-green-700">
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
                      alt={`${step.title} - Proceso barra de aperitivos`}
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
                      alt={`${step.title} - Proceso barra de aperitivos`}
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
          <Card className="bg-gradient-to-r from-green-700 to-lime-800 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Experiencia Garantizada
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Más de 10 años creando barras de aperitivos únicas para eventos
                inolvidables.
              </p>
              <Button
                onClick={navigateToContactForm}
                className="bg-white text-green-700 hover:bg-gray-100 cursor-pointer"
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
