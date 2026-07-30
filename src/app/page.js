"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  CheckCircle2,
  Database,
  ExternalLink,
  GitBranch,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  PenTool,
  Rocket,
  ShieldCheck,
  Sparkles,
  Terminal,
  University,
  Workflow,
  X,
} from "lucide-react";

const profile = {
  name: "RamniwasG",
  role: "Software Engineer",
  email: "ramniwas.nitrr15@gmail.com",
  location: "Uttar Pradesh - India",
  intro:
    "I design and build elegant digital products that turn complex workflows into focused, reliable experiences.",
  story:
    "I am a product-minded builder who enjoys the space between thoughtful interface design, strong engineering systems, and measurable business outcomes. My work is shaped by curiosity, clear communication, and a bias for shipping polished details that make products easier to trust.",
  showcaseVideo: "/showcase.mp4",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Personal Work", href: "#personal-work" },
  { label: "Career", href: "#career" },
  { label: "Contact", href: "#contact" },
];

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

const socials = [
  { label: "GitHub", href: "https://github.com", icon: GitHubMark },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedInMark },
  { label: "X / Twitter", href: "https://twitter.com", icon: XTwitterMark },
];

const contactSocials = [
  ...socials,
  { label: "Facebook", href: "https://facebook.com", icon: FacebookMark },
  { label: "YouTube", href: "https://youtube.com", icon: YouTubeMark },
];

const aboutSocials = contactSocials.filter((social) =>
  ["Facebook", "YouTube"].includes(social.label),
);

const strengths = [
  "Product strategy translated into clear, shippable interfaces",
  "Reusable component systems with accessible interaction patterns",
  "Performance-minded frontend architecture and clean API integration",
  "Calm collaboration across design, engineering, and stakeholders",
];

const skills = [
  {
    category: "Frontend",
    icon: Layers3,
    items: ["React", "TypeScript", "Next.js", "Vue.js", "Svelte.js", "Tailwind CSS", "AEM"],
  },
  {
    category: "Backend",
    icon: Database,
    items: ["Node.js", "REST APIs", "MongoDB", "GraphQL", "PostgreSQL"],
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

const projects = [
  {
    id: 11,
    title: "Capstone Project - JiraBoard",
    company: "Credera",
    client: "Credera",
    tenure: "Feb-2026 to Apr-2026",
    role: "Senior Developer",
    description:
      "This is a internal project for Credera to manage the Jira tickets and also provide the dashboard to see the status of the tickets. This application is used to create a common stack to provide seamless and rich feature user interface across all the brands and also separates by static sites vs ecommerce sites as well. Ecommerce sites provide all the ecom feature like displaying products, adding to cart and placing order based on location through different payment methods.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Express"],
    icon: BriefcaseBusiness,
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
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 6,
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
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 3,
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
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 2,
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
    github: "#",
    live: "#",
    isOpen: false,
  },
  {
    id: 1,
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
    github: "#",
    live: "#",
    isOpen: false,
  },
];

const personalWork = [
  {
    title: "Habit Lab",
    category: "Personal productivity experiment",
    description:
      "A small habit tracker exploring calmer streaks, weekly reflection, and progress without guilt-heavy metrics.",
    image: "/personal-work-habit-lab.svg",
    live: "https://example.com/habit-lab",
    stack: ["Next.js", "Local Storage", "Tailwind"],
  },
  {
    title: "Travel Notes",
    category: "Trip planning workspace",
    description:
      "A lightweight planner for saving places, grouping ideas by day, and keeping useful trip details in one view.",
    image: "/personal-work-travel-notes.svg",
    live: "https://example.com/travel-notes",
    stack: ["React", "Maps", "Responsive UI"],
  },
  {
    title: "DevDesk",
    category: "Developer utility",
    description:
      "A focused API scratchpad for testing requests, comparing responses, and keeping debugging notes nearby.",
    image: "/personal-work-devdesk.svg",
    live: "https://example.com/devdesk",
    stack: ["Next.js", "API Tools", "Dark UI"],
  },
];

const recentWork = {
  title: "Capstone Project",
  status: "Currently building",
  category: "Internal Project",
  description:
    "A focused planning surface for tracking today's priorities, small build queues, and quick implementation notes without the weight of a full project manager.",
  image: "/recent-work-focusboard.svg",
  live: "https://example.com/focusboard",
  updated: "Updated this month",
  stack: ["Next.js", "Node.js", "Tailwind CSS", "lucide-react", "MongoDB"],
};

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "AWS Training and Certification",
    date: "Issued 2026",
    image: "/certificate_0.png",
    credential: "https://aws.amazon.com/verification",
    description:
      "Verified foundational cloud knowledge across compute, storage, networking, and AWS security best practices.",
  },
  {
    title: "Cloud Architecture Professional",
    issuer: "Example Cloud Institute",
    date: "Issued 2024",
    image: "/certificate_2.png",
    credential: "https://example.com",
    description:
      "Covered resilient cloud systems, deployment strategy, observability, and secure infrastructure patterns.",
  },
  {
    title: "Certified Frontend Architect",
    issuer: "Modern Web Academy",
    date: "Issued 2025",
    image: "/certificate_3.png",
    credential: "https://example.com",
    description:
      "Demonstrated expertise in scalable frontend architecture, performance optimization, and component-driven design.",
  },
  {
    title: "Product Design Systems Specialist",
    issuer: "DesignOps Institute",
    date: "Issued 2025",
    image: "/certificate_4.png",
    credential: "https://example.com",
    description:
      "Validated skills in design system governance, accessible component libraries, and cross-team collaboration.",
  },
  {
    title: "Full-Stack Engineering Certificate",
    issuer: "Developer Academy",
    date: "Issued 2023",
    image: "/certificate_5.png",
    credential: "https://example.com",
    description:
      "Focused on building modern web applications with end-to-end development, testing, and deployment workflows.",
  },
];

const careerJourney = [
  {
    period: "2018 - 2022",
    title: "Bachelor's Degree in Computer Science",
    place: "[College / University Name]",
    type: "College",
    icon: University,
    summary:
      "Built a foundation in programming, data structures, databases, and software engineering while exploring web development through academic and personal projects.",
  },
  {
    period: "2021 - 2022",
    title: "Projects, internships, and portfolio building",
    place: "Self-directed learning",
    type: "Early practice",
    icon: GraduationCap,
    summary:
      "Turned classroom concepts into practical interfaces, experimented with React and APIs, and started shaping a product-focused engineering workflow.",
  },
  {
    period: "2022 - 2024",
    title: "Frontend / Full-stack Engineer",
    place: "[First Company / Role]",
    type: "First role",
    icon: BriefcaseBusiness,
    summary:
      "Contributed to production applications, collaborated with design and backend teams, and learned how to ship reliable features in real product environments.",
  },
  {
    period: "2024 - Present",
    title: "Product-minded Engineer",
    place: "[Current Company / Freelance / Client Work]",
    type: "Current focus",
    icon: Rocket,
    summary:
      "Owns larger pieces of product delivery, from clarifying requirements to building polished interfaces, improving systems, and measuring outcomes.",
  },
];

const timeline = [
  {
    period: "2026",
    title: "Lead Product Engineer",
    company: "Independent / Select Clients",
    summary:
      "Owns end-to-end product delivery for polished digital systems, from strategy through implementation and iteration.",
  },
  {
    period: "2022",
    title: "Senior Product Engineer",
    company: "Independent / Select Clients",
    summary:
      "Led product discovery, polished web applications, and more reliable delivery across engineering and design partners.",
  },
  {
    period: "2020",
    title: "Product-focused Engineer",
    company: "Platform team",
    summary:
      "Deepened product delivery ownership with tighter collaboration on design systems, APIs, and launch readiness.",
  },
  {
    period: "2019",
    title: "Frontend Engineer",
    company: "Growth-stage SaaS Team",
    summary:
      "Expanded shared UI foundations and performance improvements for customer-facing workflows in a fast-moving environment.",
  },
  {
    period: "2016",
    title: "UI Engineer",
    company: "Digital Product Studio",
    summary:
      "Built production-ready web experiences alongside designers and founders, shaping the earliest product delivery workflows.",
  },
];

function SectionLabel({ children }) {
  return (
    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-700/15 bg-teal-50 px-3 py-1 text-sm font-medium text-teal-800">
      <Sparkles className="h-4 w-4" aria-hidden="true" />
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px",
      },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mx-auto mb-10 max-w-3xl text-center sm:mb-14 transition-transform duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <SectionLabel>{eyebrow}</SectionLabel>
      <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}

function useReveal() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function RevealSection({ id, className, children }) {
  const [ref, visible] = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </section>
  );
}

function RevealItem({ direction = "up", className = "", children }) {
  const [ref, visible] = useReveal();
  const translateClass =
    direction === "left"
      ? visible
        ? "translate-x-0 opacity-100"
        : "-translate-x-8 opacity-0"
      : direction === "right"
      ? visible
        ? "translate-x-0 opacity-100"
        : "translate-x-8 opacity-0"
      : visible
      ? "translate-y-0 opacity-100"
      : "translate-y-6 opacity-0";

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${translateClass}`}
    >
      {children}
    </div>
  );
}

function IconLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 shadow-sm shadow-slate-950/5 transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </a>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <article className="group flex h-full flex-col rounded-[8px] border border-slate-200/80 bg-white/85 p-6 shadow-sm shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-950/10">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-slate-950 text-white shadow-lg shadow-slate-950/20">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs text-slate-500">{project.company}</p>
          </div>
        </div>
        <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
          {project.tenure}
        </span>
      </div>
      <h3 className="mt-6 text-xl font-semibold text-slate-950">
        {project.title}
      </h3>
      <p className="mt-2 text-sm font-semibold text-teal-700">
        {project.client}
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        <span className="font-semibold text-slate-900">Role:</span> {project.role}
      </p>
      <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
        {project.description}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-4"
        >
          <GitBranch className="h-4 w-4" aria-hidden="true" />
          Code
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-4"
        >
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          Live
        </a>
      </div>
    </article>
  );
}

function CertificationCard({ certification }) {
  return (
    <article className="group overflow-hidden rounded-[8px] border border-slate-200 bg-white/85 shadow-sm shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-950/10">
      <div className="border-b border-slate-200 bg-slate-100 p-3">
        <Image
          src={certification.image}
          alt={`${certification.title} certificate`}
          width={960}
          height={620}
          className="aspect-[1.55/1] w-full rounded-[6px] object-cover shadow-sm"
        />
      </div>
      {/* <div className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[8px] bg-teal-700 text-white">
            <Award className="h-5 w-5" aria-hidden="true" />
          </div>
          <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-800">
            {certification.date}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-slate-950">
          {certification.title}
        </h3>
        <p className="mt-1 text-sm font-semibold text-teal-800">
          {certification.issuer}
        </p>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {certification.description}
        </p>
        <a
          href={certification.credential}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-4"
        >
          View credential
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div> */}
    </article>
  );
}

function PersonalWorkCard({ work }) {
  return (
    <article className="group overflow-hidden rounded-[8px] border border-slate-200/80 bg-white/85 shadow-sm shadow-slate-950/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-rose-300 hover:shadow-xl hover:shadow-rose-950/10">
      <a
        href={work.live}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open live ${work.title} project`}
        className="block bg-slate-950 p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
      >
        <Image
          src={work.image}
          alt={`${work.title} project screenshot`}
          width={1200}
          height={760}
          className="aspect-[1.58/1] w-full rounded-[6px] object-cover shadow-lg shadow-black/20 transition duration-300 group-hover:scale-[1.015]"
        />
      </a>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-rose-700">
              {work.category}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-slate-950">
              {work.title}
            </h3>
          </div>
          <a
            href={work.live}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit live ${work.title} project`}
            className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-300 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          {work.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {work.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function RecentWorkCard({ work }) {
  return (
    <article className="overflow-hidden rounded-[8px] border border-teal-200 bg-white/90 shadow-2xl shadow-teal-950/10 backdrop-blur">
      <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
        <a
          href={work.live}
          target="_blank"
          rel="noreferrer"
          aria-label={`Open live ${work.title} recent work`}
          className="block bg-slate-950 p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          <Image
            src={work.image}
            alt={`${work.title} recent work screenshot`}
            width={1200}
            height={760}
            className="aspect-[1.58/1] h-full w-full rounded-[6px] object-cover shadow-lg shadow-black/20"
          />
        </a>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-3 py-1 text-xs font-semibold text-white">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              {work.status}
            </span>
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
              {work.updated}
            </span>
          </div>
          <p className="text-sm font-semibold text-rose-700">
            {work.category}
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
            {work.title}
          </h3>
          <p className="mt-4 text-base leading-7 text-slate-600">
            {work.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {work.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
          <a
            href={work.live}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            View latest work
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

function CareerStep({ step, index }) {
  const Icon = step.icon;

  return (
    <article className="relative rounded-[8px] border border-slate-200 bg-white/85 p-6 shadow-sm shadow-slate-950/5 backdrop-blur transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-950/10">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-[8px] bg-slate-950 text-white shadow-lg shadow-slate-950/20">
            <Icon className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-teal-800">{step.type}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Step {index + 1}
            </p>
          </div>
        </div>
        <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
          {step.period}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-slate-950">{step.title}</h3>
      <p className="mt-1 text-sm font-semibold text-rose-700">{step.place}</p>
      <p className="mt-4 text-sm leading-6 text-slate-600">{step.summary}</p>
    </article>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAllCertifications, setShowAllCertifications] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ee] text-slate-900">
      <nav
        className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-[#f7f4ee]/80 backdrop-blur-xl"
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a
            href="#top"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-3 font-semibold tracking-tight text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            <span className="relative h-9 w-9 overflow-hidden rounded-full bg-slate-950 ring-1 ring-white/60">
              <Image
                src="/rng.png"
                alt="RamniwasG profile picture"
                width={382}
                height={504}
                className="h-full w-full object-cover object-[center_12%]"
                priority
              />
            </span>
            <span>{profile.name}</span>
          </a>
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-white hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <span className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-950/5">
              +91 8686340975
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </a>
          </div>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-300 hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`mx-auto max-w-7xl px-5 pb-4 transition md:hidden sm:px-8 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="rounded-[8px] border border-slate-200 bg-white/95 p-2 shadow-xl shadow-slate-950/10 backdrop-blur">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between rounded-[6px] px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-teal-50 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                {item.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-[6px] bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Email me
            </a>
          </div>
        </div>
      </nav>

      <RevealSection
        id="top"
        className="relative px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:pt-36"
      >
        <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-300/20 blur-3xl" />
        <div className="absolute right-0 top-56 -z-0 h-72 w-72 rounded-full bg-rose-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
              <MapPin className="h-4 w-4 text-teal-700" aria-hidden="true" />
              {profile.location}
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              {profile.name}
              <span className="block text-teal-800">{profile.role}</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                View projects
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              {/* <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/75 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-teal-300 hover:text-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                Start a conversation
              </a> */}
            </div>
            <div className="mt-10 rounded-[32px] border border-slate-200 bg-white/90 p-5 shadow-xl shadow-slate-950/10 backdrop-blur sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-teal-700">
                    Showcase video
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-slate-950">
                    Watch a quick walkthrough
                  </h2>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                    A short recorded demo that highlights my approach, process, and polished delivery.
                  </p>
                </div>
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Recorded demo
                </span>
              </div>
              <div className="mt-5 overflow-hidden rounded-[24px] border border-slate-200 bg-slate-950">
                <video
                  controls
                  className="w-full bg-slate-950"
                  poster="/video-poster.png"
                >
                  <source src={profile.showcaseVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {socials.map((social) => (
                <IconLink key={social.label} {...social} />
              ))}
            </div>
            <a
              href="#personal-work"
              className="mt-8 flex max-w-xl items-center gap-4 rounded-[8px] border border-teal-200 bg-white/80 p-4 text-left shadow-lg shadow-teal-950/10 backdrop-blur transition hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <span className="flex h-12 w-12 flex-none items-center justify-center rounded-[8px] bg-teal-700 text-white">
                <Rocket className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-teal-800">
                  Recent work
                </span>
                <span className="mt-1 block text-sm font-semibold text-slate-950">
                  {recentWork.title} - {recentWork.status}
                </span>
                <span className="mt-1 block text-sm leading-5 text-slate-600">
                  See the latest personal build I am actively shaping.
                </span>
              </span>
              <ArrowUpRight
                className="ml-auto h-5 w-5 flex-none text-slate-500"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 h-28 w-28 rounded-full bg-teal-200/20 blur-3xl" />
            <div className="absolute right-0 bottom-12 h-36 w-36 rounded-full bg-rose-200/25 blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-white/60 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/20">
              <div className="absolute -right-8 -top-8 hidden h-24 w-24 rounded-full border border-emerald-200 bg-emerald-50/90 blur-xl sm:block" />
              <div className="absolute -left-7 bottom-16 hidden h-20 w-20 rounded-full border border-amber-200 bg-amber-50/90 blur-xl sm:block" />
              <div className="relative h-[460px] overflow-hidden rounded-[28px] border border-slate-800 bg-slate-950">
                <Image
                  src="/rng.png"
                  alt="RamniwasG profile picture"
                  width={382}
                  height={504}
                  className="h-full w-full object-cover object-[center_12%] transition duration-500 hover:scale-105"
                  priority
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/95 via-slate-950/65 to-transparent p-5">
                  <div className="rounded-[18px] border border-white/15 bg-slate-900/80 p-4 text-white shadow-xl shadow-black/20 backdrop-blur">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-300">
                      Software Engineer
                    </p>
                    <p className="mt-2 text-2xl font-semibold">RamniwasG</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Building polished interfaces, reliable systems, and
                      personal products with a practical engineering mindset.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-3 text-center">
                {[
                  ["18+", "Projects"],
                  ["02", "Certs"],
                  ["2026", "Portfolio"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[18px] border border-slate-800 bg-slate-950/80 p-3"
                  >
                    <p className="text-lg font-semibold text-white">
                      {value}
                    </p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-slate-400">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="about" className="px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>About</SectionLabel>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Clear thinking, careful craft, and products people can trust.
            </h2>
            <div className="mt-8 max-w-sm rounded-[8px] border border-white/70 bg-white/75 p-3 shadow-2xl shadow-slate-950/10 backdrop-blur">
              <Image
                src="/personal.png"
                alt="Personal portrait of RamniwasG"
                width={1157}
                height={1360}
                className="aspect-[1157/1360] w-full rounded-[6px] object-cover"
                priority
              />
            </div>
          </div>
          <div className="rounded-[8px] border border-slate-200 bg-white/75 p-6 shadow-sm shadow-slate-950/5 sm:p-8">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-700/15 bg-teal-50 px-3 py-1.5 text-sm font-semibold text-teal-800">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              Uttar Pradesh - India
            </div>
            <p className="text-lg leading-8 text-slate-600">{profile.story}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {strengths.map((strength) => (
                <div key={strength} className="flex gap-3">
                  <CheckCircle2
                    className="mt-1 h-5 w-5 flex-none text-teal-700"
                    aria-hidden="true"
                  />
                  <p className="text-sm leading-6 text-slate-700">{strength}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm font-semibold text-slate-700">
                Follow my work on Facebook and YouTube
              </p>
              <div className="flex items-center gap-3">
                {aboutSocials.map((social) => (
                  <IconLink key={social.label} {...social} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="certifications" className="bg-white/55 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Certifications"
            title="Verified learning and certifications."
          >
            
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            {(showAllCertifications ? certifications : certifications.slice(0, 2)).map(
              (certification, index) => (
                <RevealItem
                  key={certification.title}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="w-full"
                >
                  <CertificationCard certification={certification} />
                </RevealItem>
              ),
            )}
          </div>
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAllCertifications((current) => !current)}
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              {showAllCertifications ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="projects" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects"
            title="Client projects with a bias toward measurable impact."
          >
            Editable sample projects that show the tone, structure, and level of
            specificity a real portfolio should have.
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            {(showAllProjects ? projects : projects.slice(0, 2)).map((project, index) => (
              <RevealItem
                key={project.title}
                direction={index % 2 === 0 ? "left" : "right"}
                className="w-full"
              >
                <ProjectCard project={project} />
              </RevealItem>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((current) => !current)}
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              {showAllProjects ? "Show less" : "Show more"}
            </button>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="experience" className="bg-slate-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading
            eyebrow="Experience"
            title="A timeline shaped by ownership and useful outcomes."
          >
            Each step adds more range across strategy, craft, systems, and
            delivery.
          </SectionHeading>
          <div className="relative">
            <div className="absolute left-4 top-4 hidden h-[calc(100%-2rem)] w-px bg-white/15 sm:block" />
            <div className="space-y-5">
              {timeline.map((item) => (
                <RevealItem key={`${item.period}-${item.title}`} direction="up" className="w-full">
                  <article
                    className="relative rounded-[8px] border border-white/10 bg-white/[0.06] p-6 shadow-xl shadow-black/10 backdrop-blur"
                  >
                    <div className="hidden sm:absolute sm:left-4 sm:top-8 sm:h-3 sm:w-3 sm:-translate-x-1/2 sm:rounded-full sm:bg-amber-300 sm:ring-8 sm:ring-slate-950" />
                    <div className="sm:pl-8">
                      <p className="text-sm font-semibold text-amber-200">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-teal-200">
                        {item.company}
                      </p>
                      <p className="mt-4 leading-7 text-slate-300">
                        {item.summary}
                      </p>
                    </div>
                  </article>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="skills" className="bg-white/55 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Skills"
            title="A practical toolkit for building refined products."
          >
            Grouped capabilities that support the full path from ambiguous idea
            to maintainable launch.
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, index) => {
              const Icon = group.icon;
              return (
                <RevealItem
                  key={group.category}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="w-full"
                >
                  <article
                    className="rounded-[8px] border border-slate-200 bg-[#fbfaf7] p-6 shadow-sm transition hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-950/10"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[8px] bg-teal-700 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {group.category}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full bg-white px-3 py-1 text-sm font-medium text-slate-700 ring-1 ring-slate-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </article>
                </RevealItem>
              );
            })}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="personal-work" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Personal work"
            title="Side projects where I explore ideas beyond client constraints."
          >
            Independent builds with editable screenshots, concise context, and
            direct live links for quick review.
          </SectionHeading>
          <div className="mb-12">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-800">
                  Recent work
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
                  Latest personal build in progress
                </h3>
              </div>
              <p className="max-w-xl text-sm leading-6 text-slate-600">
                A quick signal for visitors who want to understand what I am
                exploring right now.
              </p>
            </div>
            <RevealItem direction="left" className="w-full">
              <RecentWorkCard work={recentWork} />
            </RevealItem>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {personalWork.map((work, index) => (
              <RevealItem
                key={work.title}
                direction={index % 2 === 0 ? "left" : "right"}
                className="w-full"
              >
                <PersonalWorkCard work={work} />
              </RevealItem>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="career" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Career"
            title="From college foundations to real product ownership."
          >
            A concise path through education, early practice, and professional
            growth that explains how the work evolved over time.
          </SectionHeading>
          <div className="relative grid gap-5 md:grid-cols-2">
            {careerJourney.map((step, index) => (
              <RevealItem
                key={`${step.period}-${step.title}`} 
                direction={index % 2 === 0 ? "left" : "right"}
                className="w-full"
              >
                <CareerStep step={step} index={index} />
              </RevealItem>
            ))}
          </div>
        </div>
      </RevealSection>

      <RevealSection id="contact" className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-[8px] border border-slate-200 bg-white/80 p-8 text-center shadow-2xl shadow-slate-950/10 backdrop-blur sm:p-12">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-700">
            <Mail className="h-6 w-6" aria-hidden="true" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Let&apos;s build something with care.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Have a product idea, a design system to mature, or a workflow that
            needs clarity? I would love to hear where you are headed.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              {profile.email}
            </a>
            <div className="flex items-center gap-3">
              {contactSocials.map((social) => (
                <IconLink key={social.label} {...social} />
              ))}
            </div>
          </div>
        </div>
      </RevealSection>

      <footer className="border-t border-slate-200 px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-slate-600 sm:flex-row">
          <p>© 2026 {profile.name}</p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-semibold text-slate-700 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
          >
            Back to top
            <Globe2 className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </main>
  );
}
