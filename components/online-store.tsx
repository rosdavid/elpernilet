"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ShoppingCart, Award, Truck, Shield } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Award,
    title: "Selección Premium",
    description: "Productos gourmet seleccionados por expertos",
  },
  {
    icon: Truck,
    title: "Envío Nacional",
    description: "Entrega rápida en toda España",
  },
  {
    icon: Shield,
    title: "Calidad Garantizada",
    description: "Los mismos productos que usamos en eventos",
  },
];

export function OnlineStore() {
  return (
    <section
      id="online-store"
      className="py-24 md:py-32 bg-gradient-to-br from-accent/20 to-secondary/30"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Tienda Online
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">
            Descubre <span className="text-primary">liquoly</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed mb-8">
            Nuestra tienda online de productos. Los mismos productos de alta
            calidad que utilizamos en nuestros eventos, ahora disponibles para
            ti
          </p>

          {/* Imagen destacada de liquoly */}
          <div className="relative w-full max-w-2xl mx-auto mb-8">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/liquoly-image.webp"
                alt="Productos gourmet liquoly - jamones, vinos, cervezas y licores varios"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Características principales */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-background/80 backdrop-blur-sm"
            >
              <CardContent className="pt-8 pb-6 text-center">
                <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-red-800" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Card className="border-2 border-primary/20 bg-gradient-to-r from-background to-primary/5 p-8 md:p-12 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="text-3xl font-bold text-primary">liquoly</div>
                <Badge className="bg-primary text-primary-foreground">
                  Tu tienda online
                </Badge>
              </div>

              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Lleva la excelencia a tu mesa
              </h3>

              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Más de 100 productos seleccionados. Desde jamones ibéricos hasta
                vinos, cervezas y licores varios. Todo con la calidad que nos
                caracteriza.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 cursor-pointer group"
                >
                  <a
                    href="https://liquoly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Visita liquoly
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">+100</div>
                  <div className="text-sm text-muted-foreground">Productos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    24 - 48h
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Envío rápido
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Garantía</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">★4.9</div>
                  <div className="text-sm text-muted-foreground">
                    Valoración
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
