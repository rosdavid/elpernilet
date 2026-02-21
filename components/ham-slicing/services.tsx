"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Utensils, Crown, Users, Clock, Award, MapPin } from "lucide-react";
import { trackCtaFormClick } from "@/hooks/use-analytics";

const services = [
  {
    icon: Crown,
    title: "Jamón Ibérico Premium",
    description:
      "Selección de jamones ibéricos, cebo de campo y cebo de las mejores dehesas españolas.",
    features: [
      "Denominación de Origen",
      "Mejores precios",
      "Trazabilidad completa",
    ],
    badge: "Premium",
  },
  {
    icon: Utensils,
    title: "Show Cooking en Vivo",
    description:
      "Espectáculo gastronómico único donde nuestros maestros cortadores crean una experiencia inolvidable.",
    features: [
      "Técnica tradicional",
      "Explicación del proceso",
      "Degustación guiada",
    ],
    badge: "Experiencia",
  },
  {
    icon: Users,
    title: "Servicio Completo",
    description:
      "Incluimos todo lo necesario: soporte, cuchillería profesional, presentación y servicio personalizado.",
    features: ["Montaje incluido", "Presentación gourmet", "Experiencia única"],
    badge: "Todo incluido",
  },
  {
    icon: Clock,
    title: "Flexibilidad Horaria",
    description:
      "Adaptamos nuestro servicio a los horarios de tu evento, desde cócteles breves hasta celebraciones largas.",
    features: [
      "Horas de servicio flexibles",
      "Múltiples pases",
      "Coordinación con catering",
    ],
    badge: "Flexible",
  },
  {
    icon: Award,
    title: "Maestros Certificados",
    description:
      "Nuestros cortadores son profesionales certificados con años de experiencia en eventos de toda clase.",
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
    description: "Servicio en toda España con especial cobertura en Cataluña.",
    features: ["Toda España", "Respuesta rápida", "Sin complicaciones"],
    badge: "Nacional",
  },
];

export function HamSlicingServices() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const navigateToContactForm = () => {
    trackCtaFormClick("services_cortador_jamon");
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

  return (
    <section id="services" className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Servicios de Cortador de Jamón para Bodas y Eventos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos el servicio más completo de cortador de jamón ibérico,
            desde la selección del producto hasta la presentación final
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-red-200 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-100 transition-colors">
                    <service.icon className="w-7 h-7 text-red-700" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-red-100 text-red-800 border-red-200"
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
                      <div className="w-1.5 h-1.5 bg-red-700 rounded-full mr-3 flex-shrink-0"></div>
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
          <div className="bg-gradient-to-r from-red-50 to-amber-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada evento es único. Hablemos sobre tus necesidades específicas y
              creemos una experiencia gastronómica perfecta para tu celebración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={navigateToContactForm}
                className="bg-red-700 hover:bg-red-800 cursor-pointer"
              >
                Solicita presupuesto
              </Button>
              <Button
                onClick={() => scrollToSection("faq")}
                variant="outline"
                className="border-red-200 text-red-700 hover:bg-red-50 cursor-pointer"
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
