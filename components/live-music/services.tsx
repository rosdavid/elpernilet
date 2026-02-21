"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Music, Guitar, Mic, Piano, Users, MapPin } from "lucide-react";
import { trackEvent } from "@/hooks/use-analytics";

const services = [
  {
    icon: Music,
    title: "Múltiples Estilos",
    description:
      "Jazz, bossa nova, flamenco, música clásica, acústico, pop, rock suave y más. Adaptamos el repertorio a la atmósfera de tu evento.",
    features: [
      "Jazz y bossa nova",
      "Música clásica",
      "Acústico y pop",
    ],
    badge: "Variedad",
  },
  {
    icon: Guitar,
    title: "Formaciones Flexibles",
    description:
      "Desde solistas y dúos hasta tríos, cuartetos u orquestas completas. Seleccionamos la formación ideal según el tamaño de tu evento.",
    features: [
      "Solistas y dúos",
      "Tríos y cuartetos",
      "Orquestas",
    ],
    badge: "Adaptable",
  },
  {
    icon: Mic,
    title: "DJ y Animación",
    description:
      "DJs profesionales para animar la fiesta, desde el cocktail hasta el baile. Equipos de sonido de alta calidad incluidos.",
    features: [
      "DJ profesional",
      "Sonido premium",
      "Animación garantizada",
    ],
    badge: "Fiesta",
  },
  {
    icon: Piano,
    title: "Ceremonias Especiales",
    description:
      "Música en vivo para la ceremonia nupcial, entrada, primer baile o momentos emotivos. Repertorio personalizado.",
    features: [
      "Ceremonias nupciales",
      "Primer baile",
      "Repertorio personalizado",
    ],
    badge: "Emocional",
  },
  {
    icon: Users,
    title: "Coordinación Total",
    description:
      "Coordinamos con el venue, catering y otros proveedores para que la música encaje perfectamente en cada momento.",
    features: [
      "Timing perfecto",
      "Montaje incluido",
      "Logística coordinada",
    ],
    badge: "Integral",
  },
  {
    icon: MapPin,
    title: "Cobertura Nacional",
    description:
      "Músicos y grupos en toda España con especial cobertura en Cataluña, Madrid, Valencia y costa mediterránea.",
    features: [
      "Toda España",
      "Red de músicos",
      "Sin gastos ocultos",
    ],
    badge: "Nacional",
  },
];

export function LiveMusicServices() {
  const navigateToContactForm = () => {
    trackEvent("cta_click", {
      cta_location: "services_section",
      cta_text: "Solicita presupuesto",
      page: "musica-en-directo",
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
            className="mb-4 bg-amber-100 text-amber-800 border-amber-200"
          >
            Nuestros Servicios
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Música para Cada Momento
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ofrecemos el servicio más completo de música en directo para eventos,
            desde jazz en el cóctel hasta fiesta con DJ, pasando por ceremonias
            emotivas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-amber-200 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                    <service.icon className="w-7 h-7 text-amber-700" />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-amber-100 text-amber-800 border-amber-200"
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
                      <div className="w-1.5 h-1.5 bg-amber-700 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              ¿Necesitas un repertorio personalizado?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada evento es único. Cuéntanos tus preferencias musicales, la
              atmósfera deseada y creamos una propuesta a medida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={navigateToContactForm}
                className="bg-amber-700 hover:bg-amber-800 cursor-pointer"
              >
                Solicita presupuesto
              </Button>
              <Button
                onClick={() => scrollToSection("faq")}
                variant="outline"
                className="border-amber-200 text-amber-700 hover:bg-amber-50 cursor-pointer"
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
