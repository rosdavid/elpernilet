"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Utensils, Crown, Users, Clock, Award, MapPin } from "lucide-react";
import { trackEvent } from "@/hooks/use-analytics";

const services = [
  {
    icon: Crown,
    title: "Aperitivos de Calidad",
    description:
      "Selección de aperitivos de calidad con ingredientes de primera calidad y presentaciones elegantes.",
    features: [
      "Ingredientes frescos",
      "Presentación gourmet",
      "Variedad temática",
    ],
    badge: "Premium",
  },
  {
    icon: Utensils,
    title: "Finger Foods Gourmet",
    description:
      "Aperitivos en porciones individuales perfectos para eventos, con opciones calientes y frías.",
    features: [
      "Porciones individuales",
      "Opciones calientes/frías",
      "Sabores innovadores",
    ],
    badge: "Gourmet",
  },
  {
    icon: Users,
    title: "Servicio Completo",
    description:
      "Incluimos todo lo necesario, barra equipada, vajilla, decoración y todo lo necesario para un servicio impecable.",
    features: ["Montaje incluido", "Vajilla", "Decoración temática"],
    badge: "Todo incluido",
  },
  {
    icon: Clock,
    title: "Flexibilidad Total",
    description:
      "Adaptamos nuestro servicio a los horarios y necesidades específicas de tu evento.",
    features: [
      "Horarios flexibles",
      "Múltiples pases",
      "Coordinación perfecta",
    ],
    badge: "Flexible",
  },
  {
    icon: Award,
    title: "El Queso es Nuestro Fuerte",
    description:
      "Nuestra selección de quesos es excepcional, con variedades nacionales e internacionales, listos para sorprender a tus invitados.",
    features: [
      "Certificación oficial",
      "15+ años experiencia",
      "Creatividad culinaria",
    ],
    badge: "Certificado",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description:
      "Servicio disponible en toda España, con especial atención en Barcelona y Cataluña.",
    features: ["Toda España", "Base en Barcelona", "Desplazamiento incluido"],
    badge: "Nacional",
  },
];

export function AppetizerBarServices() {
  const navigateToContactForm = () => {
    trackEvent("cta_click", {
      cta_location: "services_section",
      cta_text: "Solicitar Presupuesto",
      page: "barra-aperitivos",
    });

    if (window.location.pathname === "/") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-green-100 text-green-800 border-green-200"
          >
            Nuestros Servicios
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Barra de Aperitivos Completa
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos el servicio más completo de barra de aperitivos gourmet,
            desde canapés artesanales hasta finger foods innovadores con los
            mejores productos del mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-green-200 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                    <service.icon className="w-7 h-7 text-green-700" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 border-green-200"
                  >
                    {service.badge}
                  </Badge>
                </div>

                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-green-700 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-lime-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada evento es único. Hablemos sobre tus necesidades específicas y
              creemos una barra de aperitivos perfecta para tu celebración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={navigateToContactForm}
                className="bg-green-700 hover:bg-green-800 cursor-pointer"
              >
                Solicitar Presupuesto
              </Button>
              <Button
                onClick={() => scrollToSection("faq")}
                variant="outline"
                className="border-green-200 text-green-700 hover:bg-green-50 cursor-pointer"
              >
                Ver Preguntas Frecuentes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
