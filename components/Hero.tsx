import React from "react";
import MagicButton from "./MagicButton";
import { Download } from "lucide-react";
import Spotlights from "./ui/Spotlights";
import GridBackGround from "./ui/GridBackGround";
import Socials from "./ui/Socials";
import Photo from "./ui/Photo";
import Stats from "./ui/Stats";
import { motion } from "framer-motion";

const Hero = () => {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1BHnzYpPFJd_hoZWiBL-Jt87Y66O2mwnf";
    link.download = "Darshan-Limbani Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="pb-20 pt-32" id="home">
      <Spotlights />
      <GridBackGround />
      <div className="mx-auto h-full relative">
        <div className="flex flex-col items-center justify-between">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:gap-10">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <motion.div
                  initial={{opacity: 0, x: -100}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: 0.5, duration: 0.7}}
              >
                <motion.h1
                    className="h1"
                    initial={{x: -1000}}
                    animate={{x: 0}}
                    transition={{duration: 1}}
                >
                  Hi there! 👋 I&apos;m <br/>
                  <span className="text-green">Darshan Limbani.</span>
                </motion.h1>
                <motion.p
                    initial={{x: -1000}}
                    animate={{x: 0}}
                    transition={{delay: 0.2, duration: 1}}
                    className="text-xl font-semibold ml-1 text-yellow-200"
                >
                  A Software Developer,
                </motion.p>
                <motion.p
                    initial={{x: -1000}}
                    animate={{x: 0}}
                    transition={{delay: 0.4, duration: 1}}
                    className="max-w-[500px] mt-4 mb-9 text-white/80 ml-1"
                >
                  Located in India&#x1F1EE;&#x1F1F3;. I specialize in creating seamless digital experiences
                  and possess expertise in a range of programming languages and technologies.
                </motion.p>
              </motion.div>

              <motion.div
                  initial={{opacity: 0, x: -100}}
                  animate={{opacity: 1, x: 0}}
                  transition={{delay: 0.6, duration: 0.7}}
                  className="flex flex-col xl:flex-row items-center gap-8"
              >
                <MagicButton
                    title="Download CV"
                    icon={<Download height={20} width={20} color="#00ff99"/>}
                    position="right"
                    handleClick={handleClick}
                    cv={true}
                />
                <div className="mb-8 xl:mb-0">
                  <Socials
                      containerStyles="flex gap-6"
                      iconStyles="w-9 h-9 border border-green rounded-full flex justify-center items-center text-green text-base hover:bg-green hover:text-black-100 hover:transition-all duration-500"
                  />
                </div>
              </motion.div>
            </div>
            <div className="order-1 xl:order-none mb-8 xl:mb-0 z-20">
              <Photo />
            </div>
          </div>
          <Stats />
        </div>
      </div>
    </section>
  );
};

export default Hero;
