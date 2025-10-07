import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Términos de Uso | elpernilet",
  description: "Términos y condiciones de uso del sitio web elpernilet",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="min-h-screen bg-background pt-8">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Términos de Uso</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Aceptación de los términos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Al acceder y utilizar este sitio web, usted acepta estar sujeto
                a estos términos de uso y a todas las leyes y regulaciones
                aplicables. Si no está de acuerdo con alguno de estos términos,
                no debe utilizar este sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Uso del sitio web</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este sitio web está destinado a proporcionar información sobre
                nuestros servicios de catering y eventos. Usted se compromete a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Utilizar el sitio únicamente para fines legales</li>
                <li>No interferir con el funcionamiento del sitio</li>
                <li>
                  No intentar acceder a áreas restringidas sin autorización
                </li>
                <li>
                  Proporcionar información veraz en los formularios de contacto
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Propiedad intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo el contenido de este sitio web, incluyendo textos,
                imágenes, logos, diseños y código fuente, está protegido por
                derechos de autor y otras leyes de propiedad intelectual. No
                está permitida la reproducción, distribución o modificación sin
                autorización expresa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Servicios de catering
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los servicios de catering están sujetos a condiciones
                específicas que se acordarán en cada contrato individual:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Los precios mostrados son orientativos y pueden variar</li>
                <li>
                  Se requiere confirmación por escrito para todos los servicios
                </li>
                <li>
                  Las condiciones de pago se especificarán en cada contrato
                </li>
                <li>
                  Las modificaciones deben comunicarse con la antelación
                  acordada
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Limitación de responsabilidad
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                El uso de este sitio web es bajo su propio riesgo. No
                garantizamos que el sitio esté libre de errores o
                interrupciones. En ningún caso seremos responsables de daños
                directos, indirectos, incidentales o consecuentes que resulten
                del uso del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Enlaces externos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este sitio puede contener enlaces a sitios web de terceros. No
                somos responsables del contenido o las políticas de privacidad
                de estos sitios externos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Modificaciones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de modificar estos términos en
                cualquier momento. Los cambios entrarán en vigor inmediatamente
                después de su publicación en el sitio web.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Ley aplicable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estos términos se rigen por la legislación española. Cualquier
                disputa será sometida a la jurisdicción de los tribunales
                españoles competentes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tiene preguntas sobre estos términos de uso, puede
                contactarnos a través del formulario de contacto disponible en
                el sitio web.
              </p>
            </section>

            <section className="bg-muted p-6 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Última actualización:</strong> Octubre 2024
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
