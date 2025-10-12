"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Shield,
  Star,
  Trophy,
  CheckCircle,
  Crown,
  Medal,
  FileCheck,
} from "lucide-react";

const certifications = [
  {
    icon: Shield,
    title: "HACCP Certificado",
    description: "Sistema de Análisis de Peligros y Puntos Críticos de Control",
    year: "2023",
    issuer: "Ministerio de Sanidad",
    category: "Seguridad Alimentaria",
  },
  {
    icon: FileCheck,
    title: "ISO 9001:2015",
    description: "Sistema de Gestión de Calidad",
    year: "2021",
    issuer: "AENOR",
    category: "Gestión de Calidad",
  },
  {
    icon: Star,
    title: "Q de Calidad Turística",
    description: "Sello de Calidad Turística Española",
    year: "2020",
    issuer: "Instituto para la Calidad Turística Española",
    category: "Excelencia Turística",
  },
  {
    icon: Award,
    title: "Premio al Mejor Catering",
    description: "Reconocimiento por la Asociación de Hostelería de Barcelona",
    year: "2019",
    issuer: "Asociación de Hostelería de Barcelona",
    category: "Premio Sectorial",
  },
  {
    icon: Trophy,
    title: "Empresa del Año",
    description: "Reconocimiento por la Cámara de Comercio de Barcelona",
    year: "2018",
    issuer: "Cámara de Comercio de Barcelona",
    category: "Reconocimiento Empresarial",
  },
  {
    icon: Medal,
    title: "Certificación Sostenibilidad",
    description: "Compromiso con prácticas sostenibles y medioambientales",
    year: "2022",
    issuer: "Fundación Ecología y Desarrollo",
    category: "Responsabilidad Social",
  },
];

const achievements = [
  {
    icon: Crown,
    title: "Líderes en el Sector",
    description: "Más de 800 eventos realizados con éxito",
    value: "800+",
    color: "text-amber-600",
  },
  {
    icon: CheckCircle,
    title: "Clientes Satisfechos",
    description: "98% de nuestros clientes nos recomiendan",
    value: "98%",
    color: "text-green-600",
  },
  {
    icon: Star,
    title: "Valoración Excelente",
    description: "Puntuación media de 4.9 sobre 5 en todas las plataformas",
    value: "4.9/5",
    color: "text-blue-600",
  },
  {
    icon: Trophy,
    title: "Años de Experiencia",
    description: "Trayectoria consolidada en el sector de eventos",
    value: "15+",
    color: "text-purple-600",
  },
];

export function CertificationsAndAchievements() {
  return (
    <section className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            <Award className="w-4 h-4 mr-2" />
            Reconocimientos y Certificaciones
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            La Excelencia, Reconocida
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nuestra trayectoria está respaldada por certificaciones oficiales y
            reconocimientos del sector. Cada acreditación representa nuestro
            compromiso inquebrantable con la calidad y la excelencia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary/20 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <cert.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <Badge variant="outline" className="mb-2 text-xs">
                      {cert.category}
                    </Badge>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">
                      {cert.year} • {cert.issuer}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Logros que Nos Definen
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nuestros números no son solo estadísticas; son el resultado de
              años de dedicación, pasión y compromiso con la excelencia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center p-6 bg-background/50 rounded-xl hover:bg-background/80 transition-colors"
              >
                <achievement.icon
                  className={`w-12 h-12 ${achievement.color} mx-auto mb-4`}
                />
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                  {achievement.value}
                </div>
                <h4 className="text-lg font-serif font-bold text-foreground mb-2">
                  {achievement.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background rounded-2xl p-8 md:p-12 border-2 border-primary/10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Compromiso con la Calidad
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Cada certificación, cada premio, cada reconocimiento, representa
              nuestro compromiso diario con la excelencia. No son solo
              acreditaciones; son promesas cumplidas a nuestros clientes de que
              su evento estará en las mejores manos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">
                  Cumplimiento Normativo
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">0</div>
                <div className="text-sm text-muted-foreground">
                  Incidentes Reportados
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">∞</div>
                <div className="text-sm text-muted-foreground">
                  Compromiso con la Excelencia
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
