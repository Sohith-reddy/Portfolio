'use client'
import { assets, infoList, skillGroups } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import Reveal from './Reveal'

const About = () => {
  return (
    <section id="about" className="section-alt py-24 sm:py-32 scroll-mt-12">
      <div className="apple-container">
        <Reveal as="p" className="apple-eyebrow text-center">
          Introduction
        </Reveal>
        <Reveal as="h2" delay={0.05} className="apple-headline text-center mt-2">
          About me.
        </Reveal>
        <Reveal as="p" delay={0.1} className="apple-subhead text-center max-w-2xl mx-auto mt-5">
          The core work is systems — fast, reliable backends.
        </Reveal>

        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 mt-16">
          <Reveal className="w-64 sm:w-80 shrink-0">
            <Image
              src={assets.user_image}
              alt="Sohith Reddy"
              className="w-full rounded-[18px]"
            />
          </Reveal>

          <Reveal delay={0.1} className="flex-1">
            <p className="apple-body max-w-2xl">
              I&apos;m a Software Engineer at Apptmyz, building the backend of a
              B2B logistics SaaS platform with Spring Boot, Java, PostgreSQL and
              Redis. I&apos;m strongest on the performance side — I took API
              latency from 1.8s to 600ms, cut peak CPU by 38% and built
              real-time dispatch tracking over WebSockets. Outside work I&apos;ve
              solved 1100+ LeetCode problems, and I ship RAG / LLM features
              where they genuinely help.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {infoList.map(({ title, description }, index) => (
                <Reveal
                  key={title}
                  delay={0.06 * index}
                  className="apple-card surface-white p-5"
                >
                  <h3 className="text-[13px] font-medium tracking-[-0.008em] text-secondary">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[15px] leading-[1.45] text-primary">
                    {description}
                  </p>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Technical skills, grouped as on the résumé */}
        <Reveal as="h3" className="apple-eyebrow text-center mt-20">
          Technical skills
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {skillGroups.map(({ title, items }, index) => (
            <Reveal
              key={title}
              delay={0.04 * index}
              className="apple-card surface-white p-5"
            >
              <h4 className="text-[15px] font-semibold tracking-[-0.012em] text-primary">
                {title}
              </h4>
              <ul className="flex flex-wrap gap-1.5 mt-3">
                {items.map(({ name, icon: Icon, color }) => (
                  <li key={name} className="tech-chip">
                    {Icon && (
                      <Icon
                        className="w-3.5 h-3.5 shrink-0"
                        style={color ? { color } : undefined}
                        aria-hidden="true"
                      />
                    )}
                    {name}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About
