import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { profile } from '@/content/data';

const callouts = [
  {
    title: 'What I do',
    body: 'Product strategy, full-stack architecture, design systems, platform audits, and cross-functional delivery leadership for modern web apps.'
  },
  {
    title: 'How I work',
    body: 'Collaborative, documentation-first, and focused on measurable outcomes. I map the problem, align the team, and ship in calm iterations.'
  },
  {
    title: 'Currently exploring',
    body: 'AI assisted Web app development, performance-first patterns, and ways to make complex flows feel effortless.'
  }
];

export default function ContactPage() {
  return (
    <div className="about-page">
      <SiteHeader />
      <main className="about-main" aria-labelledby="contact-title">
        <section className="about-hero">
          <h1 id="contact-title">Let’s build something together.</h1>
          <p>
            Looking for someone who can translate product goals into modern, resilient web experiences? I partner with
            teams to balance discovery, delivery, and iterative learning—without letting the roadmap lose momentum.
          </p>
          <p>
            Tell me what you are working on and I will help chart the path forward, from architecture decisions to the
            final handover.
          </p>
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
            If you need a steady hand to launch something new, modernise a legacy product or scale a team confidently,
            send me a note. I am always up for honest conversations about the challenges you are trying to solve.
          </p>
          <a className="cta cta--primary" href="mailto:hello@joaofsantos.com">
            Email me
          </a>
        </section>

        <div className="page-logo">
          <img className="page-logo__image" src="/alt-logo.png" alt="João Santos alternate logo" />
        </div>
      </main>
      <SiteFooter noNav={true} />
    </div>
  );
}
