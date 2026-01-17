import React from "react";
import sideBar from "../images/bg-sidebar-desktop.svg";
function Sidebar({ page }) {
  return (
    <nav className="ml-3 mt-3 relative">
      <img src={sideBar} className="h-[34.50rem]" alt="Sidebar" />
      <div
        className={
          page === 0
            ? `border-white bg-white text-black    absolute border pl-3 rounded-full pt-1 pb-1 pr-3 top-[3rem]  left-[3rem]`
            : `border-white  absolute border pl-3 rounded-full pt-1 pb-1 pr-3 top-[3rem] text-white left-[3rem]`
        }
      >
        1
      </div>
      <div className="absolute left-[6rem] top-[3rem]">
        <p className="text-white text-sm">STEP 1</p>
        <p className="text-white font-bold tracking-widest  text-sm">
          YOUR INFO
        </p>
      </div>
      <div
        className={
          page === 1
            ? `border-white text-black bg-white absolute border pl-3 rounded-full pt-1 pb-1 pr-3 top-[7rem]  left-[3rem]`
            : `border-white absolute border pl-3 rounded-full pt-1 pb-1 pr-3 top-[7rem] text-white left-[3rem]`
        }
      >
        2
      </div>
      <div className="absolute left-[6rem] top-[7rem]">
        <p className="text-white text-sm">STEP 2</p>
        <p className="text-white font-bold tracking-widest  text-sm">
          SELECT PLAN
        </p>
      </div>
      <div
        className={
          page === 2
            ? `border-white text-black bg-white absolute border pl-3 rounded-full pt-1 pb-1 pr-3 top-[11rem]  left-[3rem]`
            : `border-white absolute border pl-3 rounded-full pt-1 pb-1 pr-3 top-[11rem] text-white left-[3rem]`
        }
      >
        3
      </div>
      <div className="absolute left-[6rem] top-[11rem]">
        <p className="text-white text-sm">STEP 3</p>
        <p className="text-white font-bold tracking-widest  text-sm">ADD-ONS</p>
      </div>
      <div
        className={
          page === 3
            ? `border-white bg-white text-black absolute border pl-3 rounded-full pt-1 pb-1 pr-3 top-[15rem]  left-[3rem]`
            : `border-white absolute border pl-3 rounded-full pt-1 pb-1 pr-3 top-[15rem] text-white left-[3rem]`
        }
      >
        4
      </div>
      <div className="absolute left-[6rem] top-[15rem]">
        <p className="text-white text-sm">STEP 4</p>
        <p className="text-white font-bold tracking-widest  text-sm">SUMMARY</p>
      </div>
    </nav>
  );
}

export default Sidebar;
