"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, Heart, Trophy } from "lucide-react";

const testimonials = [
  {
    year: "2012",
    name: "María González",
    event: "Boda",
    quote:
      "El cortador de jamón fue el punto culminante de nuestra boda. Los invitados no paraban de hablar del espectáculo y la calidad del jamón ibérico era excepcional. Totalmente recomendable.",
    rating: 5,
  },
  {
    year: "2015",
    name: "Carlos Ruiz",
    event: "Eventos Corporativos",
    quote:
      "Profesionalidad absoluta. Llegaron puntuales, montaron todo perfectamente y el show fue impresionante. Nuestros clientes internacionales quedaron fascinados con la cultura gastronómica española.",
    rating: 5,
  },
  {
    year: "2018",
    name: "Ana Martín",
    event: "Boda",
    quote:
      "Trabajo con elpernilet desde hace 3 años y siempre superan las expectativas. Son puntuales, profesionales y el resultado siempre es espectacular. Mis novias los adoran.",
    rating: 5,
  },
  {
    year: "2019",
    name: "Elisabet",
    event: "Boda",
    quote:
      "Una gran cortadora de jamón, conocedora de su trabajo y del producto. Muy atenta y agradable en todo momento. Deseamos que su boda que se realizaba en septiembre un par de semanas después de la nuestra fuera muy bien.",
    rating: 5,
  },
  {
    year: "2020",
    name: "Patricia",
    event: "Boda",
    quote:
      "En todo el momento Xavier estuvo muy pendiente de los previos de la boda, al ser un servicio externo del hotel donde celebrábamos la boda, nos dieron muchas facilidades, trajeron mesa, pan con tomate, picos, la verdad que muy contentos. Y la cortadora que acudió al evento supermaja y muy profesional. Muy contentos con el servicio. ¡El jamón superbueno!",
    rating: 5,
  },
  {
    year: "2021",
    name: "Roberto Silva",
    event: "Cumpleaños",
    quote:
      "Queríamos algo especial para el 50 aniversario de mis padres. El cortador no solo nos ofreció jamón de primera calidad, sino que hizo del momento algo muy emotivo y especial.",
    rating: 5,
  },
];

export function HistoricalTestimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            <Heart className="w-4 h-4 mr-2" />
            Confianza Construida con el Tiempo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Historias que Nos Han Hecho Crecer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Durante más de 15 años, hemos tenido el privilegio de formar parte
            de momentos inolvidables. Estas son algunas de las voces que nos han
            acompañado en nuestro viaje.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-xs">
                    {testimonial.year}
                  </Badge>
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-500 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                <blockquote className="text-muted-foreground mb-4 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="border-t pt-4">
                  <div className="font-semibold text-foreground text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-primary text-xs font-medium">
                    {testimonial.event}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
            <Trophy className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Más de 500 Historias de Éxito
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Cada cliente que confía en nosotros se convierte en parte de
              nuestra historia. Su satisfacción y recomendaciones son nuestro
              mayor orgullo y motivación para seguir superándonos cada día.
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-muted-foreground">
                  Clientes Repetidores
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5.0</div>
                <div className="text-sm text-muted-foreground">
                  Valoración Media
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">+15</div>
                <div className="text-sm text-muted-foreground">
                  Años de Confianza
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <div className="text-sm text-muted-foreground">
                  Gratitud Eterna
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
