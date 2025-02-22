"use client";
import { useZoomContext } from "@/context/ZoomContext";
import { ProductsProps } from "@/types/products";
import Image from "next/image";
import React, { useEffect } from "react";

interface GalleryProps {
  data: ProductsProps[];
}

const Gallery: React.FC<GalleryProps> = ({ data }) => {
  const { selectImage, setSelectImage } = useZoomContext();

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

  return (
    <div className="grid gap-2 lg:grid-cols-2 lg:gap-2 mb-32">
      {data.map((item, i) => (
        <div
          className="w-full h-[300px] bg-slate-50 cursor-pointer relative"
          key={i}
          onClick={() => setSelectImage({ img: item.image, open: true })}
        >
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
