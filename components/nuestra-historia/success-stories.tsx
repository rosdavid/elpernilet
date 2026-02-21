"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Star,
  Users,
  Calendar,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { trackCtaFormClick } from "@/hooks/use-analytics";

const successStories = [
  {
    title: "Boda de Ensueño en el Tibidabo",
    client: "Ana y Miguel",
    event: "Boda",
    description:
      "Organizamos una boda para 150 invitados con catering mediterráneo, barra de cócteles y servicio de camareros. El resultado: una celebración perfecta bajo las estrellas de Barcelona.",
    results: [
      "Valoración: 5/5 estrellas",
      "150 invitados satisfechos",
      "Cobertura mediática en revistas locales",
      "Recomendaciones para 3 bodas más",
    ],
    image: "/elpernilet-event-image.webp",
    testimonial:
      "Elpernilet convirtió nuestro sueño en realidad. Cada detalle fue perfecto, desde la comida hasta el servicio. Nuestros invitados aún hablan de lo maravilloso que fue todo.",
    metrics: {
      guests: 150,
      rating: 5.0,
      duration: "8 horas",
      budget: "Premium",
    },
  },
  {
    title: "Evento Corporativo TechCorp",
    client: "TechCorp Solutions",
    event: "Evento Corporativo",
    description:
      "Lanzamiento de producto para 200 profesionales del sector tecnológico. Catering innovador, barra de bebidas especializada y networking excepcional.",
    results: [
      "ROI del 300% en networking",
      "200 asistentes altamente satisfechos",
      "Cobertura en medios tecnológicos",
      "Contratos comerciales generados",
    ],
    image: "/elpernilet-event-image.webp",
    testimonial:
      "El profesionalismo de Elpernilet nos permitió centrarnos en nuestro lanzamiento mientras ellos se ocupaban de todo lo demás. El resultado superó nuestras expectativas.",
    metrics: {
      guests: 200,
      rating: 4.9,
      duration: "6 horas",
      budget: "Corporate",
    },
  },
  {
    title: "Cumpleaños 50 Aniversario",
    client: "Familia Gutiérrez",
    event: "Celebración Familiar",
    description:
      "Fiesta sorpresa para 80 invitados con corte de jamón en vivo, barra de aperitivos gourmet y animación personalizada. Una noche inolvidable.",
    results: [
      "Sorpresa perfecta conseguida",
      "80 invitados emocionados",
      "Recuerdos compartidos en redes sociales",
      "Cliente fiel para eventos futuros",
    ],
    image: "/elpernilet-event-image.webp",
    testimonial:
      "Organizar el cumpleaños de mi padre fue todo un reto, pero Elpernilet lo hizo parecer fácil. La sorpresa fue perfecta y la celebración, mágica.",
    metrics: {
      guests: 80,
      rating: 5.0,
      duration: "5 horas",
      budget: "Familiar",
    },
  },
];

const keyMetrics = [
  {
    icon: Users,
    value: "800+",
    label: "Eventos Exitosos",
    description: "Celebraciones inolvidables creadas",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Satisfacción Media",
    description: "Valoración de nuestros clientes",
  },
  {
    icon: TrendingUp,
    value: "300%",
    label: "ROI Medio",
    description: "Retorno de inversión para eventos corporativos",
  },
  {
    icon: Award,
    value: "98%",
    label: "Clientes Repetidores",
    description: "Confianza que se traduce en lealtad",
  },
];

export function SuccessStories() {
  return (
    <section className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            <Award className="w-4 h-4 mr-2" />
            Historias de Éxito
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada evento que organizamos es una oportunidad para crear magia.
            Estas son algunas de las historias que nos llenan de orgullo y nos
            motivan a seguir superándonos cada día.
          </p>
        </div>

        <div className="space-y-16 mb-16">
          {successStories.map((story, index) => (
            <Card
              key={index}
              className="overflow-hidden border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-xl"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-12 h-12 text-primary mx-auto mb-2" />
                      <div className="text-sm font-medium text-foreground">
                        {story.event}
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="md:w-2/3 p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-2">
                      {story.title}
                    </h3>
                    <p className="text-primary font-medium mb-4">
                      Cliente: {story.client}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {story.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Resultados Obtenidos:
                      </h4>
                      <ul className="space-y-2">
                        {story.results.map((result, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">
                        Métricas del Evento:
                      </h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Invitados:
                          </span>
                          <span className="font-medium">
                            {story.metrics.guests}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Valoración:
                          </span>
                          <span className="font-medium">
                            {story.metrics.rating}/5
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Duración:
                          </span>
                          <span className="font-medium">
                            {story.metrics.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Categoría:
                          </span>
                          <span className="font-medium">
                            {story.metrics.budget}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-primary/5 rounded-lg p-4">
                    <p className="text-sm italic text-foreground">
                      &quot;{story.testimonial}&quot;
                    </p>
                    <p className="text-xs text-primary font-medium mt-2">
                      — {story.client}
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Números que Demuestran Nuestro Valor
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Más allá de las palabras, nuestros resultados hablan por sí solos.
              Cada cifra representa una historia de éxito y la confianza de
              nuestros clientes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyMetrics.map((metric, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background/50 rounded-xl hover:bg-background/80 transition-colors"
              >
                <metric.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {metric.value}
                </div>
                <h4 className="text-lg font-serif font-bold text-foreground mb-2">
                  {metric.label}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-background rounded-2xl p-8 md:p-12 border-2 border-primary/10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              ¿Listo para Crear tu Historia de Éxito?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Tú también puedes formar parte de estas historias de éxito. Confía
              en nosotros para hacer de tu evento un momento inolvidable que tus
              invitados recordarán para siempre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                onClick={() => trackCtaFormClick("success_stories_nuestra_historia")}
              >
                <Button size="lg" className="flex items-center gap-2">
                  Solicita presupuesto
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/sobre-nosotros">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                >
                  Conoce Nuestro Equipo
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
