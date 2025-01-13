import { ProductType } from '@/types/all-types';
import ProductGrid from './product-grid';

export default function ProductsPage({
  products,
}: {
  products?: ProductType[];
}) {
  return <ProductGrid products={products} />;
}
