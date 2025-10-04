"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navigateToSection = (sectionId: string) => {
    setMobileMenuOpen(false);

    // Si estamos en la página principal, hacer scroll
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerHeight = 80;
        const elementPosition = element.offsetTop - headerHeight;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    } else {
      // Si estamos en otra página, navegar con transición más suave
      // Usar replace en lugar de push para evitar historial innecesario
      router.push(`/#${sectionId}`, { scroll: false });
    }
  };

  // Manejar el scroll cuando se carga la página con un hash
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      if (hash) {
        // Delay más largo para asegurar que toda la página esté cargada
        const timeoutId = setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            // Calcular la posición considerando el header fijo
            const headerHeight = 80; // altura del header
            const elementPosition = element.offsetTop - headerHeight;

            // Scroll suave manual para mejor control
            window.scrollTo({
              top: elementPosition,
              behavior: "smooth",
            });
          }
        }, 500); // Delay más largo para evitar el salto

        return () => clearTimeout(timeoutId);
      }
    }
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-serif font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <Image
              src="/elpernilet-logo.svg"
              alt="elpernilet"
              width={240}
              height={64}
              className="h-16"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigateToSection("services")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => navigateToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Nosotros
            </button>
            <button
              onClick={() => navigateToSection("gallery")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Galería
            </button>
            <button
              onClick={() => navigateToSection("our-story")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Sobre nosotros
            </button>
            <button
              onClick={() => navigateToSection("faq")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Preguntas frecuentes
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => navigateToSection("services")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                Servicios
              </button>
              <button
                onClick={() => navigateToSection("about")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                Nosotros
              </button>
              <button
                onClick={() => navigateToSection("gallery")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                Galería
              </button>
              <button
                onClick={() => navigateToSection("our-story")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                Sobre nosotros
              </button>
              <button
                onClick={() => navigateToSection("faq")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                Preguntas frecuentes
              </button>
              <Button
                onClick={() => navigateToSection("contact")}
                className="bg-primary text-primary-foreground hover:bg-primary/90 w-full cursor-pointer"
              >
                Contáctanos
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
