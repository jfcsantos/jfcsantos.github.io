import Image from 'next/image';
import { Project } from '@/content/data';

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__media">
        <Image
          src={project.image}
          alt={project.title}
          width={640}
          height={400}
          className="project-card__image"
        />
      </div>
      <div className="project-card__body">
        <p className="project-card__meta">
          <span>{project.client}</span>
          <span>•</span>
          <span>{project.period}</span>
        </p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>
        <ul className="project-card__impact">
          {project.impact.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="project-card__footer">
          <ul className="project-card__tags" aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {project.link ? (
            <a href={project.link} target="_blank" rel="noreferrer" className="project-card__link">
              Visit
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
