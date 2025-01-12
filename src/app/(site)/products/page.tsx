import ProductsPage from '@/ui/products-page';

export default function Page() {
  const products = Array.from({ length: 20 }, (_, i) => i + 1);
  return (
    <div className='w-full'>
      <ProductsPage products={products} />
    </div>
  );
}
