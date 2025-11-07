import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { profile } from '@/content/data';

const biography = [
  "When not crafting products, you'll find me wiring up IoT prototypes, testing the boundaries of the latest AI tools or just sandboxing random techs in my Raspberry Pi homelab.",
];

export default function HomePage() {
  return (
    <div className="page">
      {/* <SiteHeader /> */}
      <main className="hero" aria-labelledby="hero-title">
        <div className="hero__top">
          <h1 className="hero__title" id="hero-title">
            {profile.name}
          </h1>
          <p className="hero__headline">
            {profile.tagline}
          </p>
          <p className="hero__headline">I'm a <strong>{profile.role}</strong> {profile.intro}</p>
          {biography.map((text) => (
            <p className="hero__headline" key={text}>{text}</p>
          ))}
        </div>

        <ul className="hero__list">
          {profile.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="cta-group">
          <a className="cta cta--primary" href={`mailto:${profile.email}`}>
            Want to work together?
          </a>
          <a className="cta cta--ghost" href="/assets/jsantos-cv.pdf" target="_blank" rel="noreferrer">
            My resume
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
