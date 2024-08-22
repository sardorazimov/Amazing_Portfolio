import Image from "next/image"
import Link from "next/link";
import Button from "../ui/handleButton";


export const Header = () => {
  return (
    <header className="py-4  border-white/15 md:border-none sticky top-0 backdrop-blur  z-10">
      <div className="absolute inset-0 backdrop-blur -z-10"></div>
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl md:backdrop-blur -z-10 ">
        <div>
          <div className="border  h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15">
             <Image src={'/logo.svg'} alt="Logo" width={32} height={8} />
          </div>
        </div>
        <div className="hidden md:block">
          <nav className="flex gap-8 text-white/70 text-sm ">
            <Link href={'/'} className=" text-white/70 hover:text-white trasnition">Featrus</Link>
            <Link href={'/'} className=" text-white/70 hover:text-white trasnition">Works</Link>
            <Link href={'/'} className=" text-white/70 hover:text-white trasnition">Price</Link>
            <Link href={'/'} className=" text-white/70 hover:text-white trasnition">About</Link>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
         <Button>Join me </Button>
          <Image  src={'/assets/icon-menu.svg'} alt="Menu tag" width={32} height={12} className="cursor-pointer md:hidden"/>
        </div>
      </div>
    </div>
  </header>
  )

};
