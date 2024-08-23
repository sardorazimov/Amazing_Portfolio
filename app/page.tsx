import { CallToAction } from "@/components/Landing/CallToAction";
import { Features } from "@/components/Landing/Features";
import { Footer } from "@/components/Landing/Footer";
import { Header } from "@/components/Landing/Header";
import { Hero } from "@/components/Landing/Hero";
import { LogoTicker } from "@/components/Landing/LogoTicker";
import { Testimonials } from "@/components/Landing/Testimonials";


export default function Home() {
  return (
      <main>
        <Header />
        <Hero />
        <LogoTicker />
        <Features />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
  );
}
