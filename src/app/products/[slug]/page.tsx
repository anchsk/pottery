import ProductPage from '@/ui/product-page';

export function generateStaticParams() {
  const slugs = Array.from({ length: 20 }, (_, i) => i + 1);
  return slugs.map((slug, i) => ({ slug: slug.toString() }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div className="w-full">
      <ProductPage slug={slug} />
    </div>
  );
}
