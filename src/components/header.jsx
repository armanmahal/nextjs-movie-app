import Link from "next/link";
import React from "react";

import DarkModeSwitch from "./darkModeSwitch";

export default function Header() {
  return (
    <div className="bg-slate-300 dark:bg-slate-600 flex justify-between items-center px-3 md:px-7 py-3 md:py-3 text-xl md:text-2xl  ">
      {/* links */}
      <div className="flex md:gap-7 md:ml-6 ml-4 gap-3">
        {/* home link */}
        <Link
          href={"/"}
          className="hover:text-yellow-500 transition-colors duration-75 ease-linear flex items-center text-xl md:text-2xl"
        >
          <p className="">Home</p>
        </Link>

        {/* About link */}
        <Link
          href={"/about"}
          className="hover:text-yellow-500 transition-colors duration-75 ease-linear flex items-center text-xl md:text-2xl"
        >
          <p className="">About</p>
        </Link>
      </div>

      {/*darmodeswitch & logo */}
      <div className="flex items-center gap-6">
        <DarkModeSwitch />
        <h2 className="font-normal">
          <span className="bg-yellow-500 rounded-md px-1 py-[2px] mx-[1px] text-white font-semibold">
            Movie
          </span>
          Map
        </h2>
      </div>
    </div>
  );
}
