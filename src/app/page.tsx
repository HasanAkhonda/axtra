import BrandSection from "@/components/brand/BrandSection";
import HeroParallax from "@/components/hero/ParallaxHero";
import HeroSection from "@/components/hero/HeroSection";
import Image from "next/image";
import ScrollPinHero from "@/components/hero/ScrollPinHero";
import MarketingServices from "@/components/Marketing Services/MarketingServices";
import MarketingFeatures from "@/components/Marketing Services/MarketingFeatures";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <BrandSection/>
      <HeroParallax/>
      <MarketingServices/>
      <MarketingFeatures/>
      <MarketingFeatures/>
      <ScrollPinHero/>
    </div>
  );
}
