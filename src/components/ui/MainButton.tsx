"use client";
import { Link } from "@/navigation";
import React from "react";

interface ButtonProps {
  title: string;
  link: string;
}

const MainButton: React.FC<ButtonProps> = ({ title, link }) => {
  return (
    <Link href={link}>
      <button className="border border-black px-10 py-2 rounded-xl bg-white text-black hover:bg-black hover:text-white transition duration-300 ">
        {title}
      </button>
    </Link>
  );
};

export default MainButton;
