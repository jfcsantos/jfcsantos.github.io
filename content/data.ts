export type SocialLink = {
  label: string;
  url: string;
};

export const profile = {
  name: 'João Santos',
  role: 'Full-stack web engineer',
  location: 'Portugal & United Kingdom',
  blurb:
    'I help charities, culture brands, and travel companies turn complicated requirements into intuitive digital products. My focus is crafting performant interfaces backed by dependable Drupal and JavaScript foundations.',
  availability: 'Open to senior engineering contracts and consulting engagements.',
  email: 'jfs.csantos@gmail.com',
  cvUrl: '/assets/jsantos-cv.pdf',
  socials: [
    { label: 'GitHub', url: 'https://github.com/jfcsantos' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/joaofcsantos' },
    { label: 'Twitter', url: 'https://twitter.com/boissa' },
    { label: 'Instagram', url: 'https://www.instagram.com/jfcsantos/' }
  ] satisfies SocialLink[]
};

export type Experience = {
  organisation: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const experience: Experience[] = [
  {
    organisation: 'Cancer Research UK',
    role: 'Lead Drupal Engineer',
    period: '2015 — 2016',
    summary:
      'Led the rebuild of the in-house fundraising platform, serving thousands of supporter pages and donations.',
    highlights: [
      'Integrated custom Symfony services to deliver tailored content and media at scale.',
      'Designed a real-time donation feed linked to CRUK payment infrastructure.',
      'Partnered with product and UX to shorten supporter onboarding from minutes to seconds.'
    ]
  },
  {
    organisation: 'Disasters Emergency Committee',
    role: 'Senior Web Engineer',
    period: '2014 — 2015',
    summary:
      'Delivered a mobile-first site to support rapid-response campaigns for global humanitarian crises.',
    highlights: [
      'Implemented an appeals hub aggregating live social content with the Embed.ly API.',
      'Developed a bespoke donation workflow featuring Stripe-based payment processing.',
      'Enabled content teams to configure campaigns through structured Drupal tooling.'
    ]
  },
  {
    organisation: 'Encore Tickets / TheatrePeople',
    role: 'Drupal Engineer',
    period: '2013 — 2014',
    summary:
      'Maintained and evolved a high-traffic theatre booking platform used by London audiences.',
    highlights: [
      'Shipped targeted A/B experiments to improve conversion and retention.',
      'Built a Python microservice to orchestrate nightly availability imports with multi-threaded cron jobs.',
      'Optimised caching layers to stabilise response times during seasonal peaks.'
    ]
  },
  {
    organisation: 'Independent Consulting',
    role: 'Full-stack Engineer & Advisor',
    period: '2012 — Present',
    summary:
      'Partner with travel, education, and arts organisations to modernise web platforms and workflows.',
    highlights: [
      'Rebuilt Moon Jamaica’s commerce experience with streamlined booking flows.',
      'Maintained ESN Lisboa’s digital presence as a volunteer contributor.',
      'Experiment continuously with emerging JavaScript and design systems to keep toolchains current.'
    ]
  }
];

export type Project = {
  id: string;
  title: string;
  client: string;
  period: string;
  summary: string;
  impact: string[];
  tags: string[];
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    id: 'cruk-fundraise',
    title: 'CRUK Fundraising Platform',
    client: 'Cancer Research UK',
    period: '2016',
    summary:
      'A responsive platform where supporters launch personalised fundraising pages in minutes.',
    impact: [
      'Merged Drupal 7 with custom Symfony APIs to distribute media and campaign data efficiently.',
      'Introduced live donation feeds to celebrate supporters and improve transparency.'
    ],
    tags: ['Drupal', 'Symfony', 'AngularJS', 'Donations'],
    image: '/images/portfolio/cruk-fundraise.png',
    link: 'https://fundraise.cancerresearchuk.org/'
  },
  {
    id: 'dec-org',
    title: 'DEC Appeals Hub',
    client: 'Disasters Emergency Committee',
    period: '2015',
    summary:
      'A content-rich appeals destination amplifying urgent fundraising for international crises.',
    impact: [
      'Rolled out modular landing pages that surfaced verified stories, videos, and supporter updates.',
      'Engineered a secure donation flow with Stripe to underpin rapid-response campaigns.'
    ],
    tags: ['Drupal', 'Stripe', 'Content Aggregation'],
    image: '/images/portfolio/dec-org.png',
    link: 'https://www.dec.org.uk/'
  },
  {
    id: 'theatre-people',
    title: 'TheatrePeople Booking Experience',
    client: 'Encore Tickets',
    period: '2014',
    summary:
      'Optimised the flagship theatre ticketing site used by London visitors and agencies.',
    impact: [
      'Implemented conversion-focused UI experiments targeting the full purchase funnel.',
      'Automated inventory sync with a threaded Python service to keep offers accurate overnight.'
    ],
    tags: ['Drupal', 'Python', 'Performance'],
    image: '/images/portfolio/theatre-people.png',
    link: 'http://www.theatrepeople.com/'
  },
  {
    id: 'moon-jamaica',
    title: 'Moon Jamaica Commerce',
    client: 'Moon Jamaica',
    period: '2016',
    summary:
      'An editorial travel guide turned booking marketplace for accommodation, cars, and events.',
    impact: [
      'Refined Drupal Commerce flows to simplify multi-step checkouts.',
      'Advised on content strategy to keep the digital guide lively and accurate.'
    ],
    tags: ['Drupal', 'Commerce', 'Consulting'],
    image: '/images/portfolio/moonjamaica.png',
    link: 'https://www.moonjamaica.com/'
  },
  {
    id: 'esn-lisboa',
    title: 'ESN Lisboa Digital Hub',
    client: 'Erasmus Student Network Lisboa',
    period: '2012',
    summary:
      'Volunteer-led improvements to the Drupal platform supporting exchange students in Lisbon.',
    impact: [
      'Maintained multi-language content and events modules with a fully volunteer team.',
      'Collaborated on shared ESN Satellite enhancements adopted by other European chapters.'
    ],
    tags: ['Drupal', 'Volunteer', 'Community'],
    image: '/images/portfolio/esn-lisboa.png',
    link: 'https://esnlisboa.org/'
  },
  {
    id: 'tkb-fct',
    title: 'TKB Multimedia Archive',
    client: 'FCT UNL',
    period: '2012',
    summary:
      'A research project connecting performing artists through interactive visualisations.',
    impact: [
      'Modelled complex relationships in Drupal and exposed them via custom D3.js graphs.',
      'Enabled creators to explore collaborations through an intuitive network interface.'
    ],
    tags: ['Drupal', 'D3.js', 'Research'],
    image: '/images/portfolio/tkb-fct.png',
    link: 'https://tkb.fcsh.unl.pt/'
  }
];

export const skills = {
  core: ['Drupal', 'TypeScript', 'Next.js', 'Node.js', 'Design systems'],
  supporting: ['Python', 'Stripe integrations', 'Content strategy', 'Accessibility', 'Performance tuning']
};
