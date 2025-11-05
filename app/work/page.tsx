import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { profile } from '@/content/data';
import portfolioData from '@/public/assets/portfolio.json';

type PortfolioEntry = (typeof portfolioData)[number];

type ExperienceItem = {
  id: string;
  title: string;
  client: string;
  year: number;
  dateLabel: string;
  website?: {
    href: string;
    label: string;
  };
  summaryHtml: string;
  categories: string[];
};

const experiences: ExperienceItem[] = portfolioData
  .map((entry: PortfolioEntry) => {
    const yearMatch = entry.period.match(/(\d{4})/);
    const year = yearMatch ? parseInt(yearMatch[1], 10) : 0;
    const websiteMatch = entry.website?.content?.match(/href='([^']+)'/);
    const websiteHref = websiteMatch ? websiteMatch[1] : undefined;
    const websiteLabel = entry.website?.content?.replace(/<[^>]+>/g, '').trim();

    return {
      id: entry.id,
      title: entry.title,
      client: entry.company,
      year,
      dateLabel: entry.period,
      website:
        websiteHref && websiteLabel
          ? {
            href: websiteHref,
            label: websiteLabel
          }
          : undefined,
      summaryHtml: entry.description,
      categories: entry.technologies
    };
  })
  .sort((a, b) => b.year - a.year || a.title.localeCompare(b.title));

export default function WorkPage() {
  return (
    <div className="work-page">
      <SiteHeader />
      <main className="work-main">
        <section className="work-hero" aria-labelledby="work-title">
          <h1 id="work-title">Work experience</h1>
          <p>
            A snapshot of engagements I&apos;ve led or supported. These projects span fundraising, culture,
            and travel—each balancing dependable Drupal foundations with modern front-end polish.
          </p>
        </section>

        <section className="work-grid" aria-label="Experience timeline">
          {experiences.map((item) => (
            <article key={item.id} className="work-card">
              <header>
                <h2 className="work-card__title">{item.title}</h2>
                <div className="work-card__meta">
                  <span>{item.client}</span>
                  <span>•</span>
                  <span>{item.dateLabel}</span>
                </div>
              </header>
              <div
                className="work-card__summary"
                dangerouslySetInnerHTML={{ __html: item.summaryHtml }}
              />
              <div className="work-card__chips">
                {item.categories.map((category) => (
                  <span key={category}>{category}</span>
                ))}
              </div>
              {item.website ? (
                <a
                  className="work-card__link"
                  href={item.website.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit project →
                </a>
              ) : null}
            </article>
          ))}
        </section>
      </main>
      <SiteFooter noNav={true} />
    </div>
  );
}
