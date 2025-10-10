import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function DELETE(request: NextRequest) {
  try {
    const { id } = await request.json();

    const { data, error } = await supabaseAdmin
      .from("contact_submissions")
      .delete()
      .eq("id", id)
      .select();

    if (error) {
      return NextResponse.json(
        { success: false, message: "Error al borrar la solicitud" },
        { status: 500 }
      );
    }
    if (!data || data.length === 0) {
      return NextResponse.json(
        { success: false, message: "Contacto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, message: "Solicitud eliminada" });
  } catch {
    return NextResponse.json(
      { success: false, message: "Error al borrar la solicitud" },
      { status: 500 }
    );
  }
}

export interface ContactSubmission {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  event_type: string;
  event_date: string;
  client_type: string;
  guest_count: string;
  budget_range: string;
  services: string[];
  message: string;
  submitted_at: string;
  status: "pending" | "contacted" | "closed" | "rejected";
  notes?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar campos requeridos
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "phone",
      "eventType",
      "eventDate",
      "clientType",
      "guestCount",
      "budgetRange",
      "services",
      "message",
    ];
    const missingFields = requiredFields.filter((field) => !body[field]);

    if (missingFields.length > 0) {
      console.error("Missing fields:", missingFields);
      return NextResponse.json(
        {
          success: false,
          message: `Campos requeridos faltantes: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    if (!Array.isArray(body.services) || body.services.length === 0) {
      return NextResponse.json(
        { success: false, message: "Debe seleccionar al menos un servicio." },
        { status: 400 }
      );
    }

    console.log("Attempting to insert data:", {
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      phone: body.phone,
      event_type: body.eventType,
      event_date: body.eventDate,
      client_type: body.clientType,
      guest_count: body.guestCount,
      budget_range: body.budgetRange,
      services: body.services,
      message: body.message,
    });

    // Insertar en Supabase
    const { data, error } = await supabase
      .from("contact_submissions")
      .insert([
        {
          first_name: body.firstName,
          last_name: body.lastName,
          email: body.email,
          phone: body.phone,
          event_type: body.eventType,
          event_date: body.eventDate,
          client_type: body.clientType,
          guest_count: body.guestCount,
          budget_range: body.budgetRange,
          services: body.services,
          message: body.message,
          status: "pending",
        },
      ])
      .select();

    if (error) {
      console.error("Supabase error details:", {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
      });
      return NextResponse.json(
        { success: false, message: `Error de base de datos: ${error.message}` },
        { status: 500 }
      );
    }

    // Enviar email de aviso con Resend
    try {
      await resend.emails.send({
        from: "notificaciones@notificaciones.elpernilet.com",
        to: "hola@elpernilet.com",
        subject: "Nueva solicitud de contacto recibida",
        html: `
          <h2>¡Nueva solicitud de contacto!</h2>
          <p><strong>Nombre:</strong> ${body.firstName} ${body.lastName}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Teléfono:</strong> ${body.phone}</p>
          <p><strong>Tipo de cliente:</strong> ${body.clientType}</p>
          <p><strong>Tipo de evento:</strong> ${body.eventType}</p>
          <p><strong>Fecha:</strong> ${body.eventDate}</p>
          <p><strong>Número de invitados:</strong> ${body.guestCount}</p>
          <p><strong>Rango de presupuesto:</strong> ${body.budgetRange}</p>
          <p><strong>Servicios interesados:</strong> ${body.services.join(
            ", "
          )}</p>
          <p><strong>Mensaje:</strong> ${body.message}</p>
        `,
      });
    } catch (mailError) {
      console.error("Error enviando email de aviso:", mailError);
    }

    console.log("Successfully inserted data:", data);

    return NextResponse.json({
      success: true,
      message: "Contacto guardado correctamente",
      data: data[0],
    });
  } catch (error) {
    console.error("Error saving contact:", error);
    return NextResponse.json(
      { success: false, message: `Error del servidor: ${error}` },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("submitted_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Error al leer los contactos" },
        { status: 500 }
      );
    }

    return NextResponse.json({ contacts: data });
  } catch (error) {
    console.error("Error reading contacts:", error);
    return NextResponse.json(
      { error: "Error al leer los contactos" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest) {
  try {
    const { id, status, notes } = await request.json();

    // Preparar datos para actualizar
    const updateData: { status: string; notes?: string } = { status };
    if (notes !== undefined) {
      updateData.notes = notes;
    }

    const { data, error } = await supabase
      .from("contact_submissions")
      .update(updateData)
      .eq("id", id)
      .select();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Error al actualizar el contacto" },
        { status: 500 }
      );
    }

    if (!data || data.length === 0) {
      return NextResponse.json(
        { error: "Contacto no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Estado actualizado",
      data: data[0],
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    return NextResponse.json(
      { error: "Error al actualizar el contacto" },
      { status: 500 }
    );
  }
}
