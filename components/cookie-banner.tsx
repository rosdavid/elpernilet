"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Extend Window interface to include Vercel Analytics
declare global {
  interface Window {
    va?: (...args: unknown[]) => void;
  }
}
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

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Siempre true, no se puede desactivar
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    };
    savePreferences(allPreferences);
  };

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
    setShowBanner(false);

    // Aplicar preferencias a Vercel Analytics
    if (!prefs.analytics) {
      // Desactivar analytics si no está consentido
      if (typeof window !== "undefined") {
        window.va = () => {};
      }
    }
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Banner principal */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-background border-t p-4 pb-6 sm:pb-4 shadow-lg">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="font-semibold mb-2">🍪 Uso de cookies</h3>
              <p className="text-sm text-muted-foreground">
                Utilizamos cookies para mejorar su experiencia, analizar el
                tráfico y personalizar el contenido. Puede gestionar sus
                preferencias en cualquier momento.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                className="cursor-pointer"
                variant="outline"
                size="sm"
                onClick={acceptNecessary}
              >
                Solo necesarias
              </Button>
              <Button
                className="cursor-pointer"
                variant="outline"
                size="sm"
                onClick={() => setShowSettings(true)}
              >
                Personalizar
              </Button>
              <Button className="cursor-pointer" size="sm" onClick={acceptAll}>
                Aceptar todas
              </Button>
            </div>
          </div>
        </div>
      </div>

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
              <Switch checked={true} disabled />
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
                checked={preferences.marketing}
                onCheckedChange={(checked) =>
                  setPreferences((prev) => ({ ...prev, marketing: checked }))
                }
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={acceptNecessary}>
              Solo necesarias
            </Button>
            <Button onClick={saveCustomPreferences}>
              Guardar preferencias
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
