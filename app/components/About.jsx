'use client'
import { assets, infoList, toolsData } from '@/assets/assets'
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
          A full stack developer building for the web, the cloud, and everything
          in between.
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
              I am a full stack developer with a passion for deep learning and
              cloud computing. I build web applications using React, Next.js and
              Node.js, and I have worked on projects spanning computer vision and
              natural language processing. I'm currently deepening my cloud work
              across AWS and GCP to build applications that scale.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
              {infoList.map(({ icon, title, description }, index) => (
                <Reveal
                  key={index}
                  delay={0.06 * index}
                  className="apple-card surface-white p-6"
                >
                  <Image src={icon} alt="" className="w-7" />
                  <h3 className="mt-4 text-[17px] font-semibold tracking-[-0.012em] text-primary">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-[1.5] text-secondary">
                    {description}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal as="h3" delay={0.1} className="apple-eyebrow mt-12">
              Tools I use
            </Reveal>
            <Reveal delay={0.15} className="flex items-center gap-3 mt-4">
              {toolsData.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-14 aspect-square surface-white rounded-[14px] transition-transform duration-300 hover:-translate-y-1"
                >
                  <Image src={tool} alt="" className="w-6" />
                </div>
              ))}
            </Reveal>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About
