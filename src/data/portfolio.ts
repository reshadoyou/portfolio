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
  title: "Software Developer",
  email: "eileen@meredith.cl",
  phone: "+56 9 4267 2988",
  location: "Santiago, Chile",
  linkedin: "https://www.linkedin.com/in/eileen-meredith-pantoja-aa4706346/",
  github: "https://github.com/reshadoyou",
  website: "https://fernandodev.com",
  bio: "Software Developer with experience in automation, web development, and database management. Currently expanding into desktop software. Passionate about AI and continuous learning.",
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
    description: "I specialize in Excel automation, developing advanced VBA macros that optimize workflows, reduce manual tasks, and improve reporting accuracy. I also oversee the company’s website hosting, handling deployment, configuration, and maintenance to ensure stable and reliable web operations.",
    technologies: ["Excel Automation (VBA)", "MySQL", "Softland ERP", "Web Hosting"]
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
