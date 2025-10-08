"use client";
import Image from "next/image";
import { useState, memo, useCallback } from "react";

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  fill?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
}

const LazyImage = memo(
  ({
    src,
    alt,
    width,
    height,
    className = "",
    priority = false,
    sizes,
    fill = false,
    placeholder = "empty",
    blurDataURL,
  }: LazyImageProps) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    // Usar useCallback para evitar recrear funciones
    const handleLoad = useCallback(() => {
      setIsLoading(false);
    }, []);

    const handleError = useCallback(() => {
      setIsLoading(false);
      setHasError(true);
    }, []);

    return (
      <div className={`relative ${className}`}>
        {!hasError ? (
          <Image
            src={src}
            alt={alt}
            width={fill ? undefined : width}
            height={fill ? undefined : height}
            fill={fill}
            className={`transition-opacity duration-300 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            onLoad={handleLoad}
            onError={handleError}
            priority={priority}
            sizes={sizes}
            loading={priority ? "eager" : "lazy"}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            // Optimizaciones adicionales
            quality={85}
            unoptimized={false}
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
            <span>Error cargando imagen</span>
          </div>
        )}
      </div>
    );
  }
);

LazyImage.displayName = "LazyImage";
export { LazyImage };
