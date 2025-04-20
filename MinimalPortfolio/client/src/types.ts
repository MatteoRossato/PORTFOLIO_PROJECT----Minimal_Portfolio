export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'testing' | 'other';
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Certification {
  name: string;
  year: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  shortBio: string;
  longBio: string[];
  email: string;
  phone: string;
  location: string;
  resumeLink: string;
  githubLink: string;
  linkedinLink: string;
  twitterLink: string;
  codepenLink: string;
}
