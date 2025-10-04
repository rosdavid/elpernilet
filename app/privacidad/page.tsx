import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Política de Privacidad | El Pernilet",
  description: "Política de privacidad y protección de datos de El Pernilet",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Información del responsable
              </h2>
              <div className="bg-muted p-6 rounded-lg">
                <p>
                  <strong>Denominación social:</strong> El Pernilet
                </p>
                <p>
                  <strong>Actividad:</strong> Servicios de catering y eventos
                </p>
                <p>
                  <strong>Contacto:</strong> A través del formulario de contacto
                  del sitio web
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Qué datos recopilamos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Recopilamos los siguientes tipos de información:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Datos de contacto:</strong> Nombre, email, teléfono
                  (formulario de contacto)
                </li>
                <li>
                  <strong>Datos de navegación:</strong> Dirección IP, navegador,
                  páginas visitadas
                </li>
                <li>
                  <strong>Cookies:</strong> Según se detalla en nuestra política
                  de cookies
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Finalidad del tratamiento
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-lg font-medium">Gestión de consultas</h3>
                  <p className="text-muted-foreground">
                    Para responder a sus consultas y solicitudes de presupuesto.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-medium">Mejora del servicio</h3>
                  <p className="text-muted-foreground">
                    Para analizar el uso del sitio web y mejorar nuestros
                    servicios.
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-medium">Cumplimiento legal</h3>
                  <p className="text-muted-foreground">
                    Para cumplir con obligaciones legales y fiscales.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Base legal</h2>
              <p className="text-muted-foreground leading-relaxed">
                El tratamiento de sus datos se basa en su consentimiento
                explícito cuando nos contacta a través del formulario, y en
                nuestro interés legítimo para el funcionamiento del sitio web y
                mejora de nuestros servicios.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Conservación de datos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Sus datos se conservarán durante el tiempo necesario para
                cumplir con la finalidad para la que fueron recogidos, y
                posteriormente durante los plazos legalmente establecidos.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Sus derechos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Conforme al RGPD, usted tiene derecho a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la supresión de sus datos</li>
                <li>Limitar el tratamiento</li>
                <li>Oponerse al tratamiento</li>
                <li>Portabilidad de los datos</li>
                <li>
                  Presentar una reclamación ante la Agencia Española de
                  Protección de Datos
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Seguridad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas técnicas y organizativas apropiadas para
                proteger sus datos personales contra el acceso no autorizado,
                alteración, divulgación o destrucción.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Cambios en esta política
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos reservamos el derecho a modificar esta política de
                privacidad. Los cambios se publicarán en esta página con la
                fecha de actualización correspondiente.
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
