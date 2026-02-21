"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, Calendar, ArrowRight, Sparkles } from "lucide-react";
import {
  trackCtaFormClick,
  trackEvent,
  trackPhoneClick,
  trackEmailClick,
} from "@/hooks/use-analytics";

export function AboutCTA() {
  const handleCTAClick = (action: string) => {
    trackEvent("about_cta_click", {
      action: action,
      section: "about_cta",
    });
  };

  const navigateToContactForm = () => {
    trackCtaFormClick("cta_sobre_nosotros", "Hablemos de tu evento");
    if (window.location.pathname === "/") {
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = "/#contact";
    }
  };

  const handlePhoneClick = () => {
    trackPhoneClick("sobre_nosotros_cta");
    handleCTAClick("phone_call");
    window.location.href = "tel:+34654127391";
  };

  const handleEmailClick = () => {
    trackEmailClick("sobre_nosotros_cta");
    handleCTAClick("email_contact");
    window.location.href = "mailto:info@elpernilet.com";
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"></div>

      <div className="w-full max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-12">
          <Badge
            variant="secondary"
            className="mb-6 bg-primary/20 text-primary border-primary/30 px-4 py-2"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Comienza tu Historia de Éxito
          </Badge>

          <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Tu Evento Perfecto
            <br />
            <span className="text-primary">Nos Espera</span>
          </h2>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            Has conocido lo que hacemos, nuestro equipo y nuestros valores.
            Ahora es el momento de hacer realidad tu visión. Estamos aquí para
            convertir tu evento en una experiencia inolvidable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-background/50 rounded-2xl backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
            <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              Llámanos Ahora
            </h3>
            <p className="text-muted-foreground mb-4">
              Habla directamente con nuestro equipo de atención personalizada.
            </p>
            <Button
              onClick={handlePhoneClick}
              className="w-full cursor-pointer"
              size="lg"
            >
              +34 654 12 73 91
            </Button>
          </div>

          <div className="text-center p-6 bg-background/50 rounded-2xl backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              Envíanos un Email
            </h3>
            <p className="text-muted-foreground mb-4">
              Cuéntanos sobre tu evento y te responderemos en menos de 24 horas.
            </p>
            <Button
              variant="outline"
              onClick={handleEmailClick}
              className="w-full cursor-pointer"
              size="lg"
            >
              info@elpernilet.com
            </Button>
          </div>

          <div className="text-center p-6 bg-background/50 rounded-2xl backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-colors">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-serif font-bold text-foreground mb-2">
              Solicita Presupuesto
            </h3>
            <p className="text-muted-foreground mb-4">
              Recibe un presupuesto personalizado sin compromiso.
            </p>
            <Button
              variant="outline"
              onClick={navigateToContactForm}
              className="w-full cursor-pointer"
              size="lg"
            >
              Pedir Presupuesto
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-background/80 rounded-2xl p-8 md:p-12 backdrop-blur-sm border border-primary/10">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
              ¿Tienes Preguntas?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Nuestro equipo está disponible para resolver todas tus dudas y
              ayudarte a planificar cada detalle de tu evento. No hay pregunta
              pequeña cuando se trata de hacer tu celebración perfecta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handlePhoneClick}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                Llamar Ahora
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={handleEmailClick}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
                Enviar Email
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/10">
              <p className="text-sm text-muted-foreground">
                <strong>Disponibilidad:</strong> Lunes a viernes, 9:00 - 18:00
                <br />
                <strong>Respuesta garantizada:</strong> En 24 horas
                <br />
                <strong>Consulta gratuita:</strong> Sin compromiso
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
