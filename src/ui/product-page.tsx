export default function ProductPage(props: { slug?: string }) {
  const { slug } = props || {};

  return (
    <div className="m-4 border border-gray-300 p-10 min-h-[50svh]">
      Product page: {slug}
    </div>
  );
}
