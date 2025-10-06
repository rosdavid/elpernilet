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
        // Altura adaptativa del header según el dispositivo
        const headerHeight = window.innerWidth < 768 ? 64 : 80;
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

  // Manejar el scroll cuando se carga la página con un hash
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const timeoutId = setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            // Altura adaptativa del header según el dispositivo
            const headerHeight = window.innerWidth < 768 ? 64 : 80;
            const elementPosition = element.offsetTop - headerHeight;

            window.scrollTo({
              top: elementPosition,
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
      className="fixed top-0 left-0 right-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border transition-all duration-300 ease-in-out"
      style={{
        position: "fixed",
        transform: "translate3d(0, 0, 0)",
        willChange: "transform",
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-serif font-semibold text-foreground hover:text-primary transition-colors cursor-pointer flex-shrink-0"
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
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Blog
            </Link>
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
            className="md:hidden p-2 text-foreground cursor-pointer transition-transform duration-200 hover:scale-105"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 transition-transform duration-200 rotate-90" />
            ) : (
              <Menu className="h-6 w-6 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav
          className={`md:hidden border-t border-border overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen
              ? "max-h-96 opacity-100 py-4"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div
            className={`flex flex-col gap-4 transition-all duration-300 ease-in-out ${
              mobileMenuOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-4 opacity-0"
            }`}
          >
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
            <Link
              href="/blog"
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Button
              onClick={() => navigateToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 w-full cursor-pointer"
            >
              Contáctanos
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
