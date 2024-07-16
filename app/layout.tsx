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
          rel='apple-touch-icon-precomposed'
          sizes='57x57'
          href='/manifest/apple-touch-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='114x114'
          href='/manifest/apple-touch-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='72x72'
          href='/manifest/apple-touch-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='144x144'
          href='/manifest/apple-touch-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='60x60'
          href='/manifest/apple-touch-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='120x120'
          href='/manifest/apple-touch-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='76x76'
          href='/manifest/apple-touch-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon-precomposed'
          sizes='152x152'
          href='/manifest/apple-touch-icon-152x152.png'
        />
        <link
          rel='icon'
          type='image/png'
          href='/manifest/favicon-196x196.png'
          sizes='196x196'
        />
        <link
          rel='icon'
          type='image/png'
          href='/manifest/favicon-96x96.png'
          sizes='96x96'
        />
        <link
          rel='icon'
          type='image/png'
          href='/manifest/favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='/manifest/favicon-16x16.png'
          sizes='16x16'
        />
        <link
          rel='icon'
          type='image/png'
          href='/manifest/favicon-128x128.png'
          sizes='128x128'
        />
        <meta name='application-name' content='&nbsp;' />
        <meta name='msapplication-TileColor' content='#FFFFFF' />
        <meta name='msapplication-TileImage' content='mstile-144x144.png' />
        <meta name='msapplication-square70x70logo' content='mstile-70x70.png' />
        <meta
          name='msapplication-square150x150logo'
          content='mstile-150x150.png'
        />
        <meta
          name='msapplication-wide310x150logo'
          content='mstile-310x150.png'
        />
        <meta
          name='msapplication-square310x310logo'
          content='mstile-310x310.png'
        />

        <link rel='manifest' href='/manifest/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/manifest/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        {/* <meta name='msapplication-TileColor' content='#da532c' /> */}
        <meta name='theme-color' content='#ffffff' />
        <body className={`${inter.variable} antialiased relative`}>
          <Navbar />
          <ClerkLoading>
            <div
              className={
                'h-screen grid place-items-center bg-white/30 backdrop-blur-sm'
              }>
              <ImSpinner2 className={'size-12 animate-spin stroke-blue-700'} />
            </div>
          </ClerkLoading>
          <ClerkLoaded>{children}</ClerkLoaded>
          <Footer />
          <Toaster />
          <WhatsAppButton />
          {/* <Script src='/worker.js' /> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
