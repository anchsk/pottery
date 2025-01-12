import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center p-4 shrink-0">
      <Link href="/">Pot Pot Pottery</Link>
      <div className='text-[--font-gray]'>Potteries by Leonardo Romano</div>
    </header>
  );
}
