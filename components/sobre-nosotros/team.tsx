"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChefHat, Users, Award, Mail, Phone } from "lucide-react";
import { trackEvent } from "@/hooks/use-analytics";

const team = [
  {
    name: "María González",
    role: "Directora General",
    specialty: "Gestión de Eventos",
    experience: "15 años",
    image: "/team/maria-gonzalez.jpg",
    description:
      "Con más de 15 años liderando equipos de catering, María combina su pasión por la gastronomía con una visión estratégica para crear experiencias inolvidables.",
    achievements: [
      "+800 eventos coordinados",
      "Certificación en Gestión de Eventos",
    ],
    contact: {
      email: "maria@elpernilet.com",
      phone: "+34 600 123 456",
    },
  },
  {
    name: "Carlos Rodríguez",
    role: "Chef Ejecutivo",
    specialty: "Cocina Mediterránea",
    experience: "12 años",
    image: "/team/carlos-rodriguez.jpg",
    description:
      "Maestro de la cocina mediterránea con formación en prestigiosos restaurantes de España. Especialista en jamones ibéricos y aperitivos tradicionales.",
    achievements: [
      "Premio al Mejor Chef Joven 2018",
      "Especialista en Jamón Ibérico",
    ],
    contact: {
      email: "carlos@elpernilet.com",
      phone: "+34 600 123 457",
    },
  },
  {
    name: "Ana Martínez",
    role: "Directora de Bebidas",
    specialty: "Sommelier y Coctelería",
    experience: "10 años",
    image: "/team/ana-martinez.jpg",
    description:
      "Sommelier certificada con pasión por las bebidas. Crea experiencias únicas combinando vinos premium con cócteles innovadores.",
    achievements: [
      "Certificación WSET",
      "Campeona Nacional de Coctelería 2020",
    ],
    contact: {
      email: "ana@elpernilet.com",
      phone: "+34 600 123 458",
    },
  },
  {
    name: "David López",
    role: "Coordinador de Servicio",
    specialty: "Atención al Cliente",
    experience: "8 años",
    image: "/team/david-lopez.jpg",
    description:
      "Especialista en coordinación de eventos con foco en la satisfacción del cliente. Garantiza que cada detalle se ejecute a la perfección.",
    achievements: [
      "Certificación en Servicio al Cliente",
      "98% satisfacción garantizada",
    ],
    contact: {
      email: "david@elpernilet.com",
      phone: "+34 600 123 459",
    },
  },
];

export function OurTeam() {
  const handleContact = (member: (typeof team)[0]) => {
    trackEvent("team_contact_click", {
      member_name: member.name,
      member_role: member.role,
    });
  };

  return (
    <section className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-primary/10 text-primary border-primary/20"
          >
            Nuestro Equipo
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Profesionales Apasionados
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Detrás de cada evento exitoso hay un equipo de profesionales
            apasionados por su trabajo. Conoce a las personas que harán que tu
            celebración sea inolvidable.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {team.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="md:flex">
                <div className="md:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                </div>
                <CardContent className="md:w-2/3 p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-3">
                      Especialista en {member.specialty} • {member.experience}{" "}
                      de experiencia
                    </p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {member.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Logros destacados:
                    </h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {member.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <Award className="w-3 h-3 text-primary flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleContact(member)}
                      className="flex items-center gap-2"
                    >
                      <Mail className="w-3 h-3" />
                      Contactar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleContact(member)}
                      className="flex items-center gap-2"
                    >
                      <Phone className="w-3 h-3" />
                      Llamar
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl p-8 md:p-12 text-center">
          <ChefHat className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Un Equipo, Una Pasión
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Nuestro equipo combina décadas de experiencia con una pasión
            inquebrantable por crear momentos mágicos. Cada miembro aporta su
            expertise única para garantizar que tu evento sea perfecto en todos
            los aspectos.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">45+</div>
              <div className="text-sm text-muted-foreground">
                Años de Experiencia Colectiva
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">
                Certificaciones Profesionales
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">
                Satisfacción del Cliente
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">
                Soporte Disponible
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
