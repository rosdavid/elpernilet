"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function OurStory() {
  return (
    <section id="our-story" className="py-24 bg-accent/30">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Media Content */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/nuestra-historia-video.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/40 rounded-full blur-3xl -z-10" />
          </div>
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
              Nuestra Historia
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight">
              Pasión por la Gastronomía Tradicional
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                elpernilet nació de una pasión compartida por la excelencia
                gastronómica y el arte de crear experiencias inolvidables.
                Fundada por un equipo de profesionales con más de 20 años de
                experiencia en el sector de la hostelería, nuestra empresa se ha
                convertido en la clara referencia en servicios para eventos.
              </p>
              <p>
                Nos especializamos en llevar la auténtica tradición culinaria a
                cada evento, desde el arte ancestral del cortado de jamón
                ibérico hasta la creación de barras de aperitivos y bebidas que
                sorprenden a los paladares más exigentes. Cada miembro de
                nuestro equipo es un profesional certificado y apasionado por su
                oficio.
              </p>
              <p>
                Lo que nos diferencia es nuestro compromiso inquebrantable con
                la calidad, la atención al detalle y el servicio personalizado.
                Trabajamos con los mejores proveedores locales, seleccionando
                productos de primera calidad que reflejan la riqueza
                gastronómica de nuestra tierra.
              </p>
            </div>

            <div className="pt-6">
              <Link href="/nuestra-historia">
                <Button
                  size="lg"
                  className="flex items-center gap-2 cursor-pointer"
                >
                  Conoce Nuestra Historia Completa
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
