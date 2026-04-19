import { Project } from "@/app/_components/projects-section";

export const projects: Project[] = [
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
  
  linkUrl: "https://github.com/yourusername/luxparfum",
  videoUrl: "https://drive.google.com/file/d/your-video-id/view?usp=sharing",
  
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
    name: "Project Three",
    description: "Keep it short and impact-focused.",
    fulldescription: "A highly customizable design system and UI toolkit built with React. It provides a set of accessible, reusable components that drastically reduce development time for frontend teams.",
    tags: ["React", "Design System", "Storybook", "Figma"],
    href: "/projects/project-three",
  },
  {
    name: "Project Four",
    description: "An extra project to demonstrate the Show More behavior.",
    fulldescription: "Implemented an automated CI/CD pipeline and containerized deployment strategy utilizing Docker and GitHub Actions, reducing deployment time by 80%.",
    tags: ["Docker", "CI/CD", "AWS", "Bash"],
    href: "/projects/project-four",
  },
];
