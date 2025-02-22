import Link from "next/link";
import React from "react";

interface ButtonProps {
  title: string;
  link: string;
}

const Button: React.FC<ButtonProps> = ({ title, link }) => {
  return (
    <button className="border border-black px-10 py-2 rounded-xl bg-white text-black hover:bg-black hover:text-white transition duration-300">
      <Link href={link}>{title}</Link>
    </button>
  );
};

export default Button;
