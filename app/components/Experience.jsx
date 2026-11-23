'use client'
import React from "react";
import { achievementData, experienceData } from "@/assets/assets";
import Reveal from "./Reveal";

const Experience = () => {
  return (
    <section id="experience" className="section-alt py-24 sm:py-32 scroll-mt-12">
      <div className="apple-container">
        <Reveal as="p" className="apple-eyebrow text-center">
          Where I&apos;ve worked
        </Reveal>
        <Reveal as="h2" delay={0.05} className="apple-headline text-center mt-2">
          Experience.
        </Reveal>
        <Reveal as="p" delay={0.1} className="apple-subhead text-center max-w-2xl mx-auto mt-5">
          Building the backend of a B2B logistics SaaS platform — performance first.
        </Reveal>

        {/* Timeline */}
        <ol className="timeline mt-16">
          {experienceData.map(({ role, company, period, current, stack, points }, index) => (
            <Reveal as="li" key={role} delay={0.08 * index} className="timeline-item">
              <span className={`timeline-dot ${current ? "is-current" : ""}`} aria-hidden="true" />
              <div className="apple-card surface-white p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-[21px] font-semibold tracking-[-0.018em] text-primary">{role}</h3>
                    <p className="text-[15px] text-secondary mt-0.5">{company}</p>
                  </div>
                  <span className={`period-badge ${current ? "is-current" : ""}`}>
                    {current && <span className="live-dot" aria-hidden="true" />}
                    {period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {points.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-[1.55] text-secondary">
                      <span className="project-bullet mt-[0.6em]" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-1.5 mt-6" aria-label="Tech used">
                  {stack.map((s) => (
                    <li key={s} className="tech-chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Achievements */}
        <Reveal as="h3" className="apple-eyebrow text-center mt-20">
          Achievements &amp; certifications
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {achievementData.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={0.06 * index} className="apple-card surface-white p-6">
              <span className="icon-badge">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <h4 className="mt-4 text-[16px] font-semibold tracking-[-0.012em] text-primary">{title}</h4>
              <p className="mt-1.5 text-[13px] leading-[1.5] text-secondary">{description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
