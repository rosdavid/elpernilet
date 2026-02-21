"use client";

export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="absolute -top-16 left-4 z-[100] bg-primary text-primary-foreground px-4 py-3 rounded-md transition-[top] duration-200 focus:top-4 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
    >
      Saltar al contenido principal
    </a>
  );
}
