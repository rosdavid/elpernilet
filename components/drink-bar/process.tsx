"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const processSteps = [
  {
    number: "01",
    title: "Selección de Bebidas",
    description:
      "Escogemos bebidas premium y cócteles artesanales adaptados a tu evento y preferencias.",
    image: "/drinks-bar-1.webp",
    details: [
      "Carta personalizada",
      "Ingredientes premium",
      "Opciones sin alcohol",
    ],
  },
  {
    number: "02",
    title: "Montaje de Barra",
    description:
      "Montamos la barra móvil, cristalería y decoración temática según el estilo de tu evento.",
    image: "/drinks-bar-2.webp",
    details: ["Barra móvil", "Cristalería premium", "Decoración personalizada"],
  },
  {
    number: "03",
    title: "Show de Mixología",
    description:
      "Nuestros bartenders realizan cócteles en vivo y espectáculos de mixología para tus invitados.",
    image: "/drinks-bar-3.webp",
    details: [
      "Cócteles en vivo",
      "Interacción con invitados",
      "Presentación profesional",
    ],
  },
  {
    number: "04",
    title: "Servicio y Atención",
    description:
      "Atención personalizada durante todo el evento, asegurando la mejor experiencia.",
    image: "/drinks-bar-4.webp",
    details: [
      "Servicio continuo",
      "Atención personalizada",
      "Recogida y limpieza",
    ],
  },
];

export function DrinkBarProcess() {
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

  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-blue-100 text-blue-800 border-blue-200"
          >
            Nuestro Proceso
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            El Arte de la Barra de Bebidas
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada paso está pensado para que tu evento tenga la mejor experiencia
            de barra y cócteles.
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
                  <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
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
                      <CheckCircle2 className="w-5 h-5 text-blue-700 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {detail}
                      </span>
                    </div>
                  ))}
                </div>

                {index < processSteps.length - 1 && (
                  <div className="hidden lg:flex items-center gap-2 mt-8 text-blue-700">
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
                      alt={`${step.title} - Proceso barra de bebidas`}
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
                      alt={`${step.title} - Proceso barra de bebidas`}
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
          <Card className="bg-gradient-to-r from-blue-700 to-purple-800 text-white border-0">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Experiencia Garantizada
              </h3>
              <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
                Más de 10 años creando barras de bebidas únicas para eventos
                inolvidables.
              </p>
              <Button
                onClick={navigateToContactForm}
                className="bg-white text-blue-700 hover:bg-gray-100 cursor-pointer"
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
