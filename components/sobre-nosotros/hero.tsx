"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Star, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { trackEvent } from "@/hooks/use-analytics";

const stats = [
  { icon: Award, label: "Años de experiencia", value: "+15" },
  { icon: Users, label: "Eventos realizados", value: "+500" },
  { icon: Star, label: "Valoración media", value: "5.0" },
  { icon: Heart, label: "Clientes satisfechos", value: "98%" },
];

export function AboutHero() {
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
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge
              variant="secondary"
              className="mb-6 bg-primary/10 text-primary border-primary/20"
            >
              🏆 Más de 15 años creando momentos inolvidables
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Pasión por la Excelencia
              <span className="block text-primary">en Cada Detalle</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Desde 2009, hemos dedicado nuestra vida a crear experiencias
              extraordinarias. Cada evento es único, cada cliente especial, y
              cada momento merece ser perfecto. Somos más que una empresa de
              servicios para eventos; somos tus aliados en los momentos más
              importantes de tu vida.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={navigateToContactForm}
                size="lg"
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 cursor-pointer"
              >
                Hablemos de tu evento
              </Button>
              <Link href="/nuestra-historia">
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 cursor-pointer"
                >
                  Conoce nuestra historia
                </Button>
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-3">
                Confían en nosotros:
              </p>
              <div className="flex items-center gap-6">
                <span className="text-sm font-medium">Mas de la Sala</span>
                <span className="text-sm font-medium">Vila Vallbona</span>
                <span className="text-sm font-medium">La Premsa</span>
                <span className="text-sm font-medium">Oller del Mas</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/elpernilet-event-image.webp"
                alt="Equipo de elpernilet trabajando en un evento especial"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                  <p className="text-sm font-medium text-foreground">
                    Cada evento es una historia que contar, y nosotros somos los
                    narradores.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    — Equipo elpernilet
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⭐ 5.0 • 47 reseñas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
