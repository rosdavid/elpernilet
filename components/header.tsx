"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-serif font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            <Image
              src="/elpernilet-logo.svg"
              alt="elpernilet"
              width={240}
              height={64}
              className="h-16 w-auto"
              priority
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Galería
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
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
                onClick={() => scrollToSection("services")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2 cursor-pointer"
              >
                Galería
              </button>
              <Button
                onClick={() => scrollToSection("contact")}
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
