"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
  DraftingCompass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

const events = [
  // ...existing events...
  {
    image: "/evento-boda-1.webp",
    location: "Sallent, Barcelona",
    eventType: "Boda",
    venue: "Mas de la Sala",
    service: "Corte de Jamón en Vivo",
  },
  {
    image: "/evento-cumpleaños-1.webp",
    location: "Barcelona",
    eventType: "Cumpleaños",
    venue: null,
    service: "Corte de Jamón en Vivo",
  },
  {
    image: "/evento-privado-1.webp",
    location: "Manresa, Barcelona",
    eventType: "Evento Privado",
    venue: "Torre Busquet",
    service: "Servicio de Camareros",
  },
  {
    image: "/evento-boda-de-oro-1.webp",
    location: "Sallent, Barcelona",
    eventType: "Boda",
    venue: "Restaurant La Sala",
    service: "Corte de Jamón en Vivo",
  },
  {
    image: "/evento-boda-2.webp",
    location: "Sant Benet, Barcelona",
    eventType: "Boda",
    venue: "Restaurant La Fonda",
    service: "Corte de Jamón en Vivo y Servicio de Camareros",
  },
  {
    image: "/evento-privado-2.webp",
    location: "Avinyó, Barcelona",
    eventType: "Evento Privado",
    venue: "Bodega Abadal",
    service: "Corte de Jamón en Vivo y Servicio de Camareros",
  },
  {
    image: "/evento-boda-3.webp",
    location: "Barcelona",
    eventType: "Boda",
    venue: null,
    service: "Corte de Jamón en Vivo",
  },
  {
    image: "/evento-boda-4.webp",
    location: "Sitges, Barcelona",
    eventType: "Boda",
    venue: "Villa Caprici",
    service: "Corte de Jamón en Vivo",
  },
  {
    image: "/evento-boda-5.webp",
    location: "Sitges, Barcelona",
    eventType: "Boda",
    venue: "Villa Caprici",
    service: "Servicio de Camareros",
  },
];

export function EventGallery() {
  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerView = window.innerWidth < 768 ? 1 : 3;

      // Solo resetear la página si realmente cambió el número de items por vista
      if (newItemsPerView !== itemsPerView) {
        setItemsPerView(newItemsPerView);
        // Solo resetear si la página actual sería inválida con el nuevo layout
        const newTotalPages = Math.ceil(events.length / newItemsPerView);
        setCurrentPage((prev) => (prev >= newTotalPages ? 0 : prev));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  const totalPages = Math.ceil(events.length / itemsPerView);

  const goToNextPage = useCallback(() => {
    setCurrentPage((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  }, [totalPages]);

  const goToPrevPage = useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  const goToPage = useCallback(
    (page: number) => {
      if (page >= 0 && page < totalPages) {
        setCurrentPage(page);
      }
    },
    [totalPages]
  );

  // Manejo mejorado de drag/swipe
  const handleDragStart = useCallback((clientX: number) => {
    setIsDragging(true);
    setDragStartX(clientX);
    setDragOffset(0);
    setStartTime(Date.now());
  }, []);

  const handleDragMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;

      const diff = clientX - dragStartX;
      // Limitar el movimiento para evitar que se vaya demasiado lejos
      const maxOffset = window.innerWidth * 0.3;
      const limitedOffset = Math.max(-maxOffset, Math.min(maxOffset, diff));
      setDragOffset(limitedOffset);
    },
    [isDragging, dragStartX]
  );

  const handleDragEnd = useCallback(() => {
    if (!isDragging) return;

    setIsDragging(false);
    const timeDiff = Date.now() - startTime;
    const velocity = Math.abs(dragOffset) / timeDiff;

    // Thresholds más sensibles para móvil
    const threshold = window.innerWidth < 768 ? 30 : 50;
    const velocityThreshold = 0.3;

    if (Math.abs(dragOffset) > threshold || velocity > velocityThreshold) {
      if (dragOffset > 0) {
        goToPrevPage();
      } else {
        goToNextPage();
      }
    }

    setDragOffset(0);
  }, [isDragging, dragOffset, startTime, goToNextPage, goToPrevPage]);

  // Event handlers específicos para cada tipo de input
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      // Solo activar en desktop
      if (window.innerWidth >= 768) {
        e.preventDefault();
        handleDragStart(e.clientX);
      }
    },
    [handleDragStart]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        handleDragMove(e.clientX);
      }
    },
    [isDragging, handleDragMove]
  );

  const handleMouseUp = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (e.touches.length === 1) {
        handleDragStart(e.touches[0].clientX);
      }
    },
    [handleDragStart]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (isDragging && e.touches.length === 1) {
        // Prevenir scroll solo en dirección horizontal
        if (Math.abs(e.touches[0].clientX - dragStartX) > 10) {
          e.preventDefault();
        }
        handleDragMove(e.touches[0].clientX);
      }
    },
    [isDragging, dragStartX, handleDragMove]
  );

  const handleTouchEnd = useCallback(() => {
    handleDragEnd();
  }, [handleDragEnd]);

  // Effect para manejar eventos globales solo cuando sea necesario
  useEffect(() => {
    if (!isDragging || !containerRef.current) return;

    const container = containerRef.current;

    // Usar listeners en el contenedor en lugar del document
    container.addEventListener("mousemove", handleMouseMove, {
      passive: false,
    });
    container.addEventListener("mouseup", handleMouseUp, { passive: true });
    container.addEventListener("mouseleave", handleMouseUp, { passive: true });
    container.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseup", handleMouseUp);
      container.removeEventListener("mouseleave", handleMouseUp);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    isDragging,
    handleMouseMove,
    handleMouseUp,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-secondary/30">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">
            Nuestros eventos
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Descubra algunos de los eventos excepcionales que hemos tenido el
            honor de atender
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto" ref={containerRef}>
          {/* Slider container */}
          <div
            className="overflow-hidden select-none touch-pan-y"
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              touchAction: "pan-y pinch-zoom",
            }}
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div
              className="flex will-change-transform"
              style={{
                transform: `translateX(calc(-${
                  currentPage * 100
                }% + ${dragOffset}px))`,
                transition: isDragging
                  ? "none"
                  : "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[400px] px-4"
                >
                  {events
                    .slice(
                      pageIndex * itemsPerView,
                      (pageIndex + 1) * itemsPerView
                    )
                    .map((event, eventIndex) => (
                      <div
                        key={`${pageIndex}-${eventIndex}`}
                        className="flex justify-center"
                      >
                        <Card className="overflow-hidden group transition-all duration-300 h-full p-0 w-full max-w-sm">
                          <div className="relative w-full h-64 overflow-hidden">
                            <Image
                              src={event.image || "/placeholder.svg"}
                              alt={`${event.eventType} en ${event.location}`}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                              priority={pageIndex === 0 && eventIndex === 0}
                              draggable={false}
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                          </div>
                          <CardContent className="p-6 transform transition-transform duration-300 group-hover:translate-y-[-2px]">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 transform transition-all duration-300 group-hover:text-foreground">
                              <MapPin className="w-4 h-4 transition-colors duration-300 group-hover:text-red-600" />
                              <span>{event.location}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 transform transition-all duration-300 group-hover:text-foreground">
                              <DraftingCompass className="w-4 h-4 transition-colors duration-300 group-hover:text-red-600" />
                              <span>{event.service}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 transform transition-all duration-300 group-hover:text-foreground">
                              <Calendar className="w-4 h-4 transition-colors duration-300 group-hover:text-red-600" />
                              <span>{event.eventType}</span>
                            </div>
                            {event.venue && (
                              <p className="text-sm font-medium text-red-800 transform transition-all duration-300 group-hover:text-red-600 group-hover:scale-105">
                                {event.venue}
                              </p>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Flechas de navegación */}
          {totalPages > 1 && (
            <>
              <Button
                variant="outline"
                size="icon"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/95 backdrop-blur shadow-lg hover:bg-background hover:shadow-xl hover:scale-110 z-10 transition-all duration-300 cursor-pointer"
                onClick={goToPrevPage}
              >
                <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/95 backdrop-blur shadow-lg hover:bg-background hover:shadow-xl hover:scale-110 z-10 transition-all duration-300 cursor-pointer"
                onClick={goToNextPage}
              >
                <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </Button>
            </>
          )}

          {/* Indicadores de página */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                    currentPage === index
                      ? "bg-red-800 w-8 shadow-lg"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/70 w-2"
                  }`}
                  aria-label={`Ir a la página ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
