type ProfileLink = {
  label: string;
  url: string;
  external?: boolean;
  variant?: 'pill';
};

export const profile = {
  name: 'Hi, I\'m João',
  role: 'Product / Full-stack Engineer',
  tagline: '(feel free to say Jay/Jo/J-Wow) ',
  intro:
    "who turned a love for tinkering on the web into a career of shipping resilient web experiences for cross-functional teams.",
  location: 'Global · Remote-first',
  email: 'hello@joaofsantos.com',
  highlights: [
    'Lead full-stack delivery for whatever type of product & teams.',
    'Pair modern Javascript / Typescript, React (or any modern stack) and design systems to build scalable product architecture.',
    'Mentor teams, document the tricky bits, and hand over code people enjoy maintaining.'
  ],
  navLinks: [
    // { label: 'Home', url: '/' },
    { label: 'Career', url: '/work' },
    // { label: 'Projects', url: 'https://github.com/jfcsantos?tab=repositories', external: true },
    { label: 'Contact', url: '/contact' },
    { label: 'Resume', url: '/assets/jsantos-cv.pdf', external: true },
    // { label: 'Say hello', url: 'mailto:hello@joaofsantos.com', variant: 'pill' }
  ] as ProfileLink[],
  links: [
    { label: 'Email João', url: 'mailto:hello@joaofsantos.com' },
    { label: 'My CV', url: '/assets/jsantos-cv.pdf' },
    { label: 'GitHub', url: 'https://github.com/jfcsantos', external: true },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joaofcsantos', external: true }
  ] as ProfileLink[]
};
