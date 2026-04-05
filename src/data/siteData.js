export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "testimonials", "cta"
  ],
};

const siteData = {
  business: {
    name: "Tax & Consulting Services",
    legalName: "Tax & Consulting Services - Zimbabwe",
    tagline: "Clarity in Every Number.",
    description:
      "Tax & Consulting Services is a professional accounting and tax advisory firm in Harare providing comprehensive financial services to individuals and businesses across Zimbabwe.",
    phone: "+263 78 354 8295",
    phoneRaw: "+263783548295",
    whatsappNumber: "263783548295",
    email: "info@taxconsulting.co.zw",
    address: "115 Leopold Takawira St, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 5,
    ratingRounded: 5,
    reviewCount: 6,
    established: "2015",
    yearsExperience: "9+",
    projectsCompleted: "3,000+",
    employees: "12+",
    coordinates: { lat: -17.8292, lng: 31.0522 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 5:00 PM" },
      { day: "Saturday", time: "8:00 AM - 1:00 PM" },
      { day: "Sunday", time: "Closed" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0522!3d-17.8292",
    cookieConsentKey: "tax-consulting-services-zimbabwe-cookie-consent",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Tax",
    logoLine2: "& Consulting Services",
  },

  hero: {
    badge: "Zimbabwe's Trusted Tax & Financial Advisory Firm",
    titleParts: [
      { text: "CLARITY IN " },
      { text: "EVERY", highlight: true },
      { text: " NUMBER." },
    ],
    subtitle:
      "Expert tax consulting, auditing, bookkeeping, and compliance services. 3,000+ clients served with precision and integrity.",
    ctaPrimary: "Book Consultation",
    ctaSecondary: "Our Services",
    trustBadge: "3,000+ Clients Served",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=85", alt: "Tax & Consulting Services professional image 1" },
      { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85", alt: "Tax & Consulting Services professional image 2" },
      { url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=85", alt: "Tax & Consulting Services showcase" },
    ],
  },

  stats: [
    { number: "3000+", label: "Clients Served" },
    { number: "9+", label: "Years Experience" },
    { number: "100%", label: "ZIMRA Compliance" },
    { number: "5.0", label: "Google Rating" },
  ],

  servicesPreview: [
    {
      title: "Tax Consulting",
      desc: "Strategic tax planning, ZIMRA compliance, tax return preparation, and dispute resolution for individuals and corporates.",
      icon: "CurrencyDollar",
    },
    {
      title: "Auditing",
      desc: "External and internal audit services conducted to international standards. Independent assurance for stakeholders.",
      icon: "Star",
    },
    {
      title: "Bookkeeping",
      desc: "Accurate, timely bookkeeping using modern accounting software. Monthly reconciliations, payables, and receivables management.",
      icon: "Briefcase",
    },
    {
      title: "Payroll Services",
      desc: "Complete payroll administration including NSSA, ZIMDEF, and income tax calculations. Pay-slip generation and compliance.",
      icon: "Buildings",
    },
    {
      title: "Company Registration",
      desc: "New company registration, tax registration, and compliance setup. We handle ZIMRA, NSSA, NEC, and industry-specific licenses.",
      icon: "Lightbulb",
    },
    {
      title: "Financial Advisory",
      desc: "Business valuation, financial modelling, cash flow forecasting, and strategic financial planning for growing businesses.",
      icon: "Lock",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Excellence across every discipline. Precision in every detail.",
    items: [
      {
        title: "Tax Consulting",
        slug: "tax-consulting",
        desc: "Strategic tax planning, ZIMRA compliance, tax return preparation, and dispute resolution for individuals and corporates.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      },
      {
        title: "Auditing",
        slug: "auditing",
        desc: "External and internal audit services conducted to international standards. Independent assurance for stakeholders.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      },
      {
        title: "Bookkeeping",
        slug: "bookkeeping",
        desc: "Accurate, timely bookkeeping using modern accounting software. Monthly reconciliations, payables, and receivables management.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      },
      {
        title: "Payroll Services",
        slug: "payroll-services",
        desc: "Complete payroll administration including NSSA, ZIMDEF, and income tax calculations. Pay-slip generation and compliance.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      },
      {
        title: "Company Registration",
        slug: "company-registration",
        desc: "New company registration, tax registration, and compliance setup. We handle ZIMRA, NSSA, NEC, and industry-specific licenses.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
      },
      {
        title: "Financial Advisory",
        slug: "financial-advisory",
        desc: "Business valuation, financial modelling, cash flow forecasting, and strategic financial planning for growing businesses.",
        features: ["Professional Service", "Quality Guaranteed", "Expert Team", "Competitive Pricing", "Fast Turnaround", "Full Support"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Work",
    heroSubtitle: "A selection of projects that showcase our commitment to quality.",
    items: [
      {
        title: "Project 01 - Commercial Tax",
        slug: "project-01",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in tax consulting.",
        client: "Commercial Client",
        services: ["Tax Consulting", "Auditing"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        ],
      },
      {
        title: "Project 02 - Residential Tax",
        slug: "project-02",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in auditing.",
        client: "Residential Client",
        services: ["Auditing", "Bookkeeping"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        ],
      },
      {
        title: "Project 03 - Industrial Tax",
        slug: "project-03",
        category: "Industrial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in bookkeeping.",
        client: "Industrial Client",
        services: ["Bookkeeping", "Payroll Services"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        ],
      },
      {
        title: "Project 04 - Institutional Tax",
        slug: "project-04",
        category: "Institutional",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in payroll services.",
        client: "Institutional Client",
        services: ["Payroll Services", "Company Registration"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        ],
      },
      {
        title: "Project 05 - Commercial Tax",
        slug: "project-05",
        category: "Commercial",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in company registration.",
        client: "Commercial Client",
        services: ["Company Registration", "Financial Advisory"],
        image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        ],
      },
      {
        title: "Project 06 - Residential Tax",
        slug: "project-06",
        category: "Residential",
        location: "Harare, Zimbabwe",
        desc: "A showcase project demonstrating our expertise in financial advisory.",
        client: "Residential Client",
        services: ["Financial Advisory", "Tax Consulting"],
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
          "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Tax & Consulting Services saved my company thousands in overpaid taxes. Their ZIMRA expertise is second to none and they handle everything proactively.",
      name: "Prosper Chimusoro",
      role: "Managing Director, ChimTech",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "I was struggling with bookkeeping and tax compliance until I found these guys. Now my books are always up to date and ZIMRA submissions are on time.",
      name: "Chipo Makoni",
      role: "Small Business Owner",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "Professional, thorough, and genuinely caring about their clients' success. They registered my company and set up everything in under two weeks.",
      name: "Tawanda Mukonza",
      role: "Startup Founder",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "Our annual audit was handled with complete professionalism. Clear communication, thorough methodology, and the report was delivered on schedule.",
      name: "Nyasha Chigumira",
      role: "Board Member, Zim Holdings",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "Our Story",
    heroSubtitle: "Built on expertise. Driven by excellence.",
    story: [
      "Tax & Consulting Services was established on Leopold Takawira Street to make professional financial services accessible to Zimbabwean businesses of all sizes. We believe every business deserves the same quality of financial advice that large corporations receive.",
      "With over 3,000 clients served and a perfect Google rating, our team of certified accountants and tax professionals has become a trusted advisor to SMEs, entrepreneurs, and individuals across Zimbabwe.",
    ],
    values: [
      { title: "ZIMRA Expertise", desc: "Deep understanding of Zimbabwe's tax landscape. We navigate the complexities so you do not have to." },
      { title: "Proactive Approach", desc: "We do not just file returns -- we identify savings opportunities and ensure you are never caught off guard." },
      { title: "Affordable Excellence", desc: "Professional-grade services at prices that respect the Zimbabwean business reality." },
      { title: "Confidentiality", desc: "Your financial data is handled with the strictest confidentiality and professional ethics." },
    ],
    team: [
      {
        name: "The Founder",
        role: "Managing Director",
        bio: "Bringing years of industry expertise and a passion for excellence to every project.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      },
      {
        name: "Operations Lead",
        role: "Operations Manager",
        bio: "Ensuring seamless execution and consistent quality across all our services.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      },
      {
        name: "Client Relations",
        role: "Client Success Manager",
        bio: "Dedicated to understanding client needs and delivering beyond expectations.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Reviews",
    heroSubtitle: "What our customers say about working with us.",
    items: [
      { text: "Tax & Consulting Services saved my company thousands in overpaid taxes. Their ZIMRA expertise is second to none and they handle everything proactively.", name: "Prosper Chimusoro", role: "Managing Director, ChimTech", rating: 5 },
      { text: "I was struggling with bookkeeping and tax compliance until I found these guys. Now my books are always up to date and ZIMRA submissions are on time.", name: "Chipo Makoni", role: "Small Business Owner", rating: 5 },
      { text: "Professional, thorough, and genuinely caring about their clients' success. They registered my company and set up everything in under two weeks.", name: "Tawanda Mukonza", role: "Startup Founder", rating: 5 },
      { text: "Our annual audit was handled with complete professionalism. Clear communication, thorough methodology, and the report was delivered on schedule.", name: "Nyasha Chigumira", role: "Board Member, Zim Holdings", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join Our Team",
    heroSubtitle: "Help us deliver excellence. Every day.",
    positions: [
      {
        title: "Service Specialist",
        department: "Operations",
        location: "Harare",
        type: "Full-time",
        desc: "Join our team and help deliver outstanding service to our growing client base.",
      },
    ],
  },

  contact: {
    heroTitle: "Get In Touch",
    heroSubtitle: "We would love to hear from you. Reach out today.",
    branches: [
      {
        name: "Tax & Consulting Services",
        address: "115 Leopold Takawira St, Harare, Zimbabwe",
        phone: "+263 78 354 8295",
        email: "info@taxconsulting.co.zw",
      },
    ],
  },

  homeCta: {
    title: "GET YOUR FINANCES IN ORDER",
    subtitle: "Expert tax consulting, auditing, and financial services. Book a free consultation and let us bring clarity to your numbers.",
    ctaPrimary: "Book Consultation",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello! I need tax consulting/accounting services.",
    backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1920&q=85",
  },

  footer: {
    description: "Tax & Consulting Services is a professional accounting and tax advisory firm in Harare providing comprehensive financial services to individuals and b...",
    copyright: "Tax & Consulting Services",
  },
};

export default siteData;
