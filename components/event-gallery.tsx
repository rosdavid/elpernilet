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
  const [dragStartY, setDragStartY] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isHorizontalDrag, setIsHorizontalDrag] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(3);
      }
      setCurrentPage(0); // Reset al cambiar tamaño
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calcular el número total de páginas
  const totalPages = Math.ceil(events.length / itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentPage((prev) => (prev + 1 >= totalPages ? 0 : prev + 1));
  }, [totalPages]);

  const prevSlide = useCallback(() => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  }, [totalPages]);

  // Efecto para manejar eventos globales durante el arrastre
  useEffect(() => {
    if (!isDragging) return;

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const diff = e.clientX - dragStartX;
      setDragOffset(diff);
    };

    const handleGlobalMouseUp = () => {
      if (!isDragging) return;
      setIsDragging(false);
      const threshold = 50;
      if (Math.abs(dragOffset) > threshold) {
        if (dragOffset > 0) {
          prevSlide();
        } else {
          nextSlide();
        }
      }
      setDragOffset(0);
      setIsHorizontalDrag(false);
    };

    const handleGlobalTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;

      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const diffX = currentX - dragStartX;
      const diffY = currentY - dragStartY;

      // Si aún no hemos determinado la dirección del drag
      if (!isHorizontalDrag) {
        const absX = Math.abs(diffX);
        const absY = Math.abs(diffY);

        // Si el movimiento vertical es mayor que el horizontal, es scroll vertical
        if (absY > absX && absY > 10) {
          // Es scroll vertical, cancelar el drag
          setIsDragging(false);
          setDragOffset(0);
          return;
        } else if (absX > absY && absX > 10) {
          // Es drag horizontal, continuar
          setIsHorizontalDrag(true);
        } else if (absX < 5 && absY < 5) {
          // Movimiento muy pequeño, no hacer nada
          return;
        }
      }

      // Solo proceder si es un drag horizontal confirmado
      if (isHorizontalDrag) {
        // Solo prevenir el comportamiento por defecto si el evento es cancelable
        if (e.cancelable) {
          e.preventDefault();
        }
        setDragOffset(diffX);
      }
    };

    const handleGlobalTouchEnd = () => {
      if (!isDragging) return;
      setIsDragging(false);

      // Solo cambiar página si fue un drag horizontal válido
      if (isHorizontalDrag) {
        const threshold = 50;
        if (Math.abs(dragOffset) > threshold) {
          if (dragOffset > 0) {
            prevSlide();
          } else {
            nextSlide();
          }
        }
      }

      setDragOffset(0);
      setIsHorizontalDrag(false);
    };

    document.addEventListener("mousemove", handleGlobalMouseMove);
    document.addEventListener("mouseup", handleGlobalMouseUp);
    document.addEventListener("touchmove", handleGlobalTouchMove, {
      passive: false,
    });
    document.addEventListener("touchend", handleGlobalTouchEnd, {
      passive: true,
    });

    return () => {
      document.removeEventListener("mousemove", handleGlobalMouseMove);
      document.removeEventListener("mouseup", handleGlobalMouseUp);
      document.removeEventListener("touchmove", handleGlobalTouchMove);
      document.removeEventListener("touchend", handleGlobalTouchEnd);
    };
  }, [
    isDragging,
    dragStartX,
    dragStartY,
    dragOffset,
    isHorizontalDrag,
    prevSlide,
    nextSlide,
  ]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
  };

  // Event handlers para mouse
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragStartY(e.clientY);
    setDragOffset(0);
    setIsHorizontalDrag(false);
  };

  // Event handlers para touch
  const handleTouchStart = (e: React.TouchEvent) => {
    // Solo manejar si es un solo toque
    if (e.touches.length === 1) {
      setIsDragging(true);
      setDragStartX(e.touches[0].clientX);
      setDragStartY(e.touches[0].clientY);
      setDragOffset(0);
      setIsHorizontalDrag(false);
    }
  };

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

        <div className="relative max-w-7xl mx-auto">
          {/* Slider container */}
          <div
            className="overflow-hidden cursor-grab active:cursor-grabbing"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(calc(-${
                  currentPage * 100
                }% + ${dragOffset}px))`,
                transition: isDragging ? "none" : "transform 0.5s ease-in-out",
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
                onClick={prevSlide}
              >
                <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/95 backdrop-blur shadow-lg hover:bg-background hover:shadow-xl hover:scale-110 z-10 transition-all duration-300 cursor-pointer"
                onClick={nextSlide}
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
