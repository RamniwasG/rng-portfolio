import Image from "next/image";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { useState } from "react";

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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);

  const galleryImages = project.gallery?.length ? project.gallery : [thumbnail];
  const words = (project.description || "").split(/\s+/).filter(Boolean);
  const previewText = words.slice(0, 50).join(" ");
  const isTruncated = words.length > 50;
  const descriptionText = isExpanded || !isTruncated ? project.description : `${previewText}${"..."}`;

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
        <div
          className="relative flex-none"
          onMouseEnter={() => setIsGalleryOpen(true)}
          onMouseLeave={() => setIsGalleryOpen(false)}
          onFocus={() => setIsGalleryOpen(true)}
          onBlur={() => setIsGalleryOpen(false)}
        >
          <Image
            src={galleryImages[activeGalleryIndex] || thumbnail}
            alt={`${project.title} thumbnail`}
            width={100}
            height={60}
            className="h-[60px] w-[100px] rounded-[8px] border border-slate-200 object-cover"
          />
          {galleryImages.length > 1 ? (
            <div className="absolute inset-x-2 bottom-2 flex items-center justify-center gap-1.5 rounded-full bg-slate-950/75 px-2 py-1 backdrop-blur">
              {galleryImages.map((_, index) => (
                <button
                  key={`${project.title}-dot-${index}`}
                  type="button"
                  aria-label={`Show gallery image ${index + 1}`}
                  onClick={() => setActiveGalleryIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    activeGalleryIndex === index ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          ) : null}
          {isGalleryOpen && galleryImages.length > 1 ? (
            <div className="absolute left-1/2 top-full z-20 mt-3 w-[240px] -translate-x-1/2 rounded-[12px] border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-950/15">
              <Image
                src={galleryImages[activeGalleryIndex] || thumbnail}
                alt={`${project.title} gallery preview`}
                width={480}
                height={300}
                className="h-[140px] w-full rounded-[8px] object-cover"
              />
              <div className="mt-2 flex items-center justify-center gap-1.5">
                {galleryImages.map((_, index) => (
                  <button
                    key={`${project.title}-popup-dot-${index}`}
                    type="button"
                    aria-label={`Preview gallery image ${index + 1}`}
                    onClick={() => setActiveGalleryIndex(index)}
                    className={`h-2.5 w-2.5 rounded-full transition ${
                      activeGalleryIndex === index ? "bg-teal-600" : "bg-slate-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-4 flex-1">
        <p className="text-sm leading-6 text-slate-600">
          {descriptionText}
        </p>
        {isTruncated ? (
          <button
            type="button"
            onClick={() => setIsExpanded((current) => !current)}
            className="mt-2 text-sm font-semibold text-teal-700 transition hover:text-teal-800"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        ) : null}
      </div>
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
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-4"
          >
            <GitBranch className="h-4 w-4" aria-hidden="true" />
            Code
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-4"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            Live
          </a>
        )}
      </div>
    </article>
  );
}
