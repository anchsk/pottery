import { ProductType } from '@/types/all-types';
import ProductCard from './product-card';

export default function ProductGrid(props: { products?: ProductType[] }) {
  const { products } = props || {};
  return (
    <div className="_product-grid px-4 w-full grid grid-cols-1 gap-4 md:grid-cols-3">
      {products?.map((p: ProductType, i: number) => (
        <ProductCard key={i} product={p}/>
      ))}
    </div>
  );
}
