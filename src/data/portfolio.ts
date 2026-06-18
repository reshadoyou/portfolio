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
  title: "IT Engineer · Business Operations & Digital Transformation",
  email: "eileen@meredith.cl",
  phone: "+56 9 4267 2988",
  location: "Santiago, Chile",
  linkedin: "https://www.linkedin.com/in/eileen-meredith-pantoja-aa4706346/",
  github: "https://github.com/reshadoyou",
  website: "https://meredith.cl",
  bio: "IT Engineer specializing in business process management, ERP systems, and digital transformation. I bridge technology and operations to optimize workflows, control costs, and support data-driven decisions within corporate environments.",
  resume: ""
};

export const projects: Project[] = [
  {
    id: "meredith-fueltec",
    title: "Meredith Fueltec Limitada — Corporate Website",
    description: "Complete corporate website for a fuel distribution company, built end-to-end using AI-assisted development combined with hands-on technical expertise. The site features a dynamic product catalog driven by JSON data, full technical SEO (Sitemap.xml, Robots.txt, Structured Data / Schema.org, Open Graph, Twitter Cards), web accessibility (ARIA, semantic HTML), anti-spam security (honeypot + form validation, security headers), and responsive design across all devices. Managed hosting, domain configuration, and continuous deployment.",
    image: "mft.png",
    technologies: [
      "HTML5", "CSS3", "JavaScript", "JSON / JSON-LD", "Schema.org",
      "SEO Técnico", "Open Graph", "ARIA / Accesibilidad",
      "Honeypot Anti-spam", "Hosting & Dominio", "AI-Assisted Development"
    ],
    liveUrl: "https://meredith.cl",
    featured: true
  },
];

export const experience: Experience[] = [
  {
    id: "backoffice-it",
    company: "Meredith Fueltec Limitada",
    position: "Back-Office Operations & IT",
    period: "2024 - Present",
    description: "Manage end-to-end business operations using Softland ERP: inventory control, stock valuation, cost analysis, purchasing management, purchase order tracking, quotation management, invoicing, and credit notes. Analyze exchange rates and provide data-driven support for business decisions. Develop Excel VBA automations (macros, report automation, reconciliation scripts, digital workflow design) that eliminate repetitive tasks and improve organizational accuracy. Oversee full corporate website development, hosting, domain management, and continuous deployment.",
    technologies: ["Softland ERP", "Excel VBA", "MySQL", "Web Hosting", "Process Automation", "Data Analysis"]
  },
  {
    id: "frontend-dev",
    company: "Capacitación TM",
    position: "Front-end Developer",
    period: "2023",
    description: "Worked on a web application for managing and tracking student progress. Implemented features including real-time updates, user authentication, and responsive design aligned with institutional requirements.",
    technologies: ["HTML5", "CSS3", "JavaScript", "jQuery"]
  },
];

export const skills: Skill[] = [
  {
    category: "Business Operations",
    skills: [
      "Inventory Management", "Stock Valuation", "Cost Control & Analysis",
      "Purchasing Management", "Purchase Order Tracking", "Quotation Management",
      "Invoicing", "Credit Notes Issuance", "Exchange Rate Analysis",
      "Data-Driven Decision Support", "Administrative Process Optimization"
    ]
  },
  {
    category: "ERP & Systems",
    skills: [
      "Softland ERP Administration", "Commercial Module Management",
      "ERP Inventory Control", "Document & Operational Management",
      "Admin-Tech Process Integration", "MySQL"
    ]
  },
  {
    category: "Process Automation",
    skills: [
      "VBA Macro Development", "Admin Process Automation",
      "Report Automation", "Reconciliation & Data Processing",
      "Script Development", "Digital Workflow Design", "Microsoft Excel"
    ]
  },
  {
    category: "Web Development",
    skills: [
      "HTML5", "CSS3", "JavaScript (Vanilla JS)",
      "JSON / JSON-LD", "Schema.org", "Technical SEO",
      "Open Graph / Twitter Cards", "Sitemap.xml / Robots.txt",
      "ARIA / Semantic HTML", "Web Accessibility (WCAG)",
      "Hosting & Domain Management", "Web Deployment & Maintenance"
    ]
  },
  {
    category: "Security & Standards",
    skills: [
      "Honeypot Anti-spam", "Form Validation", "Referrer Policy",
      "X-Content-Type-Options", "rel=\"noopener noreferrer\"", "Structured Data"
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      "Visual Studio Code", "GitHub", "GitHub Copilot",
      "Applied AI Development", "Windows", "cPanel / Hosting", "FTP"
    ]
  }
];
