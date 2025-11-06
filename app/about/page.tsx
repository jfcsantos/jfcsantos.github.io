import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';

const paragraphs = [
  "Hi there! I'm João (feel free to say Jay/Jo/J-Wow). I'm a Portuguese-born product engineer who turned a love for tinkering on the web into a career of shaping thoughtful digital experiences.",
  'Most of my work lives at the intersection of technology, design, and people. I have led projects for charities, cultural organisations, and travel brands—often wrangling Drupal back-ends, crafting modern JavaScript front-ends, and coaching teams so they can keep momentum once I step away.',
  'When I am not pairing with designers or documenting release plans, you will likely find me outside: cycling, exploring new cities, or chasing the sun at the beach. I am also a fan of good wine, great cheese, and late-night conversations about music and adventure.'
];

const callouts = [
  {
    title: 'What I do',
    body: 'Full-stack architecture, Drupal integrations, Next.js interfaces, platform audits, and cross-functional delivery leadership.'
  },
  {
    title: 'How I work',
    body: 'Collaborative, documentation-first, and focused on measurable outcomes. I map the problem, align the team, and ship in calm iterations.'
  },
  {
    title: 'Currently exploring',
    body: 'Design systems for charitable organisations, performance-first Jamstack patterns, and ways to make complex flows feel effortless.'
  }
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <SiteHeader />
      <main className="about-main" aria-labelledby="about-title">
        <section className="about-hero">
          <h1 id="about-title">Creating calm, resilient digital experiences.</h1>
          {paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </section>

        <section className="about-grid" aria-label="Highlights">
          {callouts.map((item) => (
            <article key={item.title} className="about-card">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </section>

        <section className="about-cta" aria-label="Next steps">
          <h2>Let’s chat</h2>
          <p>
            If you need a steady hand to modernise a legacy stack, launch a new product, or mentor a team, send me a
            note. I am always up for honest conversations about the challenges you are trying to solve.
          </p>
          <a className="cta cta--primary" href="mailto:hello@joaofsantos.com">
            Email João
          </a>
        </section>
      </main>
      <SiteFooter noNav={true} />
    </div>
  );
}
