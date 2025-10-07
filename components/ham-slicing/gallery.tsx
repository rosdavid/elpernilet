"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const galleryImages = [
  {
    src: "/evento-boda-4.webp",
    alt: "Maestra cortadora de jamón en boda elegante",
    category: "Bodas",
  },
  {
    src: "/evento-boda-2.webp",
    alt: "Corte de jamón ibérico en evento corporativo",
    category: "Corporativo",
  },
  {
    src: "/evento-boda-3.webp",
    alt: "Presentación gourmet de jamón ibérico",
    category: "Presentación",
  },
  {
    src: "/evento-boda-4.webp",
    alt: "Show cooking de jamón en celebración privada",
    category: "Eventos Privados",
  },
  {
    src: "/evento-boda-5.webp",
    alt: "Montaje profesional para corte de jamón",
    category: "Setup",
  },
  {
    src: "/evento-boda-de-oro-1.webp",
    alt: "Degustación de jamón ibérico de bellota",
    category: "Degustación",
  },
];

export function HamSlicingGallery() {
  const navigateToContactForm = () => {
    // Si estamos en la página principal, hacer scroll directo
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
    <section className="py-24 bg-gradient-to-b from-background to-accent/10">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-red-100 text-red-800 border-red-200"
          >
            Galería de Eventos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Nuestro Trabajo en Acción
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Descubre la experiencia única que creamos en cada evento. Cada corte
            es una obra de arte gastronómica
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-0"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-foreground border-0"
                  >
                    {image.category}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              Tu Evento Será el Próximo
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Cada evento es único y merece una atención especial. Permítenos
              crear una experiencia gastronómica inolvidable para ti y tus
              invitados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={navigateToContactForm}
                className="bg-red-700 hover:bg-red-800 cursor-pointer"
              >
                Solicitar Presupuesto
              </Button>
              <Button
                onClick={() => {
                  window.open("https://www.instagram.com/elpernilet", "_blank");
                }}
                variant="outline"
                className="border-red-200 text-red-700 hover:bg-red-50 cursor-pointer"
              >
                Ver más en Instagram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
