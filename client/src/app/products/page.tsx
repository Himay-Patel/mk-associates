import { Suspense } from "react";

import { ProductsView } from "@/components/products-view";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <section className="section bg-background text-foreground">
          <div className="shell">
            <h1 className="section-title text-on-surface">Our Products</h1>
            <p className="muted text-on-surface-variant">Loading product category...</p>
          </div>
        </section>
      }
    >
      <ProductsView />
    </Suspense>
  );
}
