import BrandSection from "@/components/brand/BrandSection";
import HeroParallax from "@/components/hero/ParallaxHero";
import HeroSection from "@/components/hero/HeroSection";
import Image from "next/image";
import ScrollPinHero from "@/components/hero/ScrollPinHero";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <BrandSection/>
      <HeroParallax/>
      <ScrollPinHero/>
    </div>
  );
}
