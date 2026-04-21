import { SiGithub, SiLinkedin } from "react-icons/si";


export const about = [
  "Seattle-based, product-minded full-stack engineer who turns real-world needs into clear, useful applications and ships end-to-end features fast. Cares about UX, performance, and scalability as much as speed. Always up for a new domain and a team that moves from idea to release.",
  "Primary stack: TypeScript, React/Next.js, Node.js, and PostgreSQL."
];

export const contactInfo: ContactType[] = [
  {
    icon: "Mail",
    label: "Email",
    value: "me@noarabincohen.com",
    href: "mailto:me@noarabincohen.com"
  },
  {
    icon: "MapPin",
    label: "Location",
    value: "Kirkland (Seattle area), WA",
    href: null
  }
];

export const socialLinks: ContactTypeLink[] = [
  {
    icon: "Linkedin",
    label: "LinkedIn",
    value: "/noa-rabin-cohen",
    href: "https://www.linkedin.com/in/noa-rabin-cohen",
    span: "LinkedIn profile of Noa Rabin Cohen"
  },
  {
    icon: "Github",
    label: "GitHub",
    value: "/cohenoa33",
    href: "https://github.com/cohenoa33",
    span: "GitHub projects by Noa Rabin Cohen"
  }
];

interface ContactType {
  icon: "Mail" | "MapPin" | "Linkedin" | "Github";
  label: string;
  value: string;
  href?: string | null;
}
interface ContactTypeLink extends ContactType {
  href: string;
  span: string;
}

export const skillCategories = [
  {
    title: "Frontend & UI",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "JavaScript",
      "HTML/CSS",
      "Tailwind CSS"
    ]
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "Ruby on Rails",
      "Python",
      "GraphQL",
      "REST APIs"
    ]
  },
  {
    title: "Data & Databases",
    skills: [
      "PostgreSQL",
      "SQL",
      "Prisma",
      "Database Migrations",
      "Query Optimization"
    ]
  },
  {
    title: "DevOps, Testing & Workflows",
    skills: [
      "Git & GitHub",
      "Docker",
      "CI/CD",
      "Unit & Integration Testing",
      "Jest / React Testing Library",
    ]
  }
];

export const skillsGeneral =
  "Primary stack includes TypeScript, React, Next.js, Node.js, and PostgreSQL. Experienced shipping full-stack features, building APIs, and optimizing performance.";

export const projects = [
  {
    name: "SyncFlow",
    description:
[      "A real-time debugging tool for MERN applications. Install the npm agent into any Express and Mongoose app and it automatically captures every HTTP request and database call, correlates them by trace ID, and streams live activity to a React dashboard. Includes OpenAI-powered root cause analysis per trace, with a rule-based fallback when no API key is configured.","Built with TypeScript, Node.js, React, MongoDB, and Socket.IO.",
]  ,  links: [{
      name: "Live Demo",
      href: "https://syncflow-demo.onrender.com/",
      value: "/syncflow-demo.onrender.com",
      span: "Live Demo for Syncflow by Noa Rabin Cohen",
    },{
      name: "GitHub Repository",
      href: "https://github.com/cohenoa33/syncflow",
      value: "/cohenoa33/syncflow",
      span: "GitHub repository for Syncflow by Noa Rabin Cohen"
    }]
  }
];
 