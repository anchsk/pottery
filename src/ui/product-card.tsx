import Link from 'next/link';
import ImageMedia from './image-media';
import { ProductType } from '@/types/all-types';
import { euro } from '@/utils';



export default function ProductCard({ product }: { product?: ProductType }) {
  if (!product) return;

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block relative aspect-[0.7] w-full bg-gray-200"
      scroll={false}
    >
      <div className="relative w-full h-full block">
        <ImageMedia asset={product.mainImage?.asset} />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0
        flex flex-col p-4 z-10"
      >
        {product.title && <div>{product.title}</div>}
        {product.price && <div>{euro.format(product.price)}</div>}
      </div>
    </Link>
  );
}
