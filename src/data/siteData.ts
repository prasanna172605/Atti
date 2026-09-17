export interface ServiceItem {
  number: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    title: "WEB DEVELOPMENT",
    shortDesc: "Bespoke, high-performance digital platforms engineered for speed, conversion, and seamless scalability across all screens.",
    deliverables: ["Business websites", "Landing pages", "Web applications", "Dashboards", "Custom digital platforms"]
  },
  {
    number: "02",
    title: "UI/UX DESIGN",
    shortDesc: "Intuitive, human-centered digital experiences designed to elevate brand authority and eliminate user friction.",
    deliverables: ["Website interfaces", "Mobile interfaces", "Design systems", "Figma interactive prototypes"]
  },
  {
    number: "03",
    title: "BRANDING",
    shortDesc: "Complete visual identity systems that position your company as the unmistakable category leader.",
    deliverables: ["Visual identity", "Brand systems", "Logo design", "Brand guidelines"]
  },
  {
    number: "04",
    title: "PERSONAL BRANDING",
    shortDesc: "Strategic digital positioning and personal web assets for founders, creators, and executive professionals.",
    deliverables: ["Portfolio websites", "LinkedIn positioning", "Digital identity", "Content direction"]
  },
  {
    number: "05",
    title: "DIGITAL ADVERTISING",
    shortDesc: "Targeted Google Ads, Meta Ads, and organic distribution strategies that drive qualified inbound attention and client acquisition.",
    deliverables: ["Google Ads campaigns", "Meta Ads campaigns", "Content strategy", "Lead generation"]
  },
  {
    number: "06",
    title: "SEO",
    shortDesc: "Search engine dominance designed to capture active high-intent prospects when they are ready to buy.",
    deliverables: ["Technical SEO", "On-page SEO", "Local SEO & Google Maps", "Search visibility"]
  },
  {
    number: "07",
    title: "DOMAIN & HOSTING",
    shortDesc: "Reliable cloud infrastructure, SSL security, continuous uptime, and zero-headache deployment.",
    deliverables: ["Domain setup", "Cloud hosting", "SSL security", "Deployment & maintenance"]
  },
  {
    number: "08",
    title: "CREATIVE & AI",
    shortDesc: "Forward-thinking AI-assisted workflows and modern visual content to accelerate digital product delivery.",
    deliverables: ["Creative campaigns", "AI-assisted workflows", "Visual content", "Automation"]
  }
];

export interface ProcessItem {
  number: string;
  title: string;
  description: string;
}

export const processData: ProcessItem[] = [
  {
    number: "01",
    title: "DISCOVER",
    description: "Understand the business, audience, and objective to establish clear technical and visual benchmarks."
  },
  {
    number: "02",
    title: "STRATEGY",
    description: "Define the digital direction, positioning, information architecture, and project structure."
  },
  {
    number: "03",
    title: "DESIGN",
    description: "Build the visual system, user experience, typography hierarchy, and interactive prototypes."
  },
  {
    number: "04",
    title: "DEVELOP",
    description: "Turn the design into a fast, responsive, modern digital product with clean maintainable code."
  },
  {
    number: "05",
    title: "LAUNCH",
    description: "Deploy to production, conduct end-to-end device testing, verify analytics, and optimize performance."
  },
  {
    number: "06",
    title: "GROW",
    description: "Continue improving the digital presence through SEO, performance tuning, and ongoing iteration."
  }
];

export interface ProjectItem {
  name: string;
  category: string;
  shortDesc: string;
  previewUrl: string;
  liveUrl?: string;
  isFeatured?: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    name: "Sri Venkateswara Decoration Centre",
    category: "Web Development & Digital Presence",
    shortDesc: "A complete digital presence and portfolio website crafted to showcase event decoration services with high visual fidelity, seamless mobile responsiveness, and modern web standards.",
    previewUrl: "https://srivenkateswara-decoration-centre.web.app/",
    liveUrl: "https://srivenkateswara-decoration-centre.web.app/",
    isFeatured: true
  },
  {
    name: "Jadmaa",
    category: "Web Development & Branding",
    shortDesc: "A professional web platform designed and developed for Jadmaa, delivering a strong digital identity with modern design standards and seamless user experience.",
    previewUrl: "https://jadmaa.com",
    liveUrl: "https://jadmaa.com",
    isFeatured: true
  },
  {
    name: "Vajraa Fitness",
    category: "Web Development & Digital Marketing",
    shortDesc: "A high-energy fitness brand platform currently in development, combining powerful visuals with lead generation systems for gym memberships and personal training.",
    previewUrl: "#",
    isFeatured: false
  }
];

export interface FaqItem {
  q: string;
  a: string;
}

export const faqData: FaqItem[] = [
  {
    q: "What services does One Vision provide?",
    a: "One Vision delivers full-spectrum digital solutions: Web Development, UI/UX Design, Branding, Personal Branding, Digital Marketing, SEO, Domain & Hosting, and Creative & AI integration. We provide an integrated system rather than disconnected services."
  },
  {
    q: "Do you build custom websites?",
    a: "Yes. Every website we build is custom-engineered to your exact business requirements, brand positioning, and conversion goals. We avoid bloated generic templates in favor of bespoke, high-performance web architecture."
  },
  {
    q: "Do you provide UI/UX design?",
    a: "Yes. We design end-to-end user experiences including web and mobile interfaces, responsive design systems, interactive Figma prototypes, and user flow architectures that prioritize clarity and engagement."
  },
  {
    q: "Can you handle branding and website development together?",
    a: "Yes. In fact, that is our primary strength. Designing the brand identity and the web experience together ensures consistent visual weight, unified typography, and cohesive digital execution from day one."
  },
  {
    q: "Do you provide domain and hosting?",
    a: "Yes. We handle end-to-end deployment including domain configuration, cloud hosting, SSL certificates, automated deployments, and continuous technical maintenance."
  },
  {
    q: "Do you provide SEO?",
    a: "Yes. We implement comprehensive SEO strategies covering technical optimization, on-page content architecture, search crawlability, and local Google visibility so ready buyers find you."
  },
  {
    q: "Can you build e-commerce websites?",
    a: "Yes. We design and develop scalable e-commerce platforms with secure payment gateways, responsive product showcases, frictionless checkouts, and inventory management."
  },
  {
    q: "How does the project process work?",
    a: "We follow a 6-stage roadmap: Discover, Strategy, Design, Develop, Launch, and Grow. Every milestone has clear deliverables, transparent timelines, and interactive review stages."
  },
  {
    q: "How long does a website project take?",
    a: "Most custom websites and digital platforms take between 2 to 6 weeks from kickoff to deployment, depending on project complexity, scope of features, and custom integrations."
  },
  {
    q: "How can I start a project?",
    a: "Simply click 'Start A Project' anywhere on our website, fill out our brief inquiry form, or message us directly via WhatsApp / email. We will review your goals and schedule a strategic consultation."
  }
];

export interface TestimonialItem {
  client: string;
  role: string;
  project: string;
  testimonial: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    client: "Sri Venkateswara Decoration Centre",
    role: "Proprietor & Founder",
    project: "Website & Digital Presence",
    testimonial: "The One Vision team built our complete digital presence from scratch. The website showcases our decoration work with incredible clarity and professionalism. Our clients can now easily explore our portfolio and get in touch directly."
  }
];
