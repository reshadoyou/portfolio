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
  title: "Especialista en ERP y Procesos - Desarrollo Web",
  email: "eileen@meredith.cl",
  phone: "+56 9 4267 2988",
  location: "Santiago, Chile",
  linkedin: "https://www.linkedin.com/in/eileen-meredith-pantoja-aa4706346/",
  github: "https://github.com/reshadoyou",
  website: "https://fernandodev.com",
  bio: "Profesional enfocada en inventario, definición de precios de productos y administración de procesos internos en ERP. También desarrollé el sitio web corporativo combinando herramientas de IA con conocimiento técnico propio.",
  resume: ""
};

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Meredith Fueltec Limitada",
    description: "Web application to showcase company services and products. Includes a product catalog, contact form, and company information.",
    image: "mft.png",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveUrl: "https://meredith.cl",
    featured: true
  },

];

export const experience: Experience[] = [
  {
    id: "senior-dev",
    company: "Meredith Fueltec Limitada",
    position: "Back-office Developer",
    period: "2024 - Present",
    description: "Gestiono inventario, estructura de costos y criterios para la fijación de precios en productos. Administro procesos internos en Softland ERP para mejorar trazabilidad y control operativo. Además diseñé y mantengo el sitio web corporativo utilizando herramientas de IA y desarrollo propio.",
    technologies: ["Inventario y Costeo", "Fijación de Precios", "Softland ERP", "Automatización Excel (VBA)", "Desarrollo Web con IA"]
  },
  {
    id: "fullstack-dev",
    company: "Capacitación TM",
    position: "Front-end Developer",
    period: "2023",
    description: "Worked on Blackboard, a web application for managing and tracking student progress. Implemented features such as real-time updates, user authentication, and responsive design.",
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"]
  },
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    skills: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "PHP", "VBA", "SQL/MySQL"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Google Search Console", "Git/Github", "XAMPP", "cPanel/Hosting", "FTP"]
  },
  {
    category: "Others",
    skills: ["Agile/Scrum", "Business Model Canvas", "Requirements Analysis", "Project Planning"]
  }
];
