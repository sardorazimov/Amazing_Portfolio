"use client"

import Button from "../ui/handleButton";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import starTs from '@/public/stars.png'
import { useRef } from "react";

export const Hero = () => {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });
  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    console.log("scrollYProgress", value)
  })
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])
  return (
    <motion.section
      animate={{
        backgroundPositionX: starTs.width
      }}
      transition={{
        repeat: Infinity,
        duration: 120,
        ease: 'linear',
      }}
      className="h-[610px] md:h-[800px] flex items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${'/stars.png'})`,
        backgroundPositionY,
      }}
    >
      <div className="absloute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>

      <div className="absolute md:h-96 md:w-96 h-[310px] w-[310px] bg-purple-500 rounded-full border-white/20 
     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-[radial-gradient(50%_50%_at_16.2%_18.1%,white,rgb(184,148,255)_37.7%,rgba(24,0,66))]
      shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* Circule 1  */}
      <motion.div
        style={{
          translateY: '-50%',
          translateX: '-50%',
        }}
        animate={{
          rotate: "1turn",
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'linear'
        }}
        className="absolute h-[390px] md:h-[460px] md:w-[460px] w-[390px] opacity-20 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full top-1/2 left-1/2  border-white">
        <div className="absolute h-3 w-3  left-0 rounded-full bg-white top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-3 w-3  left-1/2 rounded-full bg-white top-0 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5  inline-flex items-center justify-center left-full rounded-full border border-white top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-3 w-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
      {/* Circule 2 */}
      <motion.div
        style={{
          translateY: '-50%',
          translateX: '-50%',
        }}
        animate={{
          rotate: '-1turn'
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: 'linear'
        }}
        className="absolute h-[500px] w-[500px] md:w-[500px] md:h-[500px] border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed">
      </motion.div>
      <motion.div
        animate={{
          rotate: "1turn"
        }}
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
        transition={{
          repeat: Infinity,
          duration: 90,
          ease: 'linear'
        }}
        className="absolute h-[590px] md:w-[580px] md:h-[580px] w-[590px] border border-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10">
        <div className="absolute h-4 w-4 bg-white rounded-full top-1/2 -translate-x-1/2 -translate-y-1/2 left-0 "></div>
        <div className="absolute h-4 w-4 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      <div className="container relative mt-16">
        <h1 className="text-8xl md:text-[168px] md:leading-none text-center font-semibold tracking-tighter 
      text-transparent bg-clip-text bg-white
      bg-[radial-gradient(100%_100%_at_top_left,white,rgba(74,32,138.5))]">
          Ai Demo
        </h1>
        <p className="text-lg max-w-lx mx-auto md:text-xl text-white/70 mt-5 text-center ">
          Sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Watch Demo</Button>
        </div>
      </div>
    </motion.section>
  )
};
