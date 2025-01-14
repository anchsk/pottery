import Link from 'next/link';
import ProductGrid from './product-grid';
import Hero from './hero';
import { HomepageType } from '@/types/all-types';

export default function Homepage({
  homepageData,
}: {
  homepageData?: HomepageType;
}) {
  const { hero, products, linkText } = homepageData || {};
  return (
    <>
      <Hero hero={hero} />
      <ProductGrid products={products} />
      <Link
        href="/products"
        className="mx-auto mb-28 md:mb-52 block w-fit px-4 p-2 my-4"
      >
        {linkText ? linkText : 'Discover more'}
      </Link>
    </>
  );
}
