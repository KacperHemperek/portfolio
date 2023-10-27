import type { Metadata } from 'next';
import { Inter, Roboto_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '~/components/navbar';
import { ScrollToTopButton } from '~/components/scroll-to-top-button';

const inter = Inter({ subsets: ['latin'] });

const roboto = Roboto_Mono({ subsets: ['latin'], variable: '--roboto-mono' });

export const metadata: Metadata = {
  title: 'Kacper Hemperek',
  description:
    'This is a my personal website with my work history, all of my projects and something about myself',
  keywords:
    'Kacper Hemperek, react, react developer, react engineer, Szczecin react developer, angular, Szczecin, frontend developer, frontend',
  authors: [
    { name: 'Kacper Hemperek', url: 'https://github.com/KacperHemperek' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth bg-background text-white'>
      <body className={`${inter.className} ${roboto.variable}`}>
        <Navbar />
        <ScrollToTopButton />
        {children}
      </body>
    </html>
  );
}
