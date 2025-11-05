type ProfileLink = {
  label: string;
  url: string;
  external?: boolean;
  variant?: 'pill';
};

export const profile = {
  name: 'João Santos',
  role: 'Product engineer',
  tagline: 'Building quietly confident products for purpose-led teams as a',
  intro:
    'I design resilient delivery systems, lead cross-functional squads, and prototype with modern JavaScript so ideas leave the backlog.',
  location: 'Global · Remote-first',
  email: 'hello@joaofsantos.com',
  highlights: [
    'Lead full-stack delivery for charities, culture brands, and travel platforms.',
    'Blend Drupal, Next.js, and design systems into tidy, scalable architecture.',
    'Mentor teams, document the tricky bits, and hand over code people enjoy maintaining.'
  ],
  navLinks: [
    { label: 'Home', url: '/' },
    { label: 'Work', url: '/work' },
    { label: 'Projects', url: 'https://github.com/jfcsantos?tab=repositories', external: true },
    { label: 'Writing', url: 'https://github.com/jfcsantos', external: true },
    { label: 'Say hello', url: 'mailto:hello@joaofsantos.com', variant: 'pill' }
  ] as ProfileLink[],
  links: [
    { label: 'Email João', url: 'mailto:hello@joaofsantos.com' },
    { label: 'Download CV', url: '/assets/jsantos-cv.pdf' },
    { label: 'GitHub', url: 'https://github.com/jfcsantos', external: true },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joaofcsantos', external: true }
  ] as ProfileLink[]
};
