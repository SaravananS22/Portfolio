import React from "react";
import aboutImg from "../assets/dev.avif";
import { ABOUT_TEXT } from "../assets/constants";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap">
        <motion.div 
          className="w-full lg:w-1/2 lg:p-8"
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:-100}}
          transition={{duration:0.5}}
        >
          <div className="flex items-center justify-center">
            <img src={aboutImg} className="rounded-2xl w-[300px] md:w-[400px]"/>
          </div>
        </motion.div>
        <motion.div 
          className="w-full lg:w-1/2"
          whileInView={{opacity:1,x:0}}
          initial={{opacity:0,x:100}}
          transition={{duration:0.5}}
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-neutral-400">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
