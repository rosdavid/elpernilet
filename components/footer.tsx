import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { SocialLink } from "@/components/social-link";
import { ContactLink } from "@/components/contact-link";
import Image from "next/image";
import Link from "next/link";
import { CookieSettingsButton } from "./cookie-settings-button";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="mb-4">
              <Image
                src="/elpernilet-logo-white.svg"
                alt="elpernilet"
                width={240}
                height={64}
                className="h-16 w-auto"
              />
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Servicios de corte de jamón y personal de catering en España
            </p>

            {/* Redes Sociales */}
            <div className="flex gap-4 mt-6">
              <SocialLink
                href="https://instagram.com/elpernilet"
                platform="instagram"
                aria-label="Síguenos en Instagram"
                className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-200 hover:scale-110 transform"
              >
                <Instagram className="w-6 h-6" />
              </SocialLink>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <ContactLink
                  type="phone"
                  href="tel:+34654127391"
                  location="footer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  +34 654 12 73 91
                </ContactLink>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <ContactLink
                  type="email"
                  href="mailto:hola@elpernilet.com"
                  location="footer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  hola@elpernilet.com
                </ContactLink>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <ContactLink
                  type="map"
                  href="https://www.google.com/maps/search/?api=1&query=Carrer+Nou+41+08270+Navarcles+Barcelona"
                  target="_blank"
                  rel="noopener noreferrer"
                  location="footer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Carrer Nou, 41, Navarcles (08270), Barcelona
                </ContactLink>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Útiles</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/cortador-jamon"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Cortador de jamón en vivo
                </Link>
              </li>
              <li>
                <Link
                  href="/barra-bebidas"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Barra de bebidas
                </Link>
              </li>
              <li>
                <Link
                  href="/barra-aperitivos"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Barra de aperitivos
                </Link>
              </li>
              <li>
                <Link
                  href="/camareros"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Camareros profesionales
                </Link>
              </li>
              <li>
                <Link
                  href="/musica-en-directo"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Música en directo
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Eventos corporativos
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-primary-foreground transition-colors"
                >
                  Eventos privados
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60">
              &copy; {new Date().getFullYear()} elpernilet. Todos los derechos
              reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-primary-foreground/60">
              <Link
                href="/aviso-legal"
                className="hover:text-primary-foreground transition-colors"
              >
                Aviso Legal
              </Link>
              <Link
                href="/privacidad"
                className="hover:text-primary-foreground transition-colors"
              >
                Privacidad
              </Link>
              <Link
                href="/cookies"
                className="hover:text-primary-foreground transition-colors"
              >
                Cookies
              </Link>
              <Link
                href="/terminos"
                className="hover:text-primary-foreground transition-colors"
              >
                Términos
              </Link>
              <CookieSettingsButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
