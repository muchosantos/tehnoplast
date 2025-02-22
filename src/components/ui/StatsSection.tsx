import React from "react";

const stats = [
    {title: '100+', description: 'Zaposlenih' ,text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, inventore.'},
    {title: '30', description: 'Godina iskustva' ,text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, inventore.'},
    {title: '1000+', description: 'Projekata' ,text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, inventore.'},
    {title: '100%', description: 'Zadovoljnih klijenata' ,text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum, inventore.'},
]

const StatsSection: React.FC = () => {
  return (
    <section className=" mb-[10rem] mt-[-5rem]">
      <div className="wrapper">
        <div className="md:grid md:grid-cols-4 md:justify-between">
          {stats.map((item, i) => (
            <div key={i} className="mb-6">
              <h2 className="text-[5rem] md:text-[4rem] xl:text-[5rem] font-bold tracking-tighter">{item.title}</h2>
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
