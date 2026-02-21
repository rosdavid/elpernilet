"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Award, Music } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { VideoModal } from "@/components/video-modal";
import { trackCtaFormClick, trackEvent } from "@/hooks/use-analytics";

const stats = [
  { icon: Award, label: "Años de experiencia", value: "+15" },
  { icon: Star, label: "Eventos realizados", value: "+400" },
  { icon: Music, label: "Estilos disponibles", value: "+20" },
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

export function LiveMusicHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [showAllTrusted, setShowAllTrusted] = useState(false);
  const youtubeVideoId = "CSIkAkGXwfs";
  const visibleTrustedBy = showAllTrusted ? trustedBy : trustedBy.slice(0, 5);

  const navigateToContactForm = () => {
    trackCtaFormClick("hero_musica_en_directo");
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
      video_type: "live_music_demo",
      page: "musica-en-directo",
    });
    setIsVideoModalOpen(true);
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge
              variant="secondary"
              className="mb-6 bg-amber-100 text-amber-800 border-amber-200"
            >
              🎵 Músicos Profesionales
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Música en Directo
              <span className="block text-amber-700">para Bodas y Eventos</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Experiencia única con{" "}
              <strong>músicos profesionales en vivo</strong>. Jazz, acústico,
              orquestas, DJ o grupos para bodas, eventos corporativos y
              celebraciones especiales. ¡Dale vida a tu evento!
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-amber-700" />
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

            <div className="flex flex-col gap-3">
              <Button
                onClick={navigateToContactForm}
                size="lg"
                className="text-lg px-8 py-6 bg-amber-700 hover:bg-amber-800 cursor-pointer w-fit"
              >
                Solicita presupuesto
              </Button>
              <p className="text-sm text-muted-foreground">
                Respuesta en menos de 24h · Sin compromiso
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-amber-100">
              <p className="text-sm text-muted-foreground mb-3">
                Confían en nosotros:
              </p>
              <div className="flex flex-wrap gap-2">
                {visibleTrustedBy.map((name) => (
                  <span
                    key={name}
                    className="px-3 py-1 rounded-full border border-amber-200 bg-white/70 text-xs md:text-sm font-medium text-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
              {trustedBy.length > 5 && (
                <button
                  type="button"
                  onClick={() => setShowAllTrusted((prev) => !prev)}
                  className="mt-3 text-sm font-medium text-amber-700 hover:text-amber-800 cursor-pointer"
                >
                  {showAllTrusted ? "Ver menos" : "Ver todos"}
                </button>
              )}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/music-5.webp"
                alt="Música en directo en evento de boda"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={handleVideoPlay}
                  size="lg"
                  className="rounded-full w-20 h-20 bg-white/90 hover:bg-white text-amber-700 shadow-lg cursor-pointer"
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-amber-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
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
