"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Star, Award, Heart, Clock } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "+500",
    label: "Eventos Realizados",
    description:
      "Bodas, cumpleaños, eventos corporativos y celebraciones privadas",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    trend: "+12% que el año pasado",
  },
  {
    icon: Users,
    value: "+5.000",
    label: "Clientes Servidos",
    description: "Familias y negocios que confían en nosotros año tras año",
    color: "text-green-600",
    bgColor: "bg-green-50",
    trend: "+8% que el año pasado",
  },
  {
    icon: Star,
    value: "5.0",
    label: "Valoración Media",
    description: "Calificación promedio en Google Reviews y redes sociales",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    trend: "Consistente",
  },
  {
    icon: Award,
    value: "+15",
    label: "Años de Experiencia",
    description: "Trayectoria consolidada en el sector del catering premium",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    trend: "Creciente",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Satisfacción del Cliente",
    description: "Porcentaje de clientes que nos recomiendan",
    color: "text-red-600",
    bgColor: "bg-red-50",
    trend: "+2% que el año pasado",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Servicio Disponible",
    description: "Atención personalizada en cualquier momento del día",
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    trend: "Siempre",
  },
];

export function OurStats() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            Nuestras Cifras
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Más de una década creando momentos inolvidables. Nuestros números
            reflejan el compromiso, la calidad y la confianza que nuestros
            clientes depositan en nosotros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-full ${stat.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div>
                    <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {stat.trend}
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 md:p-12 border-2 border-primary/10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Confianza Construida con Resultados
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Estos números no son solo estadísticas; representan familias que
              han celebrado momentos inolvidables, empresas que han fortalecido
              sus equipos, y parejas que han dado el &quot;sí&quot; rodeadas de
              perfección. Cada cifra es una historia de éxito que nos impulsa a
              seguir superándonos día tras día.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">
                  Eventos Puntuales
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">0</div>
                <div className="text-sm text-muted-foreground">
                  Quejas Formales
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">
                  Compromiso con la Excelencia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
