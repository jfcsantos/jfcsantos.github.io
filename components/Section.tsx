import { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  title: string;
  description?: string;
  children: ReactNode;
  contentClassName?: string;
};

export function Section({ id, title, description, children, contentClassName }: SectionProps) {
  const contentClass = ['section__content', contentClassName].filter(Boolean).join(' ');

  return (
    <section id={id} aria-labelledby={id ? `${id}-title` : undefined} className="section">
      <div className="section__header">
        <h2 id={id ? `${id}-title` : undefined} className="section__title">
          {title}
        </h2>
        {description ? <p className="section__description">{description}</p> : null}
      </div>
      <div className={contentClass}>{children}</div>
    </section>
  );
}
