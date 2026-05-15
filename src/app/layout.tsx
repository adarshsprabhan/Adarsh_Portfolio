import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import '@/styles/globals.css';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Adarsh Prabhan | Full Stack Developer',
  description:
    'Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable applications and solving complex problems.',
  keywords: [
    'Full Stack Developer',
    'React',
    'Node.js',
    'TypeScript',
    'Web Development',
  ],
  authors: [{ name: 'Adarsh Prabhan' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adarsh-portfolio-j235.vercel.app',
    title: 'Adarsh Prabhan | Full Stack Developer',
    description:
      'Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceMono.variable} suppressHydrationWarning>
      <body className="bg-slate-950 text-white">{children}</body>
    </html>
  );
}
