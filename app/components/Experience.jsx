import { achievementData, experienceData } from "@/assets/assets";
import React from "react";
import { motion } from "motion/react";
import { FaBriefcase } from "react-icons/fa";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="experience"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg ovo-font"
      >
        Where I&apos;ve worked
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl ovo-font"
      >
        Experience
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12 mb-6"
      >
        {experienceData.map(({ role, company, period, points }, index) => (
          <motion.div
            whileHover={{ scale: 1.03 }}
            key={index}
            className="border border-gray-400 rounded-lg px-6 py-8 sm:px-8 hover:shadow-xl hover:bg-purple-50 hover:-translate-y-1 duration-500"
          >
            <div className="flex items-start gap-4">
              <FaBriefcase
                className="w-8 h-8 mt-1 shrink-0 text-gray-700"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-lg text-gray-800 font-semibold">{role}</h3>
                <p className="text-sm text-gray-600">
                  {company} · {period}
                </p>
              </div>
            </div>
            <ul className="list-disc pl-5 mt-5 space-y-2 text-sm text-gray-600 leading-6">
              {points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
      <motion.h4
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-16 mb-8 text-2xl ovo-font"
      >
        Achievements & Certifications
      </motion.h4>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {achievementData.map(({ icon: Icon, title, description }, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border-[0.5px] border-gray-400 rounded-xl p-6 hover:bg-purple-50 hover:-translate-y-1 duration-500 hover:shadow-xl"
          >
            <Icon className="w-7 h-7 mt-3 text-gray-700" aria-hidden="true" />
            <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Experience;
