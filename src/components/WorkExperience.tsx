import { useState } from 'react';
import { workExperience, getLatestWorkExperiences, getAdditionalWorkExperiences } from '@/data/workExperience';

export const WorkExperience = () => {
  const [showAll, setShowAll] = useState(false);
  const latestExperiences = getLatestWorkExperiences(4);
  const additionalExperiences = getAdditionalWorkExperiences(4);
  const displayedExperiences = showAll ? workExperience : latestExperiences;

  return (
    <section id="experience" className="section-space">
      <div className="grid-minimal">
        <h2 className="section-title">Work Experience</h2>

        <div className="space-y-8">
          {displayedExperiences.map((experience, index) => (
            <div key={experience.id} className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 py-6 border-b border-border last:border-b-0">
              <div className="md:col-span-1">
                <p className="mono text-text-muted">{experience.period}</p>
                {experience.isCurrentRole && (
                  <span className="inline-block mt-1 px-2 py-1 text-xs bg-green-100 text-green-800 rounded-full">
                    Current
                  </span>
                )}
              </div>
              
              <div className="md:col-span-2 space-y-2">
                <h3 className="font-medium text-text-primary">{experience.title}</h3>
                <p className="font-medium text-sm text-text-muted">{experience.company}</p>
                <p className="caption text-text-muted">{experience.location}</p>
                <p className="body text-sm">{experience.description}</p>
              </div>
              
              <div className="md:col-span-1">
                <div className="flex flex-wrap gap-1">
                  {experience.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="caption text-xs px-2 py-1 bg-gray-100 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {additionalExperiences.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-text-primary bg-background border border-border rounded-md hover:bg-gray-50 transition-colors"
            >
              {showAll ? 'Show Less' : `Show ${additionalExperiences.length} More`}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};