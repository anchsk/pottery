import { productBySlugQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanity.fetch';
import { ProductType } from '@/types/all-types';
import { Modal } from '@/ui/modal';
import ProductPage from '@/ui/product-page';

export default async function ProductModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = await sanityFetch<ProductType>({
    query: productBySlugQuery,
    params: await params,
  });
  return (
    <Modal>
      <ProductPage product={product} isModal={true} />
    </Modal>
  );
}
