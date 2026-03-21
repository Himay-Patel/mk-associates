import { ProductsView } from "@/components/products-view";

type ProductsPageProps = {
  searchParams?: {
    category?: string;
  };
};

export default function ProductsPage({ searchParams }: ProductsPageProps) {
  const selectedCategory = searchParams?.category === "walnut" ? "walnut" : "cashew";

  return (
    <ProductsView selectedCategory={selectedCategory} />
  );
}
