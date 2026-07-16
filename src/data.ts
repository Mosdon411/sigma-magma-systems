import { Project, ServiceItem } from './types';
import founderImage from './assets/images/moses_akaaza_original.jpg';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Abuja Fashion Accelerator Programme',
    category: 'creative',
    description: 'A dynamic multi-stage training and empowerment initiative designed to elevate design talent using digital toolkits, operational guidance, and pitch masterclasses.',
    fullDetails: 'The Abuja Fashion Accelerator Programme is a flagship youth and enterprise empowerment project curated and executed by Sigma Magma Systems. Our core goal was to merge design heritage with operational excellence. We provided comprehensive program management, developed customized learning frameworks, and structured an agency pitch framework connecting emerging designers with international venture partners. Under our systematic training curriculum, 50+ creatives completed the program, resulting in measurable brand growth, investment pitches, and localized supply-chain advancements.',
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=800',
    client: 'Abuja Enterprise Development Initiative',
    location: 'FCT – Abuja, Nigeria',
    date: 'March 2025',
    tags: ['Training', 'Creative Accelerators', 'Pitch Management', 'Youth Empowerment']
  },
  {
    id: 'proj-2',
    title: 'Autonomous Solar Inverter Grid Integration',
    category: 'energy-tech',
    description: 'Design and deployment of smart solar-hybrid power units with dynamic load balancing for premium commercial offices in Katampe.',
    fullDetails: 'Faced with rising grid instability, Sigma Magma Systems designed and commissioned a hybrid solar micro-grid equipped with intelligent inverter tracking systems. Our IoT integration constantly monitors battery depths, panel yield ratios, and building consumption levels to balance loads in real-time. This sustainable system reduced auxiliary generator runtimes by 72% and lowered operating fuel costs dramatically, proving that clean tech is both financially superior and highly reliable.',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    client: 'Katampe Corporate Offices',
    location: 'Abuja, Nigeria',
    date: 'June 2025',
    tags: ['Solar Energy', 'Smart Grid', 'IoT Integration', 'Sustainability']
  },
  {
    id: 'proj-3',
    title: 'Post-Campaign AI Analytics Engine',
    category: 'rd',
    description: 'An advanced data management pipeline using predictive algorithms to audit marketing investments and deliver transparent ROAS analysis.',
    fullDetails: 'To combat structural inefficiencies in corporate advertising, we engineered a server-side analytics portal that ingests massive post-campaign datasets. Leveraging machine learning algorithms, the platform detects double-billing, matches media runs against independent telemetry logs, and generates micro-level reports. This enterprise platform empowers executive boards to direct future investments with absolute precision and data-backed confidence.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    client: 'e-Media Advertising Association',
    location: 'Remote Deployment',
    date: 'January 2026',
    tags: ['AI & Machine Learning', 'Media Auditing', 'Big Data Analytics', 'ROAS Analysis']
  },
  {
    id: 'proj-4',
    title: 'Katampe Luxury Estates Smart Automation',
    category: 'real-estate',
    description: 'Implementation of smart home frameworks, digital entry terminals, and perimeter video analytics for a high-end gated community.',
    fullDetails: 'We served as the master technology consultant for a premium residential development in Katampe Main, Abuja. Our engineers installed fiber-to-the-home infrastructures, integrated smart door locks and lighting connected to a secure local network, and set up optical camera networks with customized video telemetry analytics. The result is a unified luxury workspace and living environment that offers unprecedented safety, seamless controls, and high real-estate valuations.',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    client: 'Magma Residency Developers',
    location: 'Katampe Main, FCT - Abuja',
    date: 'September 2025',
    tags: ['Real Estate Tech', 'Smart Home', 'Security Analytics', 'IoT Gateway']
  },
  {
    id: 'proj-5',
    title: 'Autonomous Agricultural Drone Prototype (ARES-1)',
    category: 'rd',
    description: 'Research and development of a custom automated multirotor for thermal crop health imaging and aerial fertilizer spraying.',
    fullDetails: 'Under our autonomous systems lab, we developed ARES-1, a lightweight heavy-payload quadcopter designed to address sub-Saharan agricultural constraints. Equipped with specialized multispectral cameras and altitude-sensing LIDAR, the UAV performs grid-based farm inspections to catalog moisture deficiencies and crop diseases. Early trials showed a 30% crop-yield improvement through targeted pesticide spraying and precise health analytics.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&q=80&w=800',
    client: 'FCT Agricultural Cooperative',
    location: 'Abuja Outskirts, Nigeria',
    date: 'February 2026',
    tags: ['Robotics', 'Agriculture Tech', 'Autonomous UAVs', 'Thermal Imaging']
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'srv-1',
    title: 'Energy & Technology Solutions',
    description: 'Providing sustainable, high-reliability micro-grids, smart solar-hybrid setups, and next-generation power infrastructure tailored to commercial and domestic developments.',
    iconName: 'Zap',
    category: 'Energy',
    features: [
      'Solar-Hybrid Inverter Grid Design',
      'Industrial Battery Management (BMS)',
      'Energy Audit & Smart Load Balancing',
      'Sustainability Consulting & Carbon Accounting'
    ]
  },
  {
    id: 'srv-2',
    title: 'Research & Development',
    description: 'Designing the future through deep technologies. We prototype autonomous multirotors, build IoT mesh gateways, and deploy applied AI systems for defense and agricultural workflows.',
    iconName: 'Cpu',
    category: 'Deep Tech',
    features: [
      'Autonomous UAVs & Robotic Hardware',
      'Custom IoT Microcontroller Prototyping',
      'Applied Neural Networks & Video Analytics',
      'Hardware-in-the-Loop Simulation Testing'
    ]
  },
  {
    id: 'srv-3',
    title: 'Real Estate Tech & Management',
    description: 'Delivering end-to-end technology integration, asset management, and consultancy services for high-value properties, making modern buildings smarter, safer, and higher-yielding.',
    iconName: 'Building2',
    category: 'Infrastructure',
    features: [
      'Smart Home Automation Architecture',
      'Property Management Systems (PMS)',
      'Perimeter Security & Digital Intercom Arrays',
      'Asset Brokerage, Leases & Joint Ventures'
    ]
  },
  {
    id: 'srv-4',
    title: 'Training & Consultancy',
    description: 'Customized educational programs and professional advisory services designed to equip teams and organizations with modern operational, digital, and investment capabilities.',
    iconName: 'GraduationCap',
    category: 'Education',
    features: [
      'Digital Toolkits & Operational Guidance',
      'Youth & Startup Enterprise Accelerators',
      'Corporate Technical Retraining Protocols',
      'Emerging Technologies Strategic Seminars'
    ]
  },
  {
    id: 'srv-5',
    title: 'Advisory Services',
    description: 'Providing high-stakes consulting on media investments, agency pitches, and brand strategies to maximize resource allocation and business growth.',
    iconName: 'BarChart3',
    category: 'Advisory',
    features: [
      'Agency Pitch & Partnership Management',
      'Media Coordination & Special Reports',
      'Media Investment Performance Auditing',
      'Strategic Public Relations Training'
    ]
  },
  {
    id: 'srv-6',
    title: 'Enterprise Analytics Solutions',
    description: 'Building custom software and analytics pipelines to extract insights, manage post-campaign data, and generate competitor intelligence.',
    iconName: 'TrendingUp',
    category: 'Analytics',
    features: [
      'AI-Powered Post-Campaign Diagnostics',
      'Competitive Intelligence & Media Reports',
      'Transparent ROAS Analytics Dashboards',
      'Sales-to-Research Custom Integrations'
    ]
  }
];

export const CORE_VALUES = [
  {
    title: 'Innovation',
    description: 'Continuously pushing the boundaries of technological advancement to design future systems.',
    color: 'border-sigma-red text-sigma-red bg-sigma-red/5'
  },
  {
    title: 'Excellence',
    description: 'Striving for the absolute highest engineering standards in product design and customer service.',
    color: 'border-sigma-green text-sigma-green bg-sigma-green/5'
  },
  {
    title: 'Collaboration',
    description: 'Fostering deep, synergistic partnerships to co-create impactful and scalable solutions.',
    color: 'border-sigma-blue text-sigma-blue bg-sigma-blue/5'
  },
  {
    title: 'Sustainability',
    description: 'Designing low-emission energy products and clean processes that minimize ecological footprints.',
    color: 'border-sigma-yellow text-sigma-yellow bg-sigma-yellow/5'
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'Dooaondo Moses Akaaza',
    role: 'Founder / Managing Director & CEO',
    tagline: 'Unlimited Possibilities',
    bio: 'A visionary engineering consultant and enterprise developer driving the research, development, and system deployments at Sigma Magma Systems. Dooaondo combines executive guidance with structural expertise to tackle Abuja’s most ambitious energy and tech infrastructure initiatives.',
    image: founderImage,
    linkedin: '#'
  }
];
