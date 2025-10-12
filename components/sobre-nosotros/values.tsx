"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Shield, Star, Users, Award, Clock } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Pasión por la Excelencia",
    description:
      "Cada detalle importa. Nos apasiona crear experiencias perfectas, desde la selección de ingredientes hasta el último toque de servicio.",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description:
      "Cada cliente es único. Escuchamos tus necesidades, entendemos tu visión y creamos soluciones a medida para tu evento especial.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Compromiso y Confianza",
    description:
      "La confianza se gana con hechos. Somos transparentes, cumplimos nuestras promesas y superamos expectativas en cada evento.",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Star,
    title: "Innovación Constante",
    description:
      "Evolucionamos con el tiempo. Incorporamos las últimas tendencias y tecnologías para ofrecer lo mejor.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Award,
    title: "Calidad Certificada",
    description:
      "La calidad no es opcional. Todas nuestras certificaciones, procesos y proveedores cumplen los más altos estándares.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Clock,
    title: "Puntualidad y Profesionalismo",
    description:
      "El tiempo es oro, especialmente en tu evento. Llegamos a tiempo, preparamos todo con antelación y ejecutamos con precisión.",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

export function OurValues() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            Nuestros Valores
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Lo que nos Define
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nuestros valores no son solo palabras; son el compromiso diario que
            asumimos con cada cliente, cada evento y cada momento especial que
            ayudamos a crear.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-full ${value.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <value.icon className={`w-7 h-7 ${value.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Valores que se Traducen en Resultados
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Estos valores no son solo nuestro norte; son la garantía de que tu
              evento será exactamente como lo has soñado. Con más de 15 años
              aplicándolos, hemos perfeccionado el arte de crear momentos
              inolvidables.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">
                  Clientes Satisfechos
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                <div className="text-sm text-muted-foreground">
                  Valoración Media
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">
                  Clientes Repetidores
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
