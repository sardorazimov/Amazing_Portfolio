'use client'

import avatar1 from "@/public/assets/avatar-1.png";
import avatar2 from "@/public/assets/avatar-2.png";
import avatar3 from "@/public/assets/avatar-3.png";
import avatar4 from "@/public/assets/avatar-4.png";
import Image from "next/image";
import { motion } from "framer-motion"

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl text-center tracking-tighter font-medium ">  Testimonials </h2>
        <p className="text-white/70 text-lg text-center md:text-xl  tracking-tight mt-5 max-w-sm mx-auto">
          Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Praesentium, debitis!
        </p>
        <div className=" flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            style={{

            }}
            animate={{
              translateX: '0',
            }}
            initial={{
              translateX: "-50%"
            }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 30
            }}
            className="flex gap-5 flex-none -translate-x-1/2 pt-5">
            {[...testimonials, ...testimonials].map((testimonial) => (
              <div key={testimonial.name} className="border border-white/15 p-6 rounded-xl md:p-10
          bg-[linear-gradient(to_bottom_left,rgb(140,69,244,.4),black)]  max-w-xs flex-none md:max-w-md">
                <div className="text-lg tracking-tight md:text-2xl">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <div className="relative after:content-[''] after:absolute
             after:bg-[rgb(140,69,244)] after:mix-blend-soft-light
              before:content-[''] before:absolute before:inset-0 
              before:border before:border-white/30 before:z-10 before:rounded-lg">
                    <Image
                      src={testimonial.avatarImg}
                      alt={`Avatar for ${testimonial.name}`}
                      className="h-11 w-11 rounded-lg grayscale 
             border border-white/30"
                    />
                  </div>
                  <div className="">
                    <div className="">
                      {testimonial.name}
                    </div>
                    <div className="text-white/50 text-sm">
                      {testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
};
