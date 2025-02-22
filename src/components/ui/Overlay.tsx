"use client";
import { useZoomContext } from "@/context/ZoomContext";
import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";

const Overlay: React.FC = () => {
  const { setSelectImage, selectImage } = useZoomContext();

  useEffect(() => {
    if (selectImage.open) {
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
  }, [selectImage.open]);

  if (!selectImage.open || !selectImage.img) return null;

  return (
    <motion.div
      className="fixed z-[1000] top-0 right-0 left-0 bottom-0 h-[100%] w-[100%] opacity-5 bg-slate-50/70 backdrop-blur-sm grid place-content-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
    >
      <div
        className="fixed top-[1.2rem] right-[4%] w-[50px] h-[50px] bg-[#2828289c] rounded-full outline-none transition-background duration-500 ease-in-out z-[110] grid place-content-center cursor-pointer hover:bg-[#000] md:w-[75px] md:h-[75px]"
        onClick={() => setSelectImage({ img: "", open: false })}
      >
        <IoMdClose size={30} color="white" />
      </div>

      <div className="relative w-[90vw] lg:w-full flex justify-center items-center">
        <Image
          src={selectImage.img}
          alt={"Tehnoplast Lapovo, PVC i ALU stolarija Srbija."}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-[90vh] max-w-full max-h-full object-contain"
        />
      </div>
    </motion.div>
  );
};

export default Overlay;
