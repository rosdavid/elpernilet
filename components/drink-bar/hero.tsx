"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Award, Wine } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { VideoModal } from "@/components/video-modal";
import { trackCtaFormClick, trackEvent } from "@/hooks/use-analytics";

const stats = [
  { icon: Award, label: "Años de experiencia", value: "+15" },
  { icon: Star, label: "Eventos realizados", value: "+400" },
  { icon: Wine, label: "Productos diferentes", value: "+50" },
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

export function DrinkBarHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showAllTrusted, setShowAllTrusted] = useState(false);
  const youtubeVideoId = "CSIkAkGXwfs";
  const visibleTrustedBy = showAllTrusted ? trustedBy : trustedBy.slice(0, 5);

  const navigateToContactForm = () => {
    trackCtaFormClick("hero_barra_bebidas");
    if (window.location.pathname === "/") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
  };

  const handleVideoPlay = () => {
    trackEvent("video_play", {
      video_location: "hero_section",
      video_type: "mixology_demo",
      page: "barra-bebidas",
    });
    setIsVideoModalOpen(true);
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 opacity-30"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge
              variant="secondary"
              className="mb-6 bg-blue-100 text-blue-800 border-blue-200"
            >
              🍸 Profesionales Certificados
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Barra de Bebidas Premium
              <span className="block text-blue-700">para Bodas y Eventos</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Experiencia única con{" "}
              <strong>nuestros profesionales certificados</strong>. Cócteles
              artesanales, bebidas premium y espectáculo de mixología en vivo
              para bodas, eventos corporativos y celebraciones especiales.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-blue-700" />
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
                className="text-lg px-8 py-6 bg-blue-700 hover:bg-blue-800 cursor-pointer w-fit"
              >
                Solicita presupuesto
              </Button>
              <p className="text-sm text-muted-foreground">
                Respuesta en menos de 24h · Sin compromiso
              </p>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-blue-100">
              <p className="text-sm text-muted-foreground mb-3">
                Confían en nosotros:
              </p>
              <div className="flex flex-wrap gap-2">
                {visibleTrustedBy.map((name) => (
                  <span
                    key={name}
                    className="px-3 py-1 rounded-full border border-blue-200 bg-white/70 text-xs md:text-sm font-medium text-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
              {trustedBy.length > 5 && (
                <button
                  type="button"
                  onClick={() => setShowAllTrusted((prev) => !prev)}
                  className="mt-3 text-sm font-medium text-blue-700 hover:text-blue-800 cursor-pointer"
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
                src="/drinks-bar-1.webp"
                alt="Bartender profesional preparando cócteles artesanales en evento"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={handleVideoPlay}
                  size="lg"
                  className="rounded-full w-20 h-20 bg-white/90 hover:bg-white text-blue-700 shadow-lg cursor-pointer"
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
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
