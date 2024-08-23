'use client'
import Button from "../ui/handleButton";
import starsBg from "@/public/stars.png"
import gridLines from '@/public/assets/grid-lines.png'
import { motion,useMotionTemplate,useMotionValue,useScroll, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePostion = (event:MouseEvent) => {
    if(!to.current) return;
    const {top, left} = to.current?.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
   
  }
   useEffect(() => {
    window.addEventListener('mousemove',updateMousePostion )
    return () => {
      window.removeEventListener('mousemove', updateMousePostion);
    }
   },[])
  return [mouseX, mouseY];
}

export const CallToAction = () => {

  const borderDivRef = useRef<HTMLDivElement>(null);
  const sectionRef  = useRef<HTMLElement>(null);

  const { scrollYProgress } =  useScroll({
    target: sectionRef,
    offset: ['start end', 'end center']
  })

  const [mouseY, mouseX] = useRelativeMousePosition(borderDivRef)
  const backgroundPositionY =  useTransform(scrollYProgress, [0,1], [-300, 300] );

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`

  console.log('')
  return (
    <section className="py-20 md:py-24" 
     ref={sectionRef}>
      <div className="container">
        <motion.div 
         ref={borderDivRef}
         className="border border-white/15 py-24 rounded-xl overflow-hidden relative group"
          style={{
            backgroundPositionY,
            backgroundImage: `url(${starsBg.src})`,
          }}
          animate={{
            backgroundPositionY: starsBg.width
          }} 
          transition={{
            repeat:Infinity,
            duration: 30,
            ease: 'linear'
          }}
          >
          <div className="absolute inset-0 bg-[rgb(57,11,126)] bg-blend-overlay transition duration-700
            [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0"
            style={{
              backgroundImage: `url(${gridLines.src})`
            }}
          >
          </div>
          <motion.div 
          animate={{

          }}
          className="absolute inset-0 bg-[rgb(57,11,126)] bg-blend-overlay transition duration-700
            [mask-image:radial-gradient(50%_50%_at_0px_0px,black,transparent)] opacity-0  group-hover:opacity-100"
            style={{
              backgroundImage: `url(${gridLines.src})`,
              maskImage,
            }}
          >
          </motion.div>
          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto tracking-tighter text-center font-medium">Ai Drive Grid Layout</h2>
            <p className=" text-center md:text-xl max-w-ms mx-auto text-llg text-white/70 px-4 mt-5 tracking-tight">Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Recusandae.
            </p>
            <div className="flex justify-center mt-5">
              <Button>Join Week</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
