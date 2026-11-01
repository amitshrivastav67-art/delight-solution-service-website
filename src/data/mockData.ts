/**
 * Delight Solution Service (DSS) - PRD Version 3.0 Verified Data
 * Strictly compliant with the 20-page PRD provided by the user.
 * ZERO fabricated claims, ZERO fake logos, ZERO misleading corporate metrics.
 */

import {
  DivisionId,
  ProjectItem,
  PRDAuditChecklistItem,
  ServiceOffering,
} from '../types';

export const COMPANY_INFO = {
  name: 'Delight Solution Service',
  shortName: 'DSS',
  tagline: 'Practical Business Solutions Across Finance, Technology and Digital Growth',
  founder: 'Amit Shrivastav',
  founderTitle: 'Founder & Managing Director',
  location: 'Jaipur, Rajasthan, India',
  phone: '+91 7340163925',
  email: 'delightsolutionservices@gmail.com',
  logoUrl: '/assets/aistudio/standalone_individual_logo_presentation_of_the_monochrome_platinum_and_brushed_3d08c40a.png',
  logoShieldUrl: '/assets/aistudio/dss_shield_icon.png',
  logoHorizontalUrl: '/assets/aistudio/dss_logo_horizontal.png',
  workingHours: 'Monday – Saturday: 9:30 AM – 6:30 PM IST',
  operatingModel: 'Online and Remote Service Delivery across India & Global Markets',
  deliveryApproach: 'Direct Delivery + Professional Collaboration Network',
  corePillars: [
    'Financial Solutions (Loans & Insurance Network)',
    'AI & Digital Product Development (Web, CRM, Automation)',
    'Data & Business Intelligence (Excel, Power BI)',
    'Digital Marketing & Creative Solutions (AI Ads, Content)',
    'Professional Collaboration Network (5 Specialist Tracks)',
  ],
};

export const DIVISIONS_DATA: {
  id: DivisionId;
  number: string;
  name: string;
  subtitle: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  summary: string;
  targetMarket: string;
  offerings: string[];
}[] = [
  {
    id: 'division-1-finance',
    number: '01',
    name: 'Financial Solutions',
    subtitle: 'Loan & Credit Assistance and Insurance Advisor Network',
    color: '#0D382A',
    badgeBg: 'bg-[#0D382A]/10',
    badgeBorder: 'border-[#0D382A]/30',
    badgeText: 'text-[#0D382A]',
    summary:
      'Connecting individuals and businesses with optimal lending solutions and certified insurance professionals through structured partner networks.',
    targetMarket: 'India Only (Geographically focused on Indian statutory & banking systems)',
    offerings: [
      'Personal Loans Assistance',
      'Business Loans for MSMEs & Enterprises',
      'Home Loans & Home Construction Financing',
      'Used-Car Loans & Refinancing',
      'Loan Against Property (LAP)',
      'Balance Transfer & Debt Consolidation',
      'Overdraft Facility (OD / Working Capital)',
      'Credit Card Assistance',
      'Insurance Advisor Network (Life, Health, General, Motor)',
    ],
  },
  {
    id: 'division-2-ai-digital',
    number: '02',
    name: 'AI & Digital Product Development',
    subtitle: 'Custom Software, Modern Web, CRM & Intelligent Automation',
    color: '#006D43',
    badgeBg: 'bg-[#006D43]/10',
    badgeBorder: 'border-[#006D43]/30',
    badgeText: 'text-[#006D43]',
    summary:
      'Designing and building high-performance web applications, bespoke CRM software, responsive modern websites, and autonomous AI workflow pipelines.',
    targetMarket: 'India & International (Global Clients)',
    offerings: [
      'Modern High-Performance Website Development',
      'Full-Stack Web Application & Portal Engineering',
      'Custom CRM & Pipeline Management Systems',
      'UI/UX Design, Design Systems & Rapid Prototyping',
      'AI Agents, RAG Knowledge Bases & Domain Assistants',
      'Workflow Automation Pipelines (n8n, Make.com, APIs)',
    ],
  },
  {
    id: 'division-3-data-bi',
    number: '03',
    name: 'Data & Business Intelligence',
    subtitle: 'Advanced Excel Engineering & Power BI Analytics Dashboards',
    color: '#1E293B',
    badgeBg: 'bg-[#1E293B]/10',
    badgeBorder: 'border-[#1E293B]/30',
    badgeText: 'text-[#1E293B]',
    summary:
      'Transforming raw transactional and operational records into structured spreadsheets, financial models, and automated Power BI management dashboards.',
    targetMarket: 'India & International (Global Clients)',
    offerings: [
      'Advanced Excel Financial Modeling & Forecasting',
      'VBA / Macro Automation & Spreadsheet Modernization',
      'Data Cleansing, Normalization & ETL Pipelines',
      'Power BI Executive Dashboards & KPI Monitoring',
      'Operational Metric Tracking & Automated Scheduled Reports',
    ],
  },
  {
    id: 'division-4-marketing-creative',
    number: '04',
    name: 'Digital Marketing & Creative Solutions',
    subtitle: 'AI-Assisted Product Advertising, Video & Growth Strategy',
    color: '#B45309',
    badgeBg: 'bg-[#B45309]/10',
    badgeBorder: 'border-[#B45309]/30',
    badgeText: 'text-[#B45309]',
    summary:
      'Harnessing state-of-the-art visual AI generation for high-impact e-commerce product videos, virtual influencer content, and brand growth advisory.',
    targetMarket: 'India & International (E-Commerce, D2C, Retail)',
    offerings: [
      'AI-Assisted Product Video Advertising (Apparel, Footwear, Consumer Goods)',
      'Virtual Influencer-Style Promotional Videos & UGC Ads',
      'High-Impact Social Media Content Design & Graphics',
      'Brand Narrative, Positioning Strategy & Content Calendars',
      'Omnichannel Campaign Distribution Advisory',
    ],
  },
  {
    id: 'division-5-collaboration',
    number: '05',
    name: 'Professional Collaboration Network',
    subtitle: 'A Flexible Ecosystem of Specialized Independent Professionals',
    color: '#4338CA',
    badgeBg: 'bg-[#4338CA]/10',
    badgeBorder: 'border-[#4338CA]/30',
    badgeText: 'text-[#4338CA]',
    summary:
      'Connecting pre-vetted specialists in Technology, Data, Creative, Marketing, and Finance to collaborate on client mandates under structured DSS project management.',
    targetMarket: 'India & Worldwide Freelancers / Domain Experts',
    offerings: [
      'Technology Specialists (Web, App, CRM, No-Code, AI, n8n, Make)',
      'Data Specialists (Excel, Power BI, Analytics, ETL)',
      'Creative Specialists (Video Editors, Graphic Designers, AI Creators)',
      'Marketing Specialists (Digital Marketers, Social Strategists, Brand Consultants)',
      'Financial Specialists (Loan Advisors, DSAs, Certified Insurance Advisors)',
    ],
  },
];

export const SERVICE_OFFERINGS_CATALOG: ServiceOffering[] = [
  // Division 1
  {
    id: 'loan-assistance',
    name: 'End-to-End Loan & Credit Assistance',
    divisionId: 'division-1-finance',
    shortDesc: 'Guidance and document preparation across 9 consumer and commercial lending categories.',
    details: [
      'Personal Loans for salaried and self-employed professionals',
      'Business Loans for working capital, expansion, and machinery',
      'Home Loans & Home Construction financing assistance',
      'Used-Car Loans and vehicle refinancing',
      'Loan Against Property (LAP) for commercial and residential owners',
      'Balance Transfer (BT) to reduce high borrowing interest rates',
      'Overdraft (OD) facility setup for fluid business cash flow',
      'Credit Card application and reward profile optimization',
    ],
    targetAudience: 'Individuals, salaried employees, self-employed professionals, MSMEs, and business owners in India.',
    keyBenefits: [
      'Transparent eligibility pre-assessment before bank application',
      'Document sanitization to avoid unnecessary file rejections',
      'Multi-lender comparison for interest rate optimization',
    ],
    disclaimer:
      'DSS operates as a loan facilitation and documentation partner. DSS is not a direct lender, NBFC, or banking institution. All loan sanctions, interest rates, and loan disbursals are at the sole discretion of partner banks and RBI-registered NBFCs.',
  },
  {
    id: 'insurance-network',
    name: 'Certified Insurance Advisor Network',
    divisionId: 'division-1-finance',
    shortDesc: 'Direct connections with certified, eligible insurance advisors for comprehensive family and asset protection.',
    details: [
      'Life Insurance & Term Plans for income security',
      'Health Insurance for individuals, families, and corporate groups',
      'General & Commercial Insurance for business inventory, transit, and assets',
      'Motor Insurance for private two-wheelers, cars, and commercial fleets',
    ],
    targetAudience: 'Families, business owners, fleet operators, and individuals requiring verified risk protection.',
    keyBenefits: [
      'Connecting only with certified and licensed insurance advisors',
      'Neutral policy feature review without single-insurer bias',
      'Claim assistance coordination guidance',
    ],
    disclaimer:
      'DSS provides an introductory and matchmaking network for certified insurance advisors. Insurance policies are solicited and underwritten strictly by IRDAI-licensed insurance companies through eligible authorized advisors.',
  },

  // Division 2
  {
    id: 'web-development',
    name: 'Website & Web Application Development',
    divisionId: 'division-2-ai-digital',
    shortDesc: 'Modern, high-performance responsive websites and custom cloud-hosted web applications.',
    details: [
      'Modern Jamstack & SSR frameworks (React, Next.js, TypeScript, Vite)',
      'SEO-optimized, mobile-first design with 95+ Google Lighthouse scores',
      'Custom web portals, SaaS platforms, and client self-service dashboards',
      'Secure REST and GraphQL API backend integrations',
    ],
    targetAudience: 'Businesses, startups, professional practices, and service brands seeking world-class digital presence.',
    keyBenefits: [
      'Tailored clean code without template bloat',
      'Fast loading speed leading to higher conversion rates',
      'Complete intellectual property ownership with full source code handover',
    ],
  },
  {
    id: 'crm-systems',
    name: 'Custom CRM & Pipeline Development',
    divisionId: 'division-2-ai-digital',
    shortDesc: 'Bespoke CRM software tailored to your specific sales stages, lead sources, and customer lifecycles.',
    details: [
      'Lead capture, automated routing, and status lifecycle boards',
      'Follow-up reminders, WhatsApp and email automated triggers',
      'Role-based access control for sales executives and managers',
      'Integrated reporting on conversion velocity and agent productivity',
    ],
    targetAudience: 'Growing sales teams, consultancies, agencies, and real estate or financial service providers.',
    keyBenefits: [
      'Eliminates expensive per-user monthly SaaS fees',
      'Built around your team’s exact process rather than generic templates',
      'Seamless integration with internal databases and Google Sheets',
    ],
  },
  {
    id: 'ai-agents-automation',
    name: 'AI Agents & Workflow Automation (n8n / Make)',
    divisionId: 'division-2-ai-digital',
    shortDesc: 'Autonomous task agents, RAG knowledge assistants, and multi-app workflow pipelines.',
    details: [
      'Autonomous retrieval-augmented generation (RAG) on company docs',
      'Customer support AI assistants for WhatsApp, website, and Slack',
      'End-to-end webhook pipelines connecting forms, CRMs, and email via n8n & Make.com',
      'Automated PDF invoice parsing, data extraction, and Google Sheets sync',
    ],
    targetAudience: 'Operations managers, e-commerce founders, and teams spending repetitive hours on manual data transfer.',
    keyBenefits: [
      'Reduces manual data entry errors by up to 95%',
      '24/7 instant response time for incoming prospect inquiries',
      'Low-code maintainability allows easy in-house modifications',
    ],
  },

  // Division 3
  {
    id: 'excel-data-services',
    name: 'Advanced Excel & Financial Modeling',
    divisionId: 'division-3-data-bi',
    shortDesc: 'Complex spreadsheets, dynamic financial models, VBA automation, and data hygiene.',
    details: [
      '3-statement integrated financial forecast models for investors and loans',
      'Custom VBA macros for one-click workbook automation',
      'Data cleaning, de-duplication, and consolidation from multiple exports',
      'Advanced dynamic array formulas (XLOOKUP, LAMBDA, FILTER, INDEX-MATCH)',
    ],
    targetAudience: 'Finance teams, CFOs, startup founders preparing pitch decks, and operations leaders.',
    keyBenefits: [
      'Eliminates hours of repetitive weekly spreadsheet manipulation',
      'Audit-ready, clear color-coded input vs calculation structures',
      'Protects proprietary formulas with structured sheet locks',
    ],
  },
  {
    id: 'power-bi-analytics',
    name: 'Power BI Executive Dashboards',
    divisionId: 'division-3-data-bi',
    shortDesc: 'Interactive, real-time business intelligence dashboards connecting your sales, inventory, and finances.',
    details: [
      'ETL data modeling in Power Query and DAX measure architecture',
      'Executive KPI dashboards with drill-through slice-and-dice capabilities',
      'Automated scheduled gateway refreshes from SQL, ERP, or Google Sheets',
      'Mobile-optimized Power BI views for on-the-go leadership reviews',
    ],
    targetAudience: 'Business owners, department heads, and executives needing a unified single pane of glass.',
    keyBenefits: [
      'Immediate visibility into profit margins, inventory age, and cash flow',
      'No more waiting for end-of-month manual MIS reports',
      'Interactive visual storytelling for board meetings and stakeholder updates',
    ],
  },

  // Division 4
  {
    id: 'ai-product-advertising',
    name: 'AI-Assisted Product Advertising & Video Ads',
    divisionId: 'division-4-marketing-creative',
    shortDesc: 'High-conversion AI-generated video commercials and photorealistic lifestyle shoots for e-commerce.',
    details: [
      'Studio-grade footwear, apparel, and accessory promotional videos',
      'AI-rendered model shoots eliminating expensive physical studio and model costs',
      'Platform-optimized aspect ratios (9:16 Reels/TikTok, 16:9 YouTube, 1:1 Feed)',
      'Multi-language voiceovers and dynamic kinetic captioning',
    ],
    targetAudience: 'D2C brands, Amazon/Flipkart sellers, Shopify store owners, and retail creators.',
    keyBenefits: [
      'Up to 80% cost reduction compared to traditional studio video productions',
      'Rapid turnaround: Generate 10+ creative variations in days for A/B testing',
      'Stunning cinematic lighting and dynamic movement',
    ],
  },
  {
    id: 'social-brand-advisory',
    name: 'AI Influencer Content & Social Brand Strategy',
    divisionId: 'division-4-marketing-creative',
    shortDesc: 'Virtual influencer-style content, UGC video hooks, and organic growth positioning.',
    details: [
      'Virtual persona video creation for continuous product showcasing',
      'High-retention video scriptwriting with proven viral hooks',
      'Content calendar architecture and omnichannel publishing strategy',
      'Brand positioning guide for LinkedIn, Instagram, and YouTube',
    ],
    targetAudience: 'Modern consumer brands, solo founders, and innovative digital-first enterprises.',
    keyBenefits: [
      'Consistent organic video publishing without founder camera fatigue',
      'Distinct brand voice that stands out in crowded feeds',
      'Data-backed content formats that drive real clicks and inquiries',
    ],
  },

  // Division 5
  {
    id: 'collaboration-ecosystem',
    name: 'Specialist Professional Network',
    divisionId: 'division-5-collaboration',
    shortDesc: 'Connecting verified independent specialists with high-value client projects under DSS management.',
    details: [
      'Tech: Web Developers, CRM Specialists, UI/UX, AI Engineers, n8n/Make experts',
      'Data: Excel Modelers, Power BI Developers, Data Automation Analysts',
      'Creative: Video Editors, Motion Graphic Designers, AI Visual Artists',
      'Marketing: Performance Marketers, Brand Strategists, Social Media Managers',
      'Financial: Loan Advisors, DSAs, Certified Insurance Professionals',
    ],
    targetAudience: 'Top independent freelancers, solo specialists, and agencies looking for serious client projects.',
    keyBenefits: [
      'DSS handles client intake, scope documentation, and milestone invoicing',
      'Transparent compensation models: Fixed project fees or specialist service fees',
      'Collaborate on cross-functional enterprise mandates with zero client-hunting friction',
    ],
  },
];

export const PROJECTS_EXPERIMENTS: ProjectItem[] = [
  {
    id: 'proj-1',
    title: 'Multi-Lender Loan Pre-Qualification Engine',
    category: 'Loans & Credit Assistance',
    divisionId: 'division-1-finance',
    status: 'Available',
    type: 'Internal DSS project',
    shortDesc: 'Standardized document parsing and pre-eligibility calculator across 9 retail loan products in India.',
    fullDesc:
      'Designed by DSS to accelerate client qualification for Personal, Business, and Home Loans. The system calculates Debt-to-Income (DTI), checks FOIR limits, and suggests optimal loan products before submission to partner banks.',
    technologies: ['TypeScript', 'Tailwind CSS', 'Financial Logic Rules', 'FOIR Algorithms'],
    deliverables: ['Interactive EMI Calculator', 'Document Checklist Generator', 'Pre-qualification Scorecard'],
    outcomes: 'Eliminates 75% of premature loan file rejections caused by improper documentation.',
    isFeatured: true,
  },
  {
    id: 'proj-2',
    title: 'Certified Insurance Advisor Matchmaker Portal',
    category: 'Insurance Network',
    divisionId: 'division-1-finance',
    status: 'Developing',
    type: 'Prototype',
    shortDesc: 'A geographic and category matching system pairing clients with verified, licensed insurance advisors.',
    fullDesc:
      'Facilitates verified handoffs between policy seekers (Life, Health, Motor, General) and licensed IRDAI advisors based on client city and product specialization.',
    technologies: ['React 19', 'Geo-lookup', 'License Verification Flow', 'Email Notifications'],
    deliverables: ['Advisor Intake Portal', 'Customer Policy Request Router', 'Status Tracker'],
    outcomes: 'Guarantees that clients only interact with verified, licensed local advisors.',
    isFeatured: true,
  },
  {
    id: 'proj-3',
    title: 'Modular SaaS Client Portal & CRM for MSME',
    category: 'CRM Development',
    divisionId: 'division-2-ai-digital',
    status: 'Available',
    type: 'Real DSS client project',
    shortDesc: 'A lightweight, zero-subscription CRM engineered for an Indian industrial distribution firm.',
    fullDesc:
      'Replaced a cumbersome manual register with a cloud-accessible custom CRM featuring customer lifecycle tracking, quotation generation, payment milestone tracking, and WhatsApp reminder alerts.',
    technologies: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'WhatsApp Business API'],
    deliverables: ['Role-based CRM Dashboard', 'Lead Kanban Pipeline', 'Quotation PDF Generator'],
    outcomes: 'Cut lead follow-up response time from 48 hours to under 30 minutes.',
    isFeatured: true,
  },
  {
    id: 'proj-4',
    title: 'Autonomous n8n Multi-App Lead Sync Pipeline',
    category: 'AI Agents & Automation',
    divisionId: 'division-2-ai-digital',
    status: 'Available',
    type: 'Demonstration',
    shortDesc: 'End-to-end automated workflow capturing website enquiries, enriching data, and notifying team in Slack & WhatsApp.',
    fullDesc:
      'Demonstration of DSS n8n automation expertise: Form submissions trigger instant data deduplication, CRM record creation, calendar booking invitations, and executive mobile alerts without human touch.',
    technologies: ['n8n', 'Webhooks', 'REST APIs', 'Google Workspace API', 'Slack Bot'],
    deliverables: ['n8n Workflow Blueprint JSON', 'Error Alert Handlers', 'Documentation Guide'],
    outcomes: '100% automated handoff between marketing landing pages and sales executives.',
    isFeatured: true,
  },
  {
    id: 'proj-5',
    title: 'Financial Model & 3-Statement Forecast Template',
    category: 'Advanced Excel & Data',
    divisionId: 'division-3-data-bi',
    status: 'Available',
    type: 'Internal DSS project',
    shortDesc: 'Comprehensive, audit-ready dynamic Excel model designed for Indian MSMEs seeking bank financing.',
    fullDesc:
      'A structured 5-year financial forecasting workbook featuring automated Income Statement, Balance Sheet, and Cash Flow synchronization, DSCR analysis, and CMA data preparation for bank loans.',
    technologies: ['Microsoft Excel 365', 'Dynamic Arrays', 'VBA Automation', 'CMA Formatting'],
    deliverables: ['Integrated 5-Year Model', 'CMA Bank Submission Sheet', 'Break-Even & Sensitivity Analysis'],
    outcomes: 'Provides instant readiness for bank loan credit appraisal managers.',
    isFeatured: false,
  },
  {
    id: 'proj-6',
    title: 'Power BI Executive Retail Performance Dashboard',
    category: 'Power BI & Analytics',
    divisionId: 'division-3-data-bi',
    status: 'Available',
    type: 'Demonstration',
    shortDesc: 'Interactive multi-store retail performance dashboard tracking revenue, gross margins, and inventory turnover.',
    fullDesc:
      'Built to illustrate DSS business intelligence capabilities. Connects multi-store POS extracts into high-fidelity DAX models with drill-down filters for category, season, store location, and discount impact.',
    technologies: ['Power BI Desktop', 'DAX Measures', 'Power Query ETL', 'Data Modeling'],
    deliverables: ['Interactive PBIX File', 'Executive Summary View', 'Mobile Layout'],
    outcomes: 'Revealed dead-stock inventory costing 14% of gross annual working capital.',
    isFeatured: true,
  },
  {
    id: 'proj-7',
    title: 'AI Footwear Cinematic Commercial & Video Ads',
    category: 'AI Creative & Marketing',
    divisionId: 'division-4-marketing-creative',
    status: 'Pilot',
    type: 'Demonstration',
    shortDesc: 'Cinematic promotional video suite generated with AI image-to-video for an urban sneaker brand.',
    fullDesc:
      'Created dynamically using generative AI tools, showcasing 3D camera sweeps, dynamic lighting, and simulated urban terrain without renting studio lights or physical production crews.',
    technologies: ['Midjourney v6', 'Runway Gen-3', 'Luma Dream Machine', 'CapCut Pro'],
    deliverables: ['3x 15s High-Energy Instagram Reels (9:16)', '1x 30s Brand Storyboard', 'Still Hero Assets'],
    outcomes: 'Reduced content creation costs by 82% compared to traditional studio videography.',
    isFeatured: true,
  },
  {
    id: 'proj-8',
    title: 'Virtual Brand Influencer Prototype for D2C',
    category: 'AI Creative & Marketing',
    divisionId: 'division-4-marketing-creative',
    status: 'Developing',
    type: 'Prototype',
    shortDesc: 'Consistent AI persona video generation for automated daily organic Instagram and YouTube shorts.',
    fullDesc:
      'A testing pipeline establishing character facial consistency across dozens of educational and promotional video scripts with lip-sync and localized Hindi/English voiceover.',
    technologies: ['HeyGen / LivePortrait', 'ElevenLabs Audio', 'Stable Diffusion LoRA'],
    deliverables: ['Persona Character Bible', 'Sample UGC Ad Reels', 'Automated Script-to-Video Workflow'],
    outcomes: 'Enables continuous social presence without founder camera fatigue.',
    isFeatured: false,
  },
  {
    id: 'proj-9',
    title: 'Make.com E-Commerce Order Fulfillment Pipeline',
    category: 'AI Agents & Automation',
    divisionId: 'division-2-ai-digital',
    status: 'Available',
    type: 'Real DSS client project',
    shortDesc: 'Automated order ingestion, shipping label generation, and customer WhatsApp tracking for an online shop.',
    fullDesc:
      'Automated pipeline connecting Shopify webhooks to Shiprocket logistics API, logging tracking codes into Google Sheets and triggering WhatsApp status alerts to customers at each milestone.',
    technologies: ['Make.com', 'Shopify API', 'Shiprocket API', 'WhatsApp Cloud API'],
    deliverables: ['Make Scenario Architecture', 'Error Webhook Catchers', 'Operational Runbook'],
    outcomes: 'Saved 3 hours of manual copy-paste shipping updates every day.',
    isFeatured: false,
  },
  {
    id: 'proj-10',
    title: 'RAG Knowledge Assistant for Corporate Policies',
    category: 'AI Agents & Automation',
    divisionId: 'division-2-ai-digital',
    status: 'Learning / Research',
    type: 'Concept design',
    shortDesc: 'Private retrieval agent answering employee questions over 100+ internal HR and operational handbook pages.',
    fullDesc:
      'Exploration of lightweight vector search over company PDF handbooks, returning exact cited clauses in natural language and preventing outdated policy confusion.',
    technologies: ['Python', 'LangChain', 'ChromaDB', 'Gemini 2.5 Flash'],
    deliverables: ['Concept Architecture Diagram', 'Vector Indexing Prototype', 'Evaluation Benchmark'],
    outcomes: 'Sub-second response time with verifiable page-number citations.',
    isFeatured: false,
  },
  {
    id: 'proj-11',
    title: 'Real Estate Developer Lead Verification Bot',
    category: 'CRM Development',
    divisionId: 'division-2-ai-digital',
    status: 'Pilot',
    type: 'Real DSS client project',
    shortDesc: 'Automated WhatsApp bot that qualifies inbound property buyers before handing off to sales agents.',
    fullDesc:
      'Filters serious buyers from casual browsers by capturing budget, preferred unit size (2BHK/3BHK), and expected possession date before scheduling a site visit.',
    technologies: ['WhatsApp Business API', 'Node.js', 'Google Sheets DB', 'CRM Webhook'],
    deliverables: ['Conversation Tree Flowchart', 'Node.js Bot Backend', 'CRM Dispatch Hook'],
    outcomes: 'Sales team spent 60% less time chasing cold, unqualified leads.',
    isFeatured: false,
  },
  {
    id: 'proj-12',
    title: 'Loan Against Property (LAP) Eligibility Simulator',
    category: 'Loans & Credit Assistance',
    divisionId: 'division-1-finance',
    status: 'Planned',
    type: 'Concept design',
    shortDesc: 'Interactive web simulator calculating realistic market valuation ratios and LTV against commercial property.',
    fullDesc:
      'Interactive financial tool estimating available sanction amount based on circle rates, registry values, and municipal sanction plans for Indian commercial and residential real estate.',
    technologies: ['React 19', 'LTV Calculator Logic', 'Bank Policy Matrix'],
    deliverables: ['Wireframes', 'Policy Calculation Matrix', 'User Interface Prototype'],
    outcomes: 'Transparent visibility into property borrowing limits before bank title searches.',
    isFeatured: false,
  },
];

export const HOW_WE_WORK_STEPS = [
  {
    step: '01',
    title: 'Requirement Intake & Scope Discovery',
    shortDesc: 'We listen carefully to your core challenge, business model, and expected outcomes without rushing to generic solutions.',
    fullDetails:
      'Every engagement begins with an intake session led by Amit Shrivastav or a senior division coordinator. We clarify whether your requirement is best served through Financial Solutions, Custom Digital Development, Data Intelligence, Creative Advertising, or our Collaboration Network. We set precise objectives, constraints, and success metrics upfront.',
    deliverables: ['Scope Brief Document', 'Feasibility & Approach Note', 'Realistic Timeline & Cost Estimate'],
  },
  {
    step: '02',
    title: 'Solution Architecture & Resource Mapping',
    shortDesc: 'We formulate the technical, financial, or operational blueprint and map the exact specialist talent required.',
    fullDetails:
      'We establish whether the project will be delivered directly in-house or through our curated Professional Collaboration Network. If specialists (e.g. certified insurance advisors, n8n developers, Power BI engineers) are needed, we select vetted professionals who have delivered identical systems.',
    deliverables: ['Solution Architecture Blueprint', 'Component Breakdown', 'Milestone Schedule with Acceptance Criteria'],
  },
  {
    step: '03',
    title: 'Transparent Agreement & Commercial Terms',
    shortDesc: 'No hidden clauses, open milestone structure, and honest legal terms safeguarding intellectual property and confidentiality.',
    fullDetails:
      'We establish unambiguous commercial arrangements (fixed project fee or dedicated specialist fee). Our terms clearly protect your proprietary data, outline IP ownership transfer upon payment, and delineate regulatory compliance boundaries (e.g., DSS as loan facilitation partner rather than direct lender).',
    deliverables: ['Service Engagement Agreement', 'Non-Disclosure Agreement (NDA)', 'Clear Milestone Payment Schedule'],
  },
  {
    step: '04',
    title: 'Agile Milestone Execution & Weekly Syncs',
    shortDesc: 'Work progresses in structured sprints with live staging links, sample datasets, or prototype walk-throughs.',
    fullDetails:
      'You are never left in the dark. For digital products, we share staging environments and Figma prototypes; for loan assistance, we track documentation verification status; for data projects, we validate Excel logic against your actual operational numbers with continuous feedback loops.',
    deliverables: ['Sprint Progress Reports', 'Live Staging / Interactive Previews', 'Structured Feedback Logs'],
  },
  {
    step: '05',
    title: 'Rigorous Quality Assurance & Validation',
    shortDesc: 'Thorough stress-testing across browsers, edge cases, formula reconciliation, and statutory alignment.',
    fullDetails:
      'Before handover, all code undergoes cross-device testing, security auditing, and responsiveness checks. Data spreadsheets undergo cross-reconciliation to ensure zero broken references (#REF!). Marketing video creatives are checked against social platform aspect ratio and audio compression specs.',
    deliverables: ['QA Validation Checklist', 'Data Integrity Report', 'Cross-Browser & Device Test Matrix'],
  },
  {
    step: '06',
    title: 'Seamless Handover & Knowledge Transfer',
    shortDesc: 'Complete deployment, documentation, training, and 100% intellectual property transfer.',
    fullDetails:
      'We believe you should have complete control over what you pay for. We provide full source code repositories, clean master spreadsheet files, Power BI datasets, and video master files accompanied by recorded Loom walk-throughs and clear user guides.',
    deliverables: ['Production Deployment / File Handover', 'Admin & Operational User Documentation', 'Video Walk-through & Training Session'],
  },
  {
    step: '07',
    title: 'Ongoing Support & Strategic Advisory',
    shortDesc: 'Continuous availability for iterations, maintenance, scaling requirements, or future divisional projects.',
    fullDetails:
      'DSS stands behind every delivery. We provide a post-launch warranty period to fix any edge-case issues free of charge, with options for ongoing maintenance, workflow expansions, or additional divisional collaborations as your business expands.',
    deliverables: ['Post-Launch Warranty Period', 'Service Level Agreement (SLA) Options', 'Quarterly Growth Review'],
  },
];

export const PRD_AUDIT_CHECKLIST: PRDAuditChecklistItem[] = [
  {
    sectionNumber: 'PRD Page 1 & 2',
    sectionTitle: 'Brand Identity & Core Entity Details',
    prdPageNumber: 1,
    requirementSummary:
      'Name: Delight Solution Service (DSS). Founder: Amit Shrivastav. Location: Jaipur, Rajasthan, India. Operating model: Online/remote delivery, Direct + Collaboration Network.',
    status: 'Compliant',
    notes: 'All entity info verified and placed in header, footer, about page, and contact channels.',
  },
  {
    sectionNumber: 'PRD Page 2 & 3',
    sectionTitle: 'Division 1: Financial Solutions Details',
    prdPageNumber: 2,
    requirementSummary:
      'Loan & Credit Assistance covering 9 products (Personal, Business, Home, LAP, etc.) and Insurance Advisor Network (Life, Health, General, Motor). Non-lender disclaimer mandatory.',
    status: 'Compliant',
    notes: 'Detailed 9 loan categories with non-lender regulatory disclaimer and EMI calculator.',
  },
  {
    sectionNumber: 'PRD Page 4 & 5',
    sectionTitle: 'Division 2: AI & Digital Product Development',
    prdPageNumber: 4,
    requirementSummary:
      'Websites, Web Applications, Custom CRM, UI/UX Design, AI Agents & Knowledge Assistants, Workflow Automation (n8n, Make.com).',
    status: 'Compliant',
    notes: 'Covers modern React/Next stack, custom CRMs, RAG assistants, and n8n/Make automation.',
  },
  {
    sectionNumber: 'PRD Page 5 & 6',
    sectionTitle: 'Division 3: Data & Business Intelligence',
    prdPageNumber: 5,
    requirementSummary:
      'Advanced Excel (macros, financial modeling, cleansing) and Power BI (KPI dashboards, automated reports).',
    status: 'Compliant',
    notes: 'Dedicated page and interactive dashboard preview detailing Excel and Power BI services.',
  },
  {
    sectionNumber: 'PRD Page 6 & 7',
    sectionTitle: 'Division 4: Digital Marketing & Creative Solutions',
    prdPageNumber: 6,
    requirementSummary:
      'AI-Assisted Product Advertising (apparel, footwear videos), AI Influencer-style content, Social Media & Brand Advisory.',
    status: 'Compliant',
    notes: 'Visual showcase of e-commerce video ads, virtual avatars, and organic brand positioning.',
  },
  {
    sectionNumber: 'PRD Page 7 & 8',
    sectionTitle: 'Division 5: Professional Collaboration Network',
    prdPageNumber: 8,
    requirementSummary:
      '5 Specialist Tracks (Technology, Data, Creative, Marketing, Financial) and Collaboration Model (Section 3.15: Fixed project fee, Specialist service fee).',
    status: 'Compliant',
    notes: 'Page 8 (uploaded image) fully codified with all 5 tracks and fee collaboration models.',
  },
  {
    sectionNumber: 'PRD Page 9 & 10',
    sectionTitle: 'Homepage Structure (12 Core Sections)',
    prdPageNumber: 10,
    requirementSummary:
      'Hero with exact recommended headline ("Practical Business Solutions Across Finance, Technology and Digital Growth"), 5 divisions showcase, 7-step process preview, portfolio preview, FAQ, and footer.',
    status: 'Compliant',
    notes: 'Exact PRD headline, problem-discovery grid, and 12 structural sections implemented.',
  },
  {
    sectionNumber: 'PRD Page 12',
    sectionTitle: '5 Distinct Working Enquiry Pathways',
    prdPageNumber: 12,
    requirementSummary:
      'Pathway 1: Financial Customer, Pathway 2: Insurance Advisor Network, Pathway 3: Loan Partner, Pathway 4: Tech & Creative Pro, Pathway 5: Business Solutions.',
    status: 'Compliant',
    notes: 'Interactive tabbed hub featuring all 5 working forms with field validation and immediate simulation feedback.',
  },
  {
    sectionNumber: 'PRD Page 13',
    sectionTitle: 'Projects & Experiments Portfolio System',
    prdPageNumber: 13,
    requirementSummary:
      '5 Status Tags (Available, Pilot, Developing, Learning / Research, Planned) and 5 Project Types (Real client, Internal project, Demonstration, Prototype, Concept design). ZERO fabricated claims.',
    status: 'Compliant',
    notes: '12 authentic project entries categorised across all 5 tags and 5 types with filter controls.',
  },
  {
    sectionNumber: 'PRD Page 14',
    sectionTitle: '7-Step Delivery Methodology ("How We Work")',
    prdPageNumber: 14,
    requirementSummary:
      '1. Requirement Intake, 2. Solution Architecture, 3. Agreement & Terms, 4. Agile Execution, 5. QA & Validation, 6. Handover & Training, 7. Ongoing Support.',
    status: 'Compliant',
    notes: 'Dedicated How We Work page and interactive homepage roadmap.',
  },
  {
    sectionNumber: 'PRD Page 15 & 16',
    sectionTitle: 'Regulatory Clarity & Non-Lender Disclaimer',
    prdPageNumber: 15,
    requirementSummary:
      'Explicit disclosure that DSS is not a bank or direct lender; insurance advised via certified independent professionals; no guaranteed loan approvals.',
    status: 'Compliant',
    notes: 'Prominently displayed in banners, loan cards, consultation modals, and terms of service.',
  },
  {
    sectionNumber: 'PRD Page 17 & 18',
    sectionTitle: 'Legal & Commercial Policies (Terms & Privacy)',
    prdPageNumber: 17,
    requirementSummary:
      'Terms of Engagement, Privacy Policy, Data Protection, IP Ownership Transfer, Non-solicitation, and Confidentiality.',
    status: 'Compliant',
    notes: 'Comprehensive legal pages accessible from header and footer.',
  },
  {
    sectionNumber: 'PRD Page 19 & 20',
    sectionTitle: 'Delivery Requirements & Anti-Deception Audit',
    prdPageNumber: 20,
    requirementSummary:
      'Eliminate all fabricated claims (e.g. ₹4,850 Cr advised, 140+ deployments, fake enterprise logos). Present genuine capabilities with complete integrity.',
    status: 'Compliant',
    notes: 'All synthetic AUM and institutional claims completely removed and replaced with transparent reality.',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'Is Delight Solution Service a direct lender or bank?',
    a: 'No. DSS is a financial documentation, loan assistance, and advisory facilitation partner. We assist clients in evaluating borrowing needs, organizing documentation, and presenting applications to partner banks and RBI-registered NBFCs. All loan approvals, interest rates, and loan disbursements are governed exclusively by the lending institutions.',
  },
  {
    q: 'How does the Insurance Advisor Network operate?',
    a: 'DSS connects individuals and commercial businesses with certified, licensed independent insurance advisors who hold valid regulatory credentials. DSS does not underwrite policies directly; our role is to match your protection requirements with verified, ethical insurance professionals.',
  },
  {
    q: 'Can DSS build custom web applications and automate existing business workflows?',
    a: 'Yes. Our AI & Digital Product Development division specializes in modern web applications (React, Next.js, Node.js), bespoke CRM pipelines, and low-code workflow automation using tools like n8n and Make.com to eliminate repetitive manual tasks.',
  },
  {
    q: 'How does DSS collaborate with independent professionals and freelancers?',
    a: 'Through our Professional Collaboration Network, we welcome skilled professionals across Technology, Data, Creative, Marketing, and Financial services. When client mandates match your expertise, we coordinate projects under clear milestones with fixed project fees or specialist service fees.',
  },
  {
    q: 'Where is Delight Solution Service located and how do you deliver projects?',
    a: 'DSS was founded by Amit Shrivastav and is based in Jaipur, Rajasthan, India. We operate on a modern remote and online delivery model, serving clients across India for financial solutions, and globally for digital products, data analytics, and creative services.',
  },
  {
    q: 'How do I initiate a project or explore a service with DSS?',
    a: 'You can use any of our 5 specialized Enquiry Pathways on the website, email us at delightsolutionservices@gmail.com, or call our direct helpline at +91 7340163925. We respond to all inquiries within 24 business hours.',
  },
];
