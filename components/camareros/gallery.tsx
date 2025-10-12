"use client";

import { Badge } from "@/components/ui/badge";
import { LazyImage } from "@/components/lazy-image";

const galleryItems = [
  {
    src: "/evento-boda-1.webp",
    alt: "Servicio de camareros elegante para boda con atención profesional",
    category: "Bodas",
    title: "Boda Elegante",
    description: "Servicio premium con camareros profesionales",
  },
  {
    src: "/evento-privado-1.webp",
    alt: "Camareros sirviendo en evento corporativo con protocolo",
    category: "Corporativo",
    title: "Evento Corporativo",
    description: "Atención profesional para celebración empresarial",
  },
  {
    src: "/evento-boda-2.webp",
    alt: "Servicio de mesa impecable durante celebración",
    category: "Servicio",
    title: "Servicio de Mesa",
    description: "Atención detallada y protocolo profesional",
  },
  {
    src: "/evento-privado-2.webp",
    alt: "Camareros con uniforme profesional en evento",
    category: "Profesional",
    title: "Equipo Profesional",
    description: "Uniforme completo y servicio impecable",
  },
  {
    src: "/evento-boda-3.webp",
    alt: "Atención personalizada durante evento especial",
    category: "Personalizado",
    title: "Servicio Personalizado",
    description: "Atención adaptada a cada invitado",
  },
  {
    src: "/evento-cumpleaños-1.webp",
    alt: "Ambiente festivo con servicio de camareros",
    category: "Celebración",
    title: "Celebración VIP",
    description: "Servicio exclusivo para eventos especiales",
  },
];

export function WaitersGallery() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-purple-100 text-purple-800 border-purple-200"
          >
            Galería de Eventos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Nuestros Eventos de Servicio de Camareros
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Cada evento es único y especial. Descubre algunos de nuestros
            trabajos más destacados en servicio profesional de camareros y
            atención al cliente
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
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent 
                               md:opacity-0 md:group-hover:opacity-100 
                               opacity-100 
                               transition-opacity duration-300"
                />

                {/* Content responsivo */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white 
                               md:transform md:translate-y-full md:group-hover:translate-y-0 
                               transform-none 
                               md:transition-transform transition-none duration-300"
                >
                  <Badge
                    variant="secondary"
                    className="mb-2 bg-purple-100/90 text-purple-800 border-purple-200 text-xs"
                  >
                    {item.category}
                  </Badge>
                  <h3 className="text-base md:text-lg font-serif font-bold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/90">
                    {item.description}
                  </p>
                </div>

                {/* Category badge (always visible) */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-purple-800 border-0 group-hover:bg-purple-100/90"
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
            Más de <strong>600 eventos realizados</strong> en toda España. Cada
            servicio de camareros es único y se adapta perfectamente al estilo y
            protocolo de tu celebración.
          </p>
        </div>
      </div>
    </section>
  );
}
