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
  name: "Fernando",
  lastName: "Rodríguez",
  title: "Desarrollador Full Stack",
  email: "fernando@example.com",
  phone: "+34 612 345 678",
  location: "Madrid, España",
  linkedin: "https://linkedin.com/in/fernando-rodriguez",
  github: "https://github.com/reshadoyou",
  website: "https://fernandodev.com",
  bio: "Desarrollador Full Stack con más de 3 años de experiencia creando aplicaciones web modernas. Especializado en React, Node.js y TypeScript. Apasionado por el código limpio y las mejores prácticas de desarrollo.",
  resume: "/cv-fernando-rodriguez.pdf"
};

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "Plataforma E-commerce",
    description: "Una plataforma de comercio electrónico completa con sistema de pagos, gestión de inventario y panel de administración. Construida con Next.js, TypeScript y PostgreSQL.",
    image: "/projects/ecommerce.jpg",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/reshadoyou/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    featured: true
  },
  {
    id: "task-manager",
    title: "Task Manager App",
    description: "Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real. Incluye autenticación, notificaciones y sincronización offline.",
    image: "/projects/task-manager.jpg",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    githubUrl: "https://github.com/reshadoyou/task-manager",
    liveUrl: "https://task-manager-demo.netlify.app",
    featured: true
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "Dashboard del clima con pronósticos extendidos, gráficos interactivos y geolocalización. Integra múltiples APIs meteorológicas.",
    image: "/projects/weather-app.jpg",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API", "Sass"],
    githubUrl: "https://github.com/reshadoyou/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    featured: false
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "Plataforma de blog con CMS personalizado, editor de contenido rico y sistema de comentarios. Optimizada para SEO y rendimiento.",
    image: "/projects/blog-platform.jpg",
    technologies: ["Astro", "TypeScript", "Sanity CMS", "Tailwind CSS"],
    githubUrl: "https://github.com/reshadoyou/blog-platform",
    liveUrl: "https://blog-platform-demo.netlify.app",
    featured: false
  }
];

export const experience: Experience[] = [
  {
    id: "senior-dev",
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    period: "2022 - Presente",
    description: "Liderazgo técnico en el desarrollo de aplicaciones web complejas. Mentorización de desarrolladores junior y optimización de procesos de desarrollo.",
    technologies: ["React", "Node.js", "AWS", "Docker", "TypeScript"]
  },
  {
    id: "fullstack-dev",
    company: "StartupXYZ",
    position: "Full Stack Developer",
    period: "2021 - 2022",
    description: "Desarrollo de MVP y funcionalidades core de la plataforma. Implementación de arquitectura escalable y mejores prácticas de código.",
    technologies: ["Next.js", "PostgreSQL", "Redis", "Stripe", "Vercel"]
  },
  {
    id: "frontend-dev",
    company: "Digital Agency",
    position: "Frontend Developer",
    period: "2020 - 2021",
    description: "Creación de interfaces de usuario responsivas y optimizadas. Colaboración estrecha con diseñadores UX/UI y equipos de backend.",
    technologies: ["React", "Sass", "JavaScript", "Webpack", "Figma"]
  }
];

export const skills: Skill[] = [
  {
    category: "Frontend",
    skills: ["React", "Vue.js", "Next.js", "TypeScript", "Tailwind CSS", "Sass", "HTML5", "CSS3"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "GraphQL", "REST APIs"]
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "AWS", "Vercel", "Git", "GitHub Actions", "Webpack", "Vite"]
  },
  {
    category: "Otras",
    skills: ["Agile/Scrum", "TDD", "CI/CD", "Performance Optimization", "SEO", "Accessibility"]
  }
];
