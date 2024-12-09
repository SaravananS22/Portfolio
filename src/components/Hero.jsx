import React from "react";
import { HERO_CONTENT } from "../assets/constants";
import profilePic from "../assets/devLogo.avif";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              className="pb-16 text-4xl font-light tracking-tight lg:mt-16 lg:text-6xl"
              variants={container(0)}
              initial="hidden"
              animate="visible"
            >
              Saravanan S
            </motion.h2>
            <motion.span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
            >
              React Developer
            </motion.span>
            <motion.p
              className="my-2 max-w-xl py-6 text-neutral-400"
              variants={container(1)}
              initial="hidden"
              animate="visible"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              src={profilePic}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="w-[300px] md:w-[400px]"
              style={{
                borderRadius: "20px",
                filter: "brightness(80%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
