import Image from 'next/image';
import { Section } from '@/components/Section';
import { SocialLinks } from '@/components/SocialLinks';
import { ExperienceItem } from '@/components/ExperienceItem';
import { ProjectCard } from '@/components/ProjectCard';
import { experience, profile, projects, skills } from '@/content/data';

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero">
        <div>
          <p className="hero__role">{profile.role}</p>
          <h1 className="hero__headline">{profile.name}</h1>
          <p className="hero__bio">{profile.blurb}</p>
          <div className="hero__actions">
            <a className="hero__cta hero__cta--primary" href={`mailto:${profile.email}`}>
              Let’s build something
            </a>
            <a className="hero__cta hero__cta--ghost" href={profile.cvUrl} target="_blank" rel="noreferrer">
              View my CV
            </a>
          </div>
        </div>
        <div className="hero__aside">
          <div className="hero__badge">
            <Image
              src="/images/joao_santos.jpg"
              alt="João Santos"
              width={176}
              height={176}
              className="hero__portrait"
              priority
            />
            <div>
              <p className="hero__location">{profile.location}</p>
              <p className="hero__availability">{profile.availability}</p>
            </div>
          </div>
          <div>
            <h2 className="visually-hidden">Key skills</h2>
            <div className="inline-list" aria-label="Core capabilities">
              {skills.core.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className="inline-list" aria-label="Supporting capabilities">
              {skills.supporting.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <SocialLinks links={profile.socials} />
        </div>
      </section>

      <Section
        id="experience"
        title="Selected Experience"
        description="Engagements that combine engineering leadership with hands-on implementation. Each project pairs measurable results with well-considered delivery."
      >
        {experience.map((item) => (
          <ExperienceItem key={item.organisation} item={item} />
        ))}
      </Section>

      <Section
        id="projects"
        title="Highlighted Projects"
        description="A sample of recent deliveries. Every engagement balances a minimal interface, clear messaging, and resilient backend integrations."
        contentClassName="project-grid"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Section>

      <Section
        id="contact"
        title="Let’s Collaborate"
        description="Need an experienced engineer to refresh your platform or lead a focused delivery? I’m happy to talk through ideas and timelines."
      >
        <div className="contact-card">
          <p className="contact-card__copy">
            Drop me a note and include a short summary of the challenge you’re trying to solve.
          </p>
          <a className="contact-card__email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <SocialLinks links={profile.socials} />
        </div>
      </Section>
    </div>
  );
}
