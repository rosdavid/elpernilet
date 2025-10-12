"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  Users,
  Award,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { trackEvent } from "@/hooks/use-analytics";

const advantages = [
  {
    icon: Shield,
    title: "Servicio Integral Garantizado",
    description:
      "Desde la planificación hasta el último detalle, nos encargamos de todo. Tú solo disfruta de tu evento.",
    benefits: [
      "Coordinación completa con el local",
      "Equipo profesional certificado",
      "Plan B para imprevistos",
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Clock,
    title: "Puntualidad y Profesionalismo",
    description:
      "Llegamos con antelación, preparamos todo meticulosamente y ejecutamos con precisión milimétrica.",
    benefits: [
      "Setup 2 horas antes del evento",
      "Tiempos de servicio optimizados",
      "Coordinación perfecta con proveedores",
      "Limpieza y recogida incluidas",
    ],
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Users,
    title: "Atención Personalizada 24/7",
    description:
      "Cada cliente es único. Te asignamos un coordinador personal que estará disponible en todo momento.",
    benefits: [
      "Coordinador dedicado",
      "Comunicación directa y constante",
      "Adaptación a necesidades especiales",
      "Soporte post-evento",
    ],
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    icon: Award,
    title: "Calidad Premium Certificada",
    description:
      "Solo trabajamos con proveedores certificados y aplicamos los más altos estándares de calidad.",
    benefits: [
      "Ingredientes premium seleccionados",
      "Control de calidad en cada paso",
      "Garantía de satisfacción",
    ],
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
  {
    icon: Heart,
    title: "Pasión por los Detalles",
    description:
      "Creamos experiencias memorables cuidando cada detalle, desde la presentación hasta el servicio.",
    benefits: [
      "Presentación artística de alimentos",
      "Decoración coordinada con el evento",
      "Atención personalizada a invitados",
      "Recuerdos personalizados",
    ],
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: Star,
    title: "Experiencia Comprobada",
    description:
      "Más de 15 años y 500 eventos nos avalan. Conocemos todos los escenarios posibles.",
    benefits: [
      "Experiencia en todo tipo de eventos",
      "Equipo con formación continua",
      "Base de datos de proveedores verificados",
      "Casos de éxito documentados",
    ],
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
];

const testimonials = [
  {
    name: "María González",
    event: "Boda",
    quote:
      "El cortador de jamón fue el punto culminante de nuestra boda. Los invitados no paraban de hablar del espectáculo y la calidad del jamón ibérico era excepcional. Totalmente recomendable.",
    rating: 5,
  },
  {
    name: "Carlos Ruiz",
    event: "Evento Corporativo",
    quote:
      "Profesionalidad absoluta. Llegaron puntuales, montaron todo perfectamente y el show fue impresionante. Nuestros clientes internacionales quedaron fascinados con la cultura gastronómica española.",
    rating: 5,
  },
  {
    name: "Ana Martín",
    event: "Boda",
    quote:
      "Trabajo con elpernilet desde hace 3 años y siempre superan las expectativas. Son puntuales, profesionales y el resultado siempre es espectacular. Mis novias los adoran.",
    rating: 5,
  },
];

export function WhyChooseUs() {
  const navigateToContactForm = () => {
    trackEvent("cta_click", {
      cta_location: "about_hero_section",
      cta_text: "Hablemos de tu evento",
      page: "sobre-nosotros",
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

  return (
    <section className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            ¿Por Qué Elegirnos?
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            La Diferencia que Marca la Diferencia
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            No somos solo una empresa de servicios; somos tu socio en la
            creación de momentos inolvidables. Descubre por qué miles de
            clientes confían en nosotros año tras año.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-full ${advantage.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    <advantage.icon className={`w-7 h-7 ${advantage.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {advantage.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {advantage.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Lo que Dicen Nuestros Clientes
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Las mejores referencias vienen de quienes han vivido la
              experiencia. Estas son algunas de las historias que nos inspiran
              cada día.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-background/50 rounded-xl p-6 hover:bg-background/80 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-500 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="text-sm">
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-primary">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-background rounded-2xl p-8 md:p-12 border-2 border-primary/10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              ¿Listo para Crear tu Momento Perfecto?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              No esperes más para hacer realidad ese evento especial. Con
              nuestra experiencia y compromiso, garantizamos que será
              exactamente como lo has imaginado, o mejor. Contáctanos hoy y
              comienza a planificar tu celebración perfecta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={navigateToContactForm}
                className="flex items-center gap-2 cursor-pointer"
              >
                Solicitar Presupuesto
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
