"use client";

import { useState, useEffect } from "react";
import { Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export function CookieSettingsButton() {
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  // Cargar preferencias actuales al abrir el modal
  useEffect(() => {
    if (showSettings) {
      const consent = localStorage.getItem("cookie-consent");
      if (consent) {
        try {
          const savedPreferences = JSON.parse(consent);
          setPreferences(savedPreferences);
        } catch (error) {
          console.error("Error parsing cookie consent:", error);
        }
      }
    }
  }, [showSettings]);

  const acceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      marketing: false,
    };
    savePreferences(necessaryOnly);
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
    setShowSettings(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));

    // Aplicar preferencias a Vercel Analytics
    if (!prefs.analytics) {
      if (typeof window !== "undefined") {
        (window as unknown as { va?: (...args: unknown[]) => void }).va =
          () => {};
      }
    }

    // Aplicar preferencias a Google Analytics
    if (typeof window !== "undefined") {
      const windowWithGtag = window as Window & {
        gtag?: (...args: unknown[]) => void;
      };
      if (windowWithGtag.gtag) {
        if (prefs.analytics) {
          // Otorgar consentimiento para analytics
          windowWithGtag.gtag("consent", "update", {
            analytics_storage: "granted",
          });
        } else {
          // Denegar consentimiento para analytics
          windowWithGtag.gtag("consent", "update", {
            analytics_storage: "denied",
          });
        }
      }
    }
  };

  return (
    <>
      <button
        onClick={() => setShowSettings(true)}
        className="inline-flex justify-center items-center text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors gap-1 cursor-pointer"
      >
        <Settings className="w-4 h-4" />
        Configurar cookies
      </button>

      {/* Modal de configuración */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl mx-auto w-[calc(100vw-2rem)] sm:w-full">
          <DialogHeader>
            <DialogTitle>Configuración de cookies</DialogTitle>
            <DialogDescription>
              Gestione sus preferencias de cookies. Las cookies necesarias no se
              pueden desactivar.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Cookies necesarias</Label>
                <p className="text-sm text-muted-foreground">
                  Esenciales para el funcionamiento del sitio (autenticación,
                  seguridad).
                </p>
              </div>
              <Switch className="cursor-pointer" checked={true} disabled />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Cookies de análisis</Label>
                <p className="text-sm text-muted-foreground">
                  Nos ayudan a entender cómo usa el sitio para mejorarlo (Vercel
                  Analytics y Vercel SpeedInsights).
                </p>
              </div>
              <Switch
                className="cursor-pointer"
                checked={preferences.analytics}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, analytics: checked }))
                }
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <Label className="font-medium">Cookies de marketing</Label>
                <p className="text-sm text-muted-foreground">
                  Para mostrar contenido y anuncios relevantes (actualmente no
                  utilizadas).
                </p>
              </div>
              <Switch
                className="cursor-pointer"
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </div>

          <DialogFooter>
            <Button
              className="cursor-pointer"
              variant="outline"
              onClick={acceptNecessary}
            >
              Solo necesarias
            </Button>
            <Button className="cursor-pointer" onClick={saveCustomPreferences}>
              Guardar preferencias
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
