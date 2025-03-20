import React from "react";
import Strategy from "./Strategy";
import Accord from "./Accord";
import { Category } from "@/types/products";

interface OverviewProps {
  title: string;
  subtitle: string;
  text: string;
  btnText: string;
  link: string;
  accord: boolean;
  accordData: Category[] | null
  btn:boolean,
  showLink?:boolean
}

const Overview: React.FC<OverviewProps> = ({
  title,
  text,
  subtitle,
  btnText,
  link,
  accord,
  accordData,
  btn,
  showLink
}) => {
  return (
    <section className="wrapper py-20 lg:grid lg:grid-cols-2 lg:justify-between lg:gap-28">
      <Strategy
        title={title}
        subtitle={subtitle}
        text={text}
        btnText={btnText}
        link={link}
        btn={btn}
      />


      {accord && (
        <div className="mt-10 lg:mt-0">
          <Accord showLink={showLink && showLink} data={accordData} />
        </div>
      )}
    </section>
  );
};

export default Overview;
