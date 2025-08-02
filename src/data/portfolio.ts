export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  skills: string[];
}

export const personalInfo = {
  name: "Eileen",
  lastName: "Meredith",
  title: "Web Developer",
  email: "eileen@meredith.cl",
  phone: "+56 9 4267 2988",
  location: "Santiago, Chile",
  linkedin: "https://www.linkedin.com/in/eileen-meredith-pantoja-aa4706346/",
  github: "https://github.com/reshadoyou",
  website: "https://fernandodev.com",
  bio: "Web Developer con 1 año de experiencia creando aplicaciones web modernas. Me apasiona experimentar con nuevas tecnologías, especialmente IA, y seguir aprendiendo constantemente para mejorar mis habilidades de desarrollo.",
  resume: ""
};

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Meredith Fueltec Limitada",
    description: "App Web to show the company services and products. Includes a product catalog, contact form, and company information.",
    image: "/projects/ecommerce.jpg",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://meredith.cl",
    featured: true
  },
  {
    id: "task-manager",
    title: "Vulnerables Protegidos",
    description: "App Web to protect vulnerable old people with real-time collaboration features. Includes authentication, notifications, and offline synchronization.",
    image: "/projects/task-manager.jpg",
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    featured: true
  },

];

export const experience: Experience[] = [
  {
    id: "senior-dev",
    company: "Meredith Fueltec Limitada",
    position: "Back-office Developer",
    period: "2024 - Present",
    description: "Excel development and maintenance of internal tools for data management and reporting. Implemented automation scripts and macro to improve efficiency.",
    technologies: ["Excel", "VBA", "MySQL", "Softland ERP"]
  },
  {
    id: "fullstack-dev",
    company: "Capacitación TM",
    position: "Front-end Developer",
    period: "2023",
    description: "Worked on Blackboard, a web application for managing and tracking student progress. Implemented features such as real-time updates, user authentication, and responsive design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Jquery"]
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    skills: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "MongoDB", "MySQL"]
  },
  {
    category: "DevOps & Tools",
    skills: ["GCP","Git", "GitHub Actions"]
  },
  {
    category: "Others",
    skills: ["Agile/Scrum", "Performance Optimization", "Accessibility"]
  }
];
