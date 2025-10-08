"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wine, Sparkles, Users, Clock, Award, MapPin } from "lucide-react";
import { trackEvent } from "@/hooks/use-analytics";

const services = [
  {
    icon: Wine,
    title: "Cócteles Artesanales",
    description:
      "Creación de cócteles únicos con ingredientes premium, técnicas de mixología avanzada y presentación espectacular.",
    features: [
      "Recetas exclusivas",
      "Ingredientes premium",
      "Presentación profesional",
    ],
    badge: "Premium",
  },
  {
    icon: Sparkles,
    title: "Productos de calidad",
    description:
      "Nuestra selección de bebidas incluye licores de alta gama, vinos selectos y mixers artesanales.",
    features: ["Top marcas", "Ingredientes frescos", "Mixers artesanales"],
    badge: "Experiencia",
  },
  {
    icon: Users,
    title: "Servicio Completo",
    description:
      "Incluimos barra móvil, cristalería, hielo, decoración y todo lo necesario para un servicio impecable.",
    features: [
      "Montaje incluido",
      "Cristalería premium",
      "Decoración temática",
    ],
    badge: "Todo incluido",
  },
  {
    icon: Clock,
    title: "Flexibilidad Total",
    description:
      "Adaptamos nuestro servicio a los horarios y necesidades específicas de tu evento.",
    features: [
      "Horarios flexibles",
      "Múltiples formatos",
      "Coordinación perfecta",
    ],
    badge: "Flexible",
  },
  {
    icon: Award,
    title: "Bartenders Certificados",
    description:
      "Nuestros bartenders son profesionales certificados con amplia experiencia en eventos de alta gama.",
    features: [
      "Certificación oficial",
      "15+ años experiencia",
      "Formación continua",
    ],
    badge: "Certificado",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description:
      "Servicio en toda España con especial cobertura en Cataluña, Madrid, Valencia y Andalucía.",
    features: ["Toda España", "Logística propia", "Sin gastos ocultos"],
    badge: "Nacional",
  },
];

export function DrinkBarServices() {
  const navigateToContactForm = () => {
    trackEvent("cta_click", {
      cta_location: "services_section",
      cta_text: "Solicitar Presupuesto",
      page: "barra-bebidas",
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Servicios de Barra de Bebidas
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos el servicio más completo de barra de bebidas premium,
            desde cócteles artesanales hasta espectáculos de mixología con los
            mejores productos del mercado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <service.icon className="w-7 h-7 text-blue-700" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-blue-100 text-blue-800 border-blue-200"
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
                      <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada evento es único. Creamos cartas de bebidas personalizadas y
              adaptamos nuestro servicio a tu temática y preferencias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={navigateToContactForm}
                className="bg-blue-700 hover:bg-blue-800 cursor-pointer"
              >
                Solicitar Presupuesto
              </Button>
              <Button
                onClick={() => scrollToSection("faq")}
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50 cursor-pointer"
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
