"use client";

import {
  trackPhoneClick,
  trackEmailClick,
  trackMapClick,
} from "@/hooks/use-analytics";

interface ContactLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  type: "phone" | "email" | "map";
  href: string;
  location?: string;
  children: React.ReactNode;
}

export function ContactLink({
  type,
  href,
  location = "footer",
  children,
  ...props
}: ContactLinkProps) {
  const handleClick = () => {
    if (type === "phone") trackPhoneClick(location);
    else if (type === "email") trackEmailClick(location);
    else if (type === "map") trackMapClick(location);
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
