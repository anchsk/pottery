export default function ProductPage(props: { slug?: string }) {
  const { slug } = props || {};

  return (
    <div className="border border-gray-300 p-10 min-h-[120svh]">
      Product page: {slug}
    </div>
  );
}
