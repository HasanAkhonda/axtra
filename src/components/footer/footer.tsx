import React from 'react';
import { navigationImages } from '../assets';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 px-6 py-20 lg:px-24 lg:py-28">
        {/* Left: Logo & Text */}
        <div className="space-y-6">
          <Image src={navigationImages.logo} alt="Axtra Logo" className="h-8 invert" />
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
            When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.
          </p>
        </div>

        {/* Middle: Social Links */}
        <div className="flex flex-col divide-y divide-gray-700">
          {['FACEBOOK', 'TWITTER', 'LINKEDIN', 'INSTAGRAM'].map((label) => (
            <a
              key={label}
              href="#"
              className="py-6 hover:opacity-80 transition"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Right: LET'S TALK */}
        <div className="flex items-center justify-center lg:justify-end">
          <a
            href="/contact"
            className="text-[120px] leading-none font-bold text-lime-400 hover:opacity-90 transition duration-200"
          >
            LET’S TALK
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between border-t border-gray-800 px-6 py-6 lg:px-24">
        <p className="text-sm text-gray-400 text-center lg:text-left">
          © 2022 – 2025 | All rights reserved by Wealcoder
        </p>
        <div className="flex space-x-6 mt-4 lg:mt-0">
          <a href="/about" className="text-sm hover:text-lime-400 transition">ABOUT US</a>
          <a href="/contact" className="text-sm hover:text-lime-400 transition">CONTACT</a>
          <a href="/career" className="text-sm hover:text-lime-400 transition">CAREER</a>
          <a href="/faq" className="text-sm hover:text-lime-400 transition">FAQS</a>
        </div>
      </div>
    </footer>
  );
}
