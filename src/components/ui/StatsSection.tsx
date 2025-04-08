import { useTranslations } from "next-intl";
import React from "react";

type StatItem = {
  title: string;
  description: string;
  text: string;
};

const StatsSection: React.FC = () => {
  const t = useTranslations("Home");
  const stats: StatItem[] = t.raw("stats");

  return (
    <section className=" mb-[10rem] mt-[-5rem]">
      <div className="wrapper">
        <div className="md:grid md:grid-cols-4 md:justify-between md:gap-8">
          {stats.map((item, i) => (
            <div key={i} className="mb-6">
              <h2 className="text-[5rem] md:text-[4rem] xl:text-[5rem] font-bold tracking-tighter">
                {item.title}
              </h2>
              <span className="text-[1.2rem] font-semibold tracking-tight mb-4 block">
                {item.description}
              </span>
              <p className="text-[1rem] text-[#4f4f4f] font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
