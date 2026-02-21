"use client";

import { useEffect, useRef } from "react";
import { trackScrollToContact } from "@/hooks/use-analytics";

export function ScrollToContactTracker() {
  const trackedRef = useRef(false);

  useEffect(() => {
    const contactEl = document.getElementById("contact");
    if (!contactEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !trackedRef.current) {
            trackedRef.current = true;
            trackScrollToContact();
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  return null;
}
