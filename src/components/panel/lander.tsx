"use client";
import React from "react";
import Stroke from "@/src/components/ui/stroke";
import PanelSimiTitle from "@/src/components/panel/simi-title";
import PanelDescription from "@/src/components/panel/description";
import PanelIndex from "@/src/components/panel";
import { cn } from "@/lib/utils";
import type { Lander } from "@/lib/defination";
import Image from "next/image";
import Link from "next/link";

const PanelLander = ({
  index = "01",
  data,
  className = "",
}: {
  index?: string;
  data: Lander;
  className?: string;
}) => {
  const { name, link, description, image } = data;
  return (
    <section
      className={cn(
        "grid grid-col-1 lg:grid-cols-2 relative overflow-hidden",
        className
      )}
    >
      <div className="h-full min-h-screen pl-8 sm:pl-16 md:pl-20 lg:pl-24 pr-4  py-4 sm:py-6 md:py-8 lg:py-10  inline-flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
        {index && <PanelIndex index={index} />}
        {name && <PanelSimiTitle className="font-bold">{name}</PanelSimiTitle>}

        <Stroke>
          <div className="w-full justify-center items-center flex lg:hidden ">
            <Image
              height={400}
              width={400}
              className="w-full max-w-60 m-10 "
              src={image}
              alt={name}
            />
          </div>

          <PanelDescription>{description}</PanelDescription>
          <PanelDescription className="mt-4 md:mt-6 lg:mt-8">
            <Link
              href={link}
              target="_blank"
              className="text-blue-400 underline flex gap-2 "
            >
              Check Lander  
            </Link>
          </PanelDescription>
        </Stroke>

     
      </div>
      <div className="w-full justify-center items-center hidden lg:flex ">
          <Image
            height={400}
            width={400}
            className="w-full max-w-xl lg:max-w-lg "
            src={image}
            alt={name}
          />
        </div>
    </section>
  );
};

export default PanelLander;
