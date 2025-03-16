import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="ovo-font flex items-end gap-2 text-xl md:text-2xl mb-3">
        Hi! I'm Sohith Reddy{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] ovo-font">
        Full Stack Developer & Deep Learning,Cloud Enthusiast
      </h1>
      <p className="max-w-1xl mx-auto ovo-font">
        I'm a full-stack developer passionate about deep learning, cloud
        computing, and scalable applications. I have experience with React,
        Next.js, Node.js, and machine learning, including computer vision and
        NLP.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full text-white bg-black border-gray-500 flex items-center gap-2"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
        <a
          href="/resume.pdf"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
}

export default Header;
