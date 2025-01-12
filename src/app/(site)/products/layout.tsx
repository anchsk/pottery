import Header from '@/ui/header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='pt-32'>{children}</main>
    </>
  );
}
