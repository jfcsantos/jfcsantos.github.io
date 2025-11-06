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
          <h1 id="work-title">Work experience</h1>
          <p>
            A snapshot of engagements I&apos;ve supported or led and organizations I worked with. These projects span from e-commerce, non profits, social media
            and diverse tech — each pairing resilient platforms with product-led, modern web applications.
          </p>
        </section>

        <section className="work-grid" aria-label="Experience timeline">
          {companies.map((company) => (
            <article key={company.company} className="work-card">
              <header className="work-card__header">
                <h2 className="work-card__title">{company.company}</h2>
                {company.website ? (
                  <a
                    className="work-card__link"
                    href={company.website.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {company.website.label}
                  </a>
                ) : null}
              </header>

              <div className="work-card__roles">
                {company.roles.map((role: Role) => (
                  <div key={role.id} className="work-role">
                    <div className="work-role__heading">
                      <h3>{role.title}</h3>
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
      </main>
      <SiteFooter noNav={true} />
    </div>
  );
}
