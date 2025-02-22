import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="wrapper border-t border-b border-[#393e4236] py-12">
        <p className="py-16 text-[22px] font-open-sans font-normal tracking-[-0.5px] w-[90%] leading-[30px] text-[#393e42]">
          Proizvodnja i ugradnja ALU i PVC stolarije
        </p>
        <a
          href="mailto:info@tehnoplast.co.rs"
          className="text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit no-underline block text-[#f28c26] border-b border-[#f28c2681]"
        >
          info@tehnoplast.co.rs{" "}
        </a>
        <a
          href="tel:+381604665590"
          className="text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit text-[#393e42] no-underline block tele:text-[#393e42]"
        >
          +381 60 466 5590
        </a>

        <a
          href="mailto:finansije@tehnoplast.co.rs"
          className="text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit no-underline block text-[#f28c26] border-b border-[#f28c2681]"
        >
          finansije@tehnoplast.co.rs{" "}
        </a>
        <a
          href="tel:+381694665590"
          className="text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit text-[#393e42] no-underline block tele:text-[#393e42]"
        >
          +381 69 466 555
        </a>

        <a
          href="mailto:pozarevac@tehnoplast.co.rs"
          className="text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit no-underline block text-[#f28c26] border-b border-[#f28c2681]"
        >
          pozarevac@tehnoplast.co.rs{" "}
        </a>
        <a
          href="tel:+381621599173"
          className="text-[26px] font-inter tracking-[-1px] font-semibold my-3 w-fit text-[#393e42] no-underline block tele:text-[#393e42]"
        >
          +381 62 159 9173
        </a>
      </div>

      <div className="py-2 wrapper flex justify-between items-center">
        <h6 className="text-[14px] py-2 text-[#393e42b0] font-open-sans tracking-[-0.5px] font-normal">
          @ 2025 Tehnoplast, Lapovo
        </h6>
        <h6 className="text-[14px] py-2 text-[#393e42b0] font-open-sans tracking-[-0.5px] font-normal">
          Design & Development{" "}
          <span className="font-bold text-[#000]">
            {" "}
            <a
              href="https://www.lukanesic.co/"
              className="email"
              target="_blank"
              rel="noopener noreferrer"
            >
              Scope{" "}
            </a>
          </span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
