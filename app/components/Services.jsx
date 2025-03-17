import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg ovo-font">What I offer</h4>
      <h2 className="text-center text-5xl ovo-font">My Services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ovo-font">
        I'm a full-stack developer with a strong interest in deep learning,
        cloud computing, and building scalable applications. My expertise
        includes working with React, Next.js, Node.js, and machine learning,
        covering areas like computer vision and natural language processing.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 my-6">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={index}
            className="border border-gray-400 rounded-lg px-4 py-8 sm:px-8 sm:py-12 hover:shadow-xl hover:bg-purple-50 hover:-translate-y-1 duration-500 cursor-pointer min-w-[200px]"
          >
            <Image src={icon} alt="" className="w-10" />
            <h3 className="text-lg my-4 text-gray-700">{title}</h3>
            <p className="text-sm text-gray-600 leading-5">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more{" "}
              <Image src={assets.right_arrow} alt="" className="w-4" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
