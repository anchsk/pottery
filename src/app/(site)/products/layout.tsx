import Header from '@/ui/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='pt-16 md:pt-32 mb-36 md:mb-52'>{children}</main>
    </>
  );
}
