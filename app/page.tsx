import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { profile } from '@/content/data';

export default function HomePage() {
  return (
    <div className="page">
      {/* <SiteHeader /> */}
      <main className="hero" aria-labelledby="hero-title">
        <div className="hero__top">
          {/* <span className="hero__badge">{profile.location}</span> */}
          <h1 className="hero__title" id="hero-title">
            {profile.name}
          </h1>
          <p className="hero__headline">
            {profile.tagline} <strong>{profile.role}</strong>.
          </p>
          <p className="hero__headline">{profile.intro}</p>
        </div>

        <ul className="hero__list">
          {profile.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="cta-group">
          <a className="cta cta--primary" href={`mailto:${profile.email}`}>
            Start a project
          </a>
          <a className="cta cta--ghost" href="/assets/jsantos-cv.pdf" target="_blank" rel="noreferrer">
            Download CV
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
