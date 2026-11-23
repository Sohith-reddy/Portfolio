'use client'
import React, { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaGithub, FaLock, FaThumbtack } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { links, projectCategories, projectData } from "@/assets/assets";
import Reveal from "./Reveal";

const categoryLabel = Object.fromEntries(projectCategories.map((c) => [c.id, c.label]));

/* Card with a cursor-following spotlight and a gentle 3D tilt. The
   pointer position is written to CSS variables, so no re-render per move. */
const ProjectCard = ({ project, wide = false }) => {
  const ref = useRef(null);
  const { title, tagline, description, highlights, stack, language, live, github, pinned, accent } =
    project;

  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * 5}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 7}deg`);
  };

  const onPointerLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <article
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className={`project-card h-full flex flex-col ${wide ? "project-card-wide" : ""}`}
      style={{ "--accent-a": accent[0], "--accent-b": accent[1] }}
    >
      {/* Cover */}
      <div className="project-cover">
        <div className="project-cover-grid" aria-hidden="true" />
        <div className="relative flex items-start justify-between gap-3">
          <div className="flex flex-wrap gap-1.5">
            {project.categories.map((c) => (
              <span key={c} className="project-pill">
                {categoryLabel[c]}
              </span>
            ))}
          </div>
          {pinned && (
            <span className="project-pill inline-flex items-center gap-1" title="Pinned on GitHub">
              <FaThumbtack className="w-2.5 h-2.5" aria-hidden="true" />
              Pinned
            </span>
          )}
        </div>
        <div className="relative mt-auto">
          <p className="text-[13px] font-medium text-white/80 tracking-[-0.005em]">{tagline}</p>
          <h3 className="text-[28px] sm:text-[32px] font-semibold tracking-[-0.025em] text-white leading-tight">
            {title}
          </h3>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <p className="text-[15px] leading-[1.55] text-secondary">{description}</p>

        <ul className="mt-5 space-y-2">
          {highlights.map((h) => (
            <li key={h} className="flex gap-2.5 text-[14px] leading-[1.45] text-primary">
              <span className="project-bullet" aria-hidden="true" />
              {h}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-1.5 mt-6" aria-label="Tech stack">
          {stack.map((s) => (
            <li key={s} className="tech-chip">
              {s}
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-between gap-4 mt-auto pt-6">
          <span className="flex items-center gap-1.5 text-[12px] text-secondary">
            <span className="w-2.5 h-2.5 rounded-full" style={{ background: language.color }} aria-hidden="true" />
            {language.name}
          </span>
          <div className="flex items-center gap-2">
            {github ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action"
                aria-label={`${title} source code on GitHub`}
              >
                <FaGithub className="w-3.5 h-3.5" aria-hidden="true" />
                Code
              </a>
            ) : (
              <span className="project-action project-action-muted" title="Source code is private">
                <FaLock className="w-3 h-3" aria-hidden="true" />
                Private
              </span>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-action project-action-primary"
                aria-label={`${title} live demo`}
              >
                Live
                <FiArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

const Work = () => {
  const [active, setActive] = useState("all");
  const visible = projectData.filter((p) => active === "all" || p.categories.includes(active));
  const count = (id) => (id === "all" ? projectData.length : projectData.filter((p) => p.categories.includes(id)).length);

  return (
    <section id="work" className="py-24 sm:py-32 scroll-mt-12">
      <div className="apple-container">
        <Reveal as="p" className="apple-eyebrow text-center">
          My portfolio
        </Reveal>
        <Reveal as="h2" delay={0.05} className="apple-headline text-center mt-2">
          Selected projects.
        </Reveal>
        <Reveal as="p" delay={0.1} className="apple-subhead text-center max-w-2xl mx-auto mt-5">
          Backend systems, applied AI and full-stack products — my pinned GitHub work plus Shortify from my résumé.
        </Reveal>

        <Reveal delay={0.12} className="flex justify-center mt-10">
          <div role="tablist" aria-label="Filter projects by category" className="segmented">
            {projectCategories.map(({ id, label }) => (
              <button suppressHydrationWarning
                key={id}
                role="tab"
                aria-selected={active === id}
                onClick={() => setActive(id)}
                className={`segmented-item ${active === id ? "is-active" : ""}`}
              >
                {active === id && (
                  <motion.span
                    layoutId="segmented-pill"
                    className="segmented-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative">
                  {label}
                  <span className="ml-1.5 opacity-60 tabular-nums">{count(id)}</span>
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className={project.featured && active === "all" ? "md:col-span-2" : ""}
              >
                <ProjectCard project={project} wide={project.featured && active === "all"} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1} className="flex justify-center mt-14">
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="btn-apple-secondary">
            <FaGithub aria-hidden="true" />
            More on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Work;
