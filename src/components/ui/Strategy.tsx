import React from "react";
import Button from "./MainButton";

interface StrategyProps {
  title: string;
  subtitle: string;
  text: string;
  btnText: string;
  link: string;
  btn: boolean;
}

const Strategy: React.FC<StrategyProps> = ({
  title,
  subtitle,
  text,
  btnText,
  link,
  btn,
}) => {
  return (
    <section className="">
      <h2 className="text-[36px] tracking-tight leading-[3rem] mb-4">
        {title}
      </h2>
      <p className="mb-12 leading-[2rem] text-[18px]">{subtitle}</p>

      {btn && (
        <>
          <h3 className="mb-8 text-[18px]">{text}</h3>
          <Button title={btnText} link={link} />
        </>
      )}
    </section>
  );
};

export default Strategy;
