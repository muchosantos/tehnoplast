"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import Link from "next/link";
import React, { useEffect } from "react";

import { izrada } from "@/data";

interface SidemenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const menuItems = [
  {
    name: "Početna",
    link: "/",
  },
  {
    name: "O Nama",
    link: "/o-nama",
  },
  {
    name: "Kontakt",
    link: "/kontakt",
  },
];

const flagsItems = [
  {
    alt: "Tehnoplast Lapovo PVC Stolarija, ALU Stolarija Srbija",
    link: "sr",
    imgSrc: "/images/serbia.png",
  },
  {
    alt: "Tehnoplast Lapovo PVC Stolarija, ALU Stolarija Nemačka",
    link: "de",
    imgSrc: "/images/germany.png",
  },
  {
    alt: "Tehnoplast Lapovo PVC Stolarija, ALU Stolarija Francuska",
    link: "fr",
    imgSrc: "/images/france.png",
  },
];

const Sidemenu: React.FC<SidemenuProps> = ({ open, setOpen }) => {
  useEffect(() => {
    if (open) {
      const width = document.body.clientWidth;
      document.body.style.overflowY = "hidden";
      document.body.style.width = `${width}px`;
    } else {
      document.body.style.overflowY = "visible";
      document.body.style.width = `auto`;
    }

    return () => {
      document.body.style.overflowY = "visible";
      document.body.style.width = `auto`;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed top-0 right-0 h-screen w-full md:w-3/4 lg:w-[900px] bg-white z-[100] shadow-lg py-8 overflow-scroll"
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {/* <div className="wrapper py-10">
    
            <div className="lg:flex lg:justify-around px-10">
              <div>
                <div className="">
                  <span className="text-[.8rem] text-[#cecece]">Prevod</span>
                  <div className="flex gap-2 mt-2">
                    {flagsItems.map((item, i) => (
                      <Link className="" key={i} href={item.link}>
                        <div className="w-[50px] h-[50px] relative">
                          <Image src={item.imgSrc} alt={item.alt} fill />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <span className="text-[.8rem] md:text-[1rem] text-[#cecece]">
                    Menu
                  </span>
                  <div className="flex flex-col gap-2 mt-2">
                    {menuItems.map((item, i) => (
                      <Link
                        href={item.link}
                        key={i}
                        className="text-[1.2rem] md:text-[1.7rem]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6">
              <span className="text-[.8rem] md:text-[1rem] text-[#cecece]">
                Kategorije
              </span>
              <div className="flex flex-col gap-2 mt-2">
                {izrada.map((item, i) => (
                  <Link
                    href={item.link}
                    key={i}
                    className="text-[1.2rem] md:text-[1.7rem]"
                  >
                    {item.category}
                  </Link>
                ))}
              </div>
            </div>
            </div>


            <div className="mt-10 lg:hidden">
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href="mailto:info@tehnoplast.co.rs"
                  className="text-[18px] font-inter tracking-[-1px] font-semibold  w-fit no-underline block text-[#f28c26] border-b border-[#f28c2681]"
                >
                  info@tehnoplast.co.rs{" "}
                </a>
                <a
                  href="tel:+381604665590"
                  className="text-[18px] font-inter tracking-[-1px] font-semibold  w-fit text-[#393e42] no-underline block tele:text-[#393e42]"
                >
                  +381 60 466 5590
                </a>
              </div>
            </div>
          </div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidemenu;
