"use client";

import type React from "react";

import { useState, memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const ContactForm = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const formData = new FormData(e.currentTarget);

        // Optimizar creación del objeto
        const data = Object.fromEntries(
          [
            "firstName",
            "lastName",
            "email",
            "phone",
            "eventType",
            "eventDate",
            "clientType",
            "message",
          ].map((key) => [key, formData.get(key)])
        );

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          toast.success("¡Formulario enviado correctamente!", {
            description:
              "Nos pondremos en contacto con usted en menos de 24 horas.",
            duration: 5000,
          });
          (e.target as HTMLFormElement).reset();
        } else {
          toast.error("Error al enviar el formulario", {
            description: result.message || "Por favor, inténtelo de nuevo.",
            duration: 4000,
          });
        }
      } catch (error) {
        toast.error("Error de conexión", {
          description:
            "Por favor, verifique su conexión a internet e inténtelo de nuevo.",
          duration: 4000,
        });
        console.error("Error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
    []
  );

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-balance">
              Solicite su presupuesto
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
              Cuéntenos sobre su evento y le prepararemos una propuesta
              personalizada
            </p>
          </div>

          <Card className="border-0 shadow-2xl shadow-black/5">
            <CardHeader className="space-y-3 pb-8">
              <CardTitle className="text-3xl font-serif">
                Formulario de contacto
              </CardTitle>
              <CardDescription className="text-base">
                Complete el formulario y nos pondremos en contacto con usted en
                menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium">
                      Nombre *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      placeholder="Juan"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium">
                      Apellidos *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      placeholder="García"
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="juan@ejemplo.com"
                      className="h-11"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Teléfono *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+34 600 000 000"
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="eventType" className="text-sm font-medium">
                      Tipo de evento *
                    </Label>
                    <Select name="eventType" required>
                      <SelectTrigger id="eventType" className="h-11">
                        <SelectValue placeholder="Seleccione el tipo de evento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Boda</SelectItem>
                        <SelectItem value="inauguration">
                          Inauguración
                        </SelectItem>
                        <SelectItem value="corporate">
                          Evento Corporativo
                        </SelectItem>
                        <SelectItem value="birthday">Cumpleaños</SelectItem>
                        <SelectItem value="anniversary">Aniversario</SelectItem>
                        <SelectItem value="private">Evento Privado</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventDate" className="text-sm font-medium">
                      Fecha del evento *
                    </Label>
                    <Input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      required
                      className="h-11"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clientType" className="text-sm font-medium">
                      Tipo de cliente *
                    </Label>
                    <Select name="clientType" required>
                      <SelectTrigger id="clientType" className="h-11">
                        <SelectValue placeholder="Seleccione tipo de cliente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="particular">Particular</SelectItem>
                        <SelectItem value="professional">
                          Profesional
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Cuéntenos sobre su evento: número de invitados, servicios que necesita, cuanto quieres gastarte..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-lg h-12 font-medium transition-all hover:shadow-lg cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar solicitud"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
});

ContactForm.displayName = "ContactForm";
