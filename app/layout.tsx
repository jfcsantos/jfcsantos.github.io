import type { Metadata } from 'next';
import './globals.css';

const title = 'João Santos · Product Engineer';
const description =
  'Personal site for João Santos, a product engineer shaping resilient experiences for purpose-led teams.';

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="app-body">{children}</body>
    </html>
  );
}
