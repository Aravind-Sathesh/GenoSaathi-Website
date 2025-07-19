import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import GoogleAnalytics from './components/GoogleAnalytics';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '700'],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'GenoSaathi - Genetic Compatibility Matching for Better Relationships',
  description:
    'Revolutionary genetic compatibility matching service for deeper, more meaningful relationships. Discover your perfect match through cutting-edge genetic science.',
  keywords:
    'genetic compatibility, DNA matching, relationship compatibility, genetic testing, partner matching, relationship science',
  authors: [{ name: 'GenoSaathi Team' }],
  creator: 'GenoSaathi',
  publisher: 'GenoSaathi',
  robots: 'index, follow',
  openGraph: {
    title: 'GenoSaathi - Genetic Compatibility Matching',
    description:
      'Revolutionary genetic compatibility matching for deeper, more meaningful relationships.',
    url: 'https://genosaathi.com',
    siteName: 'GenoSaathi',
    images: [
      {
        url: '/logo.jpeg',
        width: 1200,
        height: 630,
        alt: 'GenoSaathi Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GenoSaathi - Genetic Compatibility Matching',
    description:
      'Revolutionary genetic compatibility matching for deeper, more meaningful relationships.',
    images: ['/logo.jpeg'],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: 'https://genosaathi.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='canonical' href='https://genosaathi.com' />
        <meta name='theme-color' content='#FCCFE8' />
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
