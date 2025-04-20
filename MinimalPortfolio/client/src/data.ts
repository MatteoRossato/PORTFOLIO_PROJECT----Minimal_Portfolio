import { Project, Skill, Experience, Education, Certification, PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Matteo Rossato",
  title: "Software Engineer",
  shortBio: "I build exceptional, high-performance web applications with clean code and user-centered design. Focused on creating scalable solutions that solve real problems.",
  longBio: [
    "I'm a passionate software engineer with 5+ years of experience building web applications and services. My journey in technology began with a Computer Science degree from MIT, where I developed a strong foundation in algorithms, data structures, and software architecture.",
    "After graduation, I joined a fast-growing startup where I helped build scalable backend systems and intuitive frontend interfaces. This experience taught me how to work efficiently in a fast-paced environment and how to balance technical debt with feature delivery.",
    "Currently, I'm focused on creating accessible, high-performance applications that solve real-world problems. I'm particularly interested in building systems that are both technically excellent and delightful to use.",
    "When I'm not coding, you'll find me hiking in the mountains, reading science fiction, or experimenting with new technologies. I'm always open to discussing new opportunities and collaborations."
  ],
  email: "matteo.rossato@example.com",
  phone: "+1 (234) 567-890",
  location: "San Francisco, CA",
  resumeLink: "#",
  githubLink: "#",
  linkedinLink: "#",
  twitterLink: "#",
  codepenLink: "#"
};

export const projects: Project[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment processing.",
    technologies: ["React", "Node.js", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "project2",
    title: "Task Management App",
    description: "A productivity application for teams with real-time collaboration, task assignment, and progress tracking features.",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    demoLink: "#",
    githubLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "project3",
    title: "Algorithm Visualizer",
    description: "An educational tool that visualizes various algorithms and data structures, helping users understand complex computer science concepts.",
    technologies: ["JavaScript", "D3.js", "HTML5 Canvas"],
    demoLink: "#",
    githubLink: "#",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

export const skills: Skill[] = [
  // Frontend Development
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Vue.js", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "HTML5", category: "frontend" },
  { name: "CSS3/SCSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  
  // Backend Development
  { name: "Node.js", category: "backend" },
  { name: "Express", category: "backend" },
  { name: "Python", category: "backend" },
  { name: "Django", category: "backend" },
  { name: "GraphQL", category: "backend" },
  { name: "REST APIs", category: "backend" },
  
  // Databases
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "MySQL", category: "database" },
  { name: "Redis", category: "database" },
  { name: "Firebase", category: "database" },
  
  // DevOps
  { name: "Git/GitHub", category: "devops" },
  { name: "Docker", category: "devops" },
  { name: "CI/CD", category: "devops" },
  { name: "AWS", category: "devops" },
  { name: "Netlify", category: "devops" },
  { name: "Vercel", category: "devops" },
  
  // Testing
  { name: "Jest", category: "testing" },
  { name: "React Testing Library", category: "testing" },
  { name: "Cypress", category: "testing" },
  { name: "Selenium", category: "testing" },
  
  // Other Skills
  { name: "Agile/Scrum", category: "other" },
  { name: "UI/UX Design", category: "other" },
  { name: "Performance Optimization", category: "other" },
  { name: "Responsive Design", category: "other" },
  { name: "SEO", category: "other" },
  { name: "Accessibility", category: "other" }
];

export const experiences: Experience[] = [
  {
    company: "TechCorp Inc.",
    position: "Senior Software Engineer",
    period: "2021 - Present",
    description: "Led the development of a microservices architecture that improved system reliability by 40% and reduced deployment time by 60%."
  },
  {
    company: "Innovate Solutions",
    position: "Full Stack Developer",
    period: "2019 - 2021",
    description: "Developed and maintained multiple client projects using React, Node.js, and MongoDB, focusing on performance optimization and responsive design."
  },
  {
    company: "StartUp Vision",
    position: "Frontend Developer",
    period: "2017 - 2019",
    description: "Built interactive web applications with JavaScript and Vue.js, implementing complex UI components and integrating with RESTful APIs."
  }
];

export const education: Education[] = [
  {
    institution: "Massachusetts Institute of Technology",
    degree: "B.S. in Computer Science",
    period: "2013 - 2017"
  },
  {
    institution: "Stanford Online",
    degree: "Machine Learning Specialization",
    period: "2021"
  }
];

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    year: "2022"
  },
  {
    name: "Google Cloud Professional Developer",
    year: "2021"
  }
];
