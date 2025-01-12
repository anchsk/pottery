import { Modal } from '@/ui/modal';
import ProductPage from '@/ui/product-page';

export default async function ProductModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <Modal>
       <ProductPage slug={slug} /> 
    </Modal>
  );
}
