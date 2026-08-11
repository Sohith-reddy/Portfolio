'use client'
import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'
import { motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/sohithreddy/", label: "LinkedIn" },
  { Icon: SiLeetcode, href: "https://leetcode.com/u/sohith_reddy01/", label: "LeetCode" },
  { Icon: FaGithub, href: "https://github.com/Sohith-reddy", label: "GitHub" },
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
        <motion.div variants={rise} initial="hidden" animate="show" custom={0}>
          <Image
            src={assets.profile_img}
            alt="Sohith Reddy"
            className="rounded-full w-28 h-28 object-cover mb-8"
            priority
          />
        </motion.div>

        <motion.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={1}
          className="apple-eyebrow mb-3"
        >
          Hi, I'm Sohith Reddy
        </motion.p>

        <motion.h1
          variants={rise}
          initial="hidden"
          animate="show"
          custom={2}
          className="apple-hero max-w-4xl"
        >
          Full Stack Developer.
          <br />
          <span className="apple-gradient-text">Deep learning. Cloud.</span>
        </motion.h1>

        <motion.p
          variants={rise}
          initial="hidden"
          animate="show"
          custom={3}
          className="apple-subhead max-w-2xl mt-6"
        >
          I build scalable web applications with React, Next.js, Angular and
          Node.js — and work across machine learning, computer vision and NLP.
        </motion.p>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={4}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-8"
        >
          <a href="#work" className="link-apple">
            See my work
            <span aria-hidden="true">&rsaquo;</span>
          </a>
          <a
            href="/Resume.pdf"
            download="Sohith_Reddy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="link-apple"
          >
            Download résumé
            <span aria-hidden="true">&rsaquo;</span>
          </a>
        </motion.div>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={5}
          className="flex items-center gap-4 mt-10"
        >
          <a href="#contact" className="btn-apple">
            Contact me
          </a>
          <a
            href="https://github.com/Sohith-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-apple-secondary"
          >
            View GitHub
          </a>
        </motion.div>

        <motion.div
          variants={rise}
          initial="hidden"
          animate="show"
          custom={6}
          className="flex items-center gap-6 mt-12"
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
