"use client";
import Image from "next/image";
// import Button from "./Button";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface CategoryHeroProps {
  heading: string;
  description: string;
  image: string;
  bread?: string;
  color?:string
}

const CategoryHero: React.FC<CategoryHeroProps> = ({
  heading,
  description,
  image,
  color
}) => {
  return (
    <section className="w-full h-[500px] relative md:h-[500px] lg:h-[400px] xl:h-[550px] ">
      <Image
        src={image}
        alt={"Tehnoplast Lapovo, PVC i ALU stolarija Srbija"}
        fill
        style={{ zIndex: "-10", objectFit: "cover" }}
        priority
      />

      <div className="wrapper flex justify-center flex-col h-full">
        <div className="text-[#292929] pr-6 md:pr-0 md:w-[400px] xl:w-[800px]">
          <h1 className="text-[46px] tracking-tight leading-[3.5rem] mb-8 mt-24 xl:text-[80px] xl:leading-[6rem]" style={{color: color && color}}>
            {heading}
          </h1>
          <p className="text-[18px] text-[#292929]  leading-[2.2rem] mb-12" style={{color: color && color}}>
            {description}
          </p>

          <Bread title={heading} color={color} />
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;

interface BreadProps {
color?:string;
  title:string
}

const Bread: React.FC<BreadProps> = ({ title, color}) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className={`text-[${color && color}]`} href="/">Početna</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator className={`text-[${color && color}]`} />
        <BreadcrumbItem>
          <BreadcrumbPage className={`text-[${color && color}]`}>{title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
