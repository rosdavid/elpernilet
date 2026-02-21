"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, Play } from "lucide-react";
import { useState, useCallback, memo } from "react";
import { VideoModal } from "@/components/video-modal";

export const Hero = memo(() => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const youtubeVideoId = "CSIkAkGXwfs";
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-background"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-25"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif mb-6 text-balance text-foreground">
          Experiencias gastronómicas excepcionales para bodas y eventos
          inolvidables
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 text-pretty leading-relaxed">
          Servicios premium para eventos. Cortador de jamón en vivo, barra de
          bebidas y aperitivos, y servicio de camareros profesionales.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="text-lg px-8 py-6 cursor-pointer"
          >
            Solicita presupuesto
          </Button>
          <Button
            onClick={() => setIsVideoModalOpen(true)}
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-transparent cursor-pointer flex items-center gap-2"
          >
            <Play className="w-5 h-5" />
            Conocer más
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-muted-foreground" />
      </div>
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoId={youtubeVideoId}
      />
    </section>
  );
});

Hero.displayName = "Hero";
