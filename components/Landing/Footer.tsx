import Link from "next/link";
import { BsDiscord, BsGithub, BsInstagram, BsTelegram, BsTwitter, BsYoutube } from "react-icons/bs";
import { LuTwitter } from "react-icons/lu";

export const Footer = () => {
  return (
    <footer className="py-5 border-t border-white/50 ">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
           <div className="flex gap-2 items-center lg:flex-1" >
          <img src="/logo.svg" alt="" className="h-6 w-6" />
          <div className="font-medium"> StartUp Ai Demo </div>
        </div>
        <div>
          <nav className="flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center ">
            <Link href="/" className="text-white/70 hover:text-white text-sm md:text-sm ">Devolopers</Link>
            <Link href="/" className="text-white/70 hover:text-white text-sm md:text-sm ">Works</Link>
            <Link href="/" className="text-white/70 hover:text-white text-sm md:text-sm ">Price</Link>
            <Link href="/" className="text-white/70 hover:text-white text-sm md:text-sm ">Company</Link>
          </nav>
        </div>
        <div className="flex gap-5 lg:flex-1 lg:justify-end">
         <BsTwitter  className="text-white/40 hover:text-white transition cursor-pointer"/>
         <BsInstagram  className="text-white/40 hover:text-white transition cursor-pointer"/>
         <BsYoutube  className="text-white/40 hover:text-white transition cursor-pointer"/>
         <BsDiscord  className="text-white/40 hover:text-white transition cursor-pointer"/>
         <BsTelegram className="text-white/40 hover:text-white transition cursor-pointer" />
         <BsGithub className="text-white/40 hover:text-white transition cursor-pointer" />
        </div>
        </div>
       
      </div>
    </footer>    
  ) ;
};
