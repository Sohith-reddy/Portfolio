'use client'
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ThemeToggle from "./ThemeToggle";
import styles from "../styles/Navbar.module.css";

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { Icon: FaLinkedin, href: "https://www.linkedin.com/in/sohithreddy/", label: "LinkedIn" },
  { Icon: SiLeetcode, href: "https://leetcode.com/u/sohith_reddy01/", label: "LeetCode" },
  { Icon: FaGithub, href: "https://github.com/Sohith-reddy", label: "GitHub" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const handleScroll = () => {
      let current = "top";
      for (const { href } of navItems) {
        const el = document.getElementById(href.replace("#", ""));
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 100 && bottom > 100) {
            current = href.replace("#", "");
            break;
          }
        }
      }
      setActive(`#${current}`);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[1000] apple-nav-blur">
        <nav className="apple-container flex items-center justify-between h-12">
          <a
            href="#top"
            className="text-[15px] font-semibold tracking-[-0.01em] text-primary hover:opacity-70 transition-opacity"
          >
            Sohith Reddy
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`text-xs tracking-[-0.01em] transition-opacity hover:opacity-100 ${
                    active === href
                      ? "text-primary opacity-100 font-medium"
                      : "text-primary opacity-80"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-5">
            <div className="hidden md:flex items-center gap-4">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-primary opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Icon className="w-[15px] h-[15px]" />
                </a>
              ))}
            </div>

            <ThemeToggle className="w-[17px] h-[17px]" />

            <button
              className={`md:hidden flex flex-col justify-center gap-[5px] w-6 h-6 ${styles.menuButton}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-[1.5px] w-[17px] bg-primary transition-transform duration-300 ${
                  menuOpen ? "translate-y-[3.25px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-[17px] bg-primary transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[3.25px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Apple's mobile menu slides down as a full frosted sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              // Set inline so the sheet is reliably opaque: page content must
              // never bleed through the menu links. The token keeps it
              // theme-aware.
              background: "var(--apple-sheet-bg)",
              backdropFilter: "saturate(180%) blur(20px)",
              WebkitBackdropFilter: "saturate(180%) blur(20px)",
            }}
            className="fixed inset-0 top-12 z-[999] md:hidden"
          >
            <ul className="apple-container pt-6">
              {navItems.map(({ label, href }, i) => (
                <motion.li
                  key={href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="border-b border-apple"
                >
                  <a
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-4 text-2xl font-semibold tracking-[-0.02em] text-primary"
                  >
                    {label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="apple-container flex items-center gap-6 pt-8">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-primary opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
