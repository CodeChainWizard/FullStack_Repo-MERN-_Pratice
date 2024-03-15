import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { PiFilmReel } from "react-icons/pi";
import {
  MdOutlineSubscriptions,
  MdOutlineVideoLibrary,
  MdOutlineHistory,
  MdOutlineWatchLater,
} from "react-icons/md";

import { GrLike } from "react-icons/gr";

export const Sidebar = () => {
  const mainLinks = [
    {
      icon: <AiOutlineHome className="text-xl" />,
      name: "Home",
    },
    {
      icon: <PiFilmReel className="text-xl" />,
      name: "Reels",
    },
    {
      icon: <MdOutlineSubscriptions className="text-xl" />,
      name: "Subscriptions",
    },
  ];

  const secondaryLinks = [
    {
      icon: <MdOutlineVideoLibrary className="text-xl" />,
      name: "Library",
    },
    {
      icon: <MdOutlineHistory className="text-xl" />,
      name: "Watch History",
    },
    {
      icon: <MdOutlineWatchLater className="text-xl" />,
      name: "Watch Later",
    },
    {
      icon: <GrLike className="text-xl" />,
      name: "Liked Video",
    },
  ];
  return (
    <div className="w-2/12 bg-[#212121] p-2 pr-5 overflow-auto pb-8 h-screen ">
      {/* MainLink Obj Map Function */}
      <ul className="flex flex-col border-b-1 border-gray-800 ">
        {mainLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`flex pl-6 py-3 hover:bg-zinc-600 duration-300 rounded-xl  ${
                name === "Home" ? "bg-slate-600" : " "
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
        <hr className="opacity-20" />
      </ul>

      {/* SecondaryLinks Obj Map Function */}
      <ul className="flex flex-col border-b-1 border-gray-800">
        {secondaryLinks.map(({ icon, name }) => {
          return (
            <li
              key={name}
              className={`flex pl-6 py-3 hover:bg-zinc-600 duration-300 rounded-xl ${
                name === "Home" ? "bg-slate-600" : " "
              }`}
            >
              <a href="#" className="flex items-center gap-5">
                {icon}
                <span className="text-sm tracking-wider">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
