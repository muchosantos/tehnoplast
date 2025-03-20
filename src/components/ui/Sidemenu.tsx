"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

interface SidemenuProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const products = [
  {
    name: "Prozori",
    link: "/prozori",
  },
  {
    name: "Vrata",
    link: "/vrata",
  },
  {
    name: "Sistemi ostakljivanja",
    link: "/sistemi-ostakljivanja",
  },
  {
    name: "Fasade",
    link: "/fasade",
  },
  {
    name: "Pergole",
    link: "/pergole",
  },
  {
    name: "Klizni sistemi",
    link: "/klizni-sistemi",
  },
  {
    name: "Garažna vrata",
    link: "/garazna-vrata",
  },
  {
    name: "Ograde i gelenderi",
    link: "/ograde-i-gelenderi",
  },
  {
    name: "Prateća oprema",
    link: "/prateca-oprema",
  },
];

const linx = [
  {
    name: "Početna",
    link: "/",
  },
  {
    name: "O nama",
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

const Sidemenu: React.FC<SidemenuProps> = ({ open }) => {
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
          className="fixed top-0 right-0 h-screen w-full md:w-3/4 lg:w-[900px] bg-white z-[100] shadow-lg py-8 overflow-scroll grid grid-cols-1 place-content-center"
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <div className="wrapper lg:flex gap-28">
            <div className="lg:flex lg:flex-col lg:gap-[2.8rem]">
              <div className=" mb-4 mt-8 hidden lg:block">
                <span className="font-extralight text-[1rem] tracking-tight">
                  Menu
                </span>
                {linx.map((link, i) => (
                  <Link
                    key={i}
                    href={link.link}
                    className="block my-2 text-[1.7rem] font-bold tracking-tight border-b w-fit border-transparent transition-all duration-300 hover:border-[#f28c26]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mb-4 hidden lg:block">
                <span className="font-extralight text-[1rem] mb-4 block tracking-tight">
                  Jezik
                </span>
                <ul className="flex gap-4 items-center">
                  {flagsItems.map((flag, i) => (
                    <div key={i} className="relative cursor-pointer">
                      <Image
                        key={i}
                        src={flag.imgSrc}
                        alt={flag.alt}
                        width={50}
                        height={50}
                      />
                    </div>
                  ))}
                </ul>
              </div>

              <div className="hidden lg:block">
                <span className="font-extralight text-[1rem] tracking-tight">
                  Kontakt
                </span>
                <a
                  href="mailto:finansije@tehnoplast.co.rs"
                  className="text-[18px] md:text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit no-underline block text-[#f28c26] border-b border-[#f28c2681]"
                >
                  finansije@tehnoplast.co.rs{" "}
                </a>
                <a
                  href="tel:+381694665590"
                  className="text-[18px] md:text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit text-[#393e42] no-underline block tele:text-[#393e42]"
                >
                  +381 69 466 555
                </a>
              </div>
            </div>

            <div>
              <div className="mb-4 lg:hidden">
                <span className="font-extralight text-[1rem] mb-4 block tracking-tight">
                  Jezik
                </span>
                <ul className="flex gap-4 items-center">
                  {flagsItems.map((flag, i) => (
                    <div key={i} className="relative">
                      <Image
                        key={i}
                        src={flag.imgSrc}
                        alt={flag.alt}
                        width={50}
                        height={50}
                      />
                    </div>
                  ))}
                </ul>
              </div>

              <div className="my-6">
                <span className="font-extralight text-[1rem] tracking-tight">
                  Proizvodi
                </span>
                <ul className="">
                  {products.map((product, i) => (
                    <Link
                      key={i}
                      href={product.link}
                     className="block my-2 text-[1.3rem] md:text-[2rem] font-bold tracking-tight border-b w-fit border-transparent transition-all duration-300 hover:border-[#f28c26]"
                    >
                      {product.name}
                    </Link>
                  ))}
                </ul>
              </div>

              <div className="lg:hidden">
                <span className="font-extralight text-[1rem] tracking-tight">
                  Kontakt
                </span>
                <a
                  href="mailto:finansije@tehnoplast.co.rs"
                  className="text-[18px] md:text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit no-underline block text-[#f28c26] border-b border-[#f28c2681]"
                >
                  finansije@tehnoplast.co.rs{" "}
                </a>
                <a
                  href="tel:+381694665590"
                  className="text-[18px] md:text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit text-[#393e42] no-underline block tele:text-[#393e42]"
                >
                  +381 69 466 555
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidemenu;
