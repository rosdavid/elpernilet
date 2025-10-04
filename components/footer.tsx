import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
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
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href="tel:+34654127391">+34 654 12 73 91</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href="mailto:hola@elpernilet.com">hola@elpernilet.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5" />
                <span>Carrer Nou, 41, Navarcles (08270), Barcelona</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Cortador de jamón en vivo</li>
              <li>Barra de bebidas y aperitivos</li>
              <li>Servicio de camareros</li>
              <li>Eventos corporativos</li>
              <li>Eventos privados</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>
            &copy; {new Date().getFullYear()} elpernilet. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
