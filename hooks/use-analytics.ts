"use client";

import { useEffect } from "react";

// Evento personalizado de GA4
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, unknown>
) => {
  if (typeof window !== "undefined" && window.gtag) {
    // Verificar consentimiento antes de hacer tracking
    const consent = localStorage.getItem("cookie-consent");
    if (consent) {
      try {
        const preferences = JSON.parse(consent);
        if (preferences.analytics) {
          window.gtag("event", eventName, parameters);
        }
      } catch (error) {
        console.error("Error checking analytics consent:", error);
      }
    }
  }
};

// Hook para tracking automático de páginas
export const usePageTracking = () => {
  useEffect(() => {
    const trackPageView = () => {
      trackEvent("page_view", {
        page_title: document.title,
        page_location: window.location.href,
      });
    };

    // Track inicial
    trackPageView();

    // Track en cambios de ruta (para SPAs)
    const handleRouteChange = () => {
      trackPageView();
    };

    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);
};

// Función para tracking de conversiones
export const trackConversion = (
  action: string,
  category?: string,
  value?: number
) => {
  trackEvent("conversion", {
    event_category: category || "general",
    event_label: action,
    value: value || 0,
  });
};

// Función para tracking de formularios
export const trackFormSubmission = (formName: string) => {
  trackEvent("form_submit", {
    form_name: formName,
  });
};
