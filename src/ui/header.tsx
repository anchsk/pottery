import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center p-4">
      <Link href="/">Pot Pot Pottery</Link>
      <div>Potteries by Leonardo Romano</div>
    </header>
  );
}
