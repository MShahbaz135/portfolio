export const profile = {
  name: "Muhammad Shahbaz",
  role: "Full Stack Engineer",
  tagline: "Real-time & Data-Intensive Web Applications",
  blurb:
    "I build scalable, real-time systems that turn complex data into reliable, high-impact products.",
  location: "Rawalpindi, Pakistan",
  email: "shahbazmuhammad135@gmail.com",
  phone: "+92 342 5503621",
  linkedin: "https://www.linkedin.com/in/muhammad-shahbaz-827568167/",
  github: "https://github.com/MShahbaz135",
  cvUrl: "/Muhammad_Shahbaz_CV.pdf",
  availableForWork: true,
};

export const stats = [
  { value: 800000, suffix: "K+", display: "800K+", label: "Shipments", divisor: 1000 },
  { value: 500, suffix: "M+", display: "500M+", label: "km Tracked", divisor: 1 },
  { value: 80, suffix: "%", display: "80%", label: "Performance Gain", divisor: 1 },
  { value: 5, suffix: "+", display: "5+", label: "Years Experience", divisor: 1 },
];

export type CaseStudyResult = { metric: string; label: string };

export type CaseStudy = {
  overview: string;
  problem: string;
  role: string;
  approach: string[];
  results: CaseStudyResult[];
  lessons: string;
};

export type Project = {
  slug: string;
  name: string;
  blurb: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
  caseStudy: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "logistics-fleet-tracking",
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
    caseStudy: {
      overview:
        "A nationwide logistics marketplace that connects shippers with carriers — enabling load posting, competitive bidding, and live GPS tracking of freight across the country. The platform became the operational backbone for a large fleet network handling hundreds of thousands of shipments.",
      problem:
        "Freight coordination relied on phone calls, spreadsheets, and manual check-ins. Shippers had no visibility into where their goods were, carriers struggled to find return loads, and operations teams couldn't measure performance. The business needed a single real-time system to digitize the entire freight lifecycle at national scale.",
      role:
        "As a full-stack developer I owned major parts of the frontend (Angular) and backend (Node.js/Express) — building the bidding workflow, the real-time tracking layer with Google Maps APIs, role-based dashboards, and fleet/team management modules.",
      approach: [
        "Designed a load-posting and bidding workflow so shippers post freight and carriers bid competitively in real time.",
        "Built a live fleet-tracking layer using Google Maps APIs, streaming GPS positions and rendering routes, ETAs, and status on interactive maps.",
        "Implemented role-based access control (RBAC) so shippers, carriers, dispatchers, and admins each see a tailored, secure view.",
        "Created operational dashboards and reporting (Power BI) to surface throughput, utilization, and delivery performance.",
        "Optimized data-heavy map and list views to stay responsive at scale.",
      ],
      results: [
        { metric: "800K+", label: "Shipments processed" },
        { metric: "5M+", label: "Tons of freight moved" },
        { metric: "500M+", label: "km of tracked travel" },
      ],
      lessons:
        "Real-time geospatial data at scale is as much a UX problem as an engineering one — batching position updates and virtualizing large lists mattered as much as the backend. Clear role boundaries (RBAC) early on kept the product secure and simple as it grew.",
    },
  },
  {
    slug: "financial-forecasting-platform",
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
    caseStudy: {
      overview:
        "A financial planning and forecasting platform for a London-based fintech, where users model complex financial scenarios across large datasets. I designed the core forecasting modules and re-engineered the calculation engines that power them.",
      problem:
        "The forecasting engine was slow and error-prone on large models — recalculations blocked the UI, edge cases produced incorrect figures, and dense dashboards lagged. For a financial product, both speed and correctness are non-negotiable.",
      role:
        "As a frontend engineer (Angular + TypeScript), I rebuilt the calculation engines, hardened validation, and rebuilt the data-heavy views for performance, while collaborating in an Agile team with code reviews.",
      approach: [
        "Re-architected the calculation engine and moved heavy computation into Web Workers to keep the main thread responsive.",
        "Added lazy loading and code-splitting so users only load what they need.",
        "Used virtual scrolling and trackBy optimizations to render large tables/grids smoothly.",
        "Introduced client-side caching to avoid redundant recalculation.",
        "Strengthened validation and edge-case handling to reduce forecasting errors.",
      ],
      results: [
        { metric: "80%", label: "Performance improvement" },
        { metric: "Fewer", label: "Forecasting errors" },
        { metric: "Smooth", label: "Data-intensive dashboards" },
      ],
      lessons:
        "Offloading computation to Web Workers and being deliberate about what renders (virtualization, memoization) can transform a sluggish data app into a snappy one — often a bigger win than backend tuning. In fintech, validation and edge-case handling are features, not afterthoughts.",
    },
  },
  {
    slug: "govtech-revenue-property",
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
    caseStudy: {
      overview:
        "A set of government digitization initiatives: a property-transfer system for a land authority (PLRA) and a tax-revenue collection platform. Both demanded strict security, auditability, and reliability in environments with inconsistent connectivity.",
      problem:
        "Government workflows involve sensitive records, strict access rules, and field staff who can't always rely on a stable internet connection. Paper-based and online-only systems left gaps in security, accountability, and availability.",
      role:
        "I built secure, role-based workflows across the stack (Angular + Node.js), and developed an offline-capable desktop application so field operations could continue without connectivity.",
      approach: [
        "Implemented role-based access control (RBAC) with auditable, secure workflows for sensitive records.",
        "Built an offline-capable desktop app with ElectronJS + SQLite3, syncing data when connectivity returned.",
        "Integrated Firebase Storage and Cloud Messaging for document handling and real-time notifications.",
        "Designed approval/transfer workflows that enforce the correct steps and permissions at each stage.",
      ],
      results: [
        { metric: "Secure", label: "Auditable RBAC workflows" },
        { metric: "Offline", label: "Field-ready desktop app" },
        { metric: "Real-time", label: "Notifications & sync" },
      ],
      lessons:
        "Designing for offline-first and least-privilege access from day one is far easier than retrofitting it. In GovTech, traceability and predictable workflows build the trust that makes adoption possible.",
    },
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
