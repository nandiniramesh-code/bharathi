import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/Components/Navbar';
import WhatsApp from '@/Components/WhatsApp';
import Footer from '@/Components/footer';
import Script from 'next/script';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'EducationalOrganization',
          name: 'Bharathi Academy',
          description: 'Leading medical and healthcare education institution',
          url: 'https://bharathiacademy.edu',
          logo: '/BHARATHI.PNG',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '123 Education Street',
            addressLocality: 'Medical District',
            addressRegion: 'Karnataka',
            addressCountry: 'India'
          }
        })
      }}
    />
  );
}

export const metadata = {
  title: 'Bharathi Academy - Medical & Healthcare Education Institution',
  description: 'Bharathi Academy offers UGC-approved degree courses, diplomas, and certifications in medical technology and healthcare. Join our industry-oriented programs for a successful career in healthcare.',
  keywords: 'medical education, healthcare courses, UGC approved degrees, medical technology, diploma courses, Bharathi Academy, healthcare education, medical training, certification courses, career in healthcare',
  metadataBase: new URL('https://bharathiacademy.edu'),
  openGraph: {
    title: 'Bharathi Academy - Medical & Healthcare Education Institution',
    description: 'Leading healthcare education institution offering UGC-approved degree courses, diplomas, and certifications in medical technology. Build your career in healthcare with our industry-oriented programs.',
    url: 'https://bharathiacademy.edu',
    siteName: 'Bharathi Academy',
    images: [
      {
        url: '/BHARATHI.PNG',
        width: 800,
        height: 800,
        alt: 'Bharathi Academy Logo',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bharathi Academy - Medical & Healthcare Education Institution',
    description: 'Premier healthcare education institution offering UGC-approved courses. Join us for a successful career in medical technology and healthcare.',
    images: ['/BHARATHI.PNG'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/BHARATHI.PNG',
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://bharathiacademy.edu',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <StructuredData />
        {/* Google tag (gtag.js) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-ME8XCXDQB2"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ME8XCXDQB2');
          `}
        </Script>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-20">{children}</main>
        <WhatsApp />
        <Footer />
      </body>
    </html>
  );
}