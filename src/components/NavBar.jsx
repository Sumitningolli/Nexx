import { useState } from "react";
import React from "react";
import MobileMenu from "./MobileMenu";

import logoUrl from "../assets/logo.png";
import { useScroll,useMotionValueEvent } from "framer-motion";

const NavBar = () => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

useMotionValueEvent(scrollY, "change", (latest) => {
  console.log("Page scroll: ", latest)
  if (latest > 0 && !scrolled){
    setScrolled(true);
  }
  else if (latest === 0 && scrolled){
    setScrolled(false);
  }
});

  const defaultClasses = "transition-all absolute inset-0 -z-1";
  let navBarClasses = scrolled ? `${defaultClasses} border-b border-black/10 bg-white/75 backdrop-blur-lg`
   : `${defaultClasses} bg-transparent`

  return (
    <div className="sticky inset-x-0 top-0 w-full z-30">
      <div className={navBarClasses}></div>
        <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
      <div className="flex items-center justify-between">
        <div>
          <img src={logoUrl} alt="Logo" className="h-20 w-20"/>
        </div>
        <nav className="hidden md:block">
          <ul className="flex flex-row space-x-4 p-4">
            <li>
              <a href="#about" className="text-gray-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="text-gray-600">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="text-gray-600">
                Pricing
              </a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <a
            href=""
            className="bg-black px-4 rounded-md text-white py-2 cursor-pointer hover:bg-gray-900"
          >
            Login
          </a>
          <a
            href=""
            className="bg-black px-4 rounded-md text-white py-2 cursor-pointer ml-3  hover:bg-gray-900"
          >
            Sign Up
          </a>
        </div>
        <MobileMenu/>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
