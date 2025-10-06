"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

// Componente del icono de WhatsApp original
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.570-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.484 3.488" />
  </svg>
);

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);
  const [tooltipShown, setTooltipShown] = useState(false);

  // Tu número de teléfono (sin espacios, guiones ni símbolos, solo números)
  const phoneNumber = "34654127391"; // +34 654 12 73 91

  // Mensaje predefinido
  const message =
    "¡Hola! Me interesa conocer más sobre sus servicios para eventos. ¿Podrían enviarme información?";

  // URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Aparece después de 1 segundo

    return () => clearTimeout(timer);
  }, []);

  // Mostrar tooltip automáticamente a los 1 segundo
  useEffect(() => {
    if (!isVisible) return;

    const tooltipTimer = setTimeout(() => {
      if (!tooltipShown) {
        setIsExpanded(true);
        setTooltipShown(true);
      }
    }, 1250); // Mostrar tooltip 1 segundo después de que aparezca el botón

    return () => clearTimeout(tooltipTimer);
  }, [isVisible, tooltipShown]);

  // Detectar si el banner de cookies está visible
  useEffect(() => {
    const checkCookieBanner = () => {
      const consent = localStorage.getItem("cookie-consent");
      setCookieBannerVisible(!consent);
    };

    // Verificar inicialmente
    checkCookieBanner();

    // Escuchar cambios en localStorage
    const handleStorageChange = () => {
      checkCookieBanner();
    };

    window.addEventListener("storage", handleStorageChange);

    // También verificar periodicamente por si cambia desde el mismo tab
    const interval = setInterval(checkCookieBanner, 1000);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const closeTooltip = () => {
    setIsExpanded(false);
  };

  const handleWhatsAppClick = () => {
    setIsExpanded(false); // Cerrar tooltip al hacer clic en WhatsApp
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed right-6 z-50 transition-all duration-300 ${
        cookieBannerVisible ? "bottom-32" : "bottom-6"
      }`}
    >
      {/* Tooltip expandido */}
      {isExpanded && (
        <div className="absolute bottom-20 right-0 mb-2">
          <div className="bg-white rounded-lg shadow-lg border p-3 w-60 relative">
            <button
              onClick={closeTooltip}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 cursor-pointer"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="pr-6">
              <h4 className="font-semibold text-gray-900 text-center whitespace-nowrap">
                ¡Hablemos por WhatsApp!
              </h4>
            </div>
            {/* Flecha del tooltip alineada al botón */}
            <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
          </div>
        </div>
      )}

      {/* Botón principal */}
      <div className="relative">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsExpanded(true)}
          onClick={handleWhatsAppClick}
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 group cursor-pointer"
          aria-label="Contactar por WhatsApp"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>

        {/* Pulso animado */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75 pointer-events-none"></div>

        {/* Indicador de notificación */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold pointer-events-none">
          1
        </div>
      </div>
    </div>
  );
}
