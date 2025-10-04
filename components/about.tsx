"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Play } from "lucide-react";
import Image from "next/image";
import { lazy, Suspense, useState, memo } from "react";

const VideoModal = lazy(() =>
  import("@/components/video-modal").then((module) => ({
    default: module.VideoModal,
  }))
);

const features = [
  "Más de 10 años de experiencia en eventos",
  "Productos de la más alta calidad",
  "Personal profesional certificado",
  "Servicio personalizado para cada evento",
  "Cobertura en toda España",
];

export const About = memo(() => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const youtubeVideoId = "CSIkAkGXwfs";
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">
              Excelencia en cada detalle
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Somos especialistas en servicios para eventos corporativos y
              privados. Nuestro compromiso es ofrecer experiencias gastronómicas
              excepcionales que superen las expectativas de nuestros clientes.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-red-800 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              onClick={() => setIsVideoModalOpen(true)}
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 bg-transparent cursor-pointer"
            >
              <Play className="w-5 h-5" />
              Conocer más
            </Button>
          </div>
          <Image
            src="/foto-evento.webp"
            alt="Evento de corte de jamón"
            width={800}
            height={533}
            className="w-full h-auto rounded-lg shadow-2xl"
            priority
          />
        </div>
      </div>
      {isVideoModalOpen && (
        <Suspense fallback={<div>Cargando...</div>}>
          <VideoModal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            videoId={youtubeVideoId}
          />
        </Suspense>
      )}
    </section>
  );
});

About.displayName = "About";
