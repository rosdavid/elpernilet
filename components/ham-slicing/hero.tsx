"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Award } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { VideoModal } from "@/components/video-modal";
import { trackCtaFormClick } from "@/hooks/use-analytics";

const stats = [
  { icon: Award, label: "Años de experiencia", value: "+15" },
  { icon: Star, label: "Eventos realizados", value: "+500" },
];

const trustedBy = [
  "Mas de la Sala",
  "Vila Vallbona",
  "La Premsa",
  "Oller del Mas",
  "Bodegues Abadal",
  "La Sala",
  "Aligué",
  "Eurest",
  "Alecco",
  "Torrebusquets",
  "Lo Racó d'en Carles",
  "Delicious",
  "Nou Urbisol",
  "Guateque Catering",
];

export function HamSlicingHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showAllTrusted, setShowAllTrusted] = useState(false);
  const youtubeVideoId = "CSIkAkGXwfs";
  const visibleTrustedBy = showAllTrusted ? trustedBy : trustedBy.slice(0, 5);

  const navigateToContactForm = () => {
    trackCtaFormClick("hero_cortador_jamon");
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
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-red-50 via-amber-50 to-orange-50 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge
              variant="secondary"
              className="mb-6 bg-red-100 text-red-800 border-red-200"
            >
              🏆 Maestros Cortadores Certificados
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Cortador de Jamón Ibérico
              <span className="block text-red-700">para Bodas y Eventos</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Espectáculo gastronómico único con{" "}
              <strong>maestros cortadores profesionales</strong>. Jamón ibérico
              premium cortado en vivo para bodas, eventos corporativos y
              celebraciones especiales. ¡Sorprende a tus invitados!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-red-700" />
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

            {/* CTA Buttons */}
            <div className="flex flex-col gap-3">
              <Button
                onClick={navigateToContactForm}
                size="lg"
                className="text-lg px-8 py-6 cursor-pointer w-fit"
              >
                Solicita presupuesto
              </Button>
              <p className="text-sm text-muted-foreground">
                Respuesta en menos de 24h · Sin compromiso
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-red-100">
              <p className="text-sm text-muted-foreground mb-3">
                Confían en nosotros:
              </p>
              <div className="flex flex-wrap gap-2">
                {visibleTrustedBy.map((name) => (
                  <span
                    key={name}
                    className="px-3 py-1 rounded-full border border-red-200 bg-white/70 text-xs md:text-sm font-medium text-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
              {trustedBy.length > 5 && (
                <button
                  type="button"
                  onClick={() => setShowAllTrusted((prev) => !prev)}
                  className="mt-3 text-sm font-medium text-red-700 hover:text-red-800 cursor-pointer"
                >
                  {showAllTrusted ? "Ver menos" : "Ver todos"}
                </button>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/elpernilet-event-image.webp"
                alt="Maestro cortador de jamón ibérico cortando en evento de boda"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={() => setIsVideoModalOpen(true)}
                  size="lg"
                  className="rounded-full w-20 h-20 bg-white/90 hover:bg-white text-red-700 shadow-lg cursor-pointer"
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-red-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
              ⭐ 5.0 • 47 reseñas
            </div>
          </div>
        </div>
      </div>

      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={youtubeVideoId}
      />
    </section>
  );
}
