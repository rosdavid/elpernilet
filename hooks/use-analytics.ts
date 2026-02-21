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

// Clics en CTAs que llevan al formulario
export const trackCtaFormClick = (
  ctaLocation: string,
  ctaText: string = "Solicita presupuesto"
) => {
  trackEvent("cta_form_click", {
    cta_location: ctaLocation,
    cta_text: ctaText,
    page: typeof window !== "undefined" ? window.location.pathname || "/" : "/",
  });
};

// Envío exitoso del formulario (conversión)
export const trackFormSend = () => {
  trackEvent("form_send", {
    form_name: "contact_form",
    page: typeof window !== "undefined" ? window.location.pathname || "/" : "/",
  });
  trackFormSubmission("contact_form");
  trackConversion("contact_form_submitted", "lead_generation");
};

// Clic en WhatsApp
export const trackWhatsAppClick = () => {
  trackEvent("whatsapp_click", {
    page: typeof window !== "undefined" ? window.location.pathname || "/" : "/",
  });
  trackConversion("whatsapp_click", "contact");
};

// Clic en redes sociales
export const trackSocialClick = (platform: string) => {
  trackEvent("social_click", {
    platform,
    page: typeof window !== "undefined" ? window.location.pathname || "/" : "/",
  });
};

const getPage = () =>
  typeof window !== "undefined" ? window.location.pathname || "/" : "/";

// Inicio de rellenado del formulario (primer focus/interacción)
export const trackFormStart = () => {
  trackEvent("form_start", { form_name: "contact_form", page: getPage() });
};

// Abandono del formulario (form_start disparado pero usuario cierra/abandona sin enviar)
export const trackFormAbandon = () => {
  trackEvent("form_abandon", { form_name: "contact_form", page: getPage() });
};

// Error de validación en formulario
export const trackFormValidationError = (field?: string, message?: string) => {
  trackEvent("form_validation_error", {
    form_name: "contact_form",
    field: field || "unknown",
    message: message || "",
    page: getPage(),
  });
};

// Error al enviar formulario (red, servidor, etc.)
export const trackFormError = (errorType: string) => {
  trackEvent("form_error", {
    form_name: "contact_form",
    error_type: errorType,
    page: getPage(),
  });
};

// Scroll hasta la sección de contacto
export const trackScrollToContact = () => {
  trackEvent("scroll_to_contact", { page: getPage() });
};

// Clic en teléfono
export const trackPhoneClick = (location?: string) => {
  trackEvent("phone_click", { location: location || "unknown", page: getPage() });
  trackConversion("phone_click", "contact");
};

// Clic en email
export const trackEmailClick = (location?: string) => {
  trackEvent("email_click", {
    location: location || "unknown",
    page: getPage(),
  });
  trackConversion("email_click", "contact");
};

// Clic en mapa/direcciones
export const trackMapClick = (location?: string) => {
  trackEvent("map_click", {
    location: location || "unknown",
    page: getPage(),
  });
};

// Apertura de pregunta en FAQ
export const trackFaqOpen = (question: string, page?: string) => {
  trackEvent("faq_open", {
    question: question.substring(0, 100),
    faq_page: page || getPage(),
    page: getPage(),
  });
};

// Lectura completa de artículo del blog (scroll hasta el final)
export const trackBlogPostRead = (slug: string, title: string) => {
  trackEvent("blog_post_read", {
    blog_slug: slug,
    blog_title: title,
    page: getPage(),
  });
};

// Apertura del menú móvil
export const trackMenuOpen = () => {
  trackEvent("menu_open", { page: getPage() });
};

// Apertura del dropdown de servicios (desktop)
export const trackServicesDropdownOpen = () => {
  trackEvent("services_dropdown_open", { page: getPage() });
};

// Selección de rango de presupuesto
export const trackBudgetRangeSelect = (value: string) => {
  trackEvent("budget_range_select", {
    value,
    form_name: "contact_form",
    page: getPage(),
  });
};

// Selección de tipo de evento
export const trackEventTypeSelect = (value: string) => {
  trackEvent("event_type_select", {
    value,
    form_name: "contact_form",
    page: getPage(),
  });
};

// Selección de servicios en el multi-select
export const trackServicesSelect = (services: string[]) => {
  trackEvent("services_select", {
    services: services.join(","),
    count: services.length,
    form_name: "contact_form",
    page: getPage(),
  });
};
