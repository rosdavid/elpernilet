"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  Users,
  TreePine,
  GraduationCap,
  HandHeart,
  Building,
} from "lucide-react";

/* const communityImpact = [
  {
    icon: Heart,
    title: "Apoyo a Familias Vulnerables",
    description:
      "Colaboramos con organizaciones locales para proporcionar catering gratuito en eventos solidarios y celebraciones de familias en situación de vulnerabilidad.",
    impact: "200+ familias ayudadas",
    category: "Solidaridad",
  },
  {
    icon: TreePine,
    title: "Compromiso Medioambiental",
    description:
      "Implementamos prácticas sostenibles: reducción de residuos, proveedores locales, empaques biodegradables y compensación de carbono en todos nuestros eventos.",
    impact: "30% reducción CO2",
    category: "Sostenibilidad",
  },
  {
    icon: GraduationCap,
    title: "Formación Profesional",
    description:
      "Patrocinamos programas de formación en hostelería y catering para jóvenes, ofreciendo prácticas profesionales y mentoría a nuevos talentos del sector.",
    impact: "50+ jóvenes formados",
    category: "Educación",
  },
  {
    icon: Building,
    title: "Colaboración Institucional",
    description:
      "Participamos activamente en eventos oficiales de Barcelona, apoyando iniciativas culturales, deportivas y sociales que benefician a la comunidad.",
    impact: "25+ eventos institucionales",
    category: "Comunidad",
  },
  {
    icon: HandHeart,
    title: "Banco de Alimentos",
    description:
      "Donamos excedentes alimentarios de calidad a bancos de alimentos locales, asegurando que nada se desperdicie y llegue a quienes más lo necesitan.",
    impact: "500+ kg donados mensualmente",
    category: "Alimentación",
  },
  {
    icon: Users,
    title: "Empleo Local",
    description:
      "Priorizamos la contratación de talento local y colaboramos con proveedores de Barcelona y Cataluña, contribuyendo al desarrollo económico regional.",
    impact: "25 empleos directos creados",
    category: "Empleo",
  },
]; */

const futureVision = [
  {
    title: "Innovación Tecnológica",
    description:
      "Implementaremos IA para optimizar la planificación de eventos y realidad aumentada para previsualizar decoraciones.",
    timeline: "2026 - 2027",
  },
  {
    title: "Expansión Internacional",
    description:
      "Llevaremos nuestra experiencia española a mercados europeos, manteniendo los estándares de calidad que nos caracterizan.",
    timeline: "2027 - 2028",
  },
  {
    title: "Centro de Formación",
    description:
      "Crearemos una academia propia para formar a los próximos profesionales del sector del catering y eventos.",
    timeline: "2028 - 2029",
  },
  {
    title: "Plataforma Digital",
    description:
      "Desarrollaremos una app integral para que nuestros clientes puedan gestionar sus eventos desde cualquier lugar.",
    timeline: "2029 - 2030",
  },
];

export function CommunityImpact() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            <Heart className="w-4 h-4 mr-2" />
            Más Allá del Negocio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Nuestro Impacto en la Comunidad
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Creemos que el éxito verdadero se mide no solo por los resultados
            económicos, sino por la huella positiva que dejamos en nuestra
            comunidad. Cada evento es una oportunidad para contribuir al bien
            común.
          </p>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {communityImpact.map((impact, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <impact.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {impact.category}
                    </Badge>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-2">
                      {impact.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {impact.description}
                </p>
                <div className="bg-primary/5 rounded-lg p-3">
                  <div className="text-sm font-semibold text-primary">
                    {impact.impact}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Mirando al Futuro
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestra historia no termina aquí. Con visión y determinación,
              seguimos innovando para ofrecer experiencias cada vez más
              excepcionales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {futureVision.map((vision, index) => (
              <div
                key={index}
                className="bg-background/50 rounded-xl p-6 hover:bg-background/80 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-serif font-bold text-foreground">
                    {vision.title}
                  </h4>
                  <Badge variant="outline" className="text-xs">
                    {vision.timeline}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {vision.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-background rounded-2xl p-8 md:p-12 border-2 border-primary/10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Valores que Guían Nuestro Camino
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Nuestra responsabilidad social no es una estrategia de marketing;
              es parte fundamental de nuestra identidad. Cada decisión que
              tomamos considera su impacto en las personas, el medio ambiente y
              la comunidad.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-bold text-foreground mb-2">
                  Compromiso Social
                </h4>
                <p className="text-sm text-muted-foreground">
                  Contribuir activamente al bienestar de nuestra comunidad
                </p>
              </div>
              <div className="text-center">
                <TreePine className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-bold text-foreground mb-2">
                  Sostenibilidad
                </h4>
                <p className="text-sm text-muted-foreground">
                  Cuidar del planeta para las generaciones futuras
                </p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h4 className="font-serif font-bold text-foreground mb-2">
                  Desarrollo Local
                </h4>
                <p className="text-sm text-muted-foreground">
                  Apoyar el crecimiento económico de nuestra región
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
