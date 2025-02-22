
// import Button from "./Button";

interface AboutHeroProps {
  heading: string;
  description: string;
}

const AboutHero: React.FC<AboutHeroProps> = ({ heading, description }) => {
  return (
    <section className="w-full h-[700px] relative md:h-[500px] lg:h-[700px] xl:h-[700px]">
      <div className="wrapper flex justify-center flex-col h-full">
        <div className="text-[#fff] pr-6 md:pr-0 md:w-[400px] xl:w-[800px]">
          <h1 className="text-[46px] tracking-tight leading-[3.5rem] mb-8 mt-24 xl:text-[80px] xl:leading-[6rem]">
            {heading}
          </h1>
          <p className="text-[18px] text-[#fff]  leading-[2.2rem] mb-12">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
