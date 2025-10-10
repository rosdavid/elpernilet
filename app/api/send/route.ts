import { EmailTemplate } from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(...args: [Request]) {
  try {
    const reqBody = await (typeof Request !== "undefined"
      ? args[0].json()
      : Promise.resolve({}));
    const {
      firstName,
      lastName,
      email,
      phone,
      eventType,
      eventDate,
      message,
      clientType,
      guestCount,
      budgetRange,
      services,
    } = reqBody;

    const { data, error } = await resend.emails.send({
      from: "Notificaciones <notificaciones@notificaciones.elpernilet.com>",
      to: ["hola@elpernilet.com"],
      subject: "Solicitud de Contacto Recibida",
      react: EmailTemplate({
        firstName,
        lastName,
        email,
        phone,
        eventType,
        eventDate,
        message,
        clientType,
        guestCount,
        budgetRange,
        services,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
