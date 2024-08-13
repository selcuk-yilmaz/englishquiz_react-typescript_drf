import { CarFront, CodeIcon, Compass, Contact, Store } from 'lucide-react';
import {
  FiInstagram,
  FiGithub,
  FiYoutube,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

export const navLinks = [
  {
    label: "Browse",
    route: "/",
    icon: Compass,
  },
  {
    label: "About",
    route: "/about",
    icon: CodeIcon,
  },
  {
    label: "Store",
    route: "/store",
    icon: Store,
  },
  
  {
    label: "Contact",
    route: "/contact",
    icon: Contact,
  },
  
];


export const socialMedia = [
  {
    route: "https://www.youtube.com/@selcukylmaz1904",
    icon: FiYoutube,
  },
  {
    route: "https://twitter.com/SelukYl10443090",
    icon: FiTwitter,
  },
  {
    route: "https://github.com/selcuk-yilmaz",
    icon: FiGithub,
  },

  {
    route: "https://www.linkedin.com/in/yilmaz-selcuk/",
    icon: FiLinkedin,
  },
];
  

  export const BrowseCategory = [
    {
      label: "All",
      route: "/",
    },
    {
      label: "Grade-1",
      route: "/browse/Grade-1",
    },
    {
      label: "Grade-2",
      route: "/browse/Grade-2",
    },
    {
      label: "Grade-3",
      route: "/browse/Grade-3",
    },
    {
      label: "Grade-4",
      route: "/browse/Grade-4",
    },
    {
      label: "Grade-5",
      route: "/browse/Grade-5",
    },
    {
      label: "Grade-6",
      route: "/browse/Grade-6",
    },
    {
      label: "Grade-7",
      route: "/browse/Grade-7",
    },
    {
      label: "Grade-8",
      route: "/browse/Grade-8",
    },
    {
      label: "Grade-9",
      route: "/browse/Grade-9",
    },
    {
      label: "Grade-10",
      route: "/browse/Grade-10",
    },
    {
      label: "Grade-11",
      route: "/browse/Grade-11",
    },
    {
      label: "Grade-12",
      route: "/browse/Grade-12",
    },
    // {
    //   label: "Grade-12",
    //   route: "/browse/sanity",
    // },
  ];

  export const Products = [
    {
      id: 1,
      title: "Grade-1 english quizes",
      description:
        "Netflix Clone Full Stack React, Tailwind CSS, Next.JS, Prisma, MongoDB, Vercel (2024)",
      image: "/images/grade_6.jpg",
      tags: [
        "nextjs",
        "reactjs",
        "tailwindcss",
        "prisma",
        "mongobdb",
        "nextauth",
        "Grade-1",
      ],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "meltemyilmaz",
      isPublished: true,
      href: "/project/netflix-clone-full-stack",
      video: "https://youtu.be/9DcOvsFNSwg",
      price: "Free",
    },
    {
      id: 2,
      title: "Messenger Clone Full Stack ",
      description:
        "Messenger Clone | Full Stack |  React, Next Js  Prisma Pusher Js MongoDB TailwindCss  Vercel (2024)",
      image: "/images/grade_6.jpg",
      tags: [
        "nextjs",
        "reactjs",
        "tailwindcss",
        "prisma",
        "mongobdb",
        "prisma",
        "nextauth",
        "Grade-2",
        "Grade-1",
      ],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/messenger-clone-full-stack",
      video: "https://youtu.be/LpsY80QBlek",
      price: "Free",
    },
    {
      id: 3,
      title: "Coffe Pub Frontend",
      description:
        "Coffe Pub | Kahve Sitesi | Frontend |  NextJS, TailwindCSS, Swipper JS , AOS  and Vercel Deploy",
      image: "/images/grade_6.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "Grade-3"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/coffee-pub",
      video: "https://youtu.be/F8UQMePob-o",
      price: "Free",
    },
    {
      id: 4,
      title: "NextAuth V5",
      description:
        "Next Auth V5 ile Giriş İşlemleri |Doğrulama ve Yetkilendirme |  React, NextJS, TailwindCSS,  Shdnc",
      image: "/images/grade_6.jpg",
      tags: [
        "nextjs",
        "reactjs",
        "tailwindcss",
        "shdcn",
        "nextauth",
        "Grade-4",
      ],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/coffee-pub",
      video: "https://youtu.be/MBsfKFD8W1Y",
      price: "Free",
    },
    {
      id: 5,
      title: "Next Js Tutorial",
      description:
        "2 saate NEXT.Js  |  Next Js Öğreniyorum  | Next Js Tutorial",
      image: "/images/grade_6.jpg",
      tags: ["nextjs", "reactjs", "Grade-5"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/next-js-tuttorial",
      video: "https://youtu.be/imyp0H_rMBA",
      price: "Free",
    },
    {
      id: 6,
      title: "E-Ticaret Sitesi",
      description:
        "E-Ticaret Sitesi | Full Stack| React, NextJS, TailwindCSS,  Shdnc, Stripe, Mysql, Prisma, Clerk",
      image: "/images/grade_6.jpg",
      tags: [
        "nextjs",
        "reactjs",
        "tailwindcss",
        "shdcn",
        "mysql",
        "prisma",
        "clerk",
        "Grade-6",
      ],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/e-commerce-website",
      video: "https://youtu.be/X-TaxHALtVE",
      price: "Free",
    },
    {
      id: 7,
      title: "Twitch Clone",
      description:
        "Twitch Clone  | Full Stack  | React NextJs  Prisma Livekit, Mysql, Tailwindcss, Prisma Clerk",
      image: "/images/grade_6.jpg",
      tags: [
        "nextjs",
        "reactjs",
        "tailwindcss",
        "shdcn",
        "mysql",
        "prisma",
        "clerk",
        "Grade-7",
      ],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/twitch-clone",
      video: "https://youtu.be/GKrfPeeqjKw",
      price: "Free",
    },
    {
      id: 8,
      title: "Udemy Clone",
      description:
        "Udemy Clone | Full Stack  | React NextJs  Prisma , MongoDB, Tailwindcss, Prisma, Clerk, Shdcn",
      image: "/images/grade_6.jpg",
      tags: [
        "nextjs",
        "reactjs",
        "tailwindcss",
        "shdcn",
        "mysql",
        "prisma",
        "clerk",
        "mongodb",
        "Grade-8",
      ],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/udemy-clone",
      video: "https://youtu.be/13D9ugoRf_w",
      price: "Free",
    },
    {
      id: 9,
      title: "Market Sitesi",
      description:
        "Online Bakkal ve Market Sitesi | E-Ticaret Sitesi | Full Stack | Strapi, NextJS, TailwindCSS, Shdnc",
      image: "/images/grade_6.jpg",
      tags: [
        "nextjs",
        "reactjs",
        "tailwindcss",
        "shdcn",
        "mysql",
        "strapi",
        "Grade-9",
      ],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/market-sitesi-strapi",
      video: "https://youtu.be/eaQ9_v-92ng",
      price: "Free",
    },
    {
      id: 10,
      title: "Portfolio  | Frontend",
      description:
        "Portfolio  | Frontend | Portfolio Website | NextJS, TailwindCSS,  Vercel Deploy",
      image: "/images/grade_6.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn", "Grade-10"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/portfolio",
      video: "https://youtu.be/lI7DWcSIODA",
      price: "Free",
    },
    {
      id: 11,
      title: "Quiz Uygulaması Quiz App ",
      description:
        "Quiz Uygulaması | Quiz App  | Full Stack | Next.js 14, TypeScript, Sanity, Prisma, TailwindCss",
      image: "/images/grade_6.jpg",
      tags: [
        "nextjs",
        "reactjs",
        "tailwindcss",
        "shdcn",
        "sanity",
        "prisma",
        "Grade-11",
      ],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/quiz-app",
      video: "https://youtu.be/rtSvsPy2MDg",
      price: "Free",
    },
    {
      id: 12,
      title: "Yapay Zeka SaaS Platformu ",
      description:
        "Yapay Zeka SaaS Platformu | Full Stack | Next.js 14, TypeScript ve Stripe ile Tam Yığın AI SaaS",
      image: "/images/grade_6.jpg",
      tags: ["nextjs", "reactjs", "tailwindcss", "shdcn", "prisma", "Grade-12"],
      publishedAt: "2023-01-04",
      updatedAt: "2024-01-04",
      author: "efegorkemumit",
      isPublished: true,
      href: "/project/saas-platform",
      video: "https://youtu.be/R85sL79n1Rs",
      price: "Free",
    },
    // {
    //   id: 13,
    //   title: "Camp Traveller ",
    //   description:
    //     "Camp Traveller | Frontend | Travel Website | NextJS, TailwindCSS, Swipper JS , AOS and Vercel Deploy",
    //   image: "/images/camp.jpg",
    //   tags: ["nextjs", "reactjs", "tailwindcss", "shdcn"],
    //   publishedAt: "2023-01-04",
    //   updatedAt: "2024-01-04",
    //   author: "efegorkemumit",
    //   isPublished: true,
    //   href: "/project/camp-frontend",
    //   video: "https://youtu.be/zXmo4s2aasQ",
    //   price: "Free",
    // },
  ];