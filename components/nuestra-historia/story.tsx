"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart } from "lucide-react";
import Image from "next/image";

const milestones = [
  {
    year: "2009",
    title: "Los Primeros Pasos",
    description:
      "Nace elpernilet con la visión de crear experiencias inolvidables en Barcelona. Comenzamos con un pequeño equipo apasionado por la gastronomía y el servicio excepcional.",
    image: "/camareros-1.webp",
  },
  {
    year: "2012",
    title: "Crecimiento y Expansión",
    description:
      "Expandimos nuestros servicios más allá de Barcelona, llegando a toda Cataluña. Nuestro equipo crece y comenzamos a especializarnos en eventos corporativos y bodas.",
    image: "/evento-boda-2.webp",
  },
  {
    year: "2015",
    title: "Reconocimiento",
    description:
      "Nos convertimos en referencia en cataluña en servicios para eventos. Introducimos el corte de jamón en vivo como servicio estrella..",
    image: "/evento-privado-1.webp",
  },
  {
    year: "2018",
    title: "Innovación",
    description:
      "Lanzamos nuestros servicios de barras especializadas (bebidas y aperitivos).",
    image: "/foto-evento.webp",
  },
  {
    year: "2022",
    title: "Excelencia",
    description:
      "Consolidamos nuestro compromiso con la calidad, la sostenibilidad y el servicio personalizado para todo tipo de eventos.",
    image: "/evento-boda-5.webp",
  },
  {
    year: "2024",
    title: "Liderazgo y Visión",
    description:
      "Más de 500 eventos realizados, un equipo de más de 25 profesionales y la confianza de cientos de clientes que nos eligen año tras año.",
    image: "/event-image.webp",
  },
];

export function OurStory() {
  return (
    <section id="our-story" className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            Nuestra Historia
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            De una Sueño a una Realidad
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nuestra historia comenzó con un sueño: crear experiencias
            inolvidables. Hoy, somos un referente para eventos en Cataluña, pero
            nunca hemos olvidado nuestros orígenes.
          </p>
        </div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-8 lg:gap-12`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                    {milestone.year}
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                      {milestone.title}
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </div>

              <div className="flex-1">
                <Card className="overflow-hidden shadow-lg">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={milestone.image}
                      alt={`${milestone.title} - Historia de elpernilet`}
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
          <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
            <CardContent className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                Nuestra Filosofía
              </h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
                Creemos que cada evento es una oportunidad para crear magia.
                Nuestro compromiso va más allá del servicio: nos preocupamos por
                cada detalle, cada sonrisa, cada momento especial. Porque
                sabemos que detrás de cada celebración hay una historia que
                merece ser contada con excelencia.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground">Pasión</h4>
                  <p className="text-sm text-muted-foreground">
                    Por lo que hacemos
                  </p>
                </div>
                <div className="text-center">
                  <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground">Excelencia</h4>
                  <p className="text-sm text-muted-foreground">
                    En cada detalle
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-foreground">Compromiso</h4>
                  <p className="text-sm text-muted-foreground">
                    Con nuestros clientes
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Una Historia que Continúa Escribiéndose
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Cada evento que organizamos, cada sonrisa que conseguimos, cada
              &quot;gracias&quot; que recibimos, son capítulos nuevos en nuestra
              historia. Una historia de pasión, dedicación y amor por lo que
              hacemos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
