export interface EducationItem {
  level: string;
  school: string;
  gpa?: string;
  current?: boolean;
  detail?: string;
}

export interface SkillItem {
  name: string;
  summary: string;
}

export interface ContactItem {
  name: string;
  href: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export const profile = {
  name: 'Triyog Shrestha',
  title: 'Software Engineering Student & Developer',
  tagline: 'Code with intention. Learn with consistency. Build what matters.',
  hometown: 'Lubhu, Lalitpur, Nepal',
  studyTrack: 'First-year Bachelor\'s student in Software Engineering at PCPS College (University of Bedfordshire affiliate).',
};

export const education: EducationItem[] = [
  {
    level: 'Bachelor\'s in Software Engineering',
    school: 'PCPS College (University of Bedfordshire Affiliation)',
    current: true,
    detail: 'First-year student focused on strong engineering fundamentals and practical project work.',
  },
  {
    level: '+2',
    school: 'Kathmandu Model College (KMC), Lalitpur',
    gpa: '3.75',
  },
  {
    level: 'SEE',
    school: 'Little Angels School, Hattiban',
    gpa: '3.75',
  },
];

export const skills: SkillItem[] = [
  { name: 'Java', summary: 'Strong OOP foundations and desktop app development.' },
  { name: 'Python', summary: 'Scripting, problem solving, and backend-friendly workflows.' },
  { name: 'JavaScript', summary: 'Modern ES features, UI logic, and app interactivity.' },
  { name: 'HTML', summary: 'Semantic markup and accessible page structure.' },
  { name: 'CSS', summary: 'Responsive layouts, utility-first styling, and visual polish.' },
  { name: 'React', summary: 'Component-driven interfaces with hooks and clean state flow.' },
];

export const interests: string[] = [
  'Music is a core part of my identity and creative energy.',
  'Basketball keeps me sharp; I follow the NBA closely.',
  'NFL game days are part of my weekend rhythm.',
];

export const projects: ProjectItem[] = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with React and TypeScript. Features smooth animations, dark theme design, and optimized performance.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/your-username/portfolio',
  },
  {
    title: 'Project Name',
    description: 'Brief description of your project and what problem it solves.',
    technologies: ['Technology 1', 'Technology 2', 'Technology 3'],
    github: 'https://github.com/your-username/project-name',
  },
  {
    title: 'Another Project',
    description: 'Description of another project you\'ve built or contributed to.',
    technologies: ['Technology 1', 'Technology 2'],
    link: 'https://example.com',
    github: 'https://github.com/your-username/another-project',
  },
];

export const contactLinks: ContactItem[] = [
  { name: 'GitHub', href: 'https://github.com/your-username' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/your-username' },
  { name: 'Email', href: 'mailto:your-email@example.com' },
];
