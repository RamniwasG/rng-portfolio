import {
  BriefcaseBusiness,
  Database,
  Layers3,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  University,
  GitBranch,
  Workflow,
} from "lucide-react";

function GitHubMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.2a9.9 9.9 0 0 0-3.1 19.3c.5.1.7-.2.7-.5v-1.7c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.2-4.7-5A3.9 3.9 0 0 1 6.7 9a3.6 3.6 0 0 1 .1-2.7s.9-.3 2.8 1.1a9.6 9.6 0 0 1 5 0c1.9-1.4 2.8-1.1 2.8-1.1.5 1.2.2 2.2.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.8-4.7 5.1.4.3.8 1 .8 2v2.9c0 .3.2.6.8.5A9.9 9.9 0 0 0 12 2.2Z" />
    </svg>
  );
}

function LinkedInMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M5.1 8.6h3.1v10.1H5.1V8.6Zm1.6-5a1.8 1.8 0 1 1 0 3.6 1.8 1.8 0 0 1 0-3.6Zm3.5 5h3v1.4h.1c.4-.8 1.5-1.7 3.1-1.7 3.3 0 3.9 2.2 3.9 5v5.4h-3.1v-4.8c0-1.2 0-2.7-1.6-2.7s-1.9 1.3-1.9 2.6v4.9h-3.1V8.6Z" />
    </svg>
  );
}

function XTwitterMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.2 10.3 21 2.5h-1.6l-5.9 6.8-4.7-6.8H3.3l7.1 10.4-7.1 8.2h1.6l6.2-7.2 5 7.2h5.5l-7.4-10.8Zm-2.2 2.5-.7-1L5.5 3.7H8l4.6 6.5.7 1 6.1 8.7h-2.5L12 12.8Z" />
    </svg>
  );
}

function FacebookMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 8.2V6.7c0-.7.5-.9 1-.9h2.3V2.4L14.1 2.3c-3.2 0-4.9 1.9-4.9 5.2v.7H6v3.8h3.2v9.7H13V12h3.1l.5-3.8H14Z" />
    </svg>
  );
}

function YouTubeMark(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.6 4.6 12 4.6 12 4.6s-5.6 0-7.5.5a3 3 0 0 0-2.1 2.1C2 9.1 2 12 2 12s0 2.9.4 4.8a3 3 0 0 0 2.1 2.1c1.9.5 7.5.5 7.5.5s5.6 0 7.5-.5a3 3 0 0 0 2.1-2.1c.4-1.9.4-4.8.4-4.8s0-2.9-.4-4.8ZM10 15.4V8.6l5.8 3.4L10 15.4Z" />
    </svg>
  );
}

export const profile = {
  name: "RamniwasG",
  role: "Software Engineer",
  email: "ramniwas.nitrr15@gmail.com",
  location: "Uttar Pradesh - India",
  intro:
    "Crafting modern digital products with over 9+ years of application development experience, specializing in high-performance web, desktop, and mobile applications.",
  story:
    "I am a product-minded builder who enjoys the space between thoughtful interface design, strong engineering systems, and measurable business outcomes. My work is shaped by curiosity, clear communication, and a bias for shipping polished details that make products easier to trust.",
  showcaseVideo: "/showcase.mp4",
};

export const navItems = [
  { label: "About me", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Personal Work", href: "#personal-work" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/ramniwasg96/", icon: FacebookMark },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/ramniwas-gupta-1185a285/", icon: LinkedInMark },
  { label: "X / Twitter", href: "https://x.com/g_ramniwas", icon: XTwitterMark },
];

export const contactSocials = [
  ...socials,
  { label: "GitHub", href: "https://github.com/RamniwasG", icon: GitHubMark },
  { label: "YouTube", href: "https://www.youtube.com/@Ms_RamniwasG", icon: YouTubeMark },
];

export const aboutSocials = contactSocials.filter((social) =>
  ["Facebook", "YouTube"].includes(social.label),
);

export const strengths = [
  "Product strategy translated into clear, shippable interfaces",
  "Reusable component systems with accessible interaction patterns",
  "Performance-minded frontend architecture and clean API integration",
  "Calm collaboration across design, engineering, and stakeholders",
];

export const skills = [
  {
    category: "Frontend",
    icon: Layers3,
    items: ["React", "TypeScript", "Next.js", "Vue.js", "Svelte", "Eletron", "MUI", "Sass", "Tailwind CSS", "Three.js", "AEM"],
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    category: "Product",
    icon: PenTool,
    items: ["UX Strategy", "Prototyping", "Accessibility", "Analytics", "Research"],
  },
  {
    category: "Workflow",
    icon: Workflow,
    items: ["Git", "CI/CD", "Testing", "Documentation", "Agile Delivery"],
  },
];

export const projects = [
  {
    id: 11,
    title: "Capstone Project - JiraBoard",
    company: "Credera",
    client: "Credera",
    tenure: "Feb-2026 to Apr-2026",
    role: "Senior Developer",
    description:
      "This is a project management tool that allows users to create and manage projects, tasks, and team members. It provides a visual representation of the project progress and allows users to collaborate and communicate effectively.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    icon: BriefcaseBusiness,
    thumbnail: "/project-images/capstone.png",
    github: "https://github.com/RamniwasG/capstone-app",
    live: "https://capstone-app-wq6c.onrender.com/",
    isOpen: false,
  },
  {
    id: 6,
    featured: true,
    type: "web",
    title: "Platform Development of Micropore Tool",
    company: "Innominds Pvt Ltd",
    client: "AVG",
    tenure: "Oct-2021 to Dec-2022",
    role: "UI Engineer",
    description:
      "This is a scientific tool based on AI/ML and Data Science for analyzing and processing the scanned data of eyes and provides human readable/understandable user interface. Also facilitates to create patient details manually and view all four eye quadrant details in a single page on the full view page. It includes the following details like pore details, NSI/PVF values, Center of Mass, Center of gravity etc.",
    stack: ["React", "Redux", "MUI", "ThreeJS", "Axios", "HTML5/CSS3"],
    icon: ShieldCheck,
    thumbnail: "/project-images/mptool.png",
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 10,
    title: "SEI 2023 AEM Capabilities",
    company: "Credera",
    client: "Capella University",
    tenure: "Jun-2025 to Jan-2026",
    role: "Senior Developer",
    description:
      "This is a central platform for all the SEI 2023 AEM Capabilities. This application is used to create a common stack to provide seamless and rich feature user interface across all the brands and also separates by static sites vs ecommerce sites as well. Ecommerce sites provide all the ecom feature like displaying products, adding to cart and placing order based on location through different payment methods.",
    stack: ["HTML", "CSS", "AEM", "JQuery"],
    icon: BriefcaseBusiness,
    thumbnail: "/project-images/no-image.svg",
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 9,
    title: "Envista Phase2 Implementations",
    company: "Credera",
    client: "Envista",
    tenure: "Jan-2025 to May-2025",
    role: "Senior Developer",
    description:
      "Envista is a part of the Envista family of dental operating companies, including more than 30 trusted brands and 125 years of dental experience. This application is used to create a common stack to provide seamless and rich feature user interface across all the brands and also separates by static sites vs ecommerce sites as well. Ecommerce sites provide all the ecom feature like displaying products, adding to cart and placing order based on location through different payment methods.",
    stack: ["HTML", "CSS", "SiteStudio", "DDEV", "Docker"],
    icon: BriefcaseBusiness,
    thumbnail: "/project-images/no-image.svg",
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 8,
    title: "WG Phase 3 Rollout for 8 sites",
    company: "Credera",
    client: "Wrench Group",
    tenure: "Jan-2024 to Dec-2024",
    role: "Senior Developer",
    description:
      "This application is used for fetch/update the jobs and related appointments that have been Scheduled/Hold for a certain date and assigned some of the most suitable technicians to provide the solution/service at home. Allowed to filter the jobs/technicians on many filter/sort criteria like appt modes, drive mode(truck/home), BUs and many more.",
    stack: ["Svelte", "Svelte/Store", "svelte-quill", "svelte-splitpanes", "moment", "CSS"],
    icon: Rocket,
    thumbnail: "/project-images/no-image.svg",
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 7,
    type: "web",
    title: "Humana Staffing 2023",
    company: "Credera",
    client: "Humana",
    tenure: "Feb-2023 to Oct-2023",
    role: "Senior Software Engineer",
    description:
      "A system that allows a customer/patient to onboard or upload his past history to monitor and also be able to add/search PCP and many other features.",
    stack: ["VueJS", "Nucleus4", "HTML/CSS"],
    icon: Sparkles,
    thumbnail: "/project-images/no-image.svg",
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 5,
    type: "web",
    title: "ECAT",
    company: "Innominds Pvt Ltd",
    client: "Ecat",
    tenure: "Feb-2021 to Aug-2021",
    role: "UI Engineer",
    description:
      "The project is for creating and managing selections/candidates under the Projects and calculating/generating the candidate based on type of selected data.",
    stack: ["React", "Redux", "RollUp", "MUI", "Axios", "HTML5/CSS3"],
    icon: Database,
    thumbnail: "/project-images/no-image.svg",
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 4,
    type: "web",
    title: "POS",
    company: "Qvantel Solutions Pvt Ltd",
    client: "Qvantel",
    tenure: "2019 - 2020",
    role: "UI Developer",
    description:
      "POS is a stand-alone application for the omnichannel agents/salespersons who use this application for creating a new customer OR updating the services given to customers.",
    stack: ["React", "Redux", "Redux/Saga", "TypeScript", "Consul", "Internal CSS"],
    icon: Terminal,
    thumbnail: "/project-images/no-image.svg",
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 3,
    featured: true,
    type: "web",
    title: "InAppBi",
    company: "Quanteon Solutions LLP",
    client: "Seven Tablets",
    tenure: "2018 - 2019",
    role: "UI Developer",
    description:
      "InAppBI played a vital role in creating data sources, data models, and adding tables to these models, and building custom visualizations that look clean, modern, and fit seamlessly with a data-driven web portal backed. InAppBI proved to be a powerful and flexible framework for our needs, greatly reducing the time needed to generate and share insights from complex data.",
    stack: ["React", "Redux", "Angular", "Reactstrap", "HTML/CSS"],
    icon: Layers3,
    thumbnail: "/project-images/inAppBi_Chart.png",
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 2,
    featured: true,
    type: "mobile",
    title: "ePropertyPlus",
    company: "Quanteon Solutions LLP",
    client: "Seven Tablets",
    tenure: "Mar-2018 to Jul-2018",
    role: "JavaScript Full Stack Developer",
    description:
      "ePropertyPlus is a web as well as a mobile application too. I worked on a mobile app. We are turning the whole epropertyplus.com website to mobile (Android + iOS) both using React + Redux with Java as backend with MySQL Database. it is an application to create, view, edit, update and manage the property, services, and users too. allow them to navigate to the property using map view, can see the street view, property longitude, and altitude also.",
    stack: ["React", "Redux", "Thunk", "Bootstrap", "HTML/CSS", "NodeJS"],
    icon: Rocket,
    thumbnail: "/project-images/epp.png",
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 1,
    featured: true,
    type: "mobile",
    title: "NextUp",
    company: "Quanteon Solutions LLP",
    client: "Seven Tablets",
    tenure: "2017 - 2018",
    role: "JavaScript Full Stack Developer",
    description:
      "Nextup is a mobile application that enables student-athletes and general sports enthusiasts to set goals, track daily progress, compare with athletes preparing for the same sports, create and respond to challenges. Worked as a full-stack developer on this project, developing backend services using Restify and mobile UI using the Ionic/AngularJS framework. This application requires media management (upload and play video files, capture camera recording, on-demand rank calculations). Uses S3 for storing media files (both videos and photos).",
    stack: ["React", "Redux", "Angular", "NodeJS", "Express", "Bootstrap", "HTML/CSS"],
    icon: GitBranch,
    thumbnail: "/project-images/nextup.png",
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 0,
    type: "web",
    title: "Internal Project",
    company: "Quanteon Solutions LLP",
    client: "Quanteon Solutions LLP",
    tenure: "2016 - 2017",
    role: "Full Stack Developer",
    description:
      "A candidate hiring online tool that helps you to create a significant type of questions required and able to collect the provided output with different type of accuracy parameters like typing speed, number of backspace and many others.",
    stack: ["React", "Angular", "NodeJS", "Express", "Bootstrap", "HTML/CSS", "MySQL"],
    icon: Workflow,
    thumbnail: "/project-images/no-image.svg",
    github: "#",
    live: "#",
    isOpen: false,
  },
];

export const recentWork = {
  title: "PC Project",
  status: "Currently building",
  category: "Construction Material Management Project",
  description:
    "This is a construction material management project for managing the construction materials and also provide the dashboard to see the status of the materials. This application is used to create a common stack to provide seamless and rich feature user interface across all the brands and also separates by static sites vs ecommerce sites as well.",
  image: "/project-images/recent_work.png",
  live: "https://pc-admin.onrender.com/",
  updated: "Updated this month",
  stack: ["Next.js", "Node.js", "Tailwind CSS", "lucide-react", "MongoDB"],
};

export const personalWork = [
  {
    title: "PC App",
    category: "Personal productivity experiment",
    description:
      "A mobile based pocket construction app used for managing construction-related tasks and information.",
    image: "/project-images/pc.png",
    live: "https://pc-app.onrender.com/",
    stack: ["Next.js", "Node.js", "Tailwind", "lucide-react", "MongoDB", "onrender"],
  },
  {
    title: "PC Dashboard",
    category: "Personal productivity experiment",
    description:
      "a dashboard to manage the construction-related tasks and information. It provides a visual representation of the data and allows users to filter and sort the data based on different criteria.",
    image: "/project-images/pc_dashboard.png",
    live: "https://pc-dashboard.onrender.com/",
    stack: ["React", "Maps", "Responsive UI"],
  },
  {
    title: "Ecommerce Site",
    category: "Developer utility",
    description:
      "A simple ecommerce site to buy products, see order history, and manage the shopping cart.",
    image: "/project-images/ecommerce_site.png",
    live: "https://epridim.web.app/",
    stack: ["React.js", "Node.js", "API Tools", "Redux", "MUI"],
  },
];

export const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS Training and Certification",
    date: "Issued 2026",
    image: "/certificates/certificate_0.png",
    credential: "https://aws.amazon.com/verification",
    description:
      "Verified foundational cloud knowledge across compute, storage, networking, and AWS security best practices.",
  },
  {
    title: "The MERN Full Stack Guide",
    issuer: "Udemy Online",
    date: "Issued 2025",
    image: "/certificates/certificate_1.png",
    credential: "https://example.com",
    description: "",
  },
  {
    title: "Linux System Administration & Shell Programming",
    issuer: "NIT Raipur CG",
    date: "Issued 2013",
    image: "/certificates/certificate_2.png",
    credential: "",
    description: "",
  },
  {
    title: "The Python Django Practical Guide",
    issuer: "Udemy",
    date: "Issued 2022",
    image: "/certificates/certificate_3.png",
    credential: "https://example.com",
    description: "",
  },
  {
    title: "The Modern React with redux[2023]",
    issuer: "Udemy",
    date: "Issued 2022",
    image: "/certificates/certificate_4.png",
    credential: "https://example.com",
    description: "",
  },
  {
    title: "JavaScript Biginners",
    issuer: "Udemy",
    date: "Issued 2022",
    image: "/certificates/certificate_5.png",
    credential: "https://example.com",
    description: "",
  },
  {
    title: "AWS Certified Solutions Architect",
    issuer: "AWS Training and Certification",
    date: "Issued 2020",
    image: "/certificates/certificate_6.png",
    credential: "https://aws.amazon.com/verification",
    description:
      "Verified system architectural knowledge across compute, storage, networking, and AWS security best practices.",
  },
];

export const careerJourney = [
  {
    period: "2023 - Present",
    title: "Product-minded Engineer",
    place: "Credera",
    type: "Current focus",
    icon: Rocket,
    summary:
      "Owns larger pieces of product delivery, from clarifying requirements to building polished interfaces, improving systems, and measuring outcomes.",
  },
  {
    period: "2016 - 2019",
    title: "Projects and portfolio building",
    place: "Quanteon Solutions LLP.",
    type: "Early step and initial work",
    icon: BriefcaseBusiness,
    summary:
      "Turned classroom concepts into practical interfaces, experimented with React and APIs, and started shaping a product-focused engineering workflow.",
  },
  {
    period: "2013 - 2016",
    title: "Master's Degree in Computer Application",
    place: "National Institute of Technology, Raipur (India)",
    type: "College",
    icon: University,
    summary:
      "Built a foundation in programming, data structures, databases, and software engineering while exploring web development through academic and personal projects.",
  }
];

export const timeline = [
  {
    period: "2023 - 2026",
    title: "Senior Specialist",
    company: "Credera",
    summary:
      "Designed and built scalable application modules from the ground up, ensuring clean architecture and maintainable code. Championed code reusability by creating reusable UI components, utilities, and common business logic, reducing development effort and increasing consistency across projects.",
  },
  {
    period: "2020 - 2022",
    title: "Senior Software Developer",
    company: "Innominds Software Inc.",
    summary:
      "Successfully led the design and implementation of multiple application modules from scratch, taking full ownership from requirement analysis through deployment and post-release support. Influenced key technical decisions, optimized development workflows, promoted code reusability, and introduced best practices that significantly improved project velocity, maintainability, and long-term scalability.",
  },
  {
    period: "2019 - 2020",
    title: "Frontend Engineer",
    company: "Qvantel Software Pvt Ltd.",
    summary:
      "Expanded shared UI foundations and performance improvements for customer-facing workflows in a fast-moving environment.",
  },
  {
    period: "2016 - 2019",
    title: "Software Engineer",
    company: "Quanteon Solutions LLP.",
    summary:
      "Built production-ready web and mobile applications alongside designers and founders, shaping the earliest product delivery workflows.",
  },
];
