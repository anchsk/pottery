import Link from 'next/link';
import ProductGrid from './product-grid';

export default function Homepage() {
  const products = Array.from({ length: 6 }, (_, i) => i + 1);

  return (
    <div className="w-full">
      <ProductGrid products={products} />
      <Link
        href="/products"
        className="mx-auto mb-20 block w-fit px-4 p-2 my-4"
      >
        Discover more
      </Link>
    </div>
  );
}
