import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});

const title = 'João Santos · Full-stack Web Engineer';
const description =
  'Portfolio and work history of João Santos, a full-stack engineer helping charities and culture brands build reliable digital products.';

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL('https://www.joaof-csantos.com'),
  openGraph: {
    title,
    description,
    url: 'https://www.joaof-csantos.com',
    type: 'website',
    siteName: 'João Santos',
    images: [
      {
        url: '/images/site-meta-img.png',
        width: 1200,
        height: 630,
        alt: 'João Santos — Full-stack Web Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@boissa',
    images: ['/images/site-meta-img.png']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <div className="app-shell">
          <header className="app-header">
            <a className="skip-link" href="#content">
              Skip to content
            </a>
          </header>
          <main id="content" className="app-main">
            {children}
          </main>
          <footer className="app-footer">
            <p>© {new Date().getFullYear()} João Santos</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
