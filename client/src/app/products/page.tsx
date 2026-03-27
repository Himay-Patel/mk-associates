import { ProductsView } from "@/components/products-view";

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string | string[];
  }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;
  const category = Array.isArray(params?.category) ? params.category[0] : params?.category;
  const selectedCategory = category === "walnut" ? "walnut" : "cashew";

  return (
    <ProductsView selectedCategory={selectedCategory} />
  );
}
