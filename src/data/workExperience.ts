export interface WorkExperience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  description: string;
  technologies: string[];
  isCurrentRole?: boolean;
}

// LinkedIn-inspired work experience data based on the portfolio projects
export const workExperience: WorkExperience[] = [
  {
    id: "freelance-dev-2024",
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Portugal (Remote)",
    period: "Jan 2024 - Present",
    startDate: "2024-01",
    endDate: "Present",
    description: "Providing full-stack web development services to various clients, specializing in modern web applications with React, Node.js, and cloud deployment solutions. Focus on donation platforms, fundraising systems, and business process automation.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    isCurrentRole: true
  },
  {
    id: "cruk-contractor-2024",
    title: "Senior Frontend Developer",
    company: "Cancer Research UK",
    location: "London, UK (Remote)",
    period: "Mar 2024 - Nov 2024",
    startDate: "2024-03",
    endDate: "2024-11",
    description: "Led the development of the new fundraising platform, creating seamless donation processing and campaign management features. Implemented React-based user interfaces with integrated payment processing through Stripe API.",
    technologies: ["React", "TypeScript", "Node.js", "Stripe", "Docker", "Drupal"]
  },
  {
    id: "theatre-people-2023",
    title: "Full Stack Developer",
    company: "Encore Tickets Ltd",
    location: "London, UK",
    period: "Jun 2023 - Feb 2024",
    startDate: "2023-06",
    endDate: "2024-02",
    description: "Developed and maintained TheatrePeople.com, a high-traffic theatre booking platform. Built professional networking features, optimized booking systems, and created A/B testing frameworks to improve user conversion rates.",
    technologies: ["Vue.js", "Express.js", "MongoDB", "Python", "Drupal", "Payment APIs"]
  },
  {
    id: "dec-developer-2023",
    title: "Web Developer",
    company: "Disasters Emergency Committee",
    location: "London, UK",
    period: "Mar 2023 - Aug 2023",
    startDate: "2023-03",
    endDate: "2023-08",
    description: "Built humanitarian emergency coordination platform for crisis response management. Implemented content aggregation systems using Embed.ly API for social media integration and developed custom donation workflows.",
    technologies: ["React", "Python", "PostgreSQL", "Embed.ly", "Social APIs", "Responsive Design"]
  },
  {
    id: "moon-jamaica-2022",
    title: "Web Developer & Consultant",
    company: "Moon Jamaica",
    location: "Remote",
    period: "Aug 2022 - Dec 2022",
    startDate: "2022-08",
    endDate: "2022-12",
    description: "Created travel and culture website with booking capabilities for hotels and car rentals. Developed commerce functionality and user experience optimization for the tourism industry platform.",
    technologies: ["Next.js", "Headless CMS", "Commerce APIs", "SEO Optimization"]
  },
  {
    id: "esn-volunteer-2020",
    title: "Volunteer Web Developer",
    company: "ESN Lisboa",
    location: "Lisbon, Portugal",
    period: "Sep 2020 - Jul 2022",
    startDate: "2020-09",
    endDate: "2022-07",
    description: "Maintained and developed features for the Erasmus Student Network Lisboa website. Contributed to the ESN Satellite project, a Drupal-based template system used by ESN sections across Europe.",
    technologies: ["Drupal", "PHP", "MySQL", "JavaScript", "Volunteer Management"]
  },
  {
    id: "tkb-research-2019",
    title: "Research Developer",
    company: "FCT UNL - New University of Lisbon",
    location: "Lisbon, Portugal",
    period: "Jan 2019 - Sep 2020",
    startDate: "2019-01",
    endDate: "2020-09",
    description: "Developed TKB Multimedia Archive as part of Computer Science master thesis. Created platform for performing arts content with advanced data visualization using D3.js and graph-based content relationships.",
    technologies: ["Drupal", "PHP", "D3.js", "Data Visualization", "Research", "MySQL"]
  }
];

// Helper function to get the latest N work experiences
export const getLatestWorkExperiences = (count: number = 4): WorkExperience[] => {
  return workExperience.slice(0, count);
};

// Helper function to get all work experiences except the latest N
export const getAdditionalWorkExperiences = (skipCount: number = 4): WorkExperience[] => {
  return workExperience.slice(skipCount);
};