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

    // Formatear eventDate a formato español (día/mes/año)
    let eventDateEs = body.eventDate;
    if (eventDateEs) {
      // Si viene en formato ISO (yyyy-mm-dd), lo convertimos
      const isoMatch = /^\d{4}-\d{2}-\d{2}$/.test(eventDateEs);
      if (isoMatch) {
        const [year, month, day] = eventDateEs.split("-");
        eventDateEs = `${day}/${month}/${year}`;
      }
    }

    console.log("Attempting to insert data:", {
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      phone: body.phone,
      event_type: body.eventType,
      event_date: eventDateEs,
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
          event_date: eventDateEs,
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

    // Diccionarios para traducción de valores
    const clientTypeLabels = {
      profesional: "Profesional",
      particular: "Particular",
    };

    const eventTypeLabels = {
      wedding: "Boda",
      inauguration: "Inauguración",
      corporate: "Evento Corporativo",
      birthday: "Cumpleaños",
      anniversary: "Aniversario",
      private: "Evento Privado",
      other: "Otro",
    };
    const guestCountLabels = {
      "0-20": "0 - 20 invitados",
      "20-50": "20 - 50 invitados",
      "51-100": "51 - 100 invitados",
      "101-150": "101 - 150 invitados",
      "151-200": "151 - 200 invitados",
      "201-300": "201 - 300 invitados",
      "301-500": "301 - 500 invitados",
      "500+": "Más de 500 invitados",
    };
    const budgetRangeLabels = {
      "0-500": "0€ - 500€",
      "500-1000": "500€ - 1.000€",
      "1000-2000": "1.000€ - 2.000€",
      "2000-3500": "2.000€ - 3.500€",
      "3500-5000": "3.500€ - 5.000€",
      "5000-7500": "5.000€ - 7.500€",
      "7500+": "Más de 7.500€",
      flexible: "Flexible / A consultar",
    };
    const serviceLabels = {
      camareros: "Camareros",
      "barra-bebidas": "Barra de Bebidas",
      "barra-aperitivos": "Barra de Aperitivos",
      "cortador-jamon": "Cortador de Jamón",
    };

    // Enviar email al admin
    try {
      const solicitudId = data[0]?.id || "—";
      await resend.emails.send({
        from: "notificaciones@notificaciones.elpernilet.com",
        to: "hola@elpernilet.com",
        subject: "Nueva solicitud de contacto recibida",
        html: `
              <div style="display:none; mso-hide:all; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden;">
                  Nueva solicitud de contacto recibida desde elpernilet.com
                </div>
                <div style="font-size:13px; color:#b91c1c; margin-bottom:10px; text-align:center;">
                  <strong>ID de solicitud:</strong> ${solicitudId}
                </div>
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f6f7f8; font-family: sans-serif;">
                  <tr>
                    <td align="center" style="padding:32px 12px;">
                      <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px; background:#ffffff; border-radius:14px; box-shadow:0 2px 12px rgba(0,0,0,0.06);">
                        <tr>
                          <td style="height:6px; background:#111111; border-top-left-radius:14px; border-top-right-radius:14px; font-size:0; line-height:0;">&nbsp;</td>
                        </tr>
                        <tr>
                          <td style="padding:28px 32px 8px 32px; text-align:center;">
                            <div style="display:inline-block; padding:8px 12px; border:1px solid #e5e7eb; border-radius:999px; font-weight:500; font-size:12px; color:#111;">
                              Notificación
                            </div>
                            <h2 style="margin:12px 0 0 0; font-weight:700; font-size:26px; line-height:1.25; color:#111111;">
                              ¡Nueva solicitud de contacto!
                            </h2>
                            <p style="margin:10px 0 0 0; font-size:14px; line-height:1.5; color:#6b7280;">
                              Se ha recibido una nueva solicitud desde el formulario de <strong>elpernilet.com</strong>.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 32px;">
                            <hr style="border:0; height:1px; background:#efefef; margin:20px 0;" />
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:0 24px 16px 24px;">
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="table-layout:fixed; border-collapse:separate; border-spacing:8px;">
                              <tr>
                                <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                                  <div style="font-size:12px; color:#6b7280; line-height:1.4; margin:0 0 4px 0;">Nombre</div>
                                  <div style="font-size:14px; color:#111; font-weight:600; line-height:1.4;">${
                                    body.firstName
                                  } ${body.lastName}</div>
                                </td>
                                <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                                  <div style="font-size:12px; color:#6b7280; line-height:1.4; margin:0 0 4px 0;">Email</div>
                                  <div style="font-size:14px; color:#111; font-weight:600; line-height:1.4;">${
                                    body.email
                                  }</div>
                                </td>
                              </tr>
                              <tr>
                                <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                                  <div style="font-size:12px; color:#6b7280; line-height:1.4; margin:0 0 4px 0;">Teléfono</div>
                                  <div style="font-size:14px; color:#111; font-weight:600; line-height:1.4;">${
                                    body.phone
                                  }</div>
                                </td>
                                <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                                  <div style="font-size:12px; color:#6b7280; line-height:1.4; margin:0 0 4px 0;">Tipo de cliente</div>
                                  <div style="font-size:14px; color:#111; font-weight:600; line-height:1.4;">${
                                    clientTypeLabels[body.clientType] ||
                                    body.clientType
                                  }</div>
                                </td>
                              </tr>
                              <tr>
                                <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                                  <div style="font-size:12px; color:#6b7280; line-height:1.4; margin:0 0 4px 0;">Tipo de evento</div>
                                  <div style="font-size:14px; color:#111; font-weight:600; line-height:1.4;">${
                                    eventTypeLabels[body.eventType] ||
                                    body.eventType
                                  }</div>
                                </td>
                                <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                                  <div style="font-size:12px; color:#6b7280; line-height:1.4; margin:0 0 4px 0;">Fecha</div>
                                  <div style="font-size:14px; color:#111; font-weight:600; line-height:1.4;">${
                                    body.eventDate
                                  }</div>
                                </td>
                              </tr>
                              <tr>
                                <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                                  <div style="font-size:12px; color:#6b7280; line-height:1.4; margin:0 0 4px 0;">Número de invitados</div>
                                  <div style="font-size:14px; color:#111; font-weight:600; line-height:1.4;">${
                                    guestCountLabels[body.guestCount] ||
                                    body.guestCount
                                  }</div>
                                </td>
                                <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                                  <div style="font-size:12px; color:#6b7280; line-height:1.4; margin:0 0 4px 0;">Rango de presupuesto</div>
                                  <div style="font-size:14px; color:#111; font-weight:600; line-height:1.4;">${
                                    budgetRangeLabels[body.budgetRange] ||
                                    body.budgetRange
                                  }</div>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="2" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                                  <div style="font-size:12px; color:#6b7280; line-height:1.4; margin:0 0 4px 0;">Servicios interesados</div>
                                  <div style="font-size:14px; color:#111; font-weight:600; line-height:1.6;">
                                    ${
                                      body.services && body.services.length
                                        ? body.services
                                            .map((s) => serviceLabels[s] || s)
                                            .join(", ")
                                        : "—"
                                    }
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td colspan="2" valign="top" style="background:#fcfcfd; border:1px solid #eaeaea; border-radius:10px; padding:12px;">
                                  <div style="font-size:12px; color:#6b7280; line-height:1.4; margin:0 0 6px 0;">Mensaje</div>
                                  <div style="font-size:14px; color:#374151; line-height:1.6;">
                                    ${body.message}
                                  </div>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:10px 32px 8px 32px; text-align:center;">
                            <p style="margin:0 0 12px 0; font-size:13px; line-height:1.6; color:#6b7280;">
                              <em>Para ver la solicitud completa o editarla, accede al panel de administración.</em>
                            </p>
                            <a href="https://elpernilet.com/admin" style="display:inline-block; padding:14px 22px; font-weight:700; font-size:16px; color:#ffffff; text-decoration:none; border-radius:10px; background:#111111; box-shadow:0 1px 4px rgba(0,0,0,0.10);">
                              Acceder
                            </a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding:22px 24px 28px 24px; text-align:center;">
                            <p style="margin:0; font-size:12.5px; line-height:1.6; color:#9aa3af;">
                              elpernilet.com — Notificaciones de solicitudes
                            </p>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
        `,
      });
    } catch (mailError) {
      console.error("Error enviando email de aviso al admin:", mailError);
    }

    // Enviar email al cliente
    try {
      const solicitudId = data[0]?.id || "—";
      await resend.emails.send({
        from: "notificaciones@notificaciones.elpernilet.com",
        to: body.email,
        subject: "Hemos recibido tu solicitud de presupuesto",
        html: `
  <div style="display:none; mso-hide:all; font-size:1px; line-height:1px; max-height:0; max-width:0; opacity:0; overflow:hidden;">
    Hemos recibido tu solicitud. Te enviaremos un presupuesto en menos de 24 horas.
  </div>
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#f6f7f8; font-family: sans-serif;">
    <tr>
      <td align="center" style="padding:32px 12px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:560px; background:#ffffff; border-radius:14px; box-shadow:0 2px 12px rgba(0,0,0,0.06);">
          <tr>
            <td style="height:6px; background:#111111; border-top-left-radius:14px; border-top-right-radius:14px; font-size:0; line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:18px 24px 0 24px; text-align:center;">
              <img src="https://elpernilet.com/elpernilet-logo.svg" width="140" alt="El Pernilet" style="display:block; margin:0 auto 6px auto; border:0; outline:none; text-decoration:none;">
              <p style="margin:0 0 16px 0; font-size:12px; color:#9aa3af;">Servicios para tus eventos</p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px; text-align:center;">
              <h2 style="margin:0; font-weight:700; font-size:26px; line-height:1.3; color:#111111;">
                ¡Solicitud recibida!
              </h2>
              <p style="margin:10px 0 0 0; font-size:14px; line-height:1.6; color:#374151;">
                Gracias por ponerte en contacto y por confiar en nosotros. En menos de 24&nbsp;h recibirás tu presupuesto acorde con la información introducida. <br>¡Esperamos verte pronto!
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 0 32px; text-align:center;">
              <div style="display:inline-block; padding:8px 12px; border:1px solid #e5e7eb; background:#f9fafb; border-radius:999px; font-size:13px; color:#111;">
                <strong>ID de solicitud:</strong> ${solicitudId}
              </div>
            </td>
          </tr>
          <tr>
            <td style="padding:16px 32px 0 32px;">
              <hr style="border:0; height:1px; background:#efefef; margin:16px 0 8px 0;">
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px;">
              <h3 style="margin:0 0 8px 0; font-size:16px; line-height:1.4; color:#111111;">Resumen de tu solicitud</h3>
            </td>
          </tr>
          <tr>
            <td style="padding:0 24px 16px 24px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="table-layout:fixed; border-collapse:separate; border-spacing:8px;">
                <tr>
                  <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                    <div style="font-size:12px; color:#6b7280; margin:0 0 4px 0;">Nombre</div>
                    <div style="font-size:14px; color:#111; font-weight:600;">${
                      body.firstName
                    } ${body.lastName}</div>
                  </td>
                  <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                    <div style="font-size:12px; color:#6b7280; margin:0 0 4px 0;">Email</div>
                    <div style="font-size:14px; color:#111; font-weight:600;">${
                      body.email
                    }</div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                    <div style="font-size:12px; color:#6b7280; margin:0 0 4px 0;">Teléfono</div>
                    <div style="font-size:14px; color:#111; font-weight:600;">${
                      body.phone
                    }</div>
                  </td>
                  <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                    <div style="font-size:12px; color:#6b7280; margin:0 0 4px 0;">Tipo de cliente</div>
                    <div style="font-size:14px; color:#111; font-weight:600;">
                      ${clientTypeLabels[body.clientType] || body.clientType}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                    <div style="font-size:12px; color:#6b7280; margin:0 0 4px 0;">Tipo de evento</div>
                    <div style="font-size:14px; color:#111; font-weight:600;">
                      ${eventTypeLabels[body.eventType] || body.eventType}
                    </div>
                  </td>
                  <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                    <div style="font-size:12px; color:#6b7280; margin:0 0 4px 0;">Fecha</div>
                    <div style="font-size:14px; color:#111; font-weight:600;">${eventDateEs}</div>
                  </td>
                </tr>
                <tr>
                  <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                    <div style="font-size:12px; color:#6b7280; margin:0 0 4px 0;">Invitados</div>
                    <div style="font-size:14px; color:#111; font-weight:600;">
                      ${guestCountLabels[body.guestCount] || body.guestCount}
                    </div>
                  </td>
                  <td width="50%" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                    <div style="font-size:12px; color:#6b7280; margin:0 0 4px 0;">Presupuesto</div>
                    <div style="font-size:14px; color:#111; font-weight:600;">
                      ${budgetRangeLabels[body.budgetRange] || body.budgetRange}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" valign="top" style="background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:10px 12px;">
                    <div style="font-size:12px; color:#6b7280; margin:0 0 4px 0;">Servicios</div>
                    <div style="font-size:14px; color:#111; font-weight:600; line-height:1.6;">
                      ${
                        body.services && body.services.length
                          ? body.services
                              .map((s) => serviceLabels[s] || s)
                              .join(", ")
                          : "—"
                      }
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" valign="top" style="background:#fcfcfd; border:1px solid #eaeaea; border-radius:10px; padding:12px;">
                    <div style="font-size:12px; color:#6b7280; margin:0 0 6px 0;">Mensaje</div>
                    <div style="font-size:14px; color:#374151; line-height:1.6;">
                      ${body.message}
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 8px 32px; text-align:center;">
              <p style="margin:0; font-size:13px; line-height:1.6; color:#6b7280;">
                Si necesitas modificar algún dato, envía un email a <a href="mailto:hola@elpernilet.com">hola@elpernilet.com</a> con el ID de tu solicitud como asunto y que datos se deben modificar.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:18px 24px 26px 24px; text-align:center;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto;">
                <tr>
                  <td align="center" style="padding:0 10px;">
                    <a href="https://instagram.com/elpernilet" target="_blank" rel="noopener" aria-label="Instagram de El Pernilet" style="text-decoration:none; font-size:14px; color:#111;">
                      <span style="font-size:16px; line-height:1;">📷</span>
                      <span style="display:inline-block; margin-left:6px; vertical-align:middle;">Instagram</span>
                    </a>
                  </td>
                  <td style="padding:0 6px; color:#c4c4c4; font-size:16px;">•</td>
                  <!-- Phone -->
                  <td align="center" style="padding:0 10px;">
                    <a href="tel:+34654127391" aria-label="Llámanos" style="text-decoration:none; font-size:14px; color:#111;">
                      <span style="font-size:16px; line-height:1;">📞</span>
                      <span style="display:inline-block; margin-left:6px; vertical-align:middle;">+34 654 12 73 91</span>
                    </a>
                  </td>
                </tr>
              </table>
              <p style="margin:12px 0 0 0; font-size:12.5px; line-height:1.6; color:#9aa3af;">
                elpernilet.com — Servicios para tus eventos
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
        `,
      });
    } catch (mailError) {
      console.error("Error enviando email de aviso al cliente:", mailError);
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
