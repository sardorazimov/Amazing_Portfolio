import { Features } from "@/components/Landing/Features";
import { Header } from "@/components/Landing/Header";
import { Hero } from "@/components/Landing/Hero";
import { LogoTicker } from "@/components/Landing/LogoTicker";


export default function Home() {
  return (
      <main>
        <Header />
        <Hero />
        <LogoTicker />
        <Features />
      </main>
  );
}
