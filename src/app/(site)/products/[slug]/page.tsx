//export const dynamicParams = false;
export const dynamic = 'force-dynamic';

import { client } from '@/sanity/lib/client';
import { productBySlugQuery, productPathsQuery } from '@/sanity/lib/queries';
import { sanityFetch } from '@/sanity/lib/sanity.fetch';
import { ProductType } from '@/types/all-types';
import ProductPage from '@/ui/product-page';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const products = await client.fetch(productPathsQuery);
  return products;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = await sanityFetch<ProductType>({
    query: productBySlugQuery,
    params: await params,
  });
  if (!product) {
    notFound();
  }
  return (
    <div className="w-full">
      <ProductPage product={product} />
    </div>
  );
}
