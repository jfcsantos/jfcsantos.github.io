import { profile } from '@/content/data';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav" aria-label="Footer navigation">
        {profile.navLinks.map((link) => (
          <a
            key={`${link.label}-footer`}
            href={link.url}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noreferrer' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <p className="site-footer__note">© {new Date().getFullYear()} João Santos — Let’s build something thoughtful.</p>
    </footer>
  );
}
