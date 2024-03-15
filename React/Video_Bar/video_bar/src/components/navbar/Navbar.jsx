import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { LuVideotape } from "react-icons/lu";
import { IoMdSearch } from "react-icons/io";
import { FaMicrophone } from "react-icons/fa6";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import user from "../../asserts/Unknown.jpeg";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#212121] opacity-95 sticky px-14 h-14">
      <div className="flex gap-7 items-center text-2xl text-[#fff]">
        <div>
          <CiMenuFries />
        </div>
        <div className="flex">
          <span className="font-mono">Video</span>{" "}
          <LuVideotape className="ml-2 mr-2 text-red-600 text-3xl" />{" "}
          <span> Bar</span>
        </div>
      </div>

      {/* Search Bar  */}
      <div className="flex items-center justify-center gap-5 text-white font-serif">
        <form action="">
          <div className="">
            <div className="flex bg-zinc-900 items-center h-10 px-4 pr-2 rounded-lg">
              <div className="flex gap-5 items-center pr-5">
                <input
                  type="text"
                  placeholder="Search Here.."
                  className="w-96 bg-zinc-900 focus:outline-none border-none rounded-lg"
                />
              </div>
              <button className="h-10 w-16 flex items-center justify-center bg-zinc-800 -mr-2 rounded-lg">
                <IoMdSearch className="text-xl text-white" />
              </button>
            </div>
          </div>
        </form>
        <div className=" text-white w-16">
          <FaMicrophone />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="text-white flex items-center text-xl">
        <AiOutlineVideoCameraAdd className="mr-2 cursor-pointer" />
        <div className="relative mr-2">
          <MdOutlineNotifications className="cursor-pointer" />
          <span className="absolute bottom-2 left-2 text-xs bg-red-500 rounded-full px-1">
            9+
          </span>
        </div>
        <div className="w-7 items-center justify-center">
          <img
            src={user}
            alt="User"
            className="rounded-full ml-3 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
