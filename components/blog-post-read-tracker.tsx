"use client";

import { useEffect, useRef } from "react";
import { trackBlogPostRead } from "@/hooks/use-analytics";

interface BlogPostReadTrackerProps {
  slug: string;
  title: string;
}

export function BlogPostReadTracker({ slug, title }: BlogPostReadTrackerProps) {
  const trackedRef = useRef(false);

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const sentinel = document.createElement("div");
    sentinel.setAttribute("data-blog-read-sentinel", "true");
    article.appendChild(sentinel);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !trackedRef.current) {
            trackedRef.current = true;
            trackBlogPostRead(slug, title);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(sentinel);
    return () => {
      observer.disconnect();
      sentinel.remove();
    };
  }, [slug, title]);

  return null;
}
