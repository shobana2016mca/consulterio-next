import Footer from '@/app/_components/Footer';
import Navbar from '@/app/_components/Navbar';
import WhatsAppButton from '@/app/_components/WhatsAppButton';
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
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='theme-color' content='#ffffff' />
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
          <WhatsAppButton />
          <Footer />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
