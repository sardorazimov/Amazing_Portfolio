import Button from "../ui/handleButton";

export const Hero = () => {
  return (
  <section className="h-[592px] flex items-center overflow-hidden relative"
  style={{ 
    backgroundImage: `url(${'/stars.png'})`
  }}
  >
    <div className="absolute h-[310px] w-[310px] bg-purple-500 rounded-full border-white/20 
     top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
      bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgba(24,0,66))]
      shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="absolute h-[390px] w-[390px] opacity-20 -translate-x-1/2 -translate-y-1/2 border border-white/20 rounded-full top-1/2 left-1/2  border-white">
      <div className="absolute h-3 w-3  left-0 rounded-full bg-white top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-3 w-3  left-1/2 rounded-full bg-white top-0 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute h-5 w-5  inline-flex items-center justify-center left-full rounded-full border border-white top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="h-3 w-3 bg-white rounded-full"></div>
    </div>
   </div>
   <div className="absolute h-[465px] w-[465px] border rounded-full top-1/2 left-1/2
    -translate-x-1/2 -translate-y-1/2 border-dashed">
    <div className=""></div>
    </div>
    <div className="absloute h-[570px] w-[570px] rounded-full border top-1/2 left-1/2 -trnaslate-x-1/2 -translate-y-1/2 ">
    </div>
     <div className="container relative mt-16">
      <h1 className="text-8xl text-center font-semibold tracking-tighter 
      text-transparent bg-clip-text bg-white
      bg-[radial-gradient(100%_100%_at_top_left,white,rgba(74,32,138,5))]">
        Ai Demo
      </h1>
      <p className="text-lg text-white/70 mt-5 text-center ">
        Sit amet consectetur adipisicing elit.  
      </p>
      <div className="flex justify-center mt-5">
        <Button>Watch Demo</Button>
      </div>
    </div>
  </section>
 )
};
