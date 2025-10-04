import { Card, CardContent } from "@/components/ui/card";
import { Utensils, Wine, Users } from "lucide-react";

const services = [
  {
    icon: Utensils,
    title: "Cortador de jamón en vivo",
    description:
      "Maestros cortadores profesionales que ofrecen un espectáculo gastronómico único, cortando jamón ibérico de la más alta calidad ante sus invitados.",
  },
  {
    icon: Wine,
    title: "Barra de bebidas y aperitivos",
    description:
      "Selección premium de bebidas, cócteles artesanales y aperitivos gourmet preparados por nuestro equipo de expertos bartenders y chefs.",
  },
  {
    icon: Users,
    title: "Servicio de camareros",
    description:
      "Personal profesional y experimentado que garantiza un servicio impecable y atención personalizada durante todo su evento.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">
            Nuestros servicios
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ofrecemos servicios de catering premium diseñados para hacer de su
            evento una experiencia inolvidable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-accent transition-colors"
            >
              <CardContent className="pt-8 pb-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-red-800" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
