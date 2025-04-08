"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Category } from "@/types/products";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

interface AccordProps {
  data: Category[] | null;
  showLink?: boolean;
}

const Accord: React.FC<AccordProps> = ({ data, showLink }) => {
  const t = useTranslations("Home");

  return (
    <Accordion type="single" collapsible className="w-full">
      {data &&
        data.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="last:border-none"
          >
            <AccordionTrigger className="text-[28px] tracking-tight">
              {item.category}
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[#626262] text-[14px] mb-8">
                {item.description}
              </p>
              <div>
                {item.items.map((subItem, subIndex) => (
                  <div key={subIndex} className="mb-4">
                    <h3 className="text-[18px] tracking-tight mb-2">
                      {subItem.title}
                    </h3>

                    <ul>
                      {subItem.list.map((li, liIndex) => (
                        <li
                          className="text-[14px] list-disc list-inside text-[#838383]"
                          key={liIndex}
                        >
                          {li}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {showLink && (
                <>
                  <p className="text-[#202020] text-[18px] mt-8 underline">
                    {t("accordBtn")}
                  </p>
                  <Link href={item.link}>
                    <button className="border border-black text-[1rem] bg-black text-white px-8 py-2 mt-4 mb-4 rounded-2xl">
                     {t("detaljnije")}
                    </button>
                  </Link>
                </>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default Accord;
