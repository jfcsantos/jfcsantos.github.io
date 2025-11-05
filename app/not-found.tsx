import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

export default function NotFound() {
  return (
    <div className="page">
      <SiteHeader />
      <main className="hero" style={{ alignItems: 'flex-start' }}>
        <div className="hero__top">
          <span className="hero__badge">404</span>
          <h1 className="hero__title">That page took a different path.</h1>
          <p className="hero__headline">
            The link you followed might be broken or the page has moved. Head back home or jump into my
            work experience to explore what I have been building.
          </p>
        </div>
        <div className="cta-group">
          <a className="cta cta--primary" href="/">
            Return home
          </a>
          <a className="cta cta--ghost" href="/work">
            View work
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
