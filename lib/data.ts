export const user = {
  id: 1,
  personalInfo: {
    firstName: "Vikas",
    lastName: "Singh",
    title: "Frontend Engineer",
    specialization: [
      "Mern Stack",
      "Next.js",
      "TypeScript",
      "Unit Testing",
      "Performance Optimization",
      "Data Virtualization",
      "SEO & Accessibility",
      "DevOps",
    ],
    summary:
      "Frontend Developer with 4+ years of experience building scalable, high-performance web applications. Proven track record in UI performance optimization, reusable component architecture, SEO optimization, and responsive design. Skilled in TDD using Vitest, Jest, and Testing Library. Passionate about pixel-perfect UI and reducing load times.",

    location: "Mumbai, Maharashtra 401208",
    age: 26,
    dob: {
      day: 2,
      month: 9,
      year: 1999,
    },
  },

  contactDetails: {
    phone: { type: "phone", value: "+91 9833311502", icon: "phone" },
    email: { type: "email", value: "vikrant78951@gmail.com", icon: "mail" },
  },

  socialLinks: [
    {
      label: "LinkedIn",
      url: "http://www.linkedin.com/in/vikas-singh-6601a7230",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      url: "https://github.com/vikrant78951",
      icon: "github",
    },
    {
      label: "Leetcode",
      url: "https://leetcode.com/u/vikrant78951",
      icon: "leetcode",
    },
    {
      label: "Gmail",
      url: "mailto:vikrant78951@gmail.com",
      icon: "gmail",
    },
    {
      label: "Contact",
      url: "tel:+919833311502",
      icon: "contact",
    },
  ],

  education: [
    {
      degree: "Bachelor of Computer Application",
      institution: "Yashwantrao Chavan Maharashtra Open University, Nasik",
      duration: "Sep 2017 – June 2020",
      cgpa: "7.70",
      description:
        "Studied core concepts in software development, data structures, databases, and web technologies. Built multiple academic projects and developed a strong foundation in programming and IT systems.",
    },
    {
      degree: "Higher Secondary Certificate (Commerce - IT)",
      institution: "Aryan Junior College, Mumbai, Maharashtra",
      duration: "June 2015 – Feb 2017",
      cgpa: "7.40",
      description:
        "Focused on commerce subjects with an emphasis on Information Technology. Developed basic programming and computer application skills, along with accounting and business fundamentals.",
    },
    {
      degree: "Secondary School Certificate",
      institution: "Mumbai Public School",
      duration: "March 2013 – March 2015",
      cgpa: "6.00",
      description:
        "Completed foundational education with focus on general academics. Built core literacy, numeracy, and analytical thinking skills.",
    },
  ],

  experience: [
    {
      role: "Software Developer",
      company: "Mobile Programming India Pvt Ltd",
      duration: "June 2024 - Jan 2025",
      monthsSpent: 8,
      technologies: [
        "Mern Stack",
        "Next Js",
        "TypeScript",
        "Strapi",
        "TDD",
        "Docker",
        "CI/CD",
      ],
      responsibilities: [
        "Developed & optimized React.js applications with TypeScript, boosting performance by 30%",
        "Created 20+ reusable UI components, reducing dev time by 30%",
        "Built custom Strapi plugins (MVC architecture), improved CMS efficiency by 50%",
        "Built and integrated REST APIs with Node.js & Express.js",
        "Used Docker and CI/CD pipelines for deployment",
      ],
      activities: [
        "Frontend performance tuning",
        "Strapi plugin architecture",
        "REST API integration",
        "CI/CD setup",
      ],
      screenshots: [
        {
          src: "/images/pixelbin_1.png",
          alt: "Pixelbin Console",
        },
        {
          src: "/images/pixelbin_2.png",
          alt: "Pixelbin",
        },
        {
          src: "/images/pixelbin_3.png",
          alt: "Pixelbin",
        },
      ],
      projects: [
        {
          name: "Pixelbin",
          link: "https://www.pixelbin.io",
        },
        {
          name: "Pixelbin Console",
          link: "https://console.pixelbin.io",
        },
      ],
    },
    {
      role: "Frontend Developer",
      company: "Media.net Software Services Pvt Ltd",
      duration: "April 2022 - May 2024",
      monthsSpent: 26,
      technologies: [
        "Pixel Perfect Screens",
        "Chrome Extension APIs",
        "Performance optimization",
        "Web Analytics",
      ],
      responsibilities: [
        "Developed UI templates for ad-tech platforms",
        "Built Chrome extensions with JavaScript",
        "Created components to streamline ad placement & revenue tracking",
        "Reduced page load times by 35%",
      ],
      activities: [
        "Chrome extension development",
        "Ad placement optimization",
        "Page performance analysis",
        "Revenue tracking UIs",
      ],
      screenshots: [
        {
          src: "/images/imagizer_1.png",
          alt: "Imagizer 1",
        },
        {
          src: "/images/imagizer_2.png",
          alt: "Imagizer 2",
        },
        {
          src: "/images/weather_1.png",
          alt: "Weather app",
        },
      ],
      projects: [
        {
          name: "Imagizer",
          link: "https://imagizer-zeta.vercel.app",
        },
        {
          name: "Weather Forecast",
          description:
            "Integrated Mapbox API for live weather tracking with real-time updates.",
          link: "https://liveweatherradar.com",
        },
        {
          name: "AI Chat Tab",
          link: "https://aichattab.com",
        },
        {
          name: "QR Scanner",
          link: "https://qrscanner.com",
        },
        {
          name: "Beloved Bible",
          link: "https://belovedbible.app",
        },
        {
          name: "Note Launcher",
          link: "https://notepadhome.app",
        },
      ],
    },
    {
      role: "Frontend Developer",
      company:
        "Xcellhost Cloud Services Pvt Ltd & Wealthrhino Intellivest Services Pvt Ltd",
      duration: "June 2020 - April 2022",
      monthsSpent: 23,
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "HubSpot CMS",
        "SEO",
        "Cross-browser testing",
      ],
      responsibilities: [
        "Developed responsive UI/UX improving retention by 25%",
        "Developed company website using HubSpot CMS",
        "Ensured SEO optimization & cross-browser compatibility",
      ],
      activities: [
        "Web UI design",
        "CMS integration",
        "SEO performance tuning",
      ],
      screenshots: [
        {
          src: "/images/xcellhost_1.png",
          alt: "xcellhost",
        },
        {
          src: "/images/xcellhost_2.png",
          alt: "xcellhost",
        },
        {
          src: "/images/xcellhost_3.png",
          alt: "xcellhost",
        },
      ],
      projects: [],
    },
  ],

  personalProjects: [
    {
      name: "Erasify",
      description:
        "Built a SaaS platform for AI-powered background removal using Clipdrop APIs. Integrated Razorpay for payments and Redux for state management.",
      link: "https://erasify-client.vercel.app",
    },
    {
      name: "MicroNext",
      link: "https://www.micronextcomputer.org",
    },
  ],

  technicalSkills: {
    frontend: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "SASS",
      "Bootstrap",
      "Zod",
    ],
    testing: [
      "Vitest",
      "Jest",
      "React Testing Library",
      "Supertest",
      "ESLint",
      "Husky",
      "Playwright",
    ],
    stateManagement: ["Redux", "Zustand", "React Query", "Context API"],
    cmsAndTools: ["Strapi", "HubSpot CMS", "Figma"],
    devOps: ["Vercel", "Railway", "Docker", "CI/CD", "SEO Optimization"],
    backend: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL"],
    others: ["Git", "GitHub", "Jira", "Webpack", "Razorpay"],
  },

  certifications: [
    {
      title: "React Js",
      year: 2025,
      issuer: "Scaler",
      icon: "badge-check",
      link: "https://moonshot.scaler.com/s/sl/JSFCintbUJ?_gl=1*13a1gx8*_gcl_au*MTU4MjM4MzcxMy4xNzQ0OTY5NDM3LjQxMzA3NjI0Ny4xNzQ0OTY5NDQ1LjE3NDQ5Njk0NTQ.*FPAU*MTU2ODE4MzEyNS4xNzQ0ODcwMzQx*_ga*MTQ5MDcyNTM5MC4xNzQ0ODcwMzQw*_ga_53S71ZZG1X*MTc0NDk1OTE2My42LjEuMTc0NDk2OTU4Mi4wLjAuMjE5MDE3NjQ1",
      highlights: [
        "Mastered React fundamentals: JSX, hooks, state, and props.",
        "Implemented routing with React Router v6.",
        "Managed state with Redux Toolkit and React Query.",
        "Built forms with Formik and React Hook Form.",
        "Tested components using Jest and RTL."
      ]
    },
  ],

  passions: [
    { name: "Bike Riding", icon: "bike" },
    { name: "Meditation", icon: "meditation" },
    { name: "Tech Exploration", icon: "cpu" },
  ],

  landers : [
    {
      name: "AI Chat Tab",
      link: "https://aichattab.com",
      description:
        "Instant AI-generated answers in every new tab. Includes an AI widget and sets your default search to Yahoo® Search for a smart browsing experience.",
      image: "/images/ai-chat-tab.png",
    },
    {
      name: "QR Scanner",
      link: "https://qrscanner.com",
      description:
        "Instantly scan any QR code or barcode from your Android™ home screen. One-swipe launcher integration for effortless scanning and navigation.",
      image: "/images/qr-scanner.png",
    },
    {
      name: "Beloved Bible",
      link: "https://belovedbible.app",
      description:
        "Bible Launcher for daily spiritual engagement. Read, pray, and listen to the Word of God with ease—includes offline reading and audio playback features.",
      image: "/images/beloved-bible.png",
    },
    {
      name: "Note Launcher",
      link: "https://notepadhome.app",
      description:
        "Remove image backgrounds instantly with AI. Perfect for personal use, e-commerce, and pro edits—no skills required, just upload and transform.",
      image: "/images/note-launcher.png",
    },
    {
      name: "Erasify",
      link: "https://erasify-client.vercel.app",
      description:
        "Built a SaaS platform for AI-powered background removal using Clipdrop APIs. Integrated Razorpay for payments and Redux for state management.",
      image: "/images/erasify.png",
    },
  ]
  
};
