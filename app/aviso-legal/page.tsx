import { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Aviso Legal | El Pernilet",
  description: "Aviso legal del sitio web El Pernilet",
};

export default function LegalPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="min-h-screen bg-background pt-8">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Aviso Legal</h1>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Datos identificativos
              </h2>
              <div className="bg-muted p-6 rounded-lg space-y-2">
                <p>
                  <strong>Denominación social:</strong> El Pernilet
                </p>
                <p>
                  <strong>Actividad:</strong> Servicios de catering y
                  organización de eventos
                </p>
                <p>
                  <strong>Sitio web:</strong> elpernilet.com
                </p>
                <p>
                  <strong>Email de contacto:</strong> Disponible a través del
                  formulario de contacto
                </p>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Este sitio web cumple con la Ley 34/2002, de 11 de julio, de
                Servicios de la Sociedad de la Información y de Comercio
                Electrónico (LSSI-CE).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Objeto</h2>
              <p className="text-muted-foreground leading-relaxed">
                El presente aviso legal regula el uso del sitio web
                elpernilet.com, propiedad de El Pernilet. La navegación por el
                sitio web atribuye la condición de usuario del mismo e implica
                la aceptación plena y sin reservas de todas las disposiciones
                incluidas en este aviso legal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Condiciones de uso
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                El sitio web y sus servicios son de acceso libre y gratuito. No
                obstante, el uso de algunos contenidos o servicios puede estar
                condicionado al previo registro del usuario.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                El usuario se compromete a hacer un uso adecuado de los
                contenidos y servicios que ofrecemos y a no emplearlos para
                actividades ilícitas o contrarias a la buena fe y al orden
                público.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contenidos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Los contenidos del sitio web tienen carácter meramente
                informativo sobre nuestros servicios de catering y eventos. Nos
                reservamos el derecho a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Modificar los contenidos sin previo aviso</li>
                <li>
                  Suprimir, limitar o impedir el acceso cuando lo consideremos
                  oportuno
                </li>
                <li>
                  Establecer condiciones adicionales para el acceso a
                  determinados servicios
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Responsabilidad</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="text-lg font-medium mb-2">Contenidos</h3>
                  <p className="text-muted-foreground">
                    No garantizamos la exactitud, veracidad o actualidad de los
                    contenidos. El usuario es responsable del uso que haga de la
                    información.
                  </p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-medium mb-2">
                    Disponibilidad técnica
                  </h3>
                  <p className="text-muted-foreground">
                    No garantizamos la disponibilidad continua del sitio web ni
                    la ausencia de errores técnicos.
                  </p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-medium mb-2">Enlaces externos</h3>
                  <p className="text-muted-foreground">
                    No nos hacemos responsables del contenido de los sitios web
                    enlazados desde nuestro sitio.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Propiedad intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos los contenidos del sitio web (textos, imágenes, sonidos,
                audio, vídeo, diseños, creatividades, software, etc.) son
                propiedad de El Pernilet o de terceros que han autorizado su
                uso, y están protegidos por derechos de propiedad intelectual e
                industrial.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Protección de datos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                El tratamiento de los datos personales se rige por nuestra
                Política de Privacidad, elaborada conforme al Reglamento General
                de Protección de Datos (RGPD) y la Ley Orgánica de Protección de
                Datos Personales y garantía de los derechos digitales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Este sitio web utiliza cookies según se detalla en nuestra
                Política de Cookies. Al navegar por el sitio, acepta su uso
                conforme a dicha política.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Legislación aplicable
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                El presente aviso legal se rige por la legislación española.
                Para la resolución de cualquier controversia las partes se
                someterán a los Juzgados y Tribunales del domicilio del usuario.
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
