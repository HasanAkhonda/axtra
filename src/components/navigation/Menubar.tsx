"use client";
import React, { useState } from "react";
import { Menu, Search, X } from "lucide-react";
import Image from "next/image";
import { navigationImages } from "../assets";

// Navigation items
const navItems = [
  { label: "Home", href: "/", submenu: ["Overview", "Updates", "News"] },
  { label: "About", href: "/about" },
  { label: "Pages", href: "/pages", submenu: ["Pricing", "FAQ", "Testimonials"] },
  { label: "Services", href: "/services", submenu: ["Consulting", "Development", "Design"] },
  { label: "Team", href: "/team", submenu: ["Leadership", "Careers"] },
  { label: "Blog", href: "/blog", submenu: ["Latest Posts", "Categories"] },
  { label: "Contact", href: "/contact" },
];

const Menubar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow">
      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="md:flex md:items-center md:gap-12">
            <a className="text-xl font-bold text-teal-600" href="#">
              <Image
                src={navigationImages.logo}
                alt="logo"
                width={100}
                height={100}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Global">
            <ul className="flex items-center gap-12 text-lg font-kanit uppercase">
              {navItems.map(({ label, href, submenu }) => (
                <li key={label} className="relative group">
                  <a
                    className="text-black transition hover:text-gray-700"
                    href={href}
                  >
                    {label}
                  </a>
                  {/* Dropdown Menu */}
                  {submenu && (
                    <ul className="absolute left-0 mt-2 w-48 bg-black text-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-300 translate-y-2 z-50">
                      {submenu.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="block px-4 py-2 hover:bg-gray-800"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-8">
            <div className="hidden sm:flex sm:gap-4">
              <Search />
            </div>

            <div className="bg-slate-200 w-0.5 h-6"></div>

            {/* Hamburger Icon */}
            <div className="block md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-sm p-2 text-gray-600 transition hover:text-gray-800"
              >
                {isMobileMenuOpen ? <X size={35} /> : <Menu size={35} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute w-full mt-2 space-y-2 px-4 py-12 pb-4 text-sm bg-green-200 z-40">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="block w-fit rounded-md text-5xl px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800"
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Menubar;
