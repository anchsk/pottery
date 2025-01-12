export default function ProductGrid(props: { products?: Array<any> }) {
  const { products } = props || {};
  return (
    <div className="_product-grid px-4 w-full grid grid-cols-1 gap-4 md:grid-cols-3">
      {products?.map((p: any, i: number) => (
        <div key={i} className="aspect-[0.7] w-full bg-gray-200 grid place-items-center">
          {i+1}
        </div>
      ))}
    </div>
  );
}
