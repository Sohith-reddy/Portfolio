'use client'
import { serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Reveal from "./Reveal";

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 scroll-mt-12">
      <div className="apple-container">
        <Reveal as="p" className="apple-eyebrow text-center">
          What I offer
        </Reveal>
        <Reveal as="h2" delay={0.05} className="apple-headline text-center mt-2">
          Services.
        </Reveal>
        <Reveal as="p" delay={0.1} className="apple-subhead text-center max-w-2xl mx-auto mt-5">
          From problem solving and deep learning to cloud computing and
          full stack delivery — built to scale.
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16">
          {serviceData.map(({ icon, title, description, link }, index) => (
            <Reveal
              key={index}
              delay={0.06 * index}
              className="apple-card surface-grey p-8 sm:p-10 flex flex-col"
            >
              <Image src={icon} alt="" className="w-10" />
              <h3 className="mt-5 text-[22px] font-semibold tracking-[-0.018em] text-primary">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-[1.5] text-secondary flex-1">
                {description}
              </p>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-apple mt-6"
              >
                Learn more
                <span aria-hidden="true">&rsaquo;</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
