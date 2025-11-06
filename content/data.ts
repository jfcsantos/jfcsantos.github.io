type ProfileLink = {
  label: string;
  url: string;
  external?: boolean;
  variant?: 'pill';
};

export const profile = {
  name: 'Hi, I\'m João',
  role: 'Frontend & Full-stack Engineer',
  tagline: 'Crafter of digital products, IoT tinkerer and explorer of AI frontiers as a ',
  intro:
    'Shipping resilient web experiences for cross-functional teams as a Frontend Engineer. When not crafting interfaces, you’ll find me wiring up IoT prototypes in the workshop or testing the boundaries of the latest AI tools. Modern JavaScript is my foundation, but curiosity is my compass.',
  location: 'Global · Remote-first',
  email: 'hello@joaofsantos.com',
  highlights: [
    'Lead full-stack delivery for charities, culture brands, and travel platforms.',
    'Blend Drupal, Next.js, and design systems into tidy, scalable architecture.',
    'Mentor teams, document the tricky bits, and hand over code people enjoy maintaining.'
  ],
  navLinks: [
    // { label: 'Home', url: '/' },
    { label: 'Work', url: '/work' },
    { label: 'About', url: '/about' },
    { label: 'Projects', url: 'https://github.com/jfcsantos?tab=repositories', external: true },
    // { label: 'Say hello', url: 'mailto:hello@joaofsantos.com', variant: 'pill' }
  ] as ProfileLink[],
  links: [
    { label: 'Email João', url: 'mailto:hello@joaofsantos.com' },
    { label: 'My CV', url: '/assets/jsantos-cv.pdf' },
    { label: 'GitHub', url: 'https://github.com/jfcsantos', external: true },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joaofcsantos', external: true }
  ] as ProfileLink[]
};
