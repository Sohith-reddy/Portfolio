import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react";

const About = () => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2  text-lg ovo-font"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl ovo-font"
      >
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image
            src={assets.user_image}
            alt="User"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 ovo-font max-w-2xl">
            I&apos;m a Software Engineer at Apptmyz, building the backend of a
            B2B logistics SaaS platform with Spring Boot, Java, PostgreSQL and
            Redis behind workflows that process 10K+ transactions a day. I&apos;m
            strongest on the performance side — taking APIs from 1.8s to 600ms
            and cutting peak CPU by 38% — and I ship RAG/LLM features to
            production where they genuinely help. Outside work I&apos;ve solved
            1100+ LeetCode problems at an 1800+ contest rating.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-purple-50 hover:-translate-y-1 duration-500 hover:shadow-xl"
                key={index}
              >
                <Image src={icon} alt={title} className="w-7 mt-3" />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
              </motion.li>
            ))}
          </motion.ul>
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="my-6 text-gray-700 ovo-font"
          >
            Tech Stack
          </motion.h4>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 sm:gap-5 max-w-2xl"
          >
            {toolsData.map(({ icon: Icon, name, color }, index) => (
              <motion.li
                // initial={{ opacity: 0 }}
                whileHover={{ scale: 1.1 }}
                // transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 "
                key={index}
                title={name}
              >
                <Icon
                  aria-label={name}
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  style={{ color }}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default About