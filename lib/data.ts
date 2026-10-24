import { Project } from "@/app/_components/projects-section";

export const projects: Project[] = [
  {
  name: "AtlasTech",
  description: "A multi-tenant SaaS for e-commerce sellers with storefronts, inventory, invoicing, analytics, and a companion mobile app.",

  fulldescription: "AtlasTech is a production-grade, multi-tenant seller management platform built for modern e-commerce operations. Sellers get a complete dashboard to manage products and stock, track clients, generate invoices and warranty invoices, export reports, and follow sales through period-based analytics. A built-in AI assistant writes product descriptions, and a store designer lets each seller customize their own public storefront served on a dedicated subdomain.\n\nAn admin console gives full control over the platform, including seller approval, user management, a shared product catalog, transactions, reports, and storage. Authentication is handled by Supabase Auth with email and Google OAuth, protected by Turnstile and rate limiting, while tenancy is enforced at the application layer so every query is scoped to the authenticated seller. Data lives in PostgreSQL with Prisma ORM.\n\nA companion Expo / React Native app lets sellers run their shop from their phone against the same backend, with web push notifications keeping them up to date. Built with Next.js 16, React 19, TypeScript, TanStack Query, Tailwind CSS, and shadcn/ui, AtlasTech is monitored with Sentry, runs scheduled jobs through Vercel Cron, and is covered by a Vitest test suite.",

  linkUrl: "https://github.com/achrafgm20/AtlasTech",

  tags: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Supabase",
    "PostgreSQL",
    "Prisma ORM",
    "TanStack Query",
    "Tailwind CSS",
    "shadcn/ui",
    "Recharts",
    "Expo / React Native",
    "Sentry",
    "Vitest",
    "Multi-tenant SaaS"
  ],

  href: "/projects/atlastech"
},
  {
  name: "Station AI",
  description: "An AI incubator that turns a spoken business idea into a Business Model Canvas, a market study, and a live landing page in minutes.",

  fulldescription: "Station AI (L'Incubateur Express) is an AI-powered entrepreneurship studio built for Orange Digital Center. It helps aspiring founders go from a rough idea to a clear strategy and a working landing page in about three minutes. Users simply pitch their idea by voice, and the speech is transcribed into editable text using Whisper via Groq.\n\nThe AI then structures the pitch into Problem, Target, Solution, and Offer, and generates a complete nine-block Business Model Canvas as strict JSON using Llama 3.3 70B. Each canvas is enriched with a regional market study, for example for the Souss-Massa region, so founders understand their local market from day one.\n\nFinally, Station AI generates a responsive, semantic landing page displayed in a live split-screen editor. With one click, the page is deployed and the founder receives a public link, a QR code, and a downloadable PDF incubation report. An AI chat assistant helps with follow-up questions, planning deliverables, and organizing documents, making the platform accessible to entrepreneurs with little technical or strategic background.",

  liveUrl: "https://station-ai-three.vercel.app/",

  tags: [
    "AI-Powered",
    "Llama 3.3 70B",
    "Groq",
    "Whisper",
    "Speech-to-Text",
    "Business Model Canvas",
    "Landing Page Generation",
    "Tailwind CSS",
    "Vercel"
  ],

  href: "/projects/station-ai"
},
  {
  name: "AtlasSaaS",
  description: "A full-stack SaaS marketplace with buyer, seller, and admin workflows, featuring real-time messaging and secure payments.",
  
  fulldescription: "AtlasSaaS is a production-ready full-stack marketplace platform designed to handle complete e-commerce workflows. It includes buyer features such as product browsing, cart management, checkout, order tracking, and favorites. Sellers can manage products, monitor sales, and receive real-time notifications, while admins have full control over users, sellers, and platform analytics. \n\nThe platform integrates real-time communication using Socket.IO, enabling instant messaging and live notifications. Secure payment processing is handled through Stripe, and Cloudinary is used for efficient media storage and delivery. The system is fully containerized using Docker, ensuring easy deployment and scalability.\n\nBuilt with a modern tech stack including React 19, TypeScript, Node.js, Express, and MongoDB, AtlasSaaS emphasizes performance, scalability, and a seamless user experience across all devices.",
  
  linkUrl: "https://github.com/achrafgm20/atlasSaas",
  videoUrl: "https://drive.google.com/file/d/1ZcsV2ltw2U-UcIeAo5cXtgFbJfzG7fYZ/view?usp=sharing",
  
  media: [
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/sellerNotifaction2_exwrfw.png",
      alt: "AtlasSaaS dashboard and marketplace interface",
    }, 
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/sellerNotification1_psquhs.png",
      alt: "AtlasSaaS dashboard and marketplace interface",
    },
     {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/sellerDashaborad_ake054.png",
      alt: "AtlasSaaS dashboard and marketplace interface",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/productDetails_jua7rd.png",
      alt: "AtlasSaaS dashboard and marketplace interface",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/paymentStripe_vwnsuz.png",
      alt: "AtlasSaaS dashboard and marketplace interface",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/v1775122296/payememtsSuccs_w9acsr.png",
      alt: "AtlasSaaS dashboard and marketplace interface",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/v1775122293/liveChatSeller_hby1tq.png",
      alt: "AtlasSaaS dashboard and marketplace interface",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/v1775122289/BuyersordersList_webbco.png",
      alt: "AtlasSaaS dashboard and marketplace interface",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/v1775122278/buyerDashbaord2_iqg0br.png",
      alt: "AtlasSaaS dashboard and marketplace interface",
    },
    
    
  ],
  
  tags: [
    "React 19",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Socket.IO",
    "Stripe",
    "Cloudinary",
    "Docker",
    "Tailwind CSS"
  ],
  
  href: "/projects/atlas-saas"
},
  {
  name: "LuxParfum",
  description: "A modern e-commerce platform for premium fragrances with advanced filtering, seller dashboard, and real-time order management.",
  
  fulldescription: "LuxParfum is a production-ready full-stack e-commerce platform built specifically for luxury fragrance retailers. It delivers a seamless shopping experience for customers with intelligent product discovery, smart filtering by category, brand, price range, and notes. Customers can browse, add items to cart, and complete purchases without requiring an account.\n\nThe platform features a comprehensive vendor dashboard enabling sellers to monitor sales performance by period, manage product inventory and stock levels, export detailed order reports, and access real-time sales statistics with visual analytics. Built with Next.js 16 App Router and TypeScript, LuxParfum leverages modern technologies including PostgreSQL with Prisma ORM, betterAuth for secure authentication, Zustand for state management, and Recharts for data visualization.\n\nThe application supports transactional emails via Resend, responsive mobile-first design with Tailwind CSS and shadcn/ui components, and implements advanced SEO practices including dynamic metadata, Open Graph tags, auto-generated sitemaps, and JSON-LD structured data. Deployed on Ubuntu VPS with Nginx reverse proxy, PM2 process management, and SSL encryption via Certbot, LuxParfum ensures production-grade performance, security, and scalability.",
  
  linkUrl: "https://github.com/achrafgm20/luxstore",
  videoUrl: "https://youtu.be/AzZwg44RYVI",
  
  media: [
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/v1776533864/Screenshot_2026-04-18_at_17.32.45_o9ksuo.png",
      alt: "LuxParfum homepage with premium fragrance showcase",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533884/Screenshot_2026-04-18_at_17.33.08_bzefzo.png",
      alt: "Advanced product filtering by category, brand, and price range",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533864/Screenshot_2026-04-18_at_17.33.23_a7nwtp.png",
      alt: "Detailed product page with fragrance notes and customer reviews",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533879/Screenshot_2026-04-18_at_17.33.51_oniv8j.png",
      alt: "Shopping cart interface with real-time updates and checkout",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533899/Screenshot_2026-04-18_at_17.34.29_mwg9xt.png",
      alt: "Guest checkout flow without requiring customer account",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533845/Screenshot_2026-04-18_at_17.34.39_fykzb1.png",
      alt: "Order confirmation with transactional email via Resend",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533872/Screenshot_2026-04-18_at_17.34.51_yaouru.png",
      alt: "Seller dashboard with sales analytics and performance metrics",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533813/Screenshot_2026-04-18_at_17.34.57_nyqhle.png",
      alt: "Real-time sales statistics with Recharts visualizations by period",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533879/Screenshot_2026-04-18_at_17.35.09_rowm3g.png",
      alt: "Product inventory and stock management interface",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533867/Screenshot_2026-04-18_at_18.13.39_yge1cc.png",
      alt: "Order export and reporting features for vendors",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533846/Screenshot_2026-04-18_at_18.13.54_ulyutw.png",
      alt: "Mobile-responsive design on iOS and Android devices",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1776533903/Screenshot_2026-04-18_at_17.32.17_ym1w8h.png",
      alt: "Admin control panel for platform management and user roles",
    },
  ],
  
  tags: [
    "Next.js 16",
    "App Router",
    "TypeScript",
    "PostgreSQL",
    "Prisma ORM",
    "betterAuth",
    "Zustand",
    "React Hook Form",
    "Zod Validation",
    "Tailwind CSS",
    "shadcn/ui",
    "SEO Optimized"
  ],
  
  href: "/projects/luxparfum",
  

},
{
  name: "MindCare",
  description: "An AI-powered personality analysis platform helping users discover their true selves through MBTI insights with a futuristic UI.",
  
  fulldescription: "MindCare is a premium, AI-powered personality analysis platform designed to help users discover their true selves through the lens of MBTI (Myers-Briggs Type Indicator). Featuring a futuristic UI and cutting-edge AI integration, MindCare provides deep insights into personality traits, behaviors, and potential growth paths.\n\nThe platform leverages NVIDIA API integration for advanced personality analysis, delivering intelligent, data-driven insights that help users understand their psychological profile. Built with Next.js 16 App Router and React 19, MindCare combines modern frontend technologies including Tailwind CSS 4 for responsive design, Framer Motion for engaging animations, and Radix UI primitives for accessible components.\n\nBacked by PostgreSQL via Neon for reliable data storage and Prisma ORM for efficient database operations, MindCare implements secure authentication through Better Auth. The platform ensures a seamless user experience with real-time personality analysis, personalized recommendations, and interactive visualizations. Deployed for production performance, MindCare delivers scalable, secure, and user-centric insights into personality development.",
  
  linkUrl: "https://github.com/achrafgm20/MindCare1",
  videoUrl: "https://youtu.be/D1P9gDPSmbc",
  
  media: [
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1777984889/Screenshot_2026-05-05_at_11.46.59_w13wp1.png",
      alt: "MBTI personality assessment interface with intuitive questions",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1777984852/Screenshot_2026-05-05_at_11.47.09_nqx8eq.png",
      alt: "MindCare homepage with AI-powered personality analysis showcase",
    },
    
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1777984888/Screenshot_2026-05-05_at_11.47.27_jg8yja.png",
      alt: "Detailed personality profile with traits and behavioral insights",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1777984872/Screenshot_2026-05-05_at_11.47.22_rpg9lo.png",
      alt: "AI-generated personality insights and growth recommendations",
    },
    
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1777984893/Screenshot_2026-05-05_at_11.47.56_uprqhz.png",
      alt: "Personalized career and relationship compatibility insights",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1777984898/Screenshot_2026-05-05_at_11.47.47_ahdvqt.png",
      alt: "User dashboard with personality analysis history and progress",
    },
    {
      type: "image",
      src: "https://res.cloudinary.com/dkhmh3oph/image/upload/q_auto/f_auto/v1777984902/Screenshot_2026-05-05_at_11.47.40_ycmksd.png",
      alt: "Futuristic UI with Framer Motion animations and smooth interactions",
    },
    
    
  ],
  
  tags: [
    "Next.js 16",
    "App Router",
    "React 19",
    "TypeScript",
    "PostgreSQL",
    "Prisma ORM",
    "Better Auth",
    "Tailwind CSS 4",
    "Framer Motion",
    "Radix UI",
    "Lucide React",
    "NVIDIA API",
    "MBTI Analysis",
    "AI-Powered"
  ],
  
  href: "/projects/mindcare",
  

},
];
