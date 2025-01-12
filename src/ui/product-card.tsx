import Link from 'next/link';
export default function ProductCard({ product }: { product?: any }) {
  return (
    <Link
      href={`/products/${product}`}
      className="aspect-[0.7] w-full bg-gray-200 grid place-items-center"
      scroll={false}

    >
      {product}
    </Link>
  );
}
