import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/ui/footer';
import Header from '@/ui/header';

export const metadata: Metadata = {
  title: 'Pot Pot Pottery',
  description: 'Potteries by Leonardo Romano',
};

export default function RootLayout({
  modal,
  children,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/icon.png" sizes="120x120" />
      </head>
      <body className="antialiased flex flex-col min-h-svh">
        {modal}
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
