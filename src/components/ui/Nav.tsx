"use client";
import React from "react";

import Image from "next/image";
import Hamburger from "hamburger-react";

interface NavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  color:string
}

const Nav: React.FC<NavProps> = ({ open, setOpen, color }) => {
  return (
    <nav>
      <div className="wrapper h-fit absolute top-0 left-0 w-full">
        <div className="w-[150px] h-[50px] absolute top-4 left-[4%] md:w-[200px] md:h-[90px] md:top-[0.6rem]">
          <Image
            src={color === 'white' ? "/images/tehnoplast-logo.png" : "/images/tehnoplast-logo-dark.png"}
            // ovo ce doci iz drugog fajla kada budem radio SEO
            alt={"Tehnoplast Lapovo, PVC i ALU stolarija Srbija"}
            fill
            sizes="300px"
            
            style={{objectFit: "contain"}}
          />
        </div>

        <div
          className="fixed top-[1.2rem] right-[4%] w-[50px] h-[50px] bg-[#e5853b9c] rounded-full outline-none transition-background duration-500 ease-in-out z-[110] grid place-content-center cursor-pointer hover:bg-[#e5853be3] md:w-[75px] md:h-[75px]"
          onClick={() => setOpen(!open)}
        >
          <Hamburger
            toggled={open}
            toggle={() => setOpen(!open)}
            size={22}
            hideOutline={false}
            color="#fff"
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
