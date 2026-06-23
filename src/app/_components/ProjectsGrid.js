// components/ProjectsGrid.jsx
"use client";
import Image from "next/image";
import { useState } from "react";

const PER_PAGE = 6;

function ProjectCard({ project: p }) {
  return (
    <div className="bg-slate-800 border border-slate-700 hover:border-blue-600 rounded-xl overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_0_20px_#2563eb44]">
      <div className="w-full h-48 overflow-hidden bg-slate-900">
        {p.category === "sqa" ? (
          <div
            className={`w-full h-full bg-gradient-to-br ${p.gradient} flex items-center justify-center text-4xl`}
          >
            {p.emoji}
          </div>
        ) : (
          <Image
            src={p.image}
            alt={p.title}
            width={400}
            height={400}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-slate-100 font-semibold text-[0.95rem] mb-1">
          {p.title}
        </h3>
        <p className="text-slate-400 text-[0.8rem] leading-relaxed mb-3">
          {p.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {p.tags.map((t) => (
            <span
              key={t}
              className="text-[0.68rem] px-2 py-0.5 bg-slate-950 text-blue-400 border border-blue-800 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          {p.category !== "sqa" && p.category !== "web-app" && (
            <a
              href={p.live}
              target="_blank"
              className="text-[0.72rem] px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors"
            >
              ↗ Live
            </a>
          )}
          <a
            href={p.github}
            target="_blank"
            className="text-[0.72rem] px-3 py-1 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 border border-slate-600 rounded-md transition-colors"
          >
            ⌥ GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function Pagination({ current, total, onChange }) {
  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => onChange(current - 1)}
        disabled={current === 1}
        className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:border-blue-600 hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        ←
      </button>
      {Array.from({ length: total }, (_, i) => i + 1).map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`w-9 h-9 flex items-center justify-center rounded-lg border text-sm font-medium transition-all
            ${p === current ? "bg-blue-600 border-blue-600 text-white" : "bg-slate-800 border-slate-700 text-slate-400 hover:border-blue-600 hover:text-blue-400"}`}
        >
          {p}
        </button>
      ))}
      <button
        onClick={() => onChange(current + 1)}
        disabled={current === total}
        className="w-9 h-9 flex items-center justify-center rounded-lg bg-slate-800 border border-slate-700 text-slate-400 hover:border-blue-600 hover:text-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
      >
        →
      </button>
    </div>
  );
}

export default function ProjectsGrid({ projects = [] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PER_PAGE);
  const pageProjects = projects.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  function handlePageChange(p) {
    setPage(p);
  }

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pageProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          current={page}
          total={totalPages}
          onChange={handlePageChange}
        />
      )}
    </section>
  );
}
