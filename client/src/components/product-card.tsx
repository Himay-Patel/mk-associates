import type { Product } from "@/data/products";

type ProductCardProps = {
  product: Product;
};

const specOrder: Array<keyof Product["specifications"]> = [
  "capacity",
  "dimension",
  "Whole Kernel Percentage",
  "Broken Percentage",
  "Power Consumption",
  "Power Supply",
];

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card border-outline-variant bg-surface text-on-surface">
      <div className="product-image-placeholder bg-primary-container text-on-primary-container">
        <span>{product.type.toUpperCase()} LINE</span>
      </div>

      <div className="product-content">
        <h3 className="text-primary">{product.name}</h3>
        <p className="text-on-surface-variant">{product.keyFeatures}</p>

        <dl className="spec-grid">
          {specOrder.map((key) => (
            <div key={key}>
              <dt>{key}</dt>
              <dd>{product.specifications[key]}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
