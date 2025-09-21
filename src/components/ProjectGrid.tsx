interface Project {
  title: string;
  description: string;
  year: string;
  tech: string[];
}

const projects: Project[] = [
  {
    title: "CRUK Fundraising Platform",
    description: "Donation processing and campaign management system",
    year: "2024",
    tech: ["React", "Node.js", "Stripe"],
  },
  {
    title: "Theatre People Network",
    description: "Professional networking platform for theatre industry",
    year: "2023",
    tech: ["Vue.js", "Express", "MongoDB"],
  },
  {
    title: "DEC Crisis Response",
    description: "Humanitarian emergency coordination platform",
    year: "2023",
    tech: ["React", "Python", "PostgreSQL"],
  },
  {
    title: "Moon Jamaica",
    description: "Travel and culture website",
    year: "2022",
    tech: ["Next.js", "Headless CMS"],
  },
];

export const ProjectGrid = () => {
  return (
    <section id="work" className="section-space">
      <div className="grid-minimal">
        <h2 className="section-title">Selected Work</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-6 border-b border-border last:border-b-0">
              <div className="md:col-span-1">
                <p className="mono text-text-muted">{project.year}</p>
              </div>
              
              <div className="md:col-span-2 space-y-2">
                <h3 className="font-medium text-text-primary">{project.title}</h3>
                <p className="body">{project.description}</p>
              </div>
              
              <div className="md:col-span-1">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="caption">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};