import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ClerkLoaded, ClerkLoading, ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { ImSpinner2 } from 'react-icons/im';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Consultero',
  description: 'A modern job finding platform for developers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.variable} antialiased relative`}>
          <Navbar />
          <ClerkLoading>
            <div
              className={
                'h-screen grid place-items-center bg-white/30 backdrop-blur-sm'
              }>
              <ImSpinner2 className={'size-12 animate-spin stroke-sky-700'} />
            </div>
          </ClerkLoading>
          <ClerkLoaded>{children}</ClerkLoaded>
          <Footer />
          <Toaster />
          <WhatsAppButton />
        </body>
      </html>
    </ClerkProvider>
  );
}
