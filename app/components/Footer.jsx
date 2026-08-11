'use client'
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { Icon: FaGithub, label: "GitHub", href: "https://github.com/Sohith-reddy" },
  { Icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sohithreddy/" },
  { Icon: SiLeetcode, label: "LeetCode", href: "https://leetcode.com/u/sohith_reddy01/" },
];

const Footer = () => {
  return (
    <footer className="section-alt">
      <div className="apple-container py-12">
        <div className="text-center">
          <p className="text-[17px] font-semibold tracking-[-0.015em] text-primary">
            Sohith Reddy
          </p>
          <a
            href="mailto:sohithreddy33@gmail.com"
            className="link-apple mt-2 text-[15px]"
          >
            sohithreddy33@gmail.com
          </a>
        </div>

        <div className="border-t border-apple mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-secondary tracking-[-0.005em]">
            Copyright © 2026 Sohith Reddy. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {socials.map(({ Icon, label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[12px] text-secondary hover:text-primary transition-colors"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
