import { ProductCard } from "@/components/product-card";
import { products } from "@/data/products";

type ProductsViewProps = {
  selectedCategory: "cashew" | "walnut";
};

export function ProductsView({ selectedCategory }: ProductsViewProps) {
  const filteredProducts = products.filter((product) => product.type === selectedCategory);
  const selectedLabel = selectedCategory === "cashew" ? "Cashew Machinery" : "Walnut Machinery";

  return (
    <section className="section bg-background text-foreground">
      <div className="shell">
        {/* <h1 className="section-title text-on-surface text-4xl font-bold leading-tight md:text-5xl">Our Products</h1>
        <p className="muted text-on-surface-variant">
          Use category links under Products to quickly open the right machine line.
        </p>

        <div className="mb-6 mt-4 flex flex-wrap gap-3">
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
          <h2 className="mb-4 text-2xl font-semibold leading-tight text-secondary md:text-3xl">{selectedLabel}</h2>
          <div className="product-grid">
            {filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} eagerImage={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
