export const profile = {
  name: "Muhammad Shahbaz",
  role: "Full Stack Engineer",
  tagline: "Real-time & Data-Intensive Web Applications",
  blurb:
    "I build scalable, real-time systems that turn complex data into reliable, high-impact products.",
  location: "Rawalpindi, Pakistan",
  email: "shahbazmuhammad135@gmail.com",
  phone: "+92 342 5503621",
  linkedin: "https://linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  cvUrl: "/Muhammad_Shahbaz_CV.pdf",
  availableForWork: true,
};

export const stats = [
  { value: 800000, suffix: "K+", display: "800K+", label: "Shipments", divisor: 1000 },
  { value: 500, suffix: "M+", display: "500M+", label: "km Tracked", divisor: 1 },
  { value: 80, suffix: "%", display: "80%", label: "Performance Gain", divisor: 1 },
  { value: 5, suffix: "+", display: "5+", label: "Years Experience", divisor: 1 },
];

export type Project = {
  name: string;
  blurb: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    name: "Logistics Marketplace & Fleet Tracking",
    blurb:
      "A nationwide freight platform for load posting, bidding, and real-time fleet tracking.",
    description:
      "An enterprise logistics marketplace connecting shippers and carriers, with live GPS fleet tracking powered by Google Maps APIs, bidding workflows, and operational dashboards.",
    highlights: [
      "Powered 800,000+ shipments and 5M+ tons of freight",
      "500M+ km of real-time tracked travel",
      "Role-based access control & fleet/team management",
    ],
    tech: ["Angular", "Node.js", "Express", "TypeScript", "PostgreSQL", "Google Maps API", "AWS"],
    accent: "#3B82F6",
  },
  {
    name: "Financial Forecasting Platform",
    blurb:
      "Core forecasting modules and high-performance calculation engines for a UK fintech.",
    description:
      "Designed forecasting modules and optimized complex calculation engines for a London-based financial planning platform, with interactive analytical dashboards.",
    highlights: [
      "Improved performance by 80% on data-intensive views",
      "Lazy loading, Web Workers, virtual scrolling & caching",
      "Interactive dashboards built with AM4Charts",
    ],
    tech: ["Angular", "TypeScript", "AM4Charts", "Web Workers", "RxJS"],
    accent: "#22D3EE",
  },
  {
    name: "GovTech Revenue & Property Systems",
    blurb:
      "Secure, role-based government platforms for tax revenue and property transfers.",
    description:
      "Built secure workflows for government initiatives including a property-transfer system (PLRA) and a tax-revenue collection platform with offline-capable desktop support.",
    highlights: [
      "Secure RBAC workflows with full auditability",
      "Offline-capable desktop app (ElectronJS + SQLite3)",
      "Firebase Storage & Cloud Messaging notifications",
    ],
    tech: ["Angular", "Node.js", "Firebase", "ElectronJS", "SQLite3", "MS SQL"],
    accent: "#10B981",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["Angular", "React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "Socket.io"],
  },
  {
    group: "Data & Real-time",
    items: ["PostgreSQL", "MySQL", "MS SQL", "MongoDB", "Power BI", "AM4Charts", "Google Maps"],
  },
  {
    group: "DevOps & Tools",
    items: ["Git", "Docker", "AWS", "CI/CD", "Jira", "Agile/Scrum"],
  },
];

export type Experience = {
  role: string;
  company: string;
  meta: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Application Designer / Full Stack Developer",
    company: "LMKR",
    meta: "Islamabad, Pakistan",
    period: "May 2022 – Present",
    points: [
      "Built a logistics marketplace with real-time fleet tracking — powering 800K+ shipments, 5M+ tons of freight, and 500M+ km of tracked travel.",
      "Developed management portals with RBAC and fleet/team management.",
      "Delivered secure property-transfer workflows for the PLRA government system.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "New Effect",
    meta: "London, UK · Remote",
    period: "Aug 2023 – Present",
    points: [
      "Built core forecasting modules and optimized calculation engines, improving performance by 80%.",
      "Optimized Angular apps with lazy loading, Web Workers, virtual scrolling, and caching.",
      "Built interactive analytical dashboards with AM4Charts.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "TeleTaleem",
    meta: "Islamabad, Pakistan",
    period: "Sep 2021 – May 2022",
    points: [
      "Contributed to a KPK government revenue-collection system.",
      "Implemented RBAC, Firebase Storage, and Cloud Messaging notifications.",
      "Built an offline-capable desktop app with ElectronJS + SQLite3.",
    ],
  },
  {
    role: "Full Stack / MEAN Developer",
    company: "New Vision Technologies & Abacus Multimedia",
    meta: "Pakistan",
    period: "2019 – 2021",
    points: [
      "Built Angular apps and Node.js REST APIs with SQL/NoSQL databases.",
      "Developed Ionic mobile apps with Stripe/PayPal/Braintree payments.",
      "Implemented real-time features (Socket.io) and map integrations.",
    ],
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
