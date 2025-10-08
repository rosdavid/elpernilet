"use client";

import { Badge } from "@/components/ui/badge";
import { LazyImage } from "@/components/lazy-image";

const galleryItems = [
  {
    src: "/evento-boda-1.webp",
    alt: "Barra de bebidas elegante para boda con cócteles premium",
    category: "Bodas",
    title: "Boda Elegante",
    description: "Barra de cócteles premium con decoración floral",
  },
  {
    src: "/evento-privado-1.webp",
    alt: "Bartender preparando gin tonic en evento corporativo",
    category: "Corporativo",
    title: "Evento Corporativo",
    description: "Mixología profesional para celebración empresarial",
  },
  {
    src: "/evento-boda-2.webp",
    alt: "Show de mixología en vivo durante celebración",
    category: "Espectáculo",
    title: "Show de Mixología",
    description: "Espectáculo de preparación de cócteles artesanales",
  },
  {
    src: "/evento-privado-2.webp",
    alt: "Barra móvil de bebidas con cristalería premium",
    category: "Premium",
    title: "Servicio Premium",
    description: "Barra móvil completamente equipada y decorada",
  },
  {
    src: "/evento-boda-3.webp",
    alt: "Cócteles coloridos servidos en copas de cristal",
    category: "Cócteles",
    title: "Cócteles Artesanales",
    description: "Bebidas únicas con ingredientes seleccionados",
  },
  {
    src: "/evento-cumpleaños-1.webp",
    alt: "Ambiente festivo con barra de bebidas y luces",
    category: "Celebración",
    title: "Cumpleaños VIP",
    description: "Celebración privada con ambiente exclusivo",
  },
];

export function DrinkBarGallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-blue-100 text-blue-800 border-blue-200"
          >
            Galería de Eventos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Nuestros Eventos de Barra de Bebidas
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada evento es único y especial. Descubre algunos de nuestros
            trabajos más destacados en barra de bebidas y mixología profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-transparent to-black/50 cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-[4/3]">
                <LazyImage
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Overlay responsivo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                               md:opacity-0 md:group-hover:opacity-100 
                               opacity-100 
                               transition-opacity duration-300" />

                {/* Content responsivo */}
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white 
                               md:transform md:translate-y-full md:group-hover:translate-y-0 
                               transform-none 
                               md:transition-transform transition-none duration-300">
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-blue-100/90 text-blue-800 border-blue-200 text-xs"
                  >
                    {item.category}
                  </Badge>
                  <h3 className="text-base md:text-lg font-serif font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/90">{item.description}</p>
                </div>

                {/* Category badge (always visible) */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-blue-800 border-0 group-hover:bg-blue-100/90"
                  >
                    {item.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Más de <strong>400 eventos realizados</strong> en toda España. Cada
            barra de bebidas es única y se adapta perfectamente al estilo y
            temática de tu celebración.
          </p>
        </div>
      </div>
    </section>
  );
}
