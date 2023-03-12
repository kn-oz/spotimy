import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import background from "../assets/undraw_happy_music_g6wc.svg"

export default function Header() {
  return (
    <div className="header flex justify-start bg-red-200 md:gap-[16%]">
      <div className="header-image-wrapper hidden md:block">
        <img src={background} alt="" className="header-image h-80" />
      </div>
      <div className="header-text px-10 py-10 md:px-10 md:py-20">
        <p className="text-white text-2xl md:text-3xl lg:text-5xl font-bold">Your favourite tunes</p>
        <p className="text-white text-2xl md:text-3xl lg:text-5xl font-bold flex items-center">
          All <FaSun className="px-2 text-4xl md:text-6xl text-yellow-400" /> and all <FaMoon className="px-2 text-4xl md:text-6xl text-slate-700" />
        </p>
      </div>
    </div>
  );
}
