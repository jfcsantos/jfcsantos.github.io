import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="contact-card" style={{ marginTop: '4rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Page not found</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
        The page you were looking for has moved or no longer exists.
      </p>
      <Link href="/" className="hero__cta hero__cta--primary" style={{ display: 'inline-flex' }}>
        Back to home
      </Link>
    </div>
  );
}
