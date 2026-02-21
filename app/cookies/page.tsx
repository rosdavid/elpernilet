import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Política de Cookies | elpernilet",
  description: "Información sobre el uso de cookies en elpernilet",
  alternates: {
    canonical: "https://elpernilet.com/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header />
      <div className="min-h-screen bg-background pt-8">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Política de Cookies</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                ¿Qué son las cookies?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en
                su dispositivo cuando visita nuestro sitio web. Nos permiten
                recordar sus preferencias y mejorar su experiencia de
                navegación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Tipos de cookies que utilizamos
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="text-xl font-medium mb-2">
                    Cookies necesarias
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Estas cookies son esenciales para el funcionamiento del
                    sitio web y no se pueden desactivar.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>
                      <strong>admin_session</strong>: Para autenticación del
                      panel de administración (sesión)
                    </li>
                    <li>
                      <strong>localStorage: cookie-consent</strong>: Almacenamos
                      sus preferencias de cookies en su navegador (no es una
                      cookie, pero cumple la misma función de recordar su
                      elección)
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-medium mb-2">
                    Cookies de análisis
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Nos ayudan a entender cómo los visitantes interactúan con
                    nuestro sitio web.
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>
                      <strong>Vercel Analytics</strong>: Análisis de tráfico y
                      comportamiento (sesión)
                    </li>
                    <li>
                      <strong>Vercel Speed Insights</strong>: Métricas de
                      rendimiento del sitio (persistente)
                    </li>
                    <li>
                      <strong>Google Analytics (GA4)</strong>: Estadísticas de
                      uso y comportamiento (_ga: 2 años; _gid: 24 h; _gat: 1 min)
                    </li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-xl font-medium mb-2">
                    Cookies de marketing
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Actualmente no utilizamos cookies de marketing, pero esta
                    sección se actualizará si cambia.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Gestionar sus preferencias
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Puede gestionar sus preferencias de cookies de las siguientes
                maneras:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  A través del banner de cookies que aparece en su primera
                  visita
                </li>
                <li>
                  Configurando su navegador web para bloquear o eliminar cookies
                </li>
                <li>Contactando con nosotros directamente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Responsable</h2>
              <p className="text-muted-foreground leading-relaxed mb-2">
                El responsable del tratamiento de los datos recogidos mediante
                cookies es elpernilet. Para más información sobre el tratamiento
                de sus datos personales, consulte nuestra{" "}
                <a
                  href="/privacidad"
                  className="underline hover:text-primary transition-colors"
                >
                  Política de Privacidad
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Más información</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tiene preguntas sobre nuestra política de cookies, puede
                contactarnos a través de nuestro formulario de contacto o
                enviándonos un email.
              </p>
            </section>

            <section className="bg-muted p-6 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Última actualización:</strong> Febrero 2025
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
