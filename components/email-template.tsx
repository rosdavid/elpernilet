import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  clientType: string;
  eventType: string;
  eventDate: string;
  guestCount: string;
  budgetRange: string;
  services: string[];
  message: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  clientType,
  eventType,
  eventDate,
  guestCount,
  budgetRange,
  services,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h2>¡Nueva solicitud de contacto!</h2>
      <p>
        <strong>Nombre:</strong> ${firstName} ${lastName}
      </p>
      <p>
        <strong>Email:</strong> ${email}
      </p>
      <p>
        <strong>Teléfono:</strong> ${phone}
      </p>
      <p>
        <strong>Tipo de cliente:</strong> ${clientType}
      </p>
      <p>
        <strong>Tipo de evento:</strong> ${eventType}
      </p>
      <p>
        <strong>Fecha:</strong> ${eventDate}
      </p>

      <p>
        <strong>Número de invitados:</strong> ${guestCount}
      </p>
      <p>
        <strong>Rango de presupuesto:</strong> ${budgetRange}
      </p>
      <p>
        <strong>Servicios interesados:</strong> ${services.join(", ")}
      </p>
      <p>
        <strong>Mensaje:</strong> ${message}
      </p>
    </div>
  );
}
