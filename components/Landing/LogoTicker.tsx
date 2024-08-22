import acmeLogo from '@/public/assets/logo-acme.png'
import apexLogo from '@/public/assets/logo-apex.png'
import celestialLogo from '@/public/assets/logo-celestial.png'
import pluseLogo from '@/public/assets/logo-pulse.png'
import echoLogo from '@/public/assets/logo-echo.png'
import { log } from 'console'

export const LogoTicker = () => {
  return (
   <section className='py-20 md:py-24'>
     <div className="container">
      <div className='flex items-center gap-5'>
        <div className='flex-1 md:flex-none '>
           <h2>Testimonilas Thubanil</h2>
        </div>
        <div className='flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]'>
          <div className='flex flex-none gap-14'>
          {[acmeLogo,apexLogo,celestialLogo,pluseLogo,echoLogo].map((logo) =>(
            <img src={logo.src} key={logo.src} alt="Test" className='h-8 w-auto' />
          ))}
        </div>
        </div>
      </div>
     </div>
  </section>
  )
};
