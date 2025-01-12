import Link from 'next/link';
import ProductGrid from './product-grid';
import Hero from './hero';

export default function Homepage() {
  const products = Array.from({ length: 3 }, (_, i) => i + 1);

  return (
    <>
      <Hero /> 
      <ProductGrid products={products} />
      <Link
        href="/products"
        className="mx-auto mb-36 md:mb-52 block w-fit px-4 p-2 my-4"
      >
        Discover more
      </Link>
    </>
  );
}
