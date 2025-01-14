import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full h-full p-4 flex flex-col-reverse gap-10 md:flex-row md:justify-between">
      <Link href="/" className="">
        Pot Pot Pottery
      </Link>
      <div className="flex flex-col gap-4 md:flex-row md:gap-4 text-[--font-gray]">
        <a
          href="https://instagram.com/potpotpottery"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
      </div>
    </footer>
  );
}
