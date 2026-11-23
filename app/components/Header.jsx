'use client'
import { assets, heroStats, links } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { Icon: FaLinkedin, href: links.linkedin, label: "LinkedIn" },
  { Icon: SiLeetcode, href: links.leetcode, label: "LeetCode" },
  { Icon: FaGithub, href: links.github, label: "GitHub" },
];

// Apple staggers hero elements in sequence rather than all at once.
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Header = () => {
  return (
    <section
      id="top"
      className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-16"
    >
      <div className="apple-container flex flex-col items-center">
        <motion.div variants={rise} initial="hidden" animate="show" custom={0} className="relative mb-8">
          <span className="avatar-glow" aria-hidden="true" />
          <Image
            src={assets.profile_img}
            alt="Sohith Reddy"
            className="relative rounded-full w-28 h-28 object-cover ring-1 ring-[var(--apple-card-border)]"
            priority
          />
        </motion.div>

        <motion.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={1}
          className="status-pill mb-5"
        >
          <span className="live-dot" aria-hidden="true" />
          Software Engineer (SDE-1) at Apptmyz
        </motion.p>

        <motion.h1
          variants={rise}
          initial="hidden"
          animate="show"
          custom={2}
          className="apple-hero max-w-4xl"
        >
          Hi, I&apos;m Sohith.
          <br />
          <span className="apple-gradient-text">I build systems that scale.</span>
        </motion.h1>

        <motion.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={3}
          className="apple-subhead max-w-2xl mt-6"
        >
          Backend engineer on a B2B logistics SaaS platform — Spring Boot, Java,
          PostgreSQL and Redis behind workflows processing 10K+ transactions a
          day. Strongest on performance, shipping RAG/LLM features where they
          genuinely help.
        </motion.p>

        <motion.ul
          variants={rise}
          initial="hidden"
          animate="show"
          custom={4}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 w-full max-w-3xl"
        >
          {heroStats.map(({ value, label }) => (
            <li key={label} className="hero-stat">
              <span className="block text-[20px] sm:text-[22px] font-semibold tracking-[-0.02em] text-primary tabular-nums">
                {value}
              </span>
              <span className="block text-[12px] text-secondary mt-0.5">{label}</span>
            </li>
          ))}
        </motion.ul>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={5}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          <a href="#work" className="btn-apple">
            See my work
          </a>
          <a
            href={links.resume}
            download="Sohith_Reddy_Resume.pdf"
            className="btn-apple-secondary"
          >
            Download résumé
          </a>
        </motion.div>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={6}
          className="flex items-center gap-6 mt-10"
        >
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-secondary hover:text-primary transition-colors duration-300"
            >
              <Icon className="w-[22px] h-[22px]" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Header;
