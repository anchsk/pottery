import ProductGrid from './product-grid';

export default function ProductsPage(props: { products?: Array<any> }) {
  const products = Array.from({ length: 20 }, (_, i) => i + 1);

  return <ProductGrid products={products} />;
}
