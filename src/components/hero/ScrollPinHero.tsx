"use client";

import React, { useEffect, useRef, useState } from "react";
import ParallaxHero from "./ParallaxHero";
import HeroSection from "./HeroSection";
import WhyChooseUs from "./ScrollPinComponents/WhyChooseUs";
import TeamExperience from "./ScrollPinComponents/TeamExperience";

const ScrollPinHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [scrollLength, setScrollLength] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current && innerRef.current) {
        const totalWidth = innerRef.current.scrollWidth;
        setScrollLength(totalWidth - window.innerWidth);
        containerRef.current.style.height = `${totalWidth}px`;
      }
    };

    const handleScroll = () => {
      if (containerRef.current && innerRef.current) {
        const scrollTop = window.scrollY - containerRef.current.offsetTop;
        const maxScroll = scrollLength;
        const clampedScroll = Math.min(Math.max(scrollTop, 0), maxScroll);
        innerRef.current.style.transform = `translateX(-${clampedScroll}px)`;
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollLength]);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* Horizontal scroller */}
      <div
        ref={innerRef}
        className="sticky top-0 h-screen flex transition-transform duration-300 ease-out will-change-transform"
      >
        {/* Slides */}
        return (
        <section className="min-w-screen h-screen">
          <div className="h-screen bg-[#fdf7ec] flex items-center justify-center">
            <h2 className="text-center text-5xl md:text-7xl font-extrabold text-black leading-tight">
              WHY
              <br />
              CHOOSE US
            </h2>
          </div>
        </section>
        <section className="min-w-screen h-screen">
          <WhyChooseUs />
        </section>
        <section className="min-w-screen h-screen">
        <TeamExperience/>
        </section>
        <section className="min-w-screen h-screen">
          <ParallaxHero />
        </section>
      </div>
    </div>
  );
};

export default ScrollPinHero;
