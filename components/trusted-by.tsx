"use client";

import { useState } from "react";
import { Building2, ChevronDown } from "lucide-react";

const trustedBy = [
  "Mas de la Sala",
  "Vila Vallbona",
  "La Premsa",
  "Oller del Mas",
  "Bodegues Abadal",
  "La Sala",
  "Aligué",
  "Eurest",
  "Alecco",
  "Torrebusquets",
  "Lo Racó d'en Carles",
  "Delicious",
  "Nou Urbisol",
  "Guateque Catering",
];

const INITIAL_VISIBLE = 6;

export function TrustedBy() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? trustedBy : trustedBy.slice(0, INITIAL_VISIBLE);
  const hasMore = trustedBy.length > INITIAL_VISIBLE;

  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      aria-label="Empresas que confían en nosotros"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/60 via-orange-50/40 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(217,119,6,0.08),transparent)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100/80 text-amber-800 mb-6">
          <Building2 className="w-4 h-4" />
          <span className="text-sm font-medium">Confían en nosotros</span>
        </div>
        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-6">
          +500 eventos realizados
        </p>
        <div className="flex flex-wrap justify-center gap-2 md:gap-3">
          {visible.map((name) => (
            <span
              key={name}
              className="px-4 py-2 rounded-full border border-amber-200/80 bg-white/90 backdrop-blur-sm text-sm font-medium text-foreground shadow-sm hover:shadow-md hover:border-amber-300/80 transition-all duration-200"
            >
              {name}
            </span>
          ))}
        </div>
        {hasMore && (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-amber-800 hover:text-amber-900 transition-colors cursor-pointer"
          >
            {showAll ? "Ver menos" : "Ver todos"}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </button>
        )}
      </div>
    </section>
  );
}
