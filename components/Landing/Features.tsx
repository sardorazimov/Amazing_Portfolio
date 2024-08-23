'use client'

import { DotLottieCommonPlayer, DotLottiePlayer } from "@dotlottie/react-player";
import productImage from '@/public/assets/product-image.png'
import Image from "next/image";
import { animate, motion, useMotionTemplate, useMotionValue, ValueAnimationTransition } from 'framer-motion'
import { ComponentPropsWithRef, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];
const FeaturesTap = (
  props: typeof tabs[number] & ComponentPropsWithRef<'div'>
    & { selected: boolean }
) => {
  const tabRef = useRef<HTMLDivElement>(null);
  const dotLottieRef = useRef<DotLottieCommonPlayer>(null);

  const xPercentage = useMotionValue(100)
  const yPercentage = useMotionValue(50)

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at  ${xPercentage}%  ${yPercentage}%, black, transparent)`

  useEffect(() => {
    if (!tabRef.current || !props.selected) return;
    xPercentage.set(0);
    yPercentage.set(0);
    const { height, width } = tabRef.current?.getBoundingClientRect()
    const circumference = height * 2 + width * 2;

    const times = [0, width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference, 1]
    const option: ValueAnimationTransition = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: 'linear',
      repeatType: 'loop',
    }


    animate(xPercentage, [0, 100, 100, 0, 0], option)
    animate(yPercentage, [0, 0, 100, 100, 0], option)
  }, [props.selected])
  const handelTabHover = () => {
    if (dotLottieRef.current === null) return;
    dotLottieRef.current.seek(0)
    dotLottieRef.current.play();
  }
  return (
    <div
      onClick={props.onClick}
      ref={tabRef}
      onMouseEnter={handelTabHover}
      className="border border-white/15 flex p-2.5 rounded-xl gap-2.5 items-center flex-1 relative">
      {props.selected && (
        <motion.div
          style={{
            maskImage,
          }}
          className='absolute border border-[#A369FF] inset-0 rounded-xl  '>
        </motion.div>
      )}

      <div className="h-12 w-12 border border-white/15 rounded-lg inline-flex items-center justify-center">
        <DotLottiePlayer
          ref={dotLottieRef}
          src={props.icon}
          className="h-9 w-9"
          autoplay
          loop />
      </div>
      <div className="font-medium">
        {props.title}
      </div>
      {props.isNew &&
        <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-white">new</div>
      }
    </div>
  )
}

export const Features = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX)
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY)
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX)
  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`
  const handleSelecttab = (index: number) => {
    setSelectedTab(index);
    animate(backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      {
        duration: 2,
        ease: 'easeInOut'
      }
    );
    animate(
      backgroundPositionX,
      [backgroundSizeX.get(), tabs[index].backgroundPositionX],
      {
        duration: 2,
        ease: 'easeInOut',
      }
    );
    animate(backgroundPositionY, [
      backgroundPositionY.get(),
      tabs[index].backgroundPositionY,

    ],
      {
        duration: 2,
        ease: 'easeInOut',
      }
    )
  }
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
          Features Section Coming Soon
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto md:text-xl tracking-tight text-clip mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quibusdam reiciendis labore corporis dolorum consequatur
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabindex) => (
            <FeaturesTap
              selected={selectedTab === tabindex}
              {...tab} key={tab.title}
              onClick={() => setSelectedTab(tabindex)} />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          {/* JavaScrpit bg cover image */}
          <motion.div

            className="aspect-video bg-cover  rounded-lg border-white/20"
            style={{
              backgroundImage: `url(${productImage.src})`,
              backgroundSize,
              backgroundPosition,
            }}>
          </motion.div>
          {/* TypeScript Styles Image  */}
          {/* <Image  src={productImage} alt="product"  /> */}
        </div>
      </div>
    </section>
  )
    ;
};
