"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { trackCtaFormClick } from "@/hooks/use-analytics";

const SCROLL_THRESHOLD = 400;

export function StickyCta() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  const isAdmin = pathname?.startsWith("/admin");
  const isPublic =
    !isAdmin && pathname !== "/admin" && pathname !== "/admin/login";
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isPublic) return;

    const contactEl = isHome ? document.getElementById("contact") : null;

    const updateVisibility = () => {
      const scrollY = window.scrollY;
      if (scrollY <= SCROLL_THRESHOLD) {
        setIsVisible(false);
        return;
      }
      if (contactEl) {
        const rect = contactEl.getBoundingClientRect();
        const contactInView = rect.top < window.innerHeight;
        if (contactInView) {
          setIsVisible(false);
          return;
        }
      }
      setIsVisible(true);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, [isPublic, isHome]);

  const handleClick = () => {
    trackCtaFormClick("sticky_bar", "Solicita presupuesto");

    if (pathname === "/") {
      const element = document.getElementById("contact");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  if (!isPublic || !isVisible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-t border-border shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:bottom-4 md:left-4 md:right-auto md:max-w-sm md:rounded-lg md:border md:shadow-lg animate-in slide-in-from-bottom-2 duration-300 pr-20 md:pr-4"
      role="banner"
      aria-label="Solicita presupuesto sin compromiso"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 md:flex-col md:items-stretch md:text-center md:gap-2">
        <p className="text-sm font-medium text-foreground">
          Presupuesto gratuito en 24h · Sin compromiso
        </p>
        <Button
          onClick={handleClick}
          size="default"
          className="shrink-0 cursor-pointer md:w-full"
        >
          Solicita presupuesto
        </Button>
      </div>
    </div>
  );
}
