// src/components/ParallaxHero.tsx
"use client";
import Image from "next/image";
import React from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { navigationImages } from "../assets";

const ParallaxHero: React.FC = () => {
  return (
    <ParallaxProvider>
      <section className="bg-black text-white font-kanit min-h-screen flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <Parallax speed={100}>
            <Image
              src={navigationImages.paralaxhero}
              alt="Office"
              className="w-full  shadow-lg"
            />
          </Parallax>

          {/* Right Content */}
          <Parallax speed={5}>
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-wide">Who We Are</p>
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                WE ARE LEADING <br /> DIGITAL MARKETING <br /> AGENCY.
              </h1>
              <p className="text-sm leading-relaxed max-w-md text-gray-300">
                We’re a team of strategic digital marketing working globally
                with largest brands. We believe that progress only happens when
                you refuse to play things safe. We combine ideas and behaviors,
                and insights with design, technological data to produce brand
                experiences that customers love our services.
              </p>

              {/* Button with icon */}
              <button className="group relative flex items-center justify-center w-16 h-16 md:w-40 md:h-40 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all duration-300">
                <h2 className="m-5 transition-transform duration-300 group-hover:rotate-360">
                  Explore Us
                </h2>
                
              </button>
            </div>
          </Parallax>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default ParallaxHero;
