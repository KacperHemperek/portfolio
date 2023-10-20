import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kacper Hemperek - Software Engineer',
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
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
