import { Experience } from '@/content/data';

type ExperienceItemProps = {
  item: Experience;
};

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="experience-item">
      <header className="experience-item__header">
        <h3 className="experience-item__title">{item.organisation}</h3>
        <p className="experience-item__role">
          {item.role} · {item.period}
        </p>
      </header>
      <p className="experience-item__summary">{item.summary}</p>
      <ul className="experience-item__highlights">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}
