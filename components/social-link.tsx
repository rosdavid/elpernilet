"use client";

import { trackSocialClick } from "@/hooks/use-analytics";
import type { ReactNode } from "react";

interface SocialLinkProps {
  href: string;
  platform: string;
  "aria-label": string;
  children: ReactNode;
  className?: string;
}

export function SocialLink({
  href,
  platform,
  "aria-label": ariaLabel,
  children,
  className,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={className}
      onClick={() => trackSocialClick(platform)}
    >
      {children}
    </a>
  );
}
