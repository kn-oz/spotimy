import React from "react";
import { BsPlayCircleFill, BsFillHeartFill, BsThreeDots } from "react-icons/bs";
import { IoPlaySkipBack, IoPlaySkipForward, IoShuffle } from "react-icons/io5";
import { ImLoop } from "react-icons/im";
import { HiSpeakerWave } from "react-icons/hi2";
import "./player.css";

export default function Player() {
  return (
    <div
      className="p-2 md:px-6 w-full text-gray-400 text-xxl z-[100] fixed bottom-0 flex items-center"
      style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}
    >
      <div className="song-logo hidden lg:block px-4">
        <div className="bg-gray-400 h-10 w-10 rounded-md"></div>
      </div>
      <div className="song-title hidden lg:block px-4 text-black mr-4">
        <p>Nothing's Playing</p>
      </div>
      <div className="play-controls flex gap-2 md:gap-4 items-center mr-2 md:mr-8">
        <IoPlaySkipBack />
        <BsPlayCircleFill className="text-indigo-600 text-4xl" />
        <IoPlaySkipForward />
      </div>

      <input type="range" value={0} disabled className="grow-[0.3] md:grow-[0.6]" />

      <div className="ml-8 playlist-control-buttons hidden lg:flex gap-4 items-center">
        <BsFillHeartFill />
        <IoShuffle />
        <ImLoop />
        <HiSpeakerWave />
      </div>
      <BsThreeDots className=" ml-2 md:ml-8 md:hidden" />
    </div>
  );
}
