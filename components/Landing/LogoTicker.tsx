'use client'
import acmeLogo from '@/public/assets/logo-acme.png'
import apexLogo from '@/public/assets/logo-apex.png'
import celestialLogo from '@/public/assets/logo-celestial.png'
import pluseLogo from '@/public/assets/logo-pulse.png'
import echoLogo from '@/public/assets/logo-echo.png'
import {motion } from "framer-motion"

export const LogoTicker = () => {
  return (
   <section className='py-20 md:py-24'>
     <div className="container">
      <div className='flex items-center gap-5'>
        <div className='flex-1 md:flex-none '>
           <h2 className=''>Testimonilas Thubanil</h2>
        </div>
        <div className='flex-1 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
          <motion.div 
          initial={{
            translateX: '-50%'
          }}
          animate={{
            translateX:'0'
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className='flex flex-none gap-14 pr-14 -translate-x-1/2 '>
          {[
            acmeLogo,
            apexLogo,
            celestialLogo,
            pluseLogo,
            echoLogo,
            acmeLogo,
            apexLogo,
            celestialLogo,
            pluseLogo,
            echoLogo,
           ].map((logo) =>(
            <img src={logo.src} key={logo.src} alt="Test" className='h-8 w-auto' />
          ))}
        </motion.div>
        </div>
      </div>
     </div>
  </section>
  )
};
