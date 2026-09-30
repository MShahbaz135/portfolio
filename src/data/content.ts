export const profile = {
  name: "Muhammad Shahbaz",
  role: "Senior Software Engineer (Full Stack)",
  tagline: "Turning complex systems into products people rely on",
  blurb:
    "I design and build web products for operations, finance, and government — owning the work from UI to APIs so complex systems stay reliable in production.",
  location: "Rawalpindi, Pakistan",
  email: "shahbazmuhammad135@gmail.com",
  phone: "+92 342 5503621",
  linkedin: "https://www.linkedin.com/in/muhammad-shahbaz-827568167/",
  github: "https://github.com/MShahbaz135",
  cvUrl: "/Muhammad_Shahbaz_CV.pdf",
  siteUrl: "https://www.mshahbaz.dev",
  availableForWork: true,
  yearsExperience: "6+",
};

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
  /** Who the work was for, e.g. "OpenPort · built at LMKR". */
  context: string;
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
    name: "OpenPort Logistics Marketplace & Fleet Tracking",
    context: "OpenPort · built at LMKR",
    blurb:
      "A nationwide freight platform for load posting, bidding, and real-time fleet tracking.",
    description:
      "An enterprise logistics marketplace connecting shippers and carriers, with live GPS fleet tracking powered by Google Maps APIs, bidding workflows, and operational dashboards.",
    highlights: [
      "800K+ shipments and 5M+ tons of freight moved",
      "500M+ km of live GPS-tracked travel",
      "Role-based portals for shippers, carriers & dispatchers",
    ],
    tech: ["Angular", "Node.js", "Express", "TypeScript", "MySQL", "Google Maps API", "AWS"],
    accent: "#3B82F6",
    caseStudy: {
      overview:
        "OpenPort is a logistics moving platform — a digital trucking marketplace and transport management system that takes freight from order dispatch through to consignee delivery. Shippers post loads to pre-approved transporters, who bid in real time; once a booking is confirmed, the same system tracks the truck, records an audit trail, and keeps shippers, carriers, dispatchers, and consignees aligned instead of coordinating over phone calls and spreadsheets.\n\nThe marketplace is built for transport procurement: licensed carriers, competitive bidding, booking management, and cost visibility. Alongside it, the TMS layer gives end-to-end supply-chain visibility — live GPS tracking, operational dashboards, and KPIs from dispatch to delivery, with electronic proof of delivery so consignees can follow order status and SKU-level progress.\n\nThe work in this case study sits at that core: nationwide load posting and bidding, real-time fleet tracking on maps, role-based portals for each stakeholder, and reporting for throughput, utilization, and on-time performance — on a stack of Angular, Node.js, Express, and MySQL.",
      problem:
        "Freight coordination relied on phone calls, spreadsheets, and manual check-ins. Shippers had no visibility into where their goods were, carriers struggled to find return loads, and operations teams couldn't measure performance. The business needed a single real-time system to digitize the entire freight lifecycle at national scale.",
      role:
        "As a full-stack developer I owned major parts of the frontend (Angular) and backend (Node.js/Express with MySQL) — building the bidding workflow, the real-time tracking layer with Google Maps APIs, role-based dashboards, and fleet/team management modules.",
      approach: [
        "Designed a load-posting and bidding workflow so shippers post freight and carriers bid competitively in real time.",
        "Stored loads, bids, GPS history, and fleet records in MySQL, indexed for live tracking queries and operational reporting.",
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
        "Real-time geospatial data at scale is as much a UX problem as an engineering one — batching position updates and virtualizing large lists mattered as much as the backend. MySQL, with the right indexes, kept tracking and reporting queries fast as volume grew. Clear role boundaries (RBAC) early on kept the product secure and simple as it grew.",
    },
  },
  {
    slug: "skytrace",
    name: "SkyTrace — Live Flight Tracking",
    context: "Open-source side project",
    blurb:
      "Live ADS-B flight tracking built around a hard API budget: one shared poller, WebSocket fan-out, and a canvas map that keeps moving between updates.",
    description:
      "A real-time flight tracker streaming live aircraft positions from the OpenSky Network to a custom Leaflet canvas map, with a NestJS backend engineered to serve every viewer from a single credit-aware poller.",
    highlights: [
      "One shared poller serves every viewer within a 4,000-credit/day API budget",
      "Dead reckoning turns 10-second updates into smooth 60fps motion",
      "Jest, Vitest & Playwright tests; replay fallback labelled as demo data",
    ],
    tech: ["React 19", "TypeScript", "NestJS", "Socket.IO", "Leaflet", "PostgreSQL", "Vite"],
    githubUrl: "https://github.com/MShahbaz135/skytrace",
    accent: "#F59E0B",
    caseStudy: {
      overview:
        "SkyTrace is a live flight-tracking web app: a landing page, a full-screen live map, and per-aircraft detail pages. Positions come from the OpenSky Network's ADS-B feed, stream to the browser over Socket.IO, and render on a custom Leaflet canvas layer. Aircraft type, airline, and typical route arrive a moment later from adsbdb and are cached in PostgreSQL.\n\nIt is a non-commercial portfolio project, and the full source, tests, and architecture notes are public on GitHub.",
      problem:
        "A registered OpenSky account gets 4,000 API credits per day. A global query costs 4 credits, and the data only refreshes every 5–10 seconds — so polling globally every 10 seconds would burn the daily budget in under three hours, and one request per browser tab would burn it far faster. The challenge was to make a map that feels live for any number of viewers without exceeding that budget.",
      role:
        "Sole developer — architecture, NestJS backend and WebSocket gateway, React frontend and canvas rendering, shared TypeScript contracts, and the test suite.",
      approach: [
        "One TrackingService poller for every connected client, instead of one upstream request per browser tab.",
        "Viewport-derived bounding boxes, merged when the union costs no more than separate queries, and capped per poll cycle.",
        "Poll interval widens automatically as the remaining credit balance falls, and polling stops entirely when nobody is watching.",
        "Clients receive a snapshot and then deltas over Socket.IO; client-side dead reckoning interpolates between updates for 60fps motion.",
        "Custom Leaflet canvas layer with rotated sprites, viewport culling, zoom level-of-detail, and spatial-grid hit-testing.",
        "Rate-limited enrichment queue for aircraft and route data that never blocks the position stream.",
        "Replay fallback loops a recorded fixture when the feed is down — and the UI labels it as demo data, never as live.",
      ],
      results: [
        { metric: "1", label: "Shared poller for every viewer" },
        { metric: "10s → 60fps", label: "Dead-reckoned motion" },
        { metric: "4,000", label: "Credits/day budget respected" },
      ],
      lessons:
        "Treating the API budget as the core design constraint shaped the whole architecture — shared polling, coalesced queries, and idle shutdown came directly from it. Being honest in the UI about what the data can and can't tell you (typical routes, demo data) builds more trust than pretending to know more.",
    },
  },
  {
    slug: "financial-forecasting-platform",
    name: "Financial Forecasting Platform",
    context: "New Effect, London · part-time remote",
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
      ],
      lessons:
        "Offloading computation to Web Workers and being deliberate about what renders (virtualization, memoization) can transform a sluggish data app into a snappy one — often a bigger win than backend tuning. In fintech, validation and edge-case handling are features, not afterthoughts.",
    },
  },
  {
    slug: "plra-land-records",
    name: "PLRA Land Records Platform — Auth & Admin",
    context: "Punjab Land Records Authority · built at LMKR",
    blurb:
      "The central authentication service and admin portal securing every module of Punjab's microservice land-records platform.",
    description:
      "Punjab's land-records platform — property transfers, systematic registration, green certificates, and digitization of remaining mauzas — built as microservices by a 20+ person team. I owned the auth service and admin portal every module relies on.",
    highlights: [
      "Central auth service securing every microservice over gRPC",
      "RBAC for patwaris, tehsildars, ROs, RPOs, registrars & admins",
      "OTP via SMS & email; admin portal for users, roles & permissions",
    ],
    tech: ["Angular", "TypeScript", "Node.js", "Express", "PostgreSQL", "gRPC"],
    accent: "#10B981",
    caseStudy: {
      overview:
        "The Punjab Land Records Authority (PLRA) platform digitizes land administration end to end. A citizen applies for a property transfer, a patwari verifies it, a registrar approves it, and the land record updates. Around that core sit green certificate issuance, systematic registration of urban, peri-urban, and rural properties, digitization of the remaining mauzas, and incorporation of existing urban records into the Land Records Management Information System (LRMIS).\n\nThe platform is a set of microservices — Angular, Node.js, .NET, PostgreSQL, and gRPC, with NADRA biometric verification — each owned by its own team, with roughly 15–20 developers plus QA, DevOps, a business analyst, and a project manager.",
      problem:
        "Every module — transfers, registration, certificates, digitization — needs the same two answers: who is this user, and what are they allowed to do? In a land-records system, getting that wrong means unauthorized changes to property ownership. With many microservices built by separate teams, authentication and permissions had to be centralized, strict, and easy for every team to integrate with.",
      role:
        "I owned the central authentication service and the admin portal. On the backend (Node.js, Express, PostgreSQL), I built login, roles, permissions, and designations for every module, exposed to other services over gRPC. On the frontend (Angular), I built the admin portal for user management, role management, and RBAC. I also integrated OTP delivery over SMS and email.",
      approach: [
        "Built one auth service that handles login, roles, permissions, and designations for every module, so no team re-implemented security on its own.",
        "Exposed authentication and permission checks to the other microservices over gRPC, giving every team a single, typed contract to integrate against.",
        "Modelled RBAC on real official roles — patwari, tehsildar, returning officer (RO), RPO, registrar, and admin — so each official can act only at their stage of the fixed approval sequence.",
        "Built the Angular admin portal for managing users, roles, designations, and permissions.",
        "Integrated OTP verification over SMS and email into the login flow.",
        "Coordinated the auth contract with the team behind each microservice, resolving integration conflicts as services evolved.",
      ],
      results: [
        { metric: "6+", label: "Official roles under one RBAC model" },
        { metric: "15–20", label: "Developers across teams relying on one auth service" },
      ],
      lessons:
        "In a large microservice system, the auth service is a product for other engineers — a clear gRPC contract and early, frequent communication with every team mattered as much as the security logic itself. Centralizing permissions kept security rules in one place instead of drifting across many services.",
    },
  },
  {
    slug: "kpk-revenue-collection",
    name: "KPK Tax-Revenue Collection System",
    context: "KPK Government · built at TeleTaleem",
    blurb:
      "A government tax-revenue collection platform with an offline-capable desktop app for unreliable connectivity.",
    description:
      "Features for a Khyber Pakhtunkhwa government tax-revenue collection system, including an offline-capable ElectronJS desktop app that keeps working without internet and syncs when connectivity returns.",
    highlights: [
      "Offline-capable desktop app (ElectronJS + SQLite3)",
      "Local data syncs back when connectivity returns",
      "RBAC, Firebase Storage & Cloud Messaging notifications",
    ],
    tech: ["Angular", "Node.js", "ElectronJS", "SQLite3", "Firebase"],
    accent: "#8B5CF6",
    caseStudy: {
      overview:
        "A tax-revenue collection system for the Khyber Pakhtunkhwa (KPK) government, digitizing collection workflows that previously depended on paper and on a stable internet connection. Alongside the web platform, it includes a desktop application that keeps working offline.",
      problem:
        "Revenue collection happens in offices and in the field, where connectivity is unreliable. An online-only system would stop work whenever the connection dropped, while paper records left gaps in accountability. The system needed to keep collecting reliably and securely either way.",
      role:
        "As a full-stack developer (Angular + Node.js), I built collection features, role-based access control, and Firebase integrations, and developed the offline-capable desktop application.",
      approach: [
        "Built an offline-capable desktop app with ElectronJS + SQLite3 that stores work locally and syncs when connectivity returns.",
        "Implemented role-based access control (RBAC) so each user sees and acts on only what their role allows.",
        "Integrated Firebase Storage for documents and Firebase Cloud Messaging for real-time notifications.",
        "Built collection-workflow features in the Angular web platform backed by Node.js APIs.",
      ],
      results: [],
      lessons:
        "Designing for offline-first from day one is far easier than retrofitting it — local storage and sync shape the data model, not just the UI. In GovTech, predictable, traceable workflows build the trust that makes adoption possible.",
    },
  },
];

export type SideProject = {
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
};

export const sideProjects: SideProject[] = [
  {
    name: "allesferien.de",
    tagline: "School holidays, public holidays & bridge-day planner for Germany",
    description:
      "A live German-language site covering school and public holidays for all 16 federal states, with a bridge-day calculator and subscribable calendar feeds. Fully static — no server, no database, no cookies.",
    highlights: [
      "200+ pages and 48 .ics calendar feeds generated at build time from a single data source",
      "Bridge-day planner solves a 0/1 knapsack with merge correction to maximise days off for a given leave budget",
      "41 Vitest tests pin down messy holiday data — local-only holidays, duplicate entries, UTC date math, exclusive ICS end dates",
      "Builds never touch the network: checked-in API snapshots mean an outage can't block a deploy; GitHub Actions ships over FTPS",
    ],
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Vitest", "OpenHolidays API", "GitHub Actions"],
    liveUrl: "https://allesferien.de",
    accent: "#EF4444",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Frontend",
    items: ["Angular", "React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind", "Ionic", "ElectronJS"],
  },
  {
    group: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "REST APIs", "Socket.IO", "Firebase"],
  },
  {
    group: "Data & Real-time",
    items: ["MySQL", "PostgreSQL", "MS SQL", "MongoDB", "SQLite", "Power BI", "AM4Charts", "Google Maps", "Leaflet"],
  },
  {
    group: "Testing & Tools",
    items: ["Jest", "Vitest", "Playwright", "Git", "Docker", "AWS", "CI/CD", "Jira", "Agile/Scrum"],
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
      "Built OpenPort's logistics marketplace with real-time fleet tracking — powering 800K+ shipments, 5M+ tons of freight, and 500M+ km of tracked travel.",
      "Developed management portals with RBAC and fleet/team management.",
      "Mentored junior developers on Angular, Node.js, and team coding practices.",
      "Built the central auth service (gRPC) and admin portal securing every module of Punjab's PLRA land-records platform — logins, OTP, roles, and permissions.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "New Effect",
    meta: "London, UK · Remote · Part-time",
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
      "Built features for a KPK government tax-revenue collection system.",
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
