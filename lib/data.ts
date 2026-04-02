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
    name: "Project Two",
    description: "Describe the problem, solution, and the outcome.",
    fulldescription: "An innovative solution designed to streamline workflows and boost productivity. This project involved deep architectural planning and robust API integrations to connect multiple services seamlessly.",
    tags: ["API", "Auth", "PostgreSQL", "Node.js"],
    href: "/projects/project-two",
    linkUrl: "https://github.com/your-handle/project-two",
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
