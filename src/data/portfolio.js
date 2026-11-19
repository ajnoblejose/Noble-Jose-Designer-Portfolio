// Portfolio Data for Noble Jose — Senior UI/UX Designer
// Easily editable project information, work history, skills, and contact details.

export const personalInfo = {
  name: "Noble Jose",
  role: "Senior UI/UX Designer",
  location: "Trivandrum, Kerala, India",
  email: "ajninck@gmail.com",
  phone: "+91 963 362 3389",
  tagline: "Senior UI/UX Designer specialising in design systems, product strategy, and AI-assisted workflows.",
  bio: "I am a product designer with a background in computer applications and electronics. Over the past several years, I have led end-to-end product design across complex web and mobile platforms — bridging user research, design systems, and engineering implementation.",
  availability: "Open to new opportunities",
  links: {
    linkedin: "https://linkedin.com/in/noble-jose",
    dribbble: "https://dribbble.com/noble-jose",
  },
};

export const skills = {
  "Product Design": [
    "UX Strategy",
    "User Research",
    "User Flows",
    "Information Architecture",
    "Wireframing",
    "Prototyping",
    "Usability Testing",
    "Interaction Design",
    "Responsive Design",
    "Design Systems",
    "AI-Powered UX",
    "AI Workflow Design",
  ],
  "Graphic Design": [
    "Branding",
    "Visual Communication",
    "Logo Design",
    "Typography",
    "Layout Design",
    "Illustration",
    "Image Editing",
  ],
  "Technical & Creative": [
    "Photography",
    "Videography",
    "Video Editing",
    "Content Creation",
    "Creative Problem Solving",
    "Cross-functional Collaboration",
  ],
  "Tools": [
    "Figma",
    "Framer",
    "Photoshop",
    "Illustrator",
    "Claude",
    "Cursor",
    "Miro",
    "Lovable",
  ],
};

// Distinct Product Design Experience vs Technical Foundation
export const designExperience = [
  {
    id: "logicplum",
    role: "Senior UI/UX Designer",
    company: "LogicPlum",
    period: "Dec 2021 – Present",
    location: "Trivandrum, Kerala",
    type: "Full-time",
    description:
      "Leading end-to-end product design across AI-powered software products, collaborating with engineering, product management, and executive stakeholders.",
    bullets: [
      "Owned end-to-end product design, from discovery and research to prototyping and handoff.",
      "Conducted user research, journey mapping, and usability testing to validate product directions.",
      "Translated complex business requirements into intuitive user flows and scalable interfaces.",
      "Designed responsive web and mobile experiences across multiple product lines.",
      "Built and maintained comprehensive design systems, reusable components, and consistent UI patterns.",
      "Collaborated closely with product and engineering teams to deliver AI-powered product experiences.",
    ],
    tools: ["Figma", "Framer", "Design Systems", "AI UX"],
  },
  {
    id: "freelance",
    role: "Graphic Designer",
    company: "Freelance",
    period: "Jun 2018 – Jun 2021",
    location: "Ernakulam, Kerala",
    type: "Part-time",
    description:
      "Created original visual identities, digital assets, and marketing collateral for diverse commercial clients.",
    bullets: [
      "Created original visual assets, including illustrations, posters, social media banners, and logos.",
      "Enhanced images, typography, and layouts using strong visual design principles.",
      "Developed creative concepts and visual storytelling to communicate ideas and promote services.",
      "Designed engaging marketing and promotional materials aligned with brand identity.",
    ],
    tools: ["Photoshop", "Illustrator", "Branding", "Typography"],
  },
];

export const technicalExperience = [
  {
    id: "cusat-assistant",
    role: "Technical Assistant",
    company: "CUSAT (Cochin University of Science and Technology)",
    period: "Sep 2018 – Mar 2020",
    location: "Ernakulam, Kerala",
    type: "Technical",
    description:
      "Supported departmental infrastructure, server operations, and software administration.",
    bullets: [
      "Installed, configured, and maintained software, hardware, and network infrastructure.",
      "Managed Linux server administration, including setup, patching, security hardening, and troubleshooting.",
      "Configured Windows and Linux environments and provided application support and technical issue resolution.",
    ],
    tools: ["Linux Server Administration", "Network Infrastructure", "System Maintenance"],
  },
];

export const education = [
  {
    degree: "MCA (Master of Computer Applications)",
    institution: "CUSAT (Cochin University of Science and Technology)",
    period: "2015 – 2018",
  },
  {
    degree: "BSc Electronics",
    institution: "NSS College, Rajakumary",
    period: "2012 – 2015",
  },
  {
    degree: "Higher Secondary",
    institution: "GHSS, Panickankudy",
    period: "2010 – 2012",
  },
];

// Factual, credible project case studies based strictly on Noble Jose's resume
export const projects = [
  {
    id: "logicplum-design-system",
    title: "Enterprise Design System",
    subtitle: "A scalable, token-based component library unifying multiple AI-driven applications",
    client: "LogicPlum",
    role: "Senior UI/UX Designer",
    category: "Product Design",
    year: "2023 – 2024",
    duration: "Ongoing",
    tools: ["Figma", "Design Tokens", "Auto Layout", "Design Guidelines"],
    accent: "#b8734a",
    overview:
      "At LogicPlum, I established and maintained a centralized design system to ensure visual consistency and streamlined handoff across our multi-product AI suite.",
    problem:
      "Multiple product teams were shipping features with divergent UI patterns, inconsistent typography scales, and fragmented interactive states, making the product suite feel disconnected.",
    process:
      "Conducted a comprehensive UI inventory across all products, cataloged recurring patterns, and established foundational tokens (color, typography, spacing, elevation). Partnered with frontend engineers to align Figma components with production code components.",
    solution:
      "Created an extensive Figma component library utilizing variables for theming, strict auto-layout rules, and documented usage guidelines for buttons, form controls, navigation, and data tables.",
    outcome:
      "Achieved unified interface consistency across products and established a shared visual vocabulary between product designers and engineering teams.",
    tags: ["Design System", "Component Library", "Figma", "Enterprise UX"],
  },
  {
    id: "ai-product-experience",
    title: "AI-Powered Workflow Design",
    subtitle: "Designing human-centered interfaces for complex machine learning and data workflows",
    client: "LogicPlum",
    role: "Senior UI/UX Designer",
    category: "UX Strategy",
    year: "2023 – 2024",
    duration: "Product Cycle",
    tools: ["Figma", "User Journey Mapping", "Miro", "Prototyping"],
    accent: "#6b8273",
    overview:
      "Designed intuitive interfaces that make advanced AI capabilities accessible and manageable for business users and data analysts.",
    problem:
      "Machine learning tools often expose unnecessary technical complexity, causing cognitive fatigue and steep learning curves for users who need actionable insights rather than raw parameters.",
    process:
      "Conducted user interviews to map task flows and identify friction points in data preparation and model evaluation. Explored progressive disclosure patterns to hide low-level complexity behind sensible defaults.",
    solution:
      "Designed step-by-step workflow wizards, contextual explainability tooltips, clear status states, and simplified configuration panels that guide users through AI-assisted processes.",
    outcome:
      "Delivered clear, intuitive user flows that reduced task ambiguity and made complex automated workflows approachable for non-technical users.",
    tags: ["AI UX", "Information Architecture", "User Flows", "Interaction Design"],
  },
  {
    id: "brand-identity-visuals",
    title: "Visual Identity & Graphic Design",
    subtitle: "Cohesive brand assets, typography systems, and promotional materials",
    client: "Freelance",
    role: "Graphic Designer",
    category: "Graphic Design",
    year: "2018 – 2021",
    duration: "Multi-client",
    tools: ["Photoshop", "Illustrator", "Typography", "Visual Layout"],
    accent: "#8c7a9c",
    overview:
      "A body of freelance visual design work developed for diverse businesses, focusing on brand identity, visual storytelling, and marketing communication.",
    problem:
      "Emerging businesses needed distinctive visual communication to establish professional presence and communicate service offerings clearly across print and digital touchpoints.",
    process:
      "Engaged directly with clients to define brand positioning, target demographics, and key visual attributes. Explored logo directions, color palettes, and typographic pairings through iterative mockups.",
    solution:
      "Delivered complete identity toolkits including primary logos, social media visual assets, promotional posters, and editorial layouts built upon strong design principles.",
    outcome:
      "Helped clients launch cohesive brand identities that clearly communicated their value propositions to their target audiences.",
    tags: ["Branding", "Visual Identity", "Typography", "Art Direction"],
  },
];
