import React from "react";
import Image from "next/image";

interface CategoryBoxProps {
  title: string;
  description: string;
  btnText: string;
  btnLink: string;
  imgSrc: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  title,
  description,
  imgSrc,
}) => {
  return (
    <div className="py-14 border-b border-gray-300 xl:flex justify-between items-center">
      <div>
        <h2 className="text-[36px] tracking-tight leading-[3rem] mb-4 xl:text-[46px]">
          {title}
        </h2>
        <p className="mb-12 leading-[2rem] text-[16px] xl:text-[18px] xl:w-[600px]">
          {description}
        </p>
        <button className="border-b border-gray-400">Pogledajte radove</button>
      </div>

      <div className="hidden xl:block h-[300px] w-[300px] bg-gray-300 relative">
        <Image
          src={imgSrc}
          alt={title}
          width={2000}
          height={2000}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default CategoryBox;
