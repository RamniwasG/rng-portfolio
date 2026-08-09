import Image from "next/image";
import { ArrowUpRight, GitBranch } from "lucide-react";

function getOrgLogoSrc(company) {
  const normalizedCompany = (company || "").toLowerCase();

  if (normalizedCompany.includes("credera")) return "/orgs/credera.png";
  if (normalizedCompany.includes("innominds")) return "/orgs/innominds.png";
  if (normalizedCompany.includes("qvantel")) return "/orgs/qvantel.png";
  if (normalizedCompany.includes("quanteon")) return "/orgs/quanteon.png";

  return null;
}

export default function ProjectCard({ project }) {
  const thumbnail = project.thumbnail || "/project-images/no-image.svg";
  const isFeatured = Boolean(project.featured);
  const orgLogoSrc = getOrgLogoSrc(project.company);

  return (
    <article
      className={`group flex h-full flex-col rounded-[12px] border p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
        isFeatured
          ? "border-amber-300 bg-gradient-to-br from-amber-50 via-white to-teal-50 shadow-amber-950/10 hover:border-amber-400 hover:shadow-amber-950/15"
          : "border-slate-200/80 bg-white/85 shadow-slate-950/5 hover:border-teal-300 hover:shadow-teal-950/10"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className={`flex h-12 w-12 items-center justify-center overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm ${
              isFeatured ? "shadow-amber-950/10" : "shadow-slate-950/5"
            }`}
          >
            {orgLogoSrc ? (
              <Image
                src={orgLogoSrc}
                alt={`${project.company} logo`}
                width={48}
                height={48}
                className="h-full w-full object-contain p-1"
              />
            ) : (
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                {project.company?.slice(0, 2) || "PR"}
              </span>
            )}
          </div>
          <div>
            <p className="text-xs text-slate-500">{project.company}</p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-2">
          {isFeatured ? (
            <span className="rounded-full border border-amber-300 bg-amber-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-800">
              Featured
            </span>
          ) : null}
          <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">
            {project.tenure}
          </span>
        </div>
      </div>
      <div className="mt-6 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-xl font-semibold text-slate-950">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-semibold text-teal-700">
            {project.client}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            <span className="font-semibold text-slate-900">Role:</span> {project.role}
          </p>
        </div>
        <div className="flex-none">
          <Image
            src={thumbnail}
            alt={`${project.title} thumbnail`}
            width={100}
            height={60}
            className="h-[60px] w-[100px] rounded-[8px] border border-slate-200 object-cover"
          />
        </div>
      </div>
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
