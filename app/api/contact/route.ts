import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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
