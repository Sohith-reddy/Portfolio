import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={assets.portfolio_1}
          alt="logo"
          className="w-36 mx-auto mb-2"
        />

        <div className="w-max flex items-center gap-2 mx-auto">
          <MdEmail className="w-6 h-6" />
          sohithreddy33@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>&copy; 2025 Sohith Reddy. All Rights reserved. </p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Sohith-reddy"
              className="flex items-center gap-2 hover:text-gray-600 transition-colors"
            >
              <FaGithub className="w-5 h-5" />
              Github
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sohithreddy/"
              className="flex items-center gap-2 hover:text-gray-600 transition-colors"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://leetcode.com/u/sohith_reddy01/"
              className="flex items-center gap-2 hover:text-gray-600 transition-colors"
            >
              <SiLeetcode className="w-5 h-5" />
              LeetCode
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
