"use client";

import React, { useEffect, useRef, useState } from "react";
import TeamExperience from "./ScrollPinComponents/TeamExperience";
import WhyChooseUs from "./ScrollPinComponents/WhyChooseUs";

const ScrollPinHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const updateScrollHeight = () => {
      if (horizontalRef.current) {
        const scrollWidth = horizontalRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Set enough height for vertical scrolling equivalent to horizontal width
        setScrollHeight(scrollWidth - viewportWidth + viewportHeight);
      }
    };

    updateScrollHeight();
    window.addEventListener("resize", updateScrollHeight);
    return () => window.removeEventListener("resize", updateScrollHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !horizontalRef.current) return;

      const offsetTop = containerRef.current.offsetTop;
      const scrollY = window.scrollY;
      const relativeScroll = scrollY - offsetTop;

      if (
        scrollY >= offsetTop &&
        scrollY <= offsetTop + scrollHeight
      ) {
        horizontalRef.current.style.transform = `translateX(-${relativeScroll}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div
      ref={containerRef}
      style={{ height: `${scrollHeight}px` }}
      className="relative w-full"
    >
      {/* Pinned horizontal scroller */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={horizontalRef}
          className="flex h-full transition-transform duration-300 ease-out will-change-transform"
        >
          <section className="min-w-full h-full flex items-center justify-center bg-[#fdf7ec]">
            <h2 className="text-5xl md:text-7xl font-extrabold text-black leading-tight text-center">
              WHY
              <br />
              CHOOSE US
            </h2>
          </section>

          <section className="min-w-full h-full">
            <WhyChooseUs />
          </section>

          <section className="min-w-full h-full">
            <TeamExperience />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ScrollPinHero;
