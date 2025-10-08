"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Función para abrir/cerrar el menú móvil
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Cerrar el dropdown de servicios cuando se cierra el menú móvil
    if (mobileMenuOpen) {
      setMobileServicesOpen(false);
    }
  };

  const navigateToSection = (sectionId: string) => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);

    // Si estamos en la página principal, hacer scroll
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        // Solo aplicar offset si el header está fijo (después de scroll)
        const headerHeight = isScrolled
          ? window.innerWidth < 768
            ? 64
            : 80
          : 0;
        const elementPosition = element.offsetTop - headerHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    } else {
      // Si estamos en otra página, navegar con transición más suave
      router.push(`/#${sectionId}`, { scroll: false });
    }
  };

  // Manejar el scroll para hacer el header sticky
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50); // Se vuelve sticky después de 50px de scroll
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Manejar el scroll cuando se carga la página con un hash
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const timeoutId = setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            // Como inicialmente el header es estático, no necesitamos offset
            // El header se volverá sticky después del scroll
            window.scrollTo({
              top: element.offsetTop,
              behavior: "smooth",
            });
          }
        }, 500);

        return () => clearTimeout(timeoutId);
      }
    }
  }, [pathname]);

  return (
    <header
      className={`w-full z-50 border-b border-border ${
        isScrolled
          ? "fixed top-0 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-sm"
          : "relative bg-background"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-serif font-semibold text-foreground hover:text-primary cursor-pointer flex-shrink-0"
          >
            <Image
              src="/elpernilet-logo.svg"
              alt="elpernilet"
              width={240}
              height={64}
              className="h-12 sm:h-16 w-auto"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setDesktopServicesOpen(true)}
              onMouseLeave={() => setDesktopServicesOpen(false)}
            >
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer flex items-center gap-1 transition-colors duration-200">
                Servicios
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    desktopServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Custom Dropdown */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-border/20 transition-all duration-200 transform origin-top ${
                  desktopServicesOpen
                    ? "opacity-100 visible scale-100 translate-y-0"
                    : "opacity-0 invisible scale-95 -translate-y-2"
                }`}
              >
                <div className="py-2">
                  <Link
                    href="/cortador-jamon"
                    className="flex items-center px-4 py-3 text-sm text-foreground hover:bg-red-50 hover:text-red-700 transition-colors duration-150 group"
                  >
                    <div>
                      <div className="font-medium">Cortadores de Jamón</div>
                      <div className="text-xs text-muted-foreground group-hover:text-red-600">
                        Maestros cortadores profesionales
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="/barra-bebidas"
                    className="flex items-center px-4 py-3 text-sm text-foreground hover:bg-blue-50 hover:text-blue-700 transition-colors duration-150 group"
                  >
                    <div>
                      <div className="font-medium">Barra de Bebidas</div>
                      <div className="text-xs text-muted-foreground group-hover:text-blue-600">
                        Bartenders y cócteles premium
                      </div>
                    </div>
                  </Link>

                  <div className="mx-4 my-2 border-t border-border/30"></div>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigateToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Nosotros
            </button>
            <button
              onClick={() => navigateToSection("gallery")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Galería
            </button>
            <button
              onClick={() => navigateToSection("our-story")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Sobre nosotros
            </button>
            <button
              onClick={() => navigateToSection("faq")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Preguntas frecuentes
            </button>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Blog
            </Link>
            <button
              onClick={() => navigateToSection("online-store")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Tienda Online
            </button>
            <Button
              onClick={() => navigateToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer"
            >
              Contáctanos
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-foreground cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={toggleMobileMenu}
        >
          <nav
            className="absolute top-0 left-0 right-0 bg-background border-b border-border shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col gap-4">
                <div className="border-b border-border/30">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-3 cursor-pointer w-full flex items-center justify-between"
                  >
                    Servicios
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {mobileServicesOpen && (
                    <div className="pl-4 pb-3 space-y-2">
                      <Link
                        href="/cortador-jamon"
                        className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2 cursor-pointer"
                        onClick={toggleMobileMenu}
                      >
                        Cortadores de Jamón
                      </Link>
                      <Link
                        href="/barra-bebidas"
                        className="block text-sm font-medium text-muted-foreground hover:text-foreground py-2 cursor-pointer"
                        onClick={toggleMobileMenu}
                      >
                        Barra de Bebidas
                      </Link>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => navigateToSection("about")}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-3 cursor-pointer border-b border-border/30"
                >
                  Nosotros
                </button>
                <button
                  onClick={() => navigateToSection("gallery")}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-3 cursor-pointer border-b border-border/30"
                >
                  Galería
                </button>
                <button
                  onClick={() => navigateToSection("our-story")}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-3 cursor-pointer border-b border-border/30"
                >
                  Sobre nosotros
                </button>
                <button
                  onClick={() => navigateToSection("faq")}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-3 cursor-pointer border-b border-border/30"
                >
                  Preguntas frecuentes
                </button>
                <Link
                  href="/blog"
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-3 cursor-pointer border-b border-border/30"
                  onClick={toggleMobileMenu}
                >
                  Blog
                </Link>
                <button
                  onClick={() => navigateToSection("online-store")}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-3 cursor-pointer border-b border-border/30"
                >
                  Tienda Online
                </button>
                <div className="pt-4">
                  <Button
                    onClick={() => navigateToSection("contact")}
                    className="bg-primary text-primary-foreground hover:bg-primary/90 w-full cursor-pointer"
                  >
                    Contáctanos
                  </Button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
