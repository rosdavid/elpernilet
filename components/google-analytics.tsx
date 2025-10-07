"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: Record<string, unknown>[];
  }
}

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string;
}

export function GoogleAnalytics({ GA_MEASUREMENT_ID }: GoogleAnalyticsProps) {
  useEffect(() => {
    // Verificar consentimiento de cookies
    const checkConsent = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (consent) {
        try {
          const preferences = JSON.parse(consent);
          if (!preferences.analytics) {
            // Si no hay consentimiento, desactivar GA
            window.gtag = () => {};
            return;
          }
        } catch (error) {
          console.error("Error parsing cookie consent:", error);
          return;
        }
      } else {
        // Sin consentimiento explícito, no activar GA
        return;
      }
    };

    checkConsent();

    // Escuchar cambios en el consentimiento
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "cookie-consent") {
        checkConsent();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Configuración inicial sin consentimiento
            gtag('consent', 'default', {
              'analytics_storage': 'denied'
            });
            
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  );
}
