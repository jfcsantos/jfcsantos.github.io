import { SocialLink } from '@/content/data';

type SocialLinksProps = {
  links: SocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <ul className="social-links" aria-label="Social profiles">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.url} target="_blank" rel="noreferrer" className="social-links__anchor">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
