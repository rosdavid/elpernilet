"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import { trackCtaFormClick } from "@/hooks/use-analytics";

const testimonials = [
  {
    name: "María González",
    role: "Novia",
    event: "Boda en Masía Can Ametller",
    rating: 5,
    text: "El servicio de camareros fue excepcional. La atención fue impecable, profesionales y discretos. Nuestros invitados no paraban de hablar de lo bien atendidos que se sintieron. Totalmente recomendable.",
    image: "/testimonial-1.webp",
  },
  {
    name: "Carlos Ruiz",
    role: "Event Manager",
    event: "Evento Corporativo Tech Company",
    rating: 5,
    text: "Profesionalidad absoluta. Los camareros llegaron puntuales, el servicio fue perfecto y la coordinación impecable. Nuestros clientes internacionales quedaron fascinados con el nivel de atención.",
    image: "/testimonial-2.webp",
  },
  {
    name: "Ana Martín",
    role: "Wedding Planner",
    event: "Colaboración en 12+ bodas",
    rating: 5,
    text: "Trabajo con elpernilet desde hace 3 años y siempre superan las expectativas. Sus camareros son profesionales certificados y el servicio siempre es de primera calidad. Mis novias los adoran.",
    image: "/testimonial-3.webp",
  },
  {
    name: "Roberto Silva",
    role: "Celebración 50 aniversario",
    event: "Evento Familiar",
    rating: 5,
    text: "Para el 50 aniversario de mis padres queríamos algo especial. Los camareros hicieron que cada momento fuera memorable con su atención personalizada y profesionalismo.",
    image: "/testimonial-4.webp",
  },
];

export function WaitersTestimonials() {
  const navigateToContactForm = () => {
    trackCtaFormClick("testimonials_camareros");
    if (window.location.pathname === "/") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si estamos en otra página, navegar a la principal y luego hacer scroll
      window.location.href = "/#contact";
    }
  };

  // JSON-LD para reviews
  const reviewsJsonLd = {
    "@context": "https://schema.org",
    "@type": "Caterer",
    "@id": "https://elpernilet.com/#Caterer",
    name: "elpernilet",
    review: testimonials.map((testimonial) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: testimonial.name,
        jobTitle: testimonial.role,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: testimonial.rating.toString(),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: testimonial.text,
      datePublished: "2024-01-01",
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: testimonials.length.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      <section className="py-24 bg-background">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="secondary"
              className="mb-4 bg-purple-100 text-purple-800 border-purple-200"
            >
              Testimonios
            </Badge>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Lo que Dicen Nuestros Clientes
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              La satisfacción de nuestros clientes es nuestra mejor carta de
              presentación. Descubre por qué nos eligen una y otra vez
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 border-purple-50 hover:border-purple-200 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                        <Quote className="w-6 h-6 text-purple-700" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground leading-relaxed italic">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-purple-700 font-medium mt-1">
                        {testimonial.event}
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge
                        variant="secondary"
                        className="bg-purple-100 text-purple-800 border-purple-200"
                      >
                        Verificado
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-purple-700 to-violet-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Números que nos Avalan
              </h3>
            </div>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">+500</div>
                <div className="text-purple-100">Eventos Realizados</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5.0</div>
                <div className="text-purple-100">Puntuación Media</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-purple-100">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-purple-100">Clientes Repetidores</div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-purple-100 mb-6">
                Únete al club de clientes que han confiado en nuestra
                experiencia
              </p>
              <Button
                onClick={navigateToContactForm}
                className="bg-white text-purple-700 hover:bg-gray-100 cursor-pointer"
              >
                Reservar Ahora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
