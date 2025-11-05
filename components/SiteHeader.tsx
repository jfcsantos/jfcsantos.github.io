import { profile } from '@/content/data';

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="/">
        João Santos
      </a>
      <nav className="site-header__nav" aria-label="Primary navigation">
        {profile.navLinks.map((link) => (
          <a
            key={link.label}
            href={link.url}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
            className={link.variant === 'pill' ? 'site-header__link site-header__link--pill' : 'site-header__link'}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
