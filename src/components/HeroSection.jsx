import React from "react";
import demoUrl from "../assets/demo.png";
import Tag from "./Tag";
import {ChevronRight} from "lucide-react";

const HeroSection = () => {
  return (
    <section id="about" className="hero-section text-center mt-12 flex flex-col">
      <Tag>
        <div className="flex items-center cursor-pointer">
          <span>Nexx v0.1</span>
          <ChevronRight className="w-6 h-6 ml-1 text-indigo-300 overflow-visible"/>
        </div>
      </Tag>
      <h1 className="text-4xl font-extrabold leading-[1.15] text-black sm:text-6xl sm:leading">
        Launch Your Sass
        <br />
        <span className="bg-gradient-to-r from-pink-500 via-indigo-600 to-pink-500 bg-clip-text text-transparent">
          In Minutes Not Days
        </span>
      </h1>
      <h2 className="mt-5 text-gray-600 sm:text-xl">
        Nexx is an open-source tool for developers who want to launch their
        ideas faster.
      </h2>
      <div className="mx-auto mt-5 flex max-w-fit space-x-4">
        <a
          href="#get-started"
          className="btn mt-8 rounded-full mx-auto max-w-fit border px-5 py-2
            text-sm font-medium shadow-sm border-black bg-black text-white hover:ring-gray-400 hover:ring-2"
        >
          {" "}
          Get Started
        </a>
        <a
          href="#features"
          className="btn mt-8 ml-4 btn mt-8 rounded-full mx-auto max-w-fit border px-5 py-2
            text-sm font-medium shadow-sm border-gray-300 bg-white text-black hover:ring-gray-400 hover:ring-2"
        >
          Learn More
        </a>
      </div>
      <div className="mt-5 items-center justify-center ">
        <img
          src={demoUrl}
          alt="DemoPic"
          className="mx-auto max-h-[300px] sm:max-h-[500px]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
