"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Crown, Clock, Award, MapPin, Utensils } from "lucide-react";
import { trackEvent } from "@/hooks/use-analytics";

const services = [
  {
    icon: Crown,
    title: "Servicio Premium",
    description:
      "Atención personalizada con camareros profesionales certificados y formación especializada en protocolo y etiqueta.",
    features: [
      "Camareros certificados",
      "Protocolo profesional",
      "Atención personalizada",
    ],
    badge: "Premium",
  },
  {
    icon: Users,
    title: "Equipo Completo",
    description:
      "Uniforme profesional completo, vajilla, cristalería y mantelería de alta calidad incluida.",
    features: ["Uniforme completo", "Vajilla", "Equipamiento incluido"],
    badge: "Todo incluido",
  },
  {
    icon: Utensils,
    title: "Múltiples Servicios",
    description:
      "Servicio a la rusa, buffet asistido, cóctel, mesas redondas y servicio personalizado según tus necesidades.",
    features: ["Servicio a la rusa", "Buffet asistido", "Cóctel"],
    badge: "Flexible",
  },
  {
    icon: Clock,
    title: "Horarios Flexibles",
    description:
      "Adaptamos nuestro servicio a los horarios específicos de tu evento, desde 4 hasta 12 horas de servicio.",
    features: [
      "Horarios flexibles",
      "Servicio continuo",
      "Coordinación perfecta",
    ],
    badge: "24/7",
  },
  {
    icon: Award,
    title: "Certificaciones",
    description:
      "Nuestros camareros cuentan con certificaciones oficiales en manipulación de alimentos y atención al cliente.",
    features: [
      "Certificación oficial",
      "Manipulación alimentos",
      "Atención al cliente",
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

export function WaitersServices() {
  const navigateToContactForm = () => {
    trackEvent("cta_click", {
      cta_location: "services_section",
      cta_text: "Solicitar Presupuesto",
      page: "camareros",
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
            className="mb-4 bg-purple-100 text-purple-800 border-purple-200"
          >
            Nuestros Servicios
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Servicio de Camareros Completo
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos el servicio más completo de camareros profesionales, desde
            atención personalizada hasta equipamiento completo para un servicio
            impecable en tu evento
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-purple-200 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-full bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors">
                    <service.icon className="w-7 h-7 text-purple-700" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-purple-100 text-purple-800 border-purple-200"
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
                      <div className="w-1.5 h-1.5 bg-purple-700 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              ¿Necesitas un servicio personalizado?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada evento es único. Hablemos sobre tus necesidades específicas y
              creemos un servicio de camareros perfecto para tu celebración.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={navigateToContactForm}
                className="bg-purple-700 hover:bg-purple-800 cursor-pointer"
              >
                Solicitar Presupuesto
              </Button>
              <Button
                onClick={() => scrollToSection("faq")}
                variant="outline"
                className="border-purple-200 text-purple-700 hover:bg-purple-50 cursor-pointer"
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
