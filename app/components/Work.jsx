'use client'
import { workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Reveal from "./Reveal";

const GITHUB_URL = "https://www.github.com/Sohith-reddy/";

const Work = () => {
  return (
    <section id="work" className="section-alt py-24 sm:py-32 scroll-mt-12">
      <div className="apple-container">
        <Reveal as="p" className="apple-eyebrow text-center">
          My portfolio
        </Reveal>
        <Reveal as="h2" delay={0.05} className="apple-headline text-center mt-2">
          Latest work.
        </Reveal>
        <Reveal as="p" delay={0.1} className="apple-subhead text-center max-w-2xl mx-auto mt-5">
          Projects spanning programming, cloud computing, AI and web
          development — built with Python, Java, JavaScript and Typescript.
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16">
          {workData.map((project, index) => (
            <Reveal key={index} delay={0.06 * index}>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="apple-card surface-white block group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p className="text-[13px] font-medium tracking-[-0.008em] text-secondary">
                    {project.description}
                  </p>
                  <h3 className="mt-1 text-[21px] font-semibold tracking-[-0.018em] text-primary">
                    {project.title}
                  </h3>
                  <span className="link-apple mt-4">
                    View project
                    <span aria-hidden="true">&rsaquo;</span>
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="flex justify-center mt-14">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-apple-secondary"
          >
            See more on GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
};

export default Work;
