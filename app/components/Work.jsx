import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react'

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg ovo-font">My Portfolio</h4>
      <h2 className="text-center text-5xl ovo-font">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ovo-font">
        Welcome to my Development portfolio! I specialize in programming, cloud
        computing, AI, and web development, with expertise in Python, C, Java,
        and Flutter. With certifications in AWS and Google Cloud, I also have a
        strong foundation in AI, data science, and responsive web design.
        Explore my work and journey through technology and innovation!
          </p>
          <div>
              {workData.map((project,index) => (
                  <div key={index} style={{backgroundImage:`url(${project.bgImage})`}}>
                      <div>
                          <h2>{project.title}</h2>
                          <p>{project.description}</p>
                      </div>
                      <div>
                          <Image src={assets.send_icon} alt='send-icon' className='w-5'/>
                        </div>
                  </div>
              ))}
          </div>
    </div>
  );
}

export default Work