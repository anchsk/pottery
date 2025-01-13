import { productsPageQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanity.fetch';
import { ProductsPageType } from '@/types/all-types';
import ProductsPage from '@/ui/products-page';

export default async function Page() {
  const productsPageData = await sanityFetch<ProductsPageType>({
    query: productsPageQuery,
  });

  if (!productsPageData) return;

  return (
    <div className="w-full">
      <ProductsPage products={productsPageData} />
    </div>
  );
}
