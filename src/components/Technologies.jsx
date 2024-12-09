import React from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';
import { AiOutlineHtml5 } from 'react-icons/ai';
import { IoLogoJavascript } from "react-icons/io";
import { motion } from 'framer-motion';

const Technologies = () => {
  const techIcons = [
    { icon: <RiReactjsLine className="text-7xl text-cyan-400" size={60} />, duration: 2.5 },
    { icon: <TbBrandNextjs className="text-7xl" size={60} />, duration: 3 },
    { icon: <SiMongodb className="text-7xl text-green-500" size={60}/>, duration: 5 },
    { icon: <AiOutlineHtml5 className="text-7xl text-html" size={60}/>, duration: 2 },
    { icon: <FaNodeJs className="text-7xl text-green-500" size={60} />, duration: 6 },
    { icon: <IoLogoJavascript className="text-7xl text-js" size={60}/>, duration: 4 },
  ];

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
      >
        {techIcons.map((tech, index) => (
          <motion.div
            key={index}
            className="rounded-2xl border-4 border-neutral-800 p-2"
            // variants={iconVariants(tech.duration)}
            // initial="initial"
            // animate="animate"
          >
            {tech.icon}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Technologies;
