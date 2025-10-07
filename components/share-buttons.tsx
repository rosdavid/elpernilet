"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Share2, Facebook, Twitter, Linkedin, Link, Check } from "lucide-react";
import { toast } from "sonner";

interface ShareButtonsProps {
  url: string;
  title: string;
  description?: string;
  className?: string;
}

export function ShareButtons({
  url,
  title,
  description,
  className = "",
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && "share" in navigator);
  }, []);

  const shareUrl = `https://elpernilet.com${url}`;
  const shareText = description || title;

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(title)}&via=elpernilet`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      shareUrl
    )}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(
      `${title} - ${shareUrl}`
    )}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Enlace copiado al portapapeles");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Error al copiar el enlace");
    }
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], "_blank", "width=600,height=600");
    setOpen(false);
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: shareText,
          url: shareUrl,
        });
        setOpen(false);
      } catch {
        // Usuario canceló o error, no hacer nada
      }
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`text-muted-foreground hover:text-foreground ${className} cursor-pointer`}
        >
          <Share2 className="w-4 h-4 mr-2" />
          Compartir
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-64 p-4" align="center">
        <div className="space-y-3">
          <h4 className="font-medium text-sm text-foreground mb-3">
            Compartir este post
          </h4>

          {/* Native Share (móviles) */}
          {canShare && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleNativeShare}
              className="w-full justify-start cursor-pointer"
            >
              <Share2 className="w-4 h-4 mr-2" />
              Compartir
            </Button>
          )}

          {/* Redes sociales */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("facebook")}
              className="justify-start text-xs cursor-pointer"
            >
              <Facebook className="w-4 h-4 mr-2 text-blue-600" />
              Facebook
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("twitter")}
              className="justify-start text-xs cursor-pointer"
            >
              <Twitter className="w-4 h-4 mr-2 text-sky-500" />
              Twitter
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("linkedin")}
              className="justify-start text-xs cursor-pointer"
            >
              <Linkedin className="w-4 h-4 mr-2 text-blue-700" />
              LinkedIn
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("whatsapp")}
              className="justify-start text-xs cursor-pointer"
            >
              <svg
                className="w-4 h-4 mr-2 text-green-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z" />
              </svg>
              WhatsApp
            </Button>
          </div>

          {/* Copiar enlace */}
          <Button
            variant="outline"
            size="sm"
            onClick={copyToClipboard}
            className="w-full justify-start cursor-pointer"
          >
            {copied ? (
              <Check className="w-4 h-4 mr-2 text-green-600" />
            ) : (
              <Link className="w-4 h-4 mr-2" />
            )}
            {copied ? "¡Copiado!" : "Copiar enlace"}
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}
