"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Star, Award } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { VideoModal } from "@/components/video-modal";
import { trackEvent } from "@/hooks/use-analytics";

const stats = [
  { icon: Award, label: "Años de experiencia", value: "+15" },
  { icon: Star, label: "Eventos realizados", value: "+500" },
];

export function AppetizerBarHero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const youtubeVideoId = "CSIkAkGXwfs"; // Reemplaza con un ID de video relevante para aperitivos

  const navigateToContactForm = () => {
    trackEvent("cta_click", {
      cta_location: "hero_section",
      cta_text: "Solicita presupuesto",
      page: "barra-aperitivos",
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

  const handleVideoPlay = () => {
    trackEvent("video_play", {
      video_location: "hero_section",
      video_type: "appetizer_demo",
      page: "barra-aperitivos",
    });
    setIsVideoModalOpen(true);
  };

  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 overflow-hidden">
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge
              variant="secondary"
              className="mb-6 bg-green-100 text-green-800 border-green-200"
            >
              🥂 Aperitivos para abrir el apetito
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Barra de Aperitivos Gourmet
              <span className="block text-green-700">para tu Evento</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Experiencia única con <strong>nuestra barra de aperitivos</strong>
              . Canapés artesanales, finger foods premium y aperitivos gourmet
              para bodas, eventos corporativos y celebraciones especiales.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-green-700" />
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
                className="text-lg px-8 py-6 bg-green-700 hover:bg-green-800 cursor-pointer"
              >
                Solicita presupuesto
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-green-100">
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
                src="/appetizer-bar-3.webp"
                alt="Barra de aperitivos gourmet en evento"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  onClick={handleVideoPlay}
                  size="lg"
                  className="rounded-full w-20 h-20 bg-white/90 hover:bg-white text-green-700 shadow-lg cursor-pointer"
                >
                  <Play className="w-8 h-8 ml-1" />
                </Button>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-green-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
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
