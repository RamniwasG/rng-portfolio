"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Menu,
  Rocket,
  Sparkles,
  X,
} from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import {
  profile,
  navItems,
  socials,
  contactSocials,
  aboutSocials,
  strengths,
  skills,
  projects,
  recentWork,
  personalWork,
  certifications,
  careerJourney,
  timeline,
} from "@/lib/siteData";

 

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
          className="w-full max-h-[280px] min-h-[220px] rounded-[6px] object-contain shadow-lg shadow-black/20 transition duration-300 group-hover:scale-[1.015]"
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
            className="w-full max-h-[370px] rounded-[6px] object-contain shadow-lg shadow-black/20"
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
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const phoneNumber = "+91 8686340975";
  const [phoneCopied, setPhoneCopied] = useState(false);
  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setPhoneCopied(true);
      setTimeout(() => setPhoneCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };
  const [selectedNav, setSelectedNav] = useState(null);
  const [subscribeNewsletter, setSubscribeNewsletter] = useState(false);
  const [contactStatus, setContactStatus] = useState("");

  const handleContactSubmit = (event) => {
    event.preventDefault();
    setContactStatus("Thanks! I’ll get back to you soon.");
    setContactName("");
    setContactEmail("");
    setContactMessage("");
    setSubscribeNewsletter(false);
  };

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
                onClick={() => setSelectedNav(item.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 ${
                  selectedNav === item.href
                    ? "bg-teal-50 text-teal-800"
                    : "text-slate-600 hover:bg-white hover:text-slate-950"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <button
              type="button"
              onClick={handleCopyPhone}
              aria-label="Copy phone number to clipboard"
              title="Copy phone number"
              className="relative rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm shadow-slate-950/5 inline-flex items-center gap-2"
            >
              <span>{phoneNumber}</span>
              {phoneCopied && (
                <span className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 rounded-md bg-slate-950 px-3 py-1 text-xs font-medium text-white shadow">
                  Copied
                </span>
              )}
            </button>
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
                onClick={() => {
                  setIsMenuOpen(false);
                  setSelectedNav(item.href);
                }}
                className={`flex items-center justify-between rounded-[6px] px-4 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-teal-500 ${
                  selectedNav === item.href
                    ? "bg-teal-50 text-teal-800"
                    : "text-slate-700 hover:bg-teal-50 hover:text-teal-800"
                }`}
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
            <button
              type="button"
              onClick={() => {
                handleCopyPhone();
                setIsMenuOpen(false);
              }}
              aria-label="Copy phone number to clipboard"
              title="Copy phone number"
              className="relative mt-2 flex items-center justify-center gap-2 rounded-[6px] border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <span>{phoneNumber}</span>
              {phoneCopied && (
                <span className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 rounded-md bg-slate-950 px-3 py-1 text-xs font-medium text-white shadow">
                  Copied
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <RevealSection
        id="top"
        className="relative bg-[#f7f4ee] px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:pt-36"
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
                  
                </div>
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                  Demo
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
                  [`${projects.length + personalWork.length}+`, "Projects"],
                  ["02", "Certifications"],
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

      <RevealSection id="about" className="bg-white/70 px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>About me</SectionLabel>
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
            <div className="mt-6 flex justify-center">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Download resume
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="certifications" className="bg-emerald-50 px-5 py-20 sm:px-8">
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

      <RevealSection id="projects" className="bg-white/50 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Projects"
            title="Client Projects"
          >
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-2">
            {(showAllProjects ? projects : projects.slice(0, 4))
              .slice()
              .sort((a, b) => Number(b.featured) - Number(a.featured))
              .map((project, index) => (
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

      <RevealSection id="skills" className="bg-[linear-gradient(135deg,#fffdf8_0%,#fef3c7_100%)] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Skills"
            title="A practical toolkit for building refined products."
          >
            Grouped capabilities that support the full path from ambiguous idea
            to maintainable launch.
          </SectionHeading>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, index) => {
              const Icon = group.icon;
              const accentClass = [
                "from-teal-500 via-emerald-400 to-cyan-400",
                "from-sky-500 via-blue-400 to-indigo-400",
                "from-violet-500 via-fuchsia-400 to-purple-400",
                "from-amber-500 via-orange-400 to-rose-400",
              ][index % 4];
              const badgeClass = [
                "border-teal-100 bg-teal-50 text-teal-700",
                "border-sky-100 bg-sky-50 text-sky-700",
                "border-violet-100 bg-violet-50 text-violet-700",
                "border-amber-100 bg-amber-50 text-amber-700",
              ][index % 4];
              const iconClass = [
                "from-teal-600 to-emerald-500 shadow-teal-600/20",
                "from-sky-600 to-blue-500 shadow-sky-600/20",
                "from-violet-600 to-fuchsia-500 shadow-violet-600/20",
                "from-amber-600 to-orange-500 shadow-amber-600/20",
              ][index % 4];

              return (
                <RevealItem
                  key={group.category}
                  direction={index % 2 === 0 ? "left" : "right"}
                  className="h-full w-full"
                >
                  <article className="group relative flex h-full min-h-[290px] flex-col overflow-hidden rounded-[20px] border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.35)] backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-teal-300 hover:shadow-[0_25px_60px_-20px_rgba(13,148,136,0.35)]">
                    <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accentClass}`} />
                    <div className="flex items-start justify-between gap-3">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${iconClass} text-white shadow-lg`}>
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] ${badgeClass}`}>
                        Core
                      </span>
                    </div>
                    <div className="mt-5 flex-1">
                      <h3 className="text-lg font-semibold text-slate-950">
                        {group.category}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        A focused set of capabilities for creating polished, reliable experiences.
                      </p>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200/80 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition group-hover:border-teal-200 group-hover:bg-teal-50 group-hover:text-teal-800"
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

      <RevealSection id="personal-work" className="bg-white/75 px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Personal Work"
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

      <RevealSection id="career" className="bg-slate-50 px-5 py-20 sm:px-8">
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

      <RevealSection id="contact" className="bg-rose-50 px-5 py-20 sm:px-8">
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
          <div className="mt-10">
            <form
              onSubmit={handleContactSubmit}
              className="mx-auto grid max-w-3xl gap-4 text-left"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">
                    Name
                  </span>
                  <input
                    type="text"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Your name"
                    className="mt-2 w-full rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold text-slate-700">
                    Email
                  </span>
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Message
                </span>
                <textarea
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  rows={5}
                  placeholder="Tell me about your project or question"
                  className="mt-2 w-full rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100"
                />
              </label>
              <label className="inline-flex items-center gap-3 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={subscribeNewsletter}
                  onChange={(e) => setSubscribeNewsletter(e.target.checked)}
                  className="h-4 w-4 rounded border-slate-300 text-teal-700 focus:ring-teal-500"
                />
                Subscribe to the newsletter for updates.
              </label>
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
                {contactStatus && (
                  <p className="text-sm font-medium text-teal-700">
                    {contactStatus}
                  </p>
                )}
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-xl shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-slate-950 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">            
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
