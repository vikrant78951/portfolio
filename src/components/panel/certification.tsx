"use client";
import React from "react";
import Stroke from "@/src/components/ui/stroke";
import PanelSimiTitle from "@/src/components/panel/simi-title";
import PanelDescription from "./description";
import PanelIndex from "@/src/components/panel";
import { cn } from "@/lib/utils";
import type { Certification } from "@/lib/defination";
import Link from "next/link";
 import Image from "next/image";

const PanelCertification = ({
  index = "01",
  data,
  className = "",
}: {
  index?: string;
  data: Certification;
  className?: string;
}) => {
  const { title, year, issuer, link, highlights } = data;
  return (
       <section
        className={cn("grid grid-col-1 lg:grid-cols-2   relative overflow-hidden", className)}
      >
        <div className="min-h-screen pl-8 sm:pl-16 md:pl-20 lg:pl-24 pr-4  py-4 sm:py-6 md:py-8 lg:py-10  inline-flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7  ">
          {index && <PanelIndex index={index} />}
          {title && (
            <PanelSimiTitle className="font-bold">{title}</PanelSimiTitle>
          )}

          <Stroke>
            <div className="mb-2 md:mb-4">
              {issuer && (
                <h1 className="font-bold text-lg">
                  {issuer}
                  {year && (
                    <span className="italic   font-normal ml-2">
                      -{year}
                    </span>
                  )}
                </h1>
              )}
            </div>
            <div className="flex flex-col gap-2 w-full">
              {highlights && (
                <PanelDescription className="leading-normal lg:text-md ">
                  {highlights.map((item) => (
                    <span className="block mt-2" key={item}>
                      {item}
                    </span>
                  ))}
                </PanelDescription>
              )}
              {link && (
                <Link href={link} className="text-primary" target="_blank">
                  Check Certificates
                </Link>
              )}
            </div>
          </Stroke>
        </div>

        <div className="w-full h-full flex justify-center items-center p-4 md:p-6 lg:p-8">
          <Image
           src="/images/react_certificate.png" 
           alt="react certificate"
           height={800}
           width={800}
           className="w-full max-w-md"
          />
        </div>
      </section>
   );
};

export default PanelCertification;
