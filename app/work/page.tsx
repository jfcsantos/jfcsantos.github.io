import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import portfolioData from '@/public/assets/portfolio.json';

type Company = (typeof portfolioData)[number];
type Role = Company['roles'][number];

const parseYear = (label: string): number => {
  const match = label.match(/(20\d{2}|19\d{2})/);
  return match ? parseInt(match[1], 10) : 0;
};

const companies = [...portfolioData]
  .map((company) => ({
    ...company,
    latestYear: company.roles.reduce((max, role) => Math.max(max, parseYear(role.date)), 0)
  }))
  .sort((a, b) => b.latestYear - a.latestYear || a.company.localeCompare(b.company));

export default function WorkPage() {
  return (
    <div className="work-page">
      <SiteHeader />
      <main className="work-main">
        <section className="work-hero" aria-labelledby="work-title">
          <h2 id="work-title">What I've been up to</h2>
          <p>
            This is a snapshot of engagements I&apos;ve supported or led and organizations I worked with. These projects span from e-commerce, non profits, social media
            and diverse tech — each pairing resilient platforms with product-led, modern web applications.
          </p>
        </section>

        <section className="work-grid" aria-label="Experience timeline">
          {companies.map((company) => (
            <article key={company.company} className="work-card">
              <header className="work-card__header">
                <h2 className="work-card__title">
                  {company.company}
                  {company.website ? (
                    <a
                      className="work-card__icon"
                      href={company.website.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${company.website.label}`}
                    >
                      <span aria-hidden>↗</span>
                    </a>
                  ) : null}
                </h2>
              </header>

              <div className="work-card__roles">
                {company.roles.map((role: Role) => (
                  <div key={role.id} className="work-role">
                    <div className="work-role__heading">
                      <div className="work-role__title">
                        <h3>{role.title}</h3>
                        {'website' in role && role.website ? (
                          <a
                            className="work-card__icon work-role__icon"
                            href={role.website.url}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={`Visit ${role.website.label}`}
                          >
                            <span aria-hidden>↗</span>
                          </a>
                        ) : null}
                      </div>
                      <span className="work-role__date">{role.date}</span>
                    </div>
                    <div
                      className="work-card__summary"
                      dangerouslySetInnerHTML={{ __html: role.introHtml }}
                    />
                    <div className="work-card__chips">
                      {role.categories.map((category) => (
                        <span key={category}>{category}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </section>

        <div className="page-logo">
          <img className="page-logo__image" src="/alt-logo.png" alt="João Santos alternate logo" />
        </div>
      </main>
      <SiteFooter noNav={true} />
    </div>
  );
}
