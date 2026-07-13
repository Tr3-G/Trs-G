export interface Partner {
  name: string;
  category: "Global Technology Partner" | "Public Sector Alliance" | "Innovation Ecosystem";
  description: string;
  logoText: string;
}

export interface TeamMember {
  name: string;
  role: string;
  quote?: string;
  description: string;
  skills: string[];
}

export interface Solution {
  name: string;
  category: string;
  description: string;
  badge?: string;
  features?: string[];
}

export interface Service {
  name: string;
  description: string;
  iconName: string;
}

export const partners: Partner[] = [
  {
    name: "Microsoft",
    category: "Global Technology Partner",
    description: "Global Cloud & Infrastructure Partner for enterprise scalability.",
    logoText: "MS"
  },
  {
    name: "GitHub",
    category: "Global Technology Partner",
    description: "DevOps, secure code storage & collaborative professional development.",
    logoText: "GH"
  },
  {
    name: "IBM",
    category: "Global Technology Partner",
    description: "Enterprise AI integrations & High-tier Hybrid Cloud Solutions.",
    logoText: "IBM"
  },
  {
    name: "Ogun State OGIRS",
    category: "Public Sector Alliance",
    description: "Internal Revenue Service technical partnership & automated collection infrastructure.",
    logoText: "OGIRS"
  },
  {
    name: "Ogun State Ministry",
    category: "Public Sector Alliance",
    description: "Public infrastructure policy alignment & digital administrative systems.",
    logoText: "MINISTRY"
  },
  {
    name: "Ogun State Tech Hub",
    category: "Public Sector Alliance",
    description: "Innovation & Startup Ecosystem Support for accelerating digital skills.",
    logoText: "TECH HUB"
  },
  {
    name: "Tinuten Nigeria Limited",
    category: "Innovation Ecosystem",
    description: "Energy management & Utility systems optimization.",
    logoText: "TINUTEN"
  },
  {
    name: "DEVIT LIMITED",
    category: "Innovation Ecosystem",
    description: "Digital transformation services and distributed systems implementation.",
    logoText: "DEVIT"
  },
  {
    name: "RIAGEM Synergy Limited",
    category: "Innovation Ecosystem",
    description: "Strategic synergy, technical integrations, and business mapping.",
    logoText: "RIAGEM"
  },
  {
    name: "Apexchord Innovations",
    category: "Innovation Ecosystem",
    description: "High-integrity hardware & software custom integrations.",
    logoText: "APEXCHORD"
  },
  {
    name: "Folksway Innovations",
    category: "Innovation Ecosystem",
    description: "Conceptual design, technology consulting & agile strategy.",
    logoText: "FOLKSWAY"
  }
];

export const team: TeamMember[] = [
  {
    name: "Fadare Babatunde Samson R",
    role: "MD / CEO",
    quote: "At TR3-G, we don't just build infrastructure; we develop the modern future of enterprise scale. Our mission is to bridge the gap between today's legacy constraints and tomorrow's limitless potential.",
    description: "Lead visionary and strategist orchestrating high-tier digital infrastructures across West Africa and global networks.",
    skills: ["Enterprise Architecture", "Strategic Leadership", "GovTech Transformation", "Distributed Infrastructure"]
  },
  {
    name: "Babarinde Oluwaseyi",
    role: "CTO",
    description: "Leading our technical vision, software engineering squads, and designing high-integrity distributed systems.",
    skills: ["Cloud Engineering", "Distributed Databases", "System Architecture", "AI Automation"]
  },
  {
    name: "Adeboyega Adebowale Aiyemomi",
    role: "CFO",
    description: "Strategizing financial growth, resource optimization, and ensuring sustainable investment in next-generation technologies.",
    skills: ["Financial Strategy", "Tech Valuations", "Capital Resource Planning", "Risk Mitigation"]
  },
  {
    name: "Abimbola Deji Fadare",
    role: "Group Administrator",
    description: "Maintaining operational excellence, corporate governance, compliance protocols, and strategic organizational alignment.",
    skills: ["Corporate Operations", "Governance", "HR Strategy", "Public-Private Partnerships"]
  },
  {
    name: "Engr Clement John",
    role: "Group Project Manager",
    description: "Orchestrating complex software delivery pipelines and infrastructure deployments across the global digital core.",
    skills: ["Agile Management", "Infrastructure Rollouts", "SDLC Oversight", "KPI Tracking"]
  },
  {
    name: "Taiwo Oyetade Solomon",
    role: "Head of Full Stack",
    description: "Full stack engineering expert specializing in robust backends, database scaling, and secure API integrations.",
    skills: ["React / Next.js", "Node.js", "Enterprise Database Scaling", "Secure Integrations"]
  },
  {
    name: "Kehinde Oyetade David",
    role: "Head of Full Stack",
    description: "Full stack design and interface engineer specializing in high-performance frontends and beautiful modern UX systems.",
    skills: ["Frontend UI Systems", "Responsive Architecture", "UI/UX Modeling", "Tailwind CSS"]
  }
];

export const solutions: Solution[] = [
  {
    name: "Arqelion (Secure Check-in/out)",
    category: "Secure Access Control",
    description: "A next-generation security platform engineered to safeguard organization and student movements through high-integrity data validation and automated logging.",
    badge: "99.9% Secure",
    features: ["Biometric & Card Authentication", "Real-time SMS alerts", "Data Analytics Dashboard"]
  },
  {
    name: "Revenue Management System",
    category: "Fiscal Governance",
    description: "Automated fiscal tracking, payment aggregation, and tax collection infrastructure built for complete auditing transparency and state-level revenue generation.",
    badge: "Audit-Ready",
    features: ["Instant Bank Settling", "Cryptographic Invoice Signing", "OGIRS Compliant Pipeline"]
  },
  {
    name: "Self-Storage Booking System",
    category: "Logistics",
    description: "Secure, climate-controlled storage booking platform featuring real-time space visualization, unit allocation workflows, and automated subscription billing.",
    badge: "Active",
    features: ["Dynamic pricing models", "Interactive unit selector", "Automatic reminder system"]
  },
  {
    name: "Hotel Management System",
    category: "Hospitality Operations",
    description: "Integrated reservation engine built to optimize guest experiences, room allocations, real-time service requests, and unified restaurant billing systems.",
    badge: "Operational",
    features: ["Interactive floorplans", "In-room service tracking", "Integrated POS terminal"]
  },
  {
    name: "Federal Unity School DTP",
    category: "EdTech Infrastructure",
    description: "A comprehensive digital transformation platform built for modernizing student tracking, academic transcript tracking, and institutional governance across networks.",
    badge: "Enterprise",
    features: ["Portal access management", "Digital result collation", "Direct parent messaging"]
  },
  {
    name: "Electronic Document Management System (EDMS)",
    category: "Information Security",
    description: "Zero-friction archival and instant retrieval platform using cryptographic verification to ensure document safety at every single structural layer.",
    badge: "Zero-Trust",
    features: ["Version control logging", "Role-based permission keys", "Full-text index search"]
  },
  {
    name: "Ride & Fleet Management Platform",
    category: "Mobility Operations",
    description: "Real-time dispatch optimization, automated vehicle tracking, and route intelligence software crafted for commercial transport operations.",
    badge: "Active Stream",
    features: ["GPS live coordinates", "Automated driver payout", "Predictive maintenance stats"]
  },
  {
    name: "Conference Attendance & Event Intelligence",
    category: "Event Tech",
    description: "Streamlined participant check-in system that automates invitation passes, tracks event-day attendance, and generates interactive analytics reports.",
    badge: "Live Analytics",
    features: ["QR code instant scan", "Instant attendee badge print", "Post-event follow-up automation"]
  },
  {
    name: "Pharmacy & Hospital Inventory System",
    category: "Healthcare Logistics",
    description: "High-integrity clinical dispensing workflow software tracking pharmaceutical stocks, expiry alert notifications, and audit-ready log sheets.",
    badge: "ISO Compliant",
    features: ["Barcode medication match", "Re-order alert indicators", "Prescription scan record"]
  },
  {
    name: "Warehouse Inventory Software",
    category: "Supply Chain Solutions",
    description: "Enterprise-grade logistics platform developed for sprawling distribution facilities, giving real-time visibility into stock transfers.",
    badge: "99.9% Accuracy",
    features: ["RFID integration hooks", "Dynamic stock level alerts", "Multi-warehouse syncing"]
  }
];

export const services: Service[] = [
  {
    name: "Software Development",
    description: "Bespoke full-stack engineered systems designed to achieve agility, reliable data architecture, and long-term institutional scalability.",
    iconName: "Terminal"
  },
  {
    name: "Mobile Application Development",
    description: "High-performance native and cross-platform mobile applications developed for seamless user engagement and institutional mobility.",
    iconName: "Smartphone"
  },
  {
    name: "AI and Machine Learning Solutions",
    description: "Deploying intelligent predictive models, machine learning automations, and data processing architectures tailored for smart growth.",
    iconName: "Brain"
  },
  {
    name: "Business Intelligence & Data Analytics",
    description: "High-performance data collation, processing pipelines, and analytics dashboards for real-time institutional decision making.",
    iconName: "BarChart"
  },
  {
    name: "Cybersecurity Services",
    description: "Implementing zero-trust infrastructure, biometric authentications, and regular vulnerability monitoring against security threat vectors.",
    iconName: "Shield"
  },
  {
    name: "Cloud Computing Services",
    description: "Migrating, supporting, and building scalable cloud-native architectures optimized to deliver absolute uptime and elasticity.",
    iconName: "Cloud"
  },
  {
    name: "ICT Consulting & Roadmapping",
    description: "Strategic advising on tech-stack implementations, digital roadmapping, and maximizing organizational ROI on tech investments.",
    iconName: "Briefcase"
  },
  {
    name: "Digital Transformation Projects",
    description: "Systemic analysis and complete overhaul of offline operations into automated, efficient, and cost-effective digital environments.",
    iconName: "Zap"
  }
];

export const contactDetails = {
  address: "No 43 Area 3, FCT Abuja, Nigeria",
  phone: "+234 704 8802 9218",
  email: "info@tr3-g.com.ng",
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.123!2d7.4!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDfCsDI0JzAwLjAiRQ!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
};
