"use client";

import type React from "react";

import { useState, memo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { trackFormSubmission, trackConversion } from "@/hooks/use-analytics";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

export const ContactForm = memo(() => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [services, setServices] = useState<string[]>([]);
  const [open, setOpen] = useState(false);

  const serviceOptions = [
    { value: "camareros", label: "Camareros" },
    { value: "barra-bebidas", label: "Barra de Bebidas" },
    { value: "barra-aperitivos", label: "Barra de Aperitivos" },
    { value: "cortador-jamon", label: "Cortador de Jamón" },
  ];

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        const formData = new FormData(e.currentTarget);

        if (services.length === 0) {
          toast.error("Seleccione al menos un servicio.");
          setIsSubmitting(false);
          return;
        }

        // Optimizar creación del objeto
        const data: {
          firstName: FormDataEntryValue | null;
          lastName: FormDataEntryValue | null;
          email: FormDataEntryValue | null;
          phone: FormDataEntryValue | null;
          eventType: FormDataEntryValue | null;
          eventDate: FormDataEntryValue | null;
          clientType: FormDataEntryValue | null;
          guestCount: FormDataEntryValue | null;
          budgetRange: FormDataEntryValue | null;
          message: FormDataEntryValue | null;
          services: string[];
        } = {
          ...(Object.fromEntries(
            [
              "firstName",
              "lastName",
              "email",
              "phone",
              "eventType",
              "eventDate",
              "clientType",
              "guestCount",
              "budgetRange",
              "message",
            ].map((key) => [key, formData.get(key)])
          ) as {
            firstName: FormDataEntryValue | null;
            lastName: FormDataEntryValue | null;
            email: FormDataEntryValue | null;
            phone: FormDataEntryValue | null;
            eventType: FormDataEntryValue | null;
            eventDate: FormDataEntryValue | null;
            clientType: FormDataEntryValue | null;
            guestCount: FormDataEntryValue | null;
            budgetRange: FormDataEntryValue | null;
            message: FormDataEntryValue | null;
          }),
          services,
        };

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          // Tracking de conversión exitosa
          trackFormSubmission("contact_form");
          trackConversion("contact_form_submitted", "lead_generation");

          toast.success("¡Formulario enviado correctamente!", {
            description:
              "Nos pondremos en contacto con usted en menos de 24 horas.",
            duration: 5000,
          });
          (e.target as HTMLFormElement).reset();
          setServices([]);
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
    [services]
  );

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="w-full max-w-7xl mx-auto px-4">
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

                <div className="grid md:grid-cols-2 gap-6">
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="guestCount" className="text-sm font-medium">
                      Número aproximado de invitados *
                    </Label>
                    <Select name="guestCount" required>
                      <SelectTrigger id="guestCount" className="h-11">
                        <SelectValue placeholder="Seleccione número de invitados" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-20">0-20 invitados</SelectItem>
                        <SelectItem value="20-50">20-50 invitados</SelectItem>
                        <SelectItem value="51-100">51-100 invitados</SelectItem>
                        <SelectItem value="101-150">
                          101-150 invitados
                        </SelectItem>
                        <SelectItem value="151-200">
                          151-200 invitados
                        </SelectItem>
                        <SelectItem value="201-300">
                          201-300 invitados
                        </SelectItem>
                        <SelectItem value="301-500">
                          301-500 invitados
                        </SelectItem>
                        <SelectItem value="500+">
                          Más de 500 invitados
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="budgetRange"
                      className="text-sm font-medium"
                    >
                      Rango de presupuesto aproximado *
                    </Label>
                    <Select name="budgetRange" required>
                      <SelectTrigger id="budgetRange" className="h-11">
                        <SelectValue placeholder="Seleccione rango de presupuesto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-500">0€ - 500€</SelectItem>
                        <SelectItem value="500-1000">500€ - 1.000€</SelectItem>
                        <SelectItem value="1000-2000">
                          1.000€ - 2.000€
                        </SelectItem>
                        <SelectItem value="2000-3500">
                          2.000€ - 3.500€
                        </SelectItem>
                        <SelectItem value="3500-5000">
                          3.500€ - 5.000€
                        </SelectItem>
                        <SelectItem value="5000-7500">
                          5.000€ - 7.500€
                        </SelectItem>
                        <SelectItem value="7500+">Más de 7.500€</SelectItem>
                        <SelectItem value="flexible">
                          Flexible / A consultar
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                  <div className="space-y-2">
                    <Label className="text-sm font-medium">
                      Servicios requeridos *
                    </Label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-full h-11 justify-between"
                        >
                          <span className="flex-1 text-left">
                            {services.length > 0
                              ? services.length <= 2
                                ? services
                                    .map(
                                      (s) =>
                                        serviceOptions.find(
                                          (o) => o.value === s
                                        )?.label
                                    )
                                    .join(", ")
                                : `${services
                                    .slice(0, 2)
                                    .map(
                                      (s) =>
                                        serviceOptions.find(
                                          (o) => o.value === s
                                        )?.label
                                    )
                                    .join(", ")} y ${services.length - 2} más`
                              : "Seleccione servicios..."}
                          </span>
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Buscar servicios..." />
                          <CommandEmpty>
                            No se encontraron servicios.
                          </CommandEmpty>
                          <CommandGroup>
                            {serviceOptions.map((service) => (
                              <CommandItem
                                key={service.value}
                                onSelect={() => {
                                  setServices((prev) =>
                                    prev.includes(service.value)
                                      ? prev.filter((s) => s !== service.value)
                                      : [...prev, service.value]
                                  );
                                }}
                              >
                                <Check
                                  className={cn(
                                    "mr-2 h-4 w-4",
                                    services.includes(service.value)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                                {service.label}
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
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
                    placeholder="Cuéntenos sobre su evento: ubicación, servicios extras que no figuran en la lista, detalles especiales..."
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
