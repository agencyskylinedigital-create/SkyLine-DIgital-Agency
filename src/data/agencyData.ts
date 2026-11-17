export type SemanticAccentColor = 'emerald' | 'indigo' | 'violet' | 'amber' | 'cyan' | 'rose';

export type InteractiveArtifactId =
  | '360-views'
  | 'shadowbase-cdc'
  | 'gridweaver-iot'
  | 'fileguard-security'
  | 'ai-career-mentor'
  | 'socialite-network'
  | 'aa-chocolates-d2c'
  | 'finvantage-saas'
  | 'auracare-local'
  | 'nexaprop-crm'
  | 'searchpulse-seo'
  | 'career-socialite';

// Official Contact Routing:
// - Sachin Sahu (+91 89591 44686): Founder & CEO (Active WhatsApp Lead & Backend Architecture)
// - Aashif Khan (+91 86430 02478): Co-Founder & System Architect (Active on BOTH Direct Voice Call & WhatsApp)
export const SKYLINE_WHATSAPP_NUMBER = '918959144686';
export const SKYLINE_AASHIF_WHATSAPP_NUMBER = '918643002478';
export const SKYLINE_SACHIN_WHATSAPP_NUMBER = '918959144686';
export const SKYLINE_CALL_NUMBER = '+918643002478';
export const SKYLINE_PRIMARY_PHONE_DISPLAY = '+91 86430 02478';
export const SKYLINE_SACHIN_PHONE_DISPLAY = '+91 89591 44686';
export const SKYLINE_EMAIL = 'agencyskylinedigital@gmail.com';
export const SKYLINE_INSTAGRAM_URL = 'https://www.instagram.com/sky_line_digital';
export const SKYLINE_LOCATION = 'Indore, Madhya Pradesh, India';
export const SKYLINE_SHORT_LOCATION = 'Indore, MP, India';

export interface SocialLinkItem {
  id: 'github' | 'linkedin' | 'instagram' | 'telegram' | 'x';
  label: string;
  url: string;
  brandHex: string;
}

export const SKYLINE_SOCIAL_LINKS: SocialLinkItem[] = [
  {
    id: 'github',
    label: 'GitHub',
    url: SKYLINE_INSTAGRAM_URL,
    brandHex: '#181717',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: www.linkedin.com/in/skyline-digital-agency-678585450,
    brandHex: '#0A66C2',
  },
  {
    id: 'instagram',
    label: 'Instagram',
    url: SKYLINE_INSTAGRAM_URL,
    brandHex: '#E1306C',
  },
  {
    id: 'telegram',
    label: 'Telegram',
    url: SKYLINE_INSTAGRAM_URL,
    brandHex: '#26A5E4',
  },
  {
    id: 'x',
    label: 'X (Twitter)',
    url: SKYLINE_INSTAGRAM_URL,
    brandHex: '#09090B',
  },
];

export interface HeroOrbNode {
  id: string;
  code: string;
  label: string;
  shortLabel: string;
  title: string;
  categoryTag: string;
  metricBadge: string;
  metric: string;
  metricLabel: string;
  description: string;
  summary: string;
  deliverables: string[];
  accentColor: SemanticAccentColor;
  psychColor: string;
  psychName: string;
  psychMeaning: string;
  orbitAngleDeg: number;
  artifactId: InteractiveArtifactId;
}

export const HERO_ORBS: HeroOrbNode[] = [
  {
    id: 'ai',
    code: '01',
    label: 'AI Agents',
    shortLabel: 'AI Agents',
    title: '24/7 AI Voice & WhatsApp Lead Qualification Agents',
    categoryTag: 'AUTONOMOUS SYSTEMS',
    metricBadge: '< 6s Lead Response',
    metric: '< 6s',
    metricLabel: 'Response SLA',
    description:
      '24/7 AI voice and WhatsApp agents that qualify inbound leads, answer catalog questions, and lock calendar slots in under 6 seconds.',
    summary:
      '24/7 AI voice and WhatsApp agents that qualify inbound leads, answer catalog questions, and lock calendar slots in under 6 seconds.',
    deliverables: ['WhatsApp Cloud AI Qualifier', 'Automated Slot & Brochure Dispatch', 'Instant Webhook Capture'],
    accentColor: 'violet',
    psychColor: '#18181B',
    psychName: 'WhatsApp & Voice Automation',
    psychMeaning: '24/7 Instant Lead Qualification & Booking',
    orbitAngleDeg: 0,
    artifactId: 'nexaprop-crm',
  },
  {
    id: 'ads',
    code: '02',
    label: 'Paid Ads',
    shortLabel: 'Paid Ads',
    title: 'Server-Side Tracked Meta Reels & Google Search Funnels',
    categoryTag: 'DEMAND GENERATION',
    metricBadge: '4.4x Verified ROAS',
    metric: '4.4x',
    metricLabel: 'Verified ROAS',
    description:
      'High-intent Google Search and Meta Reels ad funnels wired with server-side Conversions API (CAPI) to cut wasted ad spend.',
    summary:
      'High-intent Google Search and Meta Reels ad funnels wired with server-side Conversions API (CAPI) to cut wasted ad spend.',
    deliverables: ['Meta Conversions API (Server-Side)', 'High-Intent Google Search Capture', 'Creative A/B Testing Matrix'],
    accentColor: 'amber',
    psychColor: '#52525B',
    psychName: 'Meta CAPI & Google Ads',
    psychMeaning: 'First-Party Server Attribution & Demand Capture',
    orbitAngleDeg: 51,
    artifactId: 'aa-chocolates-d2c',
  },
  {
    id: 'saas',
    code: '03',
    label: 'SaaS & Cloud',
    shortLabel: 'SaaS & Cloud',
    title: 'Multi-Tenant SaaS Platforms, GST Billing & Cloud ERPs',
    categoryTag: 'CLOUD ENGINEERING',
    metricBadge: '99.98% Uptime SLA',
    metric: '99.98%',
    metricLabel: 'Uptime SLA',
    description:
      'Multi-tenant SaaS products, role-based admin dashboards, subscription billing, and distributed Java, Python, and Node APIs.',
    summary:
      'Multi-tenant SaaS products, role-based admin dashboards, subscription billing, and distributed Java, Python, and Node APIs.',
    deliverables: ['Multi-Tenant PostgreSQL & Redis', 'Razorpay Route Split Billing', 'Role-Based Admin Portals'],
    accentColor: 'cyan',
    psychColor: '#E4E4E7',
    psychName: 'Cloud Billing & Portals',
    psychMeaning: 'High-Concurrency Distributed Cloud Systems',
    orbitAngleDeg: 102,
    artifactId: 'finvantage-saas',
  },
  {
    id: 'web',
    code: '04',
    label: 'Web & Apps',
    shortLabel: 'Web & Apps',
    title: 'Sub-100ms Next.js 15 Web Platforms & 360° Storefronts',
    categoryTag: 'CORE PLATFORM',
    metricBadge: '99+ Core Web Vitals',
    metric: '99/100',
    metricLabel: 'Speed Score',
    description:
      'Custom Next.js 15 and TypeScript web applications, 360° virtual tours, and mobile-first storefronts built for 1-tap UPI checkout.',
    summary:
      'Custom Next.js 15 and TypeScript web applications, 360° virtual tours, and mobile-first storefronts built for 1-tap UPI checkout.',
    deliverables: ['Next.js 15 & React 19 Platforms', '1-Tap UPI & Checkout Flows', 'Sub-100ms Edge Caching'],
    accentColor: 'indigo',
    psychColor: '#A1A1AA',
    psychName: 'Next.js & D2C Storefronts',
    psychMeaning: 'Sub-Second Edge Rendering & Conversion UI',
    orbitAngleDeg: 154,
    artifactId: '360-views',
  },
  {
    id: 'seo',
    code: '05',
    label: 'SEO & AEO',
    shortLabel: 'SEO & AEO',
    title: 'Technical SEO, JSON-LD Graphs & AI Answer Engine Visibility',
    categoryTag: 'ORGANIC AUTHORITY',
    metricBadge: '+240% Organic Traffic',
    metric: '+240%',
    metricLabel: 'Organic Growth',
    description:
      'Technical SEO, JSON-LD schema graphs, and Answer Engine Optimization (AEO) so your brand ranks on Google, ChatGPT, and Perplexity.',
    summary:
      'Technical SEO, JSON-LD schema graphs, and Answer Engine Optimization (AEO) so your brand ranks on Google, ChatGPT, and Perplexity.',
    deliverables: ['Programmatic Local & Topic Hubs', 'JSON-LD Entity Graphs', 'AI Search Citation Indexing'],
    accentColor: 'emerald',
    psychColor: '#71717A',
    psychName: 'Technical SEO & AI Search',
    psychMeaning: 'Google Search & AI Answer Engine Citations',
    orbitAngleDeg: 205,
    artifactId: 'searchpulse-seo',
  },
  {
    id: 'crm',
    code: '06',
    label: 'CRM Funnels',
    shortLabel: 'CRM Funnels',
    title: 'Official WhatsApp Cloud CRM & Automated Sales Pipelines',
    categoryTag: 'REVENUE PIPELINE',
    metricBadge: 'Instant Webhook Capture',
    metric: '< 2s',
    metricLabel: 'Webhook Sync',
    description:
      'End-to-end sales pipelines connecting website forms, Instagram DMs, and WhatsApp broadcasts into one unified conversion dashboard.',
    summary:
      'End-to-end sales pipelines connecting website forms, Instagram DMs, and WhatsApp broadcasts into one unified conversion dashboard.',
    deliverables: ['Official WhatsApp Business API', 'Automated Multi-Day Follow-Ups', 'Unified Lead Pipeline CRM'],
    accentColor: 'rose',
    psychColor: '#3F3F46',
    psychName: 'Unified Sales Pipelines',
    psychMeaning: 'Instant Webhook Capture & Deal Tracking',
    orbitAngleDeg: 257,
    artifactId: 'nexaprop-crm',
  },
  {
    id: 'local',
    code: '07',
    label: 'Local Growth',
    shortLabel: 'Local Growth',
    title: 'Google Map Pack #Top Dominance & Smart QR Review Systems',
    categoryTag: 'HYPER-LOCAL DOMINANCE',
    metricBadge: '#Top Google Map Pack',
    metric: '#Top',
    metricLabel: 'Map Pack Rank',
    description:
      'Complete digital transformation for clinics, showrooms, retail stores, and restaurants with Google Map Pack #Top ranking and QR review automation.',
    summary:
      'Complete digital transformation for clinics, showrooms, retail stores, and restaurants with Google Map Pack #Top ranking and QR review automation.',
    deliverables: ['Google Map Pack #Top Dominance', 'Smart QR Review & Booking Systems', 'Geo-Fenced Footfall Ad Campaigns'],
    accentColor: 'indigo',
    psychColor: '#27272A',
    psychName: 'Google Map Pack #Top',
    psychMeaning: 'Top 3 Local Pack Visibility & Walk-In Growth',
    orbitAngleDeg: 308,
    artifactId: 'auracare-local',
  },
];

export interface BentoSolutionCard {
  id: string;
  tag: string;
  title: string;
  metric: string;
  summary: string;
  deliverables: string[];
  spanClass: string;
  visualType:
    | 'web-architecture'
    | 'whatsapp-crm'
    | 'local-gbp'
    | 'roas-funnel'
    | 'seo-schema'
    | 'upi-catalog';
  artifactId: InteractiveArtifactId;
}

export const BENTO_SOLUTIONS: BentoSolutionCard[] = [
  {
    id: 'bento-web',
    tag: '01 • WEB & SAAS ENGINEERING',
    title: 'Custom Next.js 15 Web Apps, 360° Tours & Cloud SaaS Portals',
    metric: '99+ Core Web Vitals',
    summary:
      'We build fast React 19, Next.js 15, and PostgreSQL web applications, interactive 360° property platforms (like 360views.services), and multi-tenant SaaS billing dashboards.',
    deliverables: ['Sub-100ms Edge SSR', 'Role-Based Admin Portals', '100% Code Ownership'],
    spanClass: 'lg:col-span-7',
    visualType: 'web-architecture',
    artifactId: '360-views',
  },
  {
    id: 'bento-whatsapp',
    tag: '02 • 24/7 WHATSAPP CLOUD AI',
    title: 'Autonomous WhatsApp Booking Bots & Instant CRM Sync',
    metric: '< 6s Lead Response',
    summary:
      'Every website inquiry, Meta Lead Ad, or QR scan triggers an instant WhatsApp conversation that qualifies budget, sends brochures, and locks calendar slots automatically.',
    deliverables: ['Official WhatsApp Cloud API', 'Instant Webhook Capture', 'Automated Follow-Ups'],
    spanClass: 'lg:col-span-5',
    visualType: 'whatsapp-crm',
    artifactId: 'nexaprop-crm',
  },
  {
    id: 'bento-local',
    tag: '03 • HYPER-LOCAL DOMINANCE',
    title: 'Google Map Pack #Top Ranking & Smart QR Review Standees',
    metric: '+215% Local Walk-Ins',
    summary:
      'Built for clinics, showrooms, salons, and retail stores. We optimize your Google Business Profile entity graph and deploy reception QR review stands to rank in the Top 3 Local Pack.',
    deliverables: ['Google Map Pack #Top', 'Smart QR Review Kiosks', 'Local Call & Direction Ads'],
    spanClass: 'lg:col-span-4',
    visualType: 'local-gbp',
    artifactId: 'auracare-local',
  },
  {
    id: 'bento-ads',
    tag: '04 • PAID DEMAND GENERATION',
    title: 'Server-Side Meta CAPI & High-Intent Google Search Funnels',
    metric: '4.4x Verified ROAS',
    summary:
      'Eliminate ad-blocker signal loss with server-side Meta Conversions API (CAPI) and dedicated landing pages engineered to lower your cost per lead and cost per sale.',
    deliverables: ['Server-Side Meta CAPI', 'Google Search & Local Ads', 'Live ROAS Attribution'],
    spanClass: 'lg:col-span-4',
    visualType: 'roas-funnel',
    artifactId: 'aa-chocolates-d2c',
  },
  {
    id: 'bento-seo',
    tag: '05 • TECHNICAL SEO & AI SEARCH',
    title: 'Programmatic SEO & AI Answer Engine Optimization (AEO)',
    metric: '+240% Organic Pipeline',
    summary:
      'Structured JSON-LD schema graphs and semantic content hubs that get your business cited and ranked across Google Search, ChatGPT, Perplexity, and Gemini.',
    deliverables: ['JSON-LD Entity Graphs', 'Programmatic City Hubs', 'AI Citation Readiness'],
    spanClass: 'lg:col-span-4',
    visualType: 'seo-schema',
    artifactId: 'searchpulse-seo',
  },
  {
    id: 'bento-upi',
    tag: '06 • D2C COMMERCE & 1-TAP UPI',
    title: 'Custom D2C Storefronts with 1-Tap UPI & WhatsApp Cart Recovery',
    metric: '+82% Checkout Lift',
    summary:
      'Sell directly to customers without marketplace commissions. Includes interactive box/product customizers, 1-Tap GPay/PhonePe/Paytm checkout, and automated WhatsApp cart recovery.',
    deliverables: ['Interactive Product Builder', '1-Tap UPI Checkout', 'GST Billing & Inventory'],
    spanClass: 'lg:col-span-12',
    visualType: 'upi-catalog',
    artifactId: 'aa-chocolates-d2c',
  },
];

export interface PitchSlide {
  step: string;
  tag: string;
  headline: string;
  subheadline: string;
  comparisonLeft: {
    label: string;
    points: string[];
  };
  comparisonRight: {
    label: string;
    points: string[];
  };
  proofStat: string;
  proofLabel: string;
  accentColor: SemanticAccentColor;
}

export const PITCH_SLIDES: PitchSlide[] = [
  {
    step: '01 / THE BOTTLENECK',
    tag: 'WHY MOST AGENCIES FAIL YOU',
    headline: 'Pretty Templates Do Not Pay Your Bills. Revenue Systems Do.',
    subheadline:
      'Traditional agencies hand you a slow WordPress site or run unattributed social boosts, leaving your sales team chasing cold leads manually.',
    comparisonLeft: {
      label: 'Traditional Agency Silos',
      points: [
        '4.8s bloated templates that lose 60% of mobile visitors before the page loads',
        'Disconnected ad spend with zero server-side attribution or ROAS accountability',
        'Manual spreadsheet follow-ups where warm inquiries go cold after 4 hours',
      ],
    },
    comparisonRight: {
      label: 'SkyLine Unified Growth Architecture',
      points: [
        'Sub-100ms Next.js 15 edge platforms engineered for instant mobile conversion',
        'Server-side Meta CAPI and Google Search funnels optimizing for verified revenue',
        'Autonomous WhatsApp Cloud CRM responding and qualifying leads in under 6 seconds',
      ],
    },
    proofStat: '3.4x',
    proofLabel: 'Average Pipeline Velocity Lift Across Client Deployments',
    accentColor: 'rose',
  },
  {
    step: '02 / THE UNIFIED STACK',
    tag: 'END-TO-END DIGITAL TRANSFORMATION',
    headline: 'One Engineering Partner for Local Dominance and Global Scale.',
    subheadline:
      'Whether you run a multi-location clinic or showroom in Indore or a high-growth SaaS startup, we wire traffic, web, and CRM into a single machine.',
    comparisonLeft: {
      label: 'For Local Businesses & Retail',
      points: [
        'Google Map Pack #Top ranking to capture high-intent "near me" searches daily',
        'Automated WhatsApp appointment booking, digital catalogs, and QR review loops',
        'Hyper-local Instagram Reels and Google Call ads driving measurable store walk-ins',
      ],
    },
    comparisonRight: {
      label: 'For E-Commerce, Real Estate & SaaS',
      points: [
        'Custom full-stack web apps, client portals, and 1-tap UPI checkout flows',
        'AI lead qualification agents that filter budget and book discovery calls 24/7',
        'Programmatic SEO and AEO schema graphs that capture organic and AI search intent',
      ],
    },
    proofStat: '< 85ms',
    proofLabel: 'Global Edge TTFB Speed Budget Across Production Builds',
    accentColor: 'indigo',
  },
  {
    step: '03 / THE GUARANTEE',
    tag: 'ZERO-BLOAT EXECUTION',
    headline: 'Shipped in 14 to 28 Days. 100% Code Ownership. Transparent ROI.',
    subheadline:
      'You work directly with founding systems architects, with no junior account managers, no hidden retainers, and live telemetry from day one.',
    comparisonLeft: {
      label: 'What We Never Do',
      points: [
        'No 6-month lock-in contracts before proving tangible conversion lift',
        'No recycled theme-forest templates or fragile no-code spaghetti',
        'No vanity "impressions" reports that hide actual cost-per-acquisition',
      ],
    },
    comparisonRight: {
      label: 'What You Get From Day 1',
      points: [
        'Interactive 60-second system blueprint and transparent milestone roadmap',
        'Full GitHub repository, cloud infrastructure, and first-party data ownership',
        'Dedicated WhatsApp war-room with weekly sprint demos and live revenue dashboards',
      ],
    },
    proofStat: '15%',
    proofLabel: 'Direct Cash Referral Commission Paid on Every Closed Partner Introduction',
    accentColor: 'emerald',
  },
];

export interface ShowcaseProject {
  id: string;
  title: string;
  category: string;
  categoryTag?: string;
  clientType?: string;
  locationTag: string;
  metricsHeadline: string;
  metricsSub: string;
  accentColor: SemanticAccentColor;
  accentMetric: string;
  impactMetric?: string;
  secondaryMetric?: string;
  problemStatement: string;
  challenge?: string;
  architectureSummary: string;
  solution?: string;
  summary?: string;
  results?: string[];
  tags: string;
  techStack?: string[];
  stackPills?: string[];
  imageUrl: string;
  liveLatency: string;
  roasOrLift: string;
  artifactId: InteractiveArtifactId;
  liveSiteUrl?: string;
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-360-views',
    title: '360 Views — Real Estate & Commercial Spatial Tour Platform',
    category: 'WEB & SPATIAL ENGINEERING',
    categoryTag: 'WEB & SPATIAL ENGINEERING',
    clientType: 'Engineered by Sachin Sahu • Founder & CEO • 360views.services',
    locationTag: 'Live Production • 360views.services',
    metricsHeadline: '+210% Site Visit Conversions',
    metricsSub: 'Sub-Second Interactive 360° Spatial Showroom & Lead Capture',
    accentColor: 'indigo',
    accentMetric: '99 CWV · Live Site',
    impactMetric: '+210% Site Visits',
    secondaryMetric: '99 CWV · 62ms TTFB',
    problemStatement:
      'Commercial real estate owners, resorts, and showrooms needed a fast, interactive web platform to showcase high-resolution 360° virtual tours and capture qualified booking inquiries without heavy plugin lag.',
    architectureSummary:
      'Engineered by Sachin Sahu (Founder & CEO) at 360views.services with instant hotspot room transitions, mobile-first viewport controls, and direct WhatsApp inquiry dispatch.',
    results: [
      '210% increase in qualified virtual tour & site-visit inquiries',
      '62ms edge time-to-first-byte with 99/100 Core Web Vitals',
      'Direct 1-Tap WhatsApp lead routing from inside 360° rooms',
    ],
    tags: 'Next.js 15 • Interactive 360° Hotspots • Edge CDN • WhatsApp Lead Sync',
    techStack: ['Next.js 15', '360° Spatial UI', 'TypeScript', 'WhatsApp Cloud API'],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    liveLatency: '62ms TTFB',
    roasOrLift: '+210% Site Visits',
    artifactId: '360-views',
    liveSiteUrl: 'https://360views.services',
  },
  {
    id: 'proj-shadowbase-cdc',
    title: 'ShadowBase — Zero-Downtime SQL Migration & CDC Sandbox',
    category: 'DISTRIBUTED BACKEND & KAFKA',
    categoryTag: 'DISTRIBUTED BACKEND & KAFKA',
    clientType: 'Engineered by Sachin Sahu • Founder & CEO',
    locationTag: 'Java 21 • Spring Boot • Debezium CDC • Kafka',
    metricsHeadline: '0ms Production Table Lock',
    metricsSub: 'Real-Time PostgreSQL WAL Streaming & Testcontainers Shadow Replay',
    accentColor: 'violet',
    accentMetric: '100% Parity · 0ms Lock',
    impactMetric: '0ms Lock Time',
    secondaryMetric: '14,850 Events/sec',
    problemStatement:
      'Executing DDL schema migrations and composite index builds directly on multi-million-row production PostgreSQL tables caused write stalls and checkout timeouts.',
    architectureSummary:
      'Engineered by Sachin Sahu using Spring Boot, Debezium CDC, Apache Kafka, and Docker Testcontainers to replay live production WAL streams against isolated shadow database clones before cutover.',
    results: [
      '0ms table lock contention on primary production workloads',
      'Automated SHA-256 row checksum reconciliation across 12M+ records',
      'Ephemeral Docker Testcontainers verification before atomic pointer swap',
    ],
    tags: 'Spring Boot • Debezium CDC • Apache Kafka • Docker Testcontainers • PostgreSQL',
    techStack: ['Java 21', 'Spring Boot', 'Debezium CDC', 'Apache Kafka', 'Testcontainers'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80',
    liveLatency: '1.4ms Shadow P99',
    roasOrLift: '0ms Table Lock',
    artifactId: 'shadowbase-cdc',
  },
  {
    id: 'proj-gridweaver-iot',
    title: 'GridWeaver — Java 21 Loom IoT Microgrid Telemetry Engine',
    category: 'HIGH-CONCURRENCY IOT & GIS',
    categoryTag: 'HIGH-CONCURRENCY IOT & GIS',
    clientType: 'Engineered by Sachin Sahu • Founder & CEO',
    locationTag: 'Java 21 Virtual Threads • Kafka • PostGIS',
    metricsHeadline: '50,000+ Concurrent IoT Streams',
    metricsSub: 'Sub-Second Microgrid State Machine & Leaflet GIS Control Center',
    accentColor: 'cyan',
    accentMetric: '3.2ms P99 · 0 Drops',
    impactMetric: '50k+ IoT Pings/s',
    secondaryMetric: '3.2ms Ingestion',
    problemStatement:
      'Legacy thread-per-connection servers choked when thousands of distributed solar and battery substations emitted sub-second telemetry spikes simultaneously.',
    architectureSummary:
      'Engineered by Sachin Sahu with Java 21 Virtual Threads (Project Loom), Apache Kafka partitioned streams, and PostGIS + Leaflet spatial mapping for real-time microgrid fault isolation.',
    results: [
      'Sustained 50,000+ concurrent virtual-thread socket streams on 8 carrier threads',
      'Sub-second state transitions across CHARGING, DISCHARGING, IDLE, and FAULT nodes',
      'Zero dropped telemetry packets during simulated regional load spikes',
    ],
    tags: 'Java 21 Loom • Apache Kafka • Spring Boot • PostGIS • Leaflet GIS',
    techStack: ['Java 21 Loom', 'Apache Kafka', 'PostGIS', 'React Leaflet', 'Spring Boot'],
    imageUrl: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80',
    liveLatency: '3.2ms P99',
    roasOrLift: '50k+ Streams',
    artifactId: 'gridweaver-iot',
  },
  {
    id: 'proj-fileguard-ai',
    title: 'FileGuard AI — SHA-256 & Blockchain Document Integrity Verifier',
    category: 'CRYPTOGRAPHIC SECURITY & AI',
    categoryTag: 'CRYPTOGRAPHIC SECURITY & AI',
    clientType: 'Engineered by Aashif Khan • Co-Founder & System Architect',
    locationTag: 'SHA-256 • OriginStamp Blockchain • Node.js',
    metricsHeadline: '100% Tamper-Evident Audit Proof',
    metricsSub: 'Real-Time Cryptographic Hashing & Immutable Blockchain Anchoring',
    accentColor: 'emerald',
    accentMetric: 'SHA-256 · OriginStamp',
    impactMetric: '100% Tamper Proof',
    secondaryMetric: '1-Char Drift Detection',
    problemStatement:
      'Legal contracts, property deeds, and enterprise invoices shared over email had zero cryptographic proof against silent single-character tampering.',
    architectureSummary:
      'Engineered by Aashif Khan (Cisco Certified in Cybersecurity) combining real-time SHA-256 digest computation with OriginStamp blockchain Merkle-root anchoring.',
    results: [
      'Instant browser & server SHA-256 verification with 1-character tamper detection',
      'Immutable OriginStamp blockchain timestamping across Ethereum & Bitcoin ledgers',
      'Zero-trust verification receipts without exposing confidential document bodies',
    ],
    tags: 'SHA-256 Cryptography • OriginStamp Blockchain • Node.js • React 19 • Cybersecurity',
    techStack: ['SHA-256 Hashing', 'OriginStamp API', 'Node.js', 'React 19', 'Zero-Trust Security'],
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    liveLatency: '12ms Hash Audit',
    roasOrLift: '100% Tamper Proof',
    artifactId: 'fileguard-security',
  },
  {
    id: 'proj-ai-career-mentor',
    title: 'AI Career Guide & Mentor — Personalized Roadmap & Viva Engine',
    category: 'AI EDTECH & MENTORSHIP',
    categoryTag: 'AI EDTECH & MENTORSHIP',
    clientType: 'Engineered by Aashif Khan • Co-Founder & System Architect',
    locationTag: 'Python AI • React 19 • TypeScript',
    metricsHeadline: '3.4x Placement Readiness Lift',
    metricsSub: 'Personalized 90-Day Engineering Roadmaps, Skill Radar & Viva Simulator',
    accentColor: 'amber',
    accentMetric: '90-Day AI Roadmaps',
    impactMetric: '3.4x Readiness Lift',
    secondaryMetric: 'Live Viva Simulator',
    problemStatement:
      'Engineering students and junior developers struggled with generic tutorials that failed to map their exact skill gaps to production Full-Stack, AI, Java/Kafka, or Cybersecurity roles.',
    architectureSummary:
      'Engineered by Aashif Khan with Python AI pipelines, TypeScript, and React 19 to synthesize week-by-week capstone roadmaps, skill-gap radars, and principal-level mock technical interview simulators.',
    results: [
      'Dynamic role-specific roadmaps across Full-Stack, AI, Backend Java/Kafka, and Security',
      'Interactive skill-gap telemetry and milestone completion tracking',
      'Built-in Principal Architect mock interview & viva defense simulator',
    ],
    tags: 'Python AI • React 19 • TypeScript • Skill-Gap Radar • Interview Simulator',
    techStack: ['Python AI', 'React 19', 'TypeScript', 'Node.js', 'Tailwind CSS'],
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
    liveLatency: '85ms Roadmap Gen',
    roasOrLift: '3.4x Placement Lift',
    artifactId: 'ai-career-mentor',
  },
  {
    id: 'proj-socialite-network',
    title: 'Socialite — Real-Time Creator Community & Optimistic Feed Studio',
    category: 'FULL-STACK SOCIAL PLATFORM',
    categoryTag: 'FULL-STACK SOCIAL PLATFORM',
    clientType: 'Engineered by Aashif Khan • Co-Founder & System Architect',
    locationTag: 'Next.js 15 • Node.js • WebSockets • PostgreSQL',
    metricsHeadline: 'Sub-100ms Optimistic Feed Speed',
    metricsSub: 'Real-Time Creator Publishing, Channel Filtering & Engagement Telemetry',
    accentColor: 'rose',
    accentMetric: '14ms Optimistic UI',
    impactMetric: '< 80ms Feed Latency',
    secondaryMetric: '99.2% Cache Hit',
    problemStatement:
      'Creator communities suffered from sluggish page reloads, delayed like/comment counters, and fragmented topic channels.',
    architectureSummary:
      'Engineered by Aashif Khan using Next.js 15, Node.js, PostgreSQL, and WebSocket fanout with optimistic UI state transitions and real-time creator engagement analytics.',
    results: [
      '14ms perceived optimistic UI latency on live posts, likes, and replies',
      'Topic-isolated channels for Full-Stack Devs, AI Builders, and Design Systems',
      'Real-time creator studio telemetry with 99.2% edge feed cache hit ratio',
    ],
    tags: 'Next.js 15 • Node.js • WebSockets • PostgreSQL • Optimistic UI',
    techStack: ['Next.js 15', 'Node.js', 'WebSockets', 'PostgreSQL', 'Optimistic UI'],
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80',
    liveLatency: '14ms Optimistic UI',
    roasOrLift: '+318% Engagement',
    artifactId: 'socialite-network',
  },
  {
    id: 'proj-aa-chocolates-d2c',
    title: 'A&A Chocolates — Handcrafted D2C Storefront & Meta CAPI Funnel',
    category: 'D2C E-COMMERCE & PAID ADS',
    categoryTag: 'D2C E-COMMERCE & PAID ADS',
    clientType: 'Engineered by Aashif Khan • Co-Founder & System Architect',
    locationTag: 'Indore • Pan-India D2C Delivery',
    metricsHeadline: '3.8x to 4.4x Verified Meta ROAS',
    metricsSub: 'Artisanal Homemade Chocolate Customizer + 1-Tap UPI Checkout',
    accentColor: 'amber',
    accentMetric: '71ms Load · +82% Checkout',
    impactMetric: '4.4x Ad ROAS',
    secondaryMetric: '+82% Checkout Lift',
    problemStatement:
      'Artisanal homemade chocolate buyers were dropping off on slow Instagram DM orders, and browser ad-blockers were hiding 38% of Meta purchase conversions.',
    architectureSummary:
      'Engineered by Aashif Khan featuring an interactive 6/12/24-piece chocolate box customizer, live ₹ INR cart calculation, 1-Tap GPay/PhonePe UPI checkout, and Server-Side Meta Conversions API (CAPI).',
    results: [
      '3.8x to 4.4x verified return on ad spend via Server-Side Meta CAPI',
      '82% lift in mobile checkout completion with 1-Tap UPI',
      'Automated WhatsApp abandoned cart recovery within 10 minutes',
    ],
    tags: 'D2C Box Customizer • 1-Tap UPI • Meta CAPI Server-Side • WhatsApp Cart Recovery',
    techStack: ['D2C Box Builder', '1-Tap UPI', 'Server-Side Meta CAPI', 'WhatsApp Recovery'],
    imageUrl: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=900&q=80',
    liveLatency: '71ms TTFB',
    roasOrLift: '4.4x Ad ROAS',
    artifactId: 'aa-chocolates-d2c',
  },
  {
    id: 'proj-finvantage-saas',
    title: 'FinVantage Cloud Treasury & GST Billing SaaS',
    category: 'SAAS & CLOUD ARCHITECTURE',
    categoryTag: 'SAAS & CLOUD ARCHITECTURE',
    clientType: 'B2B Multi-Branch Distributors • Indore & Bengaluru',
    locationTag: 'Indore • Bengaluru Cloud',
    metricsHeadline: '₹4.2Cr Monthly Ledger Volume',
    metricsSub: 'Multi-Tenant GST Invoicing, Split Payouts & Role-Based Portals',
    accentColor: 'cyan',
    accentMetric: '99.98% Uptime · <70ms',
    impactMetric: '₹4.2Cr/mo Ledger',
    secondaryMetric: '74% Faster Billing',
    problemStatement:
      'B2B distributors and multi-branch operators were reconciling GST invoices, vendor split payouts, and client balances manually across disconnected spreadsheets.',
    architectureSummary:
      'Built a multi-tenant PostgreSQL and Node.js cloud billing platform with automated 18% GST calculation, Razorpay Route split settlements, and automated WhatsApp payment reminders.',
    results: [
      'Automated 18% CGST/SGST/IGST invoicing and vendor split payouts',
      '74% reduction in monthly finance reconciliation time',
      '99.98% uptime across multi-branch distributor tenants',
    ],
    tags: 'React 19 • PostgreSQL • Razorpay Route API • Multi-Tenant RBAC',
    techStack: ['React 19', 'PostgreSQL', 'Razorpay Route', 'Multi-Tenant RBAC'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80',
    liveLatency: '68ms API',
    roasOrLift: '74% Faster Billing',
    artifactId: 'finvantage-saas',
  },
  {
    id: 'proj-auracare-local',
    title: 'AuraCare Multi-Clinic Booking & Map Pack #Top Engine',
    category: 'LOCAL BUSINESS GROWTH',
    categoryTag: 'LOCAL BUSINESS GROWTH',
    clientType: 'Multi-Specialty Clinics • Indore, MP',
    locationTag: 'Indore, MP • 4 Clinic Branches',
    metricsHeadline: '+215% Patient Walk-Ins & Calls',
    metricsSub: '#Top Google Map Pack Dominance + 24/7 WhatsApp Slot Booking',
    accentColor: 'emerald',
    accentMetric: '99 CWV · <5s Bot SLA',
    impactMetric: '+215% Walk-Ins',
    secondaryMetric: 'Map Pack #Top',
    problemStatement:
      'High local search drop-off, buried Google Maps visibility outside the top 10, and 40% missed reception phone calls during peak clinic hours.',
    architectureSummary:
      'Deployed a fast patient booking web portal, Google Business Profile entity schema for #Top Map Pack ranking, smart reception QR review kiosks, and a 24/7 WhatsApp appointment bot.',
    results: [
      'Ranked in Google Map Pack #Top across 4 Indore clinic branches',
      'Grew verified Google rating from 4.1★ to 4.9★ (312+ reviews)',
      'Zero missed patient inquiries via 24/7 WhatsApp slot booking',
    ],
    tags: 'Google Map Pack #Top • WhatsApp Cloud Bot • Smart QR Reviews • Next.js',
    techStack: ['Google Map Pack #Top', 'WhatsApp Cloud Bot', 'Smart QR Standees', 'Next.js'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80',
    liveLatency: '64ms TTFB',
    roasOrLift: '3.8x Patient ROI',
    artifactId: 'auracare-local',
  },
];

export interface CapabilityPillar {
  id: string;
  code: string;
  shortTab: string;
  categoryLabel: string;
  title: string;
  subtitle: string;
  description?: string;
  architectureNote?: string;
  metrics?: { label: string; value: string; delta: string }[];
  accentColor: SemanticAccentColor;
  outcomeMetric: string;
  timeline: string;
  deliverables: (string | { name: string; spec: string; impact: string })[];
  techStack: string[];
  architectureDiagram: {
    inputNode: string;
    processingNode: string;
    outputNode: string;
  };
  artifactId: InteractiveArtifactId;
}

export const CAPABILITY_PILLARS: CapabilityPillar[] = [
  {
    id: 'cap-local',
    code: '01',
    shortTab: 'Local Business Growth',
    categoryLabel: 'FOR CLINICS, SHOWROOMS, RETAIL & RESTAURANTS',
    title: 'Google Map Pack #Top Dominance & Automated Walk-In Systems',
    subtitle:
      'Turn local "near me" searches and Instagram viewers into daily walk-ins, phone calls, and repeat customers with automated WhatsApp booking and QR review loops.',
    accentColor: 'indigo',
    outcomeMetric: '+185% Walk-Ins & Calls',
    timeline: '2 to 3 Weeks Delivery',
    deliverables: [
      'Google Business Profile Optimization & Map Pack #Top Authority',
      'Automated WhatsApp Appointment, Table, or Catalog Booking Bot',
      'Smart In-Store QR Code Review Engine (Boosts 5-Star Google Ratings)',
      'Geo-Fenced Meta Reels & Google Local Call Ad Campaigns',
    ],
    techStack: ['Google Business API', 'WhatsApp Cloud API', 'Next.js Local Hub', 'Meta Geo-Ads'],
    architectureDiagram: {
      inputNode: 'Google Map Search / Local Reel',
      processingNode: '1-Tap WhatsApp Booking & QR Engine',
      outputNode: 'Verified Store Walk-In & 5-Star Review',
    },
    artifactId: 'auracare-local',
  },
  {
    id: 'cap-web',
    code: '02',
    shortTab: 'Web & App Engineering',
    categoryLabel: 'CUSTOM FULL-STACK PLATFORMS',
    title: 'Sub-100ms Next.js Web Apps, E-Commerce & Custom Portals',
    subtitle:
      'We replace sluggish templates with bespoke React, Next.js 15, and TypeScript platforms engineered for 99+ Core Web Vitals, 360° interactive views, and 1-tap UPI checkout.',
    accentColor: 'cyan',
    outcomeMetric: '99+ Core Web Vitals',
    timeline: '2 to 4 Weeks Delivery',
    deliverables: [
      'Custom Next.js 15 / React 19 Frontend with Swiss Grid Hierarchy',
      'High-Conversion D2C Checkout with Razorpay / Stripe / 1-Tap UPI',
      'Interactive 360° Virtual Tour & Product Customizer Experiences',
      'Global Edge Caching, Image Optimization & Security Hardening',
    ],
    techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Vercel / Cloudflare Edge'],
    architectureDiagram: {
      inputNode: 'Visitor Click (<85ms Edge TTFB)',
      processingNode: 'Interactive Persuasion & UPI Flow',
      outputNode: 'Captured Order / High-Intent Lead',
    },
    artifactId: '360-views',
  },
  {
    id: 'cap-ai',
    code: '03',
    shortTab: 'AI Agents & WhatsApp CRM',
    categoryLabel: '24/7 AUTONOMOUS SALES PIPELINE',
    title: 'Official WhatsApp Cloud Bots, AI Voice Agents & CRM Automation',
    subtitle:
      'Never lose a warm lead to slow human follow-up. Our AI agents qualify budget, send brochures, answer FAQs, and book calendar meetings in under 6 seconds.',
    accentColor: 'violet',
    outcomeMetric: '< 6s Lead Response SLA',
    timeline: '2 to 3 Weeks Delivery',
    deliverables: [
      'Official WhatsApp Business Cloud API Conversational Bot',
      'AI Lead Qualification (Budget, Timeline & Requirement Filtering)',
      'Instant Webhook Sync to HubSpot, Zoho, Google Sheets, or Custom CRM',
      'Automated 7-Day Follow-Up, Brochure Dispatch & No-Show Reminders',
    ],
    techStack: ['WhatsApp Cloud API', 'Gemini / OpenAI SDK', 'Node.js Webhooks', 'Custom CRM'],
    architectureDiagram: {
      inputNode: 'Ad Click / Website Form / IG DM',
      processingNode: 'AI Qualifier & Brochure Dispatch (<6s)',
      outputNode: 'Booked Calendar Call & CRM Deal',
    },
    artifactId: 'nexaprop-crm',
  },
  {
    id: 'cap-ads',
    code: '04',
    shortTab: 'Performance Ads',
    categoryLabel: 'META REELS & GOOGLE SEARCH DEMAND',
    title: 'Server-Side Tracked Meta & Google Ad Funnels That Scale ROAS',
    subtitle:
      'Stop burning budget on unattributed clicks. We pair high-converting video/carousel creatives with server-side Conversions API (CAPI) and dedicated offer landers.',
    accentColor: 'amber',
    outcomeMetric: '3.8x to 4.4x Verified ROAS',
    timeline: '7 to 14 Days Launch',
    deliverables: [
      'Server-Side Meta Conversions API (CAPI) & Google Enhanced Conversions',
      'High-Intent Google Search, Shopping & Local Call Campaigns',
      'Direct-Response Instagram & Facebook Reels Ad Funnels',
      'Dedicated Message-Matched Landing Pages with Live ROAS Telemetry',
    ],
    techStack: ['Meta CAPI', 'Google Ads API', 'Server-Side GTM', 'Custom Attribution Ledger'],
    architectureDiagram: {
      inputNode: 'Targeted Meta Reel / Google Search',
      processingNode: 'Dedicated Sub-Second Offer Lander',
      outputNode: 'Server-Side CAPI Purchase / Lead',
    },
    artifactId: 'aa-chocolates-d2c',
  },
  {
    id: 'cap-seo',
    code: '05',
    shortTab: 'SEO & AI Search (AEO)',
    categoryLabel: 'COMPOUNDING ORGANIC AUTHORITY',
    title: 'Technical SEO, Programmatic Hubs & AI Answer Engine Optimization',
    subtitle:
      'Capture buyers searching on Google, ChatGPT, Perplexity, and Gemini with structured JSON-LD entity graphs, regional landing hubs, and zero-bloat code.',
    accentColor: 'emerald',
    outcomeMetric: '+210% Organic Search Pipeline',
    timeline: '3 to 4 Weeks Foundation',
    deliverables: [
      'Complete Technical SEO Audit, Core Web Vitals & Crawl Optimization',
      'Rich JSON-LD Schema Graphs (LocalBusiness, Product, FAQ, Service)',
      'Programmatic City & Comparison Landing Pages for High-Intent Queries',
      'Answer Engine Optimization (AEO) Formatting for AI Citation Dominance',
    ],
    techStack: ['JSON-LD Entity Graphs', 'Programmatic Next.js Routes', 'Search Console API', 'AEO Schema'],
    architectureDiagram: {
      inputNode: 'Google / ChatGPT / Perplexity Query',
      processingNode: 'JSON-LD Schema & Programmatic Hub',
      outputNode: 'Compounding Zero-CAC Inbound Leads',
    },
    artifactId: 'searchpulse-seo',
  },
  {
    id: 'cap-saas',
    code: '06',
    shortTab: 'SaaS & Custom ERP',
    categoryLabel: 'ENTERPRISE & STARTUP ENGINEERING',
    title: 'Scalable SaaS Products, Internal ERPs & Distributed Backends',
    subtitle:
      'From MVP to high-throughput production: we architect secure multi-tenant SaaS apps, inventory/billing ERPs, and real-time data pipelines.',
    accentColor: 'rose',
    outcomeMetric: '99.98% Production Reliability',
    timeline: '3 to 5 Weeks Delivery',
    deliverables: [
      'Multi-Tenant Database Architecture with Row-Level Security (RLS)',
      'Role-Based Admin Dashboards, Audit Logs & Real-Time Analytics',
      'High-Throughput REST / GraphQL / WebSocket Microservices',
      'Automated CI/CD Pipelines, Docker Containers & Cloud Monitoring',
    ],
    techStack: ['Java 21 / Spring', 'Python / FastAPI', 'Node.js / TypeScript', 'PostgreSQL & Kafka'],
    architectureDiagram: {
      inputNode: 'Enterprise User / IoT / API Event',
      processingNode: 'Validated Multi-Tenant Cloud Core',
      outputNode: 'Real-Time Dashboard & Audit Trail',
    },
    artifactId: 'finvantage-saas',
  },
  {
    id: 'cap-crm',
    code: '07',
    shortTab: 'CRM & Webhook Sync',
    categoryLabel: 'UNIFIED REVENUE OPERATIONS',
    title: 'Custom Lead Routing, Webhook CRM Sync & Pipeline Telemetry',
    subtitle:
      'Connect your website forms, Meta Lead Ads, and WhatsApp bots into a single real-time pipeline with Instant Webhook Capture and automated sales alerts.',
    accentColor: 'indigo',
    outcomeMetric: 'Instant Webhook Capture',
    timeline: '10 to 14 Days Delivery',
    deliverables: [
      'Real-Time Webhook Router for Website, Meta Ads, and WhatsApp Leads',
      'Automated Deal Stage Progression & Sales Rep Assignment',
      'Idempotent Lead Deduplication & Follow-Up SLA Alerts',
      'Live Revenue & Conversion Attribution Dashboard',
    ],
    techStack: ['Node.js Webhooks', 'PostgreSQL', 'WhatsApp Cloud API', 'REST / CRM Sync'],
    architectureDiagram: {
      inputNode: 'Multi-Channel Inbound Lead',
      processingNode: 'Idempotent Webhook Router (<200ms)',
      outputNode: 'Assigned CRM Deal & Rep Alert',
    },
    artifactId: 'nexaprop-crm',
  },
];

export interface RoadmapStep {
  phase: string;
  days: string;
  duration: string;
  title: string;
  summary: string;
  description: string;
  verificationGate: string;
  deliverables: string[];
  accentColor: SemanticAccentColor;
}

export const EXECUTION_ROADMAP: RoadmapStep[] = [
  {
    phase: 'STAGE 01',
    days: 'DAYS 01 TO 02',
    duration: 'Days 01 to 02',
    title: 'Architecture Discovery & 60s Teardown',
    summary:
      'We audit your current website speed, Google Map rankings, database bottlenecks, and ad leakage, then lock a fixed-scope engineering blueprint.',
    description:
      'We audit your current website speed, Google Map rankings, database bottlenecks, and ad leakage, then lock a fixed-scope engineering blueprint.',
    verificationGate: 'Gate 01: Signed Architecture Blueprint & Fixed Milestone Schedule',
    deliverables: [
      'Competitor & Local Search Gap Audit',
      'Database Schema, API & Funnel Wireframes',
      'Fixed 30/40/30 Milestone Schedule & KPI Targets',
    ],
    accentColor: 'indigo',
  },
  {
    phase: 'STAGE 02',
    days: 'DAYS 03 TO 05',
    duration: 'Days 03 to 05',
    title: 'Interactive UI/UX & Prototype Sandbox',
    summary:
      'Before writing heavy backend code, we ship a live interactive prototype so you can test every screen, mobile booking flow, and conversion touchpoint.',
    description:
      'Before writing heavy backend code, we ship a live interactive prototype so you can test every screen, mobile booking flow, and conversion touchpoint.',
    verificationGate: 'Gate 02: Interactive UI/UX Prototype Approved on Mobile & Desktop',
    deliverables: [
      'High-Contrast Editorial & Industrial UI System',
      'Interactive Clickable User Journey Sandbox',
      'Conversion Copywriting & Proof Architecture',
    ],
    accentColor: 'cyan',
  },
  {
    phase: 'STAGE 03',
    days: 'DAYS 06 TO 12',
    duration: 'Days 06 to 12',
    title: 'Full-Stack & Distributed Backend Sprint',
    summary:
      'Our founding architects engineer your Next.js 15 / React 19 frontend and Java 21 Spring Boot / Node.js / PostgreSQL backend with clean modular code.',
    description:
      'Our founding architects engineer your Next.js 15 / React 19 frontend and Java 21 Spring Boot / Node.js / PostgreSQL backend with clean modular code.',
    verificationGate: 'Gate 03: Sub-85ms API & Edge SSR Staging Deployment Live',
    deliverables: [
      'Next.js 15 & TypeScript Edge Web Platform',
      'Spring Boot / Node.js / Kafka Microservices & APIs',
      'PostgreSQL / MySQL Schema with Role-Based Security',
    ],
    accentColor: 'emerald',
  },
  {
    phase: 'STAGE 04',
    days: 'DAYS 13 TO 16',
    duration: 'Days 13 to 16',
    title: 'AI Agent, WhatsApp Cloud & Payment Wiring',
    summary:
      'We connect your platform to the Official WhatsApp Cloud API, 24/7 RAG AI lead qualifiers, 1-Tap Razorpay/UPI checkout, and CRM webhooks.',
    description:
      'We connect your platform to the Official WhatsApp Cloud API, 24/7 RAG AI lead qualifiers, 1-Tap Razorpay/UPI checkout, and CRM webhooks.',
    verificationGate: 'Gate 04: Sub-2s WhatsApp Bot & 1-Tap UPI Checkout Verified',
    deliverables: [
      '24/7 Official WhatsApp Cloud AI Lead Qualifier',
      '1-Tap UPI / Razorpay Payment & Invoice Webhooks',
      'Automated Admin CRM & Lead Routing Alerts',
    ],
    accentColor: 'violet',
  },
  {
    phase: 'STAGE 05',
    days: 'DAYS 17 TO 19',
    duration: 'Days 17 to 19',
    title: 'Automated QA, Security & Load Verification',
    summary:
      'Every endpoint, database migration, and UI component undergoes automated unit testing, SHA-256 / JWT security hardening, and 99+ Core Web Vitals checks.',
    description:
      'Every endpoint, database migration, and UI component undergoes automated unit testing, SHA-256 / JWT security hardening, and 99+ Core Web Vitals checks.',
    verificationGate: 'Gate 05: 99/100 Lighthouse SLA & Zero-Downtime Stress Test Passed',
    deliverables: [
      '99/100 Google PageSpeed & Core Web Vitals Audit',
      'Zero-Trust RBAC, Rate-Limiting & Input Sanitization',
      'Docker / Testcontainers Automated Regression Suite',
    ],
    accentColor: 'amber',
  },
  {
    phase: 'STAGE 06',
    days: 'DAY 20 & ONGOING',
    duration: 'Day 20 & Ongoing',
    title: 'Production Launch, Map Pack #Top & Scale',
    summary:
      'We launch on your custom domain, activate Server-Side Meta CAPI + Google Map Pack #Top schema, transfer 100% GitHub IP ownership, and back you with a 30-day warranty.',
    description:
      'We launch on your custom domain, activate Server-Side Meta CAPI + Google Map Pack #Top schema, transfer 100% GitHub IP ownership, and back you with a 30-day warranty.',
    verificationGate: 'Gate 06: 100% Source Code Handover + Live Revenue Telemetry Active',
    deliverables: [
      '100% GitHub Repository, Cloud & Domain Handover',
      'Google Map Pack #Top & Server-Side Meta CAPI Launch',
      '30-Day Complimentary Post-Launch Bug Warranty',
    ],
    accentColor: 'rose',
  },
];

export interface FounderProject {
  name: string;
  subtitle: string;
  tag: string;
  highlightMetric: string;
  summary: string;
  stack: string;
  highlights: string[];
  accentColor: SemanticAccentColor;
  artifactId: InteractiveArtifactId;
  liveSiteUrl?: string;
}

export interface FounderExperience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface FounderProfile {
  id: string;
  name: string;
  role: string;
  headline: string;
  titleBadge: string;
  location: string;
  phone: string;
  whatsappNumber: string;
  callNumber?: string;
  contactMode: 'whatsapp-and-call' | 'whatsapp-only';
  email: string;
  avatarMonogram: string;
  accentColor: SemanticAccentColor;
  bio: string;
  summary: string;
  education: string;
  institution: string;
  languages: string[];
  frameworksAndTools: string[];
  coreConcepts: string[];
  coreSpecialties: string[];
  credentials: string[];
  certifications: string[];
  experience: FounderExperience[];
  projects: FounderProject[];
}

export const FOUNDER_PROFILES: FounderProfile[] = [
  {
    id: 'sachin-sahu',
    name: 'Sachin Sahu',
    role: 'Founder & CEO',
    headline: 'Principal Backend & Distributed Systems Architect',
    titleBadge: 'FOUNDER & CEO • DISTRIBUTED BACKEND ARCHITECT',
    location: 'Indore, MP, India',
    phone: '+91 89591 44686',
    whatsappNumber: '918959144686',
    contactMode: 'whatsapp-only',
    email: 'Sachinsahuji06@gmail.com',
    avatarMonogram: 'SS',
    accentColor: 'emerald',
    bio: 'Leads SkyLine Digital Agency as Founder & CEO, architecting high-concurrency Java 21 & Spring Boot microservices, zero-downtime CDC database pipelines, and spatial production web platforms.',
    summary:
      'Leads SkyLine Digital Agency as Founder & CEO, architecting high-concurrency Java 21 & Spring Boot microservices, zero-downtime CDC database pipelines, and spatial production web platforms.',
    education: 'B.Tech in Computer Science & Distributed Systems Engineering',
    institution: 'Indore, Madhya Pradesh, India',
    languages: ['Core Java', 'Java 21 Virtual Threads (Loom)', 'Kotlin', 'SQL'],
    frameworksAndTools: [
      'Spring Boot',
      'Microservices',
      'Hibernate/JPA',
      'Apache Kafka',
      'Debezium (CDC)',
      'PostgreSQL',
      'MySQL',
      'Testcontainers',
      'Docker',
      'Jetpack Compose',
    ],
    coreConcepts: ['JWT & OAuth 2.0', 'REST APIs', 'Zero-Downtime CDC', 'Virtual Thread Concurrency'],
    coreSpecialties: [
      'Java 21 Virtual Threads (Loom) & Spring Boot Microservices',
      'Apache Kafka, Debezium (CDC) & Zero-Downtime Schema Migrations',
      'PostgreSQL, MySQL, Hibernate/JPA & Testcontainers QA',
      'Live Production Spatial Web Platforms (360views.services)',
    ],
    credentials: [
      'Principal Java 21 & Distributed Microservices Architect',
      'Creator of 360views.services, ShadowBase CDC & GridWeaver IoT',
      'Enterprise Database Migration & High-Throughput Systems Lead',
    ],
    certifications: [
      'Principal Java 21 & Distributed Microservices Architect',
      'Creator of 360views.services, ShadowBase CDC & GridWeaver IoT',
      'Enterprise Database Migration & High-Throughput Systems Lead',
    ],
    experience: [
      {
        role: 'Founder & CEO • Principal Backend Architect',
        company: 'SkyLine Digital Agency',
        period: 'Present • Indore, MP',
        highlights: [
          'Architected and deployed https://360views.services for interactive 360° real estate & commercial virtual tours.',
          'Engineered ShadowBase (Zero-Downtime CDC Schema Migration Sandbox) and GridWeaver (50,000+ ping Java 21 Loom IoT Microgrid Engine).',
        ],
      },
    ],
    projects: [
      {
        name: '360 Views',
        subtitle: 'Live Interactive 360° Real Estate & PropTech Tour Platform',
        tag: 'LIVE PRODUCTION PROPTECH PLATFORM',
        highlightMetric: 'Live at 360views.services • +260% Bookings',
        summary:
          'Live production interactive 360-degree Real Estate & PropTech virtual tour platform with spatial room hotspots, sub-second viewport transitions, and automated WhatsApp lead routing.',
        stack: 'React • Spatial 360° WebGL • REST APIs • WhatsApp Cloud API',
        highlights: [
          'Live production platform operating at https://360views.services',
          'Interactive spatial hotspots with direct WhatsApp site-visit booking',
        ],
        accentColor: 'indigo',
        artifactId: '360-views',
        liveSiteUrl: 'https://360views.services',
      },
      {
        name: 'ShadowBase',
        subtitle: 'Zero-Downtime Schema Migration Sandbox',
        tag: 'CDC & DATABASE MIGRATION ENGINE',
        highlightMetric: 'Debezium CDC + Kafka Traffic Replay',
        summary:
          'Built with Java, Spring Boot, Apache Kafka, Debezium (CDC), Testcontainers, and React to shadow and replay live production SQL traffic safely inside isolated Dockerized database clones.',
        stack: 'Java • Spring Boot • Apache Kafka • Debezium (CDC) • Testcontainers • PostgreSQL • Docker',
        highlights: [
          'Captures and replays live production SQL mutations via Debezium CDC & Kafka',
          'Verifies schema migrations against isolated Testcontainers clones with zero downtime',
        ],
        accentColor: 'violet',
        artifactId: 'shadowbase-cdc',
      },
      {
        name: 'GridWeaver',
        subtitle: 'Virtual Thread IoT Microgrid State Engine',
        tag: 'DISTRIBUTED IOT & STREAM ENGINE',
        highlightMetric: '50,000+ Non-Blocking IoT Pings',
        summary:
          'Built with Java 21 Loom Virtual Threads, Spring State Machine, Apache Kafka, React, and Leaflet to ingest 50,000+ non-blocking real-time IoT telemetry pings with sub-second GIS visualization.',
        stack: 'Java 21 (Loom) • Spring State Machine • Apache Kafka • React • Leaflet GIS',
        highlights: [
          'Ingests 50,000+ concurrent IoT substation pings on Java 21 Virtual Threads',
          'Real-time Spring State Machine transitions and Leaflet GIS map telemetry',
        ],
        accentColor: 'cyan',
        artifactId: 'gridweaver-iot',
      },
    ],
  },
  {
    id: 'aashif-khan',
    name: 'Aashif Khan',
    role: 'Co-Founder & System Architect',
    headline: 'Lead Full-Stack, AI & Cybersecurity Architect',
    titleBadge: 'CO-FOUNDER & SYSTEM ARCHITECT • FULL-STACK, AI & SECURITY',
    location: 'Indore, MP, India',
    phone: '+91 86430 02478',
    whatsappNumber: '918643002478',
    callNumber: '+918643002478',
    contactMode: 'whatsapp-and-call',
    email: 'aashifkpp@gmail.com',
    avatarMonogram: 'AK',
    accentColor: 'indigo',
    bio: 'Co-Founder & System Architect leading full-stack web engineering (Next.js 15, React 19, Node.js), Python AI automation, cryptographic document security, and high-ROAS D2C commerce funnels.',
    summary:
      'Co-Founder & System Architect leading full-stack web engineering (Next.js 15, React 19, Node.js), Python AI automation, cryptographic document security, and high-ROAS D2C commerce funnels.',
    education: 'B.Tech in Computer Science & Systems Engineering',
    institution: 'Indore, Madhya Pradesh, India',
    languages: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Bash/Linux'],
    frameworksAndTools: [
      'Node.js',
      'Express.js',
      'React 19',
      'Next.js 15',
      'Python AI Automation',
      'Vercel & Render',
      'Linux/WSL',
    ],
    coreConcepts: [
      'SHA-256 Hashing',
      'Blockchain Anchoring',
      'High-Converting D2C Funnels',
      'Server-Side Meta CAPI',
    ],
    coreSpecialties: [
      'Full-Stack Web Engineering (Next.js 15, React 19, Node.js, Express.js)',
      'Cryptographic Security (SHA-256 Hashing & OriginStamp Blockchain Anchoring)',
      'Python AI Roadmaps, RAG Mentorship & Creator Community Platforms',
      'High-Converting D2C Storefronts, 1-Tap UPI & Meta CAPI Funnels',
    ],
    credentials: [
      'Cisco Certified in Cybersecurity & Network Defense',
      'Creator of FileGuard AI, AI Career Guide & Mentor, Socialite & A&A Chocolates',
      'Lead Full-Stack, AI & Security Systems Architect',
    ],
    certifications: [
      'Cisco Certified in Cybersecurity & Network Defense',
      'Creator of FileGuard AI, AI Career Guide & Mentor, Socialite & A&A Chocolates',
      'Lead Full-Stack, AI & Security Systems Architect',
    ],
    experience: [
      {
        role: 'Co-Founder & System Architect',
        company: 'SkyLine Digital Agency',
        period: 'Present • Indore, MP',
        highlights: [
          'Architected FileGuard AI (SHA-256 & OriginStamp Blockchain Document Verifier), AI Career Guide & Mentor, and Socialite.',
          'Engineered the A&A Chocolates D2C storefront with custom box configuration, 1-Tap UPI checkout, and 4.4x ROAS Meta CAPI attribution.',
        ],
      },
    ],
    projects: [
      {
        name: 'FileGuard AI',
        subtitle: 'Document Integrity & Blockchain Verification Tool',
        tag: 'CRYPTOGRAPHIC DOCUMENT SECURITY',
        highlightMetric: 'SHA-256 + OriginStamp Blockchain',
        summary:
          'Full-stack security platform verifying document authenticity via real-time SHA-256 cryptographic hashing and OriginStamp blockchain anchoring.',
        stack: 'Node.js • React 19 • Python • SHA-256 • OriginStamp Blockchain API',
        highlights: [
          'Real-time SHA-256 digest computation and instant tamper detection',
          'OriginStamp blockchain anchoring for immutable legal and enterprise proof',
        ],
        accentColor: 'emerald',
        artifactId: 'fileguard-security',
      },
      {
        name: 'AI Career Guide & Mentor',
        subtitle: 'AI Roadmap Generator & Skill Gap Analyzer',
        tag: 'AI EDTECH & MENTORSHIP PLATFORM',
        highlightMetric: 'Personalized 90-Day AI Roadmaps',
        summary:
          'Interactive AI-powered career roadmap generator, skill gap analyzer, and personalized engineering mentorship platform.',
        stack: 'React 19 • TypeScript • Node.js • Python AI • Tailwind CSS',
        highlights: [
          'Generates role-specific 90-day engineering roadmaps and skill gap diagnostics',
          'Interactive project architecture and technical viva preparation workflows',
        ],
        accentColor: 'amber',
        artifactId: 'ai-career-mentor',
      },
      {
        name: 'Socialite',
        subtitle: 'Real-Time Creator Community & Social Network',
        tag: 'FULL-STACK SOCIAL PLATFORM',
        highlightMetric: 'Sub-100ms Optimistic Feed Engine',
        summary:
          'High-speed full-stack social community and real-time creator engagement platform with modern feed architecture.',
        stack: 'Next.js 15 • Node.js • Express.js • PostgreSQL • WebSockets',
        highlights: [
          'Optimistic feed interactions, media pipelines, and real-time creator analytics',
          'Sub-100ms feed rendering and role-based community moderation',
        ],
        accentColor: 'rose',
        artifactId: 'socialite-network',
      },
      {
        name: 'A&A Chocolates',
        subtitle: 'D2C Storefront & Performance Ad Funnel',
        tag: 'D2C E-COMMERCE & META CAPI',
        highlightMetric: '4.4x ROAS • +82% Mobile Checkout',
        summary:
          'Handcrafted luxury homemade chocolate e-commerce storefront featuring custom box configuration, 1-Tap UPI checkout, and Meta CAPI ad attribution.',
        stack: 'Next.js 15 • TypeScript • 1-Tap UPI • Server-Side Meta CAPI • WhatsApp API',
        highlights: [
          'Interactive custom chocolate box builder with real-time ₹ INR pricing',
          '1-Tap UPI checkout and Server-Side Meta CAPI delivering 4.4x verified ROAS',
        ],
        accentColor: 'amber',
        artifactId: 'aa-chocolates-d2c',
      },
    ],
  },
];

export interface ClientProofCase {
  id: string;
  clientSector: string;
  timeframe: string;
  primaryMetric: string;
  primaryMetricLabel: string;
  secondaryMetric: string;
  challenge: string;
  solution: string;
  tags: string[];
}

export const CLIENT_PROOF_CASES: ClientProofCase[] = [
  {
    id: 'proof-auracare',
    clientSector: 'HEALTHCARE • MULTI-SPECIALTY CLINICS (INDORE)',
    timeframe: '21 Days to Launch',
    primaryMetric: '+215%',
    primaryMetricLabel: 'Increase in Monthly Patient Walk-Ins & Calls',
    secondaryMetric: 'Map Pack #Top • 4.9★ Rating',
    challenge:
      'Buried outside the top 10 on Google Maps, slow mobile page load, and 40% missed reception calls during evening clinic hours.',
    solution:
      'Deployed a sub-second patient booking portal, Google Business Profile #Top ranking schema, reception Smart QR review standees, and a 24/7 WhatsApp slot bot.',
    tags: ['Google Map Pack #Top', 'WhatsApp Cloud Bot', 'Smart QR Standees', 'Next.js 15'],
  },
  {
    id: 'proof-aa-chocolates',
    clientSector: 'D2C CONFECTIONERY • A&A CHOCOLATES',
    timeframe: '18 Days to Launch',
    primaryMetric: '4.4x ROAS',
    primaryMetricLabel: 'Verified Return on Ad Spend via Server-Side Meta CAPI',
    secondaryMetric: '+82% Mobile Checkout Lift',
    challenge:
      'High-intent Instagram buyers were dropping off during manual DM ordering, and iOS/browser ad-blockers hid 38% of purchase conversions.',
    solution:
      'Engineered an interactive custom chocolate box builder with 1-Tap UPI checkout, server-side Meta Conversions API, and automated WhatsApp cart recovery.',
    tags: ['D2C Box Builder', '1-Tap UPI Checkout', 'Server-Side Meta CAPI', 'WhatsApp Recovery'],
  },
];

export interface ClientTestimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location?: string;
  verifiedOutcome: string;
  engagementScope: string;
  accentColor?: SemanticAccentColor;
  initials?: string;
  serviceTag?: string;
  impactHighlight?: string;
  rating?: number;
  relatedProjectId?: string;
  projectName?: string;
  leadArchitect?: string;
  artifactId?: InteractiveArtifactId;
  liveSiteUrl?: string;
}

export type ClientReview = ClientTestimonial;
export type VerifiedReview = ClientTestimonial;

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: 'rev-360-views',
    projectName: '360 Views (360views.services)',
    leadArchitect: 'Engineered by Sachin Sahu • Founder & CEO',
    quote:
      '360 Views transformed how we showcase luxury properties and commercial spaces online. Prospective buyers explore interactive 360° room hotspots on mobile and book site visits on WhatsApp in seconds.',
    author: 'Vikramaditya Rathore',
    role: 'Partner, 360 Views PropTech & Spatial Tours',
    location: 'Indore, MP',
    verifiedOutcome: '+260% Virtual Tour Bookings',
    engagementScope: '360° SPATIAL WEB PLATFORM',
    accentColor: 'indigo',
    rating: 5,
    artifactId: '360-views',
    liveSiteUrl: 'https://360views.services',
  },
  {
    id: 'rev-shadowbase',
    projectName: 'ShadowBase CDC Sandbox',
    leadArchitect: 'Engineered by Sachin Sahu • Founder & CEO',
    quote:
      'Before ShadowBase, every production PostgreSQL schema migration risked locking tables during peak traffic. Replaying live Debezium CDC streams via Kafka inside isolated Testcontainers gave us 100% zero-downtime confidence.',
    author: 'Rohan Deshmukh',
    role: 'VP Engineering, FinCore Ledger Systems',
    location: 'Pune & Indore',
    verifiedOutcome: 'Zero-Downtime SQL Migrations',
    engagementScope: 'JAVA 21 + DEBEZIUM CDC + KAFKA',
    accentColor: 'violet',
    rating: 5,
    artifactId: 'shadowbase-cdc',
  },
  {
    id: 'rev-gridweaver',
    projectName: 'GridWeaver IoT Engine',
    leadArchitect: 'Engineered by Sachin Sahu • Founder & CEO',
    quote:
      'Switching our smart-grid telemetry ingestion to Sachin’s Java 21 Virtual Threads and Apache Kafka state machine let us process 50,000+ concurrent IoT substation pings with sub-second Leaflet GIS visibility.',
    author: 'Arvind Kulkarni',
    role: 'Chief Grid Operations Officer, VoltEdge Energy',
    location: 'Central India',
    verifiedOutcome: '50,000+ IoT Pings / Sub-15ms',
    engagementScope: 'JAVA 21 LOOM + KAFKA + GIS',
    accentColor: 'cyan',
    rating: 5,
    artifactId: 'gridweaver-iot',
  },
  {
    id: 'rev-fileguard',
    projectName: 'FileGuard AI Security',
    leadArchitect: 'Engineered by Aashif Khan • Co-Founder & System Architect',
    quote:
      'FileGuard AI eliminated document tampering across our legal and compliance workflows. Instant SHA-256 cryptographic hashing paired with OriginStamp blockchain anchoring gives our clients mathematical proof of integrity.',
    author: 'Adv. Meera Nair',
    role: 'Managing Partner, LexShield Corporate Compliance',
    location: 'Indore & Mumbai',
    verifiedOutcome: '100% Tamper-Proof Audit Trail',
    engagementScope: 'SHA-256 + BLOCKCHAIN SECURITY',
    accentColor: 'emerald',
    rating: 5,
    artifactId: 'fileguard-security',
  },
  {
    id: 'rev-aa-chocolates',
    projectName: 'A&A Chocolates D2C',
    leadArchitect: 'Engineered by Aashif Khan • Co-Founder & System Architect',
    quote:
      'Our homemade chocolate orders used to get stuck in slow Instagram DMs. Aashif built our custom box builder with 1-Tap UPI checkout and server-side Meta CAPI, taking us to 4.4x verified ROAS.',
    author: 'Ananya & Aditya',
    role: 'Co-Founders, A&A Chocolates',
    location: 'Indore, MP',
    verifiedOutcome: '4.4x Verified Meta ROAS',
    engagementScope: 'D2C STOREFRONT + META CAPI',
    accentColor: 'amber',
    rating: 5,
    artifactId: 'aa-chocolates-d2c',
  },
  {
    id: 'rev-career-mentor',
    projectName: 'AI Career Guide & Mentor',
    leadArchitect: 'Engineered by Aashif Khan • Co-Founder & System Architect',
    quote:
      'The AI Career Guide & Mentor platform gave our B.Tech and MCA cohorts personalized 90-day skill-gap roadmaps, real-world architecture reviews, and viva defense confidence that directly boosted placement conversions.',
    author: 'Prof. Devendra Sharma',
    role: 'Head of Training & Placement, TechVista Institute',
    location: 'Indore, MP',
    verifiedOutcome: '3.4x Placement Readiness Lift',
    engagementScope: 'AI EDTECH & ROADMAP ENGINE',
    accentColor: 'indigo',
    rating: 5,
    artifactId: 'ai-career-mentor',
  },
  {
    id: 'rev-socialite',
    projectName: 'Socialite Community Hub',
    leadArchitect: 'Engineered by Aashif Khan • Co-Founder & System Architect',
    quote:
      'Socialite delivered the exact sub-100ms optimistic feed, real-time creator analytics, and modern community engagement architecture we needed to scale our creator network without server lag.',
    author: 'Kabir Malhotra',
    role: 'Founder, PulseWave Creator Collective',
    location: 'Bengaluru & Indore',
    verifiedOutcome: '< 80ms Optimistic Feed Speed',
    engagementScope: 'FULL-STACK SOCIAL PLATFORM',
    accentColor: 'rose',
    rating: 5,
    artifactId: 'socialite-network',
  },
];

export const VERIFIED_REVIEWS: ClientReview[] = CLIENT_TESTIMONIALS;

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  accentColor: SemanticAccentColor;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Local Businesses',
    question: 'I run a local clinic, showroom, or retail store. How fast can we see real walk-in and call growth?',
    answer:
      'We launch your upgraded mobile booking/catalog hub, smart QR review system, and Google Business Profile optimization within 14 to 21 days. Most local partners see measurable increases in direct calls, WhatsApp inquiries, and Map Pack #Top rankings within the first 30 days.',
    accentColor: 'indigo',
  },
  {
    id: 'faq-2',
    category: 'Engineering & Speed',
    question: 'Do you use WordPress templates or build custom code from scratch?',
    answer:
      'We engineer custom applications using React 19, Next.js 15, TypeScript, Node.js, Python, and Java 21. That is why our platforms load in under 100ms, achieve 99+ Core Web Vitals scores, and never suffer from plugin crashes or template bloat.',
    accentColor: 'cyan',
  },
  {
    id: 'faq-3',
    category: 'Ownership & Pricing',
    question: 'Who owns the source code, domain, WhatsApp number, and ad accounts?',
    answer:
      'You own 100% of your GitHub repository, domain, cloud hosting, WhatsApp Business API account, and Meta/Google ad accounts from day one. We never hold client infrastructure hostage.',
    accentColor: 'emerald',
  },
  {
    id: 'faq-4',
    category: '15% Partner Referral',
    question: 'How does the 15% Referral Commission Program work?',
    answer:
      'Simply introduce a business owner, clinic, showroom, or founder who needs a website, custom software, AI automation, or growth marketing. When they sign their project with SkyLine, we transfer a direct 15% cash commission of the initial contract value to you via UPI or bank transfer within 48 hours of invoice clearance.',
    accentColor: 'amber',
  },
  {
    id: 'faq-5',
    category: 'WhatsApp & AI Bots',
    question: 'Will the WhatsApp AI bot feel robotic to my customers?',
    answer:
      'No. We train the workflow on your exact services, pricing, brochure PDFs, and tone of voice (including English and Hinglish support). It answers common questions immediately, captures budget/requirements, and hands over warm leads to your human team on WhatsApp with full context.',
    accentColor: 'violet',
  },
];

export const TECH_STACK_MARQUEE_ROW_1: string[] = [
  'NEXT.JS 15',
  'REACT 19',
  'TYPESCRIPT',
  'JAVA 21 VIRTUAL THREADS',
  'SPRING BOOT',
  'APACHE KAFKA',
  'PYTHON & AI AGENTS',
  'NODE.JS',
];

export const TECH_STACK_MARQUEE_ROW_2: string[] = [
  'POSTGRESQL',
  'MYSQL',
  'DOCKER',
  'AWS CLOUD',
  'TAILWIND CSS',
  'WHATSAPP CLOUD API',
  'META ADS CAPI',
  'GOOGLE MAP PACK SEO',
];

