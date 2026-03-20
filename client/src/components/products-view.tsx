"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

export function ProductsView() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ?? undefined;
  const selectedCategory = category === "walnut" ? "walnut" : "cashew";
  const filteredProducts = products.filter((product) => product.type === selectedCategory);
  const selectedLabel = selectedCategory === "cashew" ? "Cashew Machinery" : "Walnut Machinery";

  return (
    <section className="section bg-background text-foreground">
      <div className="shell">
        <h1 className="section-title text-on-surface">Our Products</h1>
        {/* <p className="muted text-on-surface-variant">
          Product lines are grouped by processing category for faster selection.
        </p> */}

        {/* <div className="mb-6 mt-4 flex flex-wrap gap-3">
          <Link
            href="/products?category=cashew"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              selectedCategory === "cashew"
                ? "border-primary bg-primary-container text-on-primary-container"
                : "border-outline-variant bg-surface text-on-surface hover:bg-surface-container"
            }`}
            aria-current={selectedCategory === "cashew" ? "page" : undefined}
          >
            Cashew
          </Link>
          <Link
            href="/products?category=walnut"
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
              selectedCategory === "walnut"
                ? "border-primary bg-primary-container text-on-primary-container"
                : "border-outline-variant bg-surface text-on-surface hover:bg-surface-container"
            }`}
            aria-current={selectedCategory === "walnut" ? "page" : undefined}
          >
            Walnut
          </Link>
        </div> */}

        <div className="product-category">
          <h2 className="section-title text-primary">{selectedLabel}</h2>
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
