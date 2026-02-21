"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Calendar, MapPin, Award } from "lucide-react";
import { trackCtaFormClick } from "@/hooks/use-analytics";
import { ContactLink } from "@/components/contact-link";

export function DrinkBarCTA() {
  const navigateToContactForm = () => {
    trackCtaFormClick("cta_barra_bebidas");
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
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-neutral-700 via-neutral-800 to-neutral-900 text-white"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge
            variant="secondary"
            className="mb-4 bg-white/20 text-white border-white/30"
          >
            ¡Reserva Ahora!
          </Badge>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Haz de tu Evento algo Inolvidable
          </h2>
          <p className="text-lg md:text-xl text-accent max-w-3xl mx-auto leading-relaxed">
            No dejes que se agoten las fechas. Reserva tu barra de bebidas
            premium hoy mismo y asegura el éxito de tu evento con elpernilet.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-8">
              Contacta con Nosotros
            </h3>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Teléfono</div>
                  <div className="text-accent">
                    <ContactLink
                      type="phone"
                      href="tel:+34654127391"
                      location="cta_barra_bebidas"
                    >
                      +34 654 12 73 91
                    </ContactLink>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-accent">
                    <ContactLink
                      type="email"
                      href="mailto:info@elpernilet.com"
                      location="cta_barra_bebidas"
                    >
                      info@elpernilet.com
                    </ContactLink>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold">Cobertura</div>
                  <div className="text-accent">
                    Toda España • Base en Barcelona
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 space-y-4">
              <Button
                onClick={navigateToContactForm}
                size="lg"
                className="w-full bg-white text-neutral-700 hover:bg-gray-100 cursor-pointer text-lg"
              >
                Solicita presupuesto
              </Button>
            </div>
          </div>

          {/* Features Highlight */}
          <div>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-serif font-bold mb-6 text-center">
                  ¿Por qué Elegir elpernilet?
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">
                        15+ Años de Experiencia
                      </div>
                      <div className="text-blue-100 text-sm">
                        Maestros cortadores certificados con amplia trayectoria
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">
                        Disponibilidad Garantizada
                      </div>
                      <div className="text-blue-100 text-sm">
                        Servicio 365 días al año, incluyendo festivos
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-semibold mb-1">
                        Cobertura Nacional
                      </div>
                      <div className="text-blue-100 text-sm">
                        Servicio en toda España
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-lg text-center">
                  <div className="text-2xl font-bold mb-2">
                    Presupuesto Gratuito
                  </div>
                  <div className="text-blue-100 text-sm">
                    Respuesta en menos de 24 horas
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 rounded-2xl p-8 md:p-12 border border-white/20">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              ¡Última Oportunidad para Reservar tu Fecha!
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Las mejores fechas se agotan rápido, especialmente en temporada
              alta. No esperes más y asegura el éxito de tu evento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
