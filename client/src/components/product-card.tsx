"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
  eagerImage?: boolean;
};

const specFields: Array<{
  key: keyof Product["specifications"];
  label: string;
}> = [
  { key: "capacity", label: "Capacity" },
  { key: "dimension", label: "Dimension" },
  { key: "wholeKernelPercentage", label: "Whole Kernel Percentage" },
  { key: "brokenPercentage", label: "Broken Percentage" },
  { key: "powerConsumption", label: "Power Consumption" },
  { key: "powerSupply", label: "Power Supply" },
];

export function ProductCard({ product, eagerImage = false }: ProductCardProps) {
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const visibleSpecFields = specFields.filter(({ key }) => {
    const value = product.specifications[key];
    return typeof value === "string" && value.trim().length > 0;
  });

  useEffect(() => {
    if (!isZoomOpen) {
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsZoomOpen(false);
      }
    };

    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("keydown", onEscape);
    };
  }, [isZoomOpen]);

  return (
    <>
      <article className="product-card border-outline-variant bg-surface text-on-surface">
        <button
          type="button"
          className="product-image-placeholder group relative overflow-hidden bg-white p-2 cursor-zoom-in"
          onClick={() => setIsZoomOpen(true)}
          aria-label={`Zoom image for ${product.name}`}
          title="Click to zoom"
        >
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 900px) 100vw, 280px"
            quality={72}
            className="object-contain object-center"
            loading={eagerImage ? "eager" : "lazy"}
            priority={eagerImage}
          />
        </button>

        <div className="product-content">
          <h3 className="text-primary text-xl font-semibold leading-tight md:text-2xl">{product.name}</h3>
          <p className="text-on-surface-variant">{product.keyFeatures}</p>

          <dl className="spec-grid">
            {visibleSpecFields.map(({ key, label }) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{product.specifications[key]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </article>

      {isZoomOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsZoomOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`${product.name} image preview`}
        >
          <div
            className="relative h-full max-h-[85vh] w-full max-w-5xl rounded-xl bg-white p-3"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsZoomOpen(false)}
              className="absolute right-3 top-3 z-10 rounded-md border border-outline-variant bg-surface px-3 py-1 text-on-surface"
              aria-label="Close image preview"
            >
              Close
            </button>

            <div className="relative h-full w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="100vw"
                quality={82}
                className="object-contain object-center"
                priority
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
