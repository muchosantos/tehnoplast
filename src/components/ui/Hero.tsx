import Image from "next/image";

import { FaInstagram } from "react-icons/fa";

interface HeroProps {
  heading: string;
  description: string;
  image: string;
}

const Hero: React.FC<HeroProps> = ({ heading, description, image }) => {
  return (
    <section className="w-full h-fit relative  xl:h-fit pb-10 ">
      <Image
        src={image}
        alt={"Tehnoplast Lapovo, PVC i ALU stolarija Srbija"}
        fill
        style={{ zIndex: "-10", objectFit: "cover" }}
        priority
      />

      <div className="wrapper h-full">
        <div className="pt-10 lg:pt-2">
          <div className="text-white pr-6 md:pr-0 md:w-[600px] lg:w-[600px] xl:w-[800px]">
            <h1 className="text-[46px] tracking-tight leading-[3.5rem] mb-8 mt-24 xl:text-[70px] xl:leading-[6rem]">
              {heading}
            </h1>
            <p className="text-[18px] text-[#f4f4f4]  leading-[2.2rem] mb-12">
              {description}
            </p>
          </div>

          <div className="w-[100%] flex justify-between items-center">
            <div className="md:flex md:flex-row gap-10  w-full md:items-start">
              <div>
                <a
                  href="mailto:info@tehnoplast.co.rs"
                  className="text-[22px] lg:text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit no-underline block text-[#fff]"
                >
                  info@tehnoplast.co.rs{" "}
                </a>
                <a
                  href="tel:+381604665590"
                  className="text-[22px] lg:text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit text-[#fff] no-underline block tele:text-[#393e42]"
                >
                  +381 60 466 5590
                </a>
              </div>

              <div className="flex gap-6 items-center mt-5">
                <a
                  href="https://www.instagram.com/tehnoplast.co.rs/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <FaInstagram color="white" size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
