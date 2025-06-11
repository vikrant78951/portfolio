"use client";
import React from "react";
import Stroke from "@/src/components/ui/stroke";
import PanelSimiTitle from "@/src/components/panel/simi-title";
import PanelDescription from "@/src/components/panel/description";
import { cn } from "@/lib/utils";
import type { SocialLink } from "@/lib/defination";
import Link from "next/link";
import Icon from "@/src/components/ui/svg";
import PanelIndex from ".";

const PanelSocial = ({
  title,
  data,
  className = "",
}: {
  title: string;
  data: SocialLink[];
  className?: string;
}) => {
  return (
    <section
      className={cn("grid grid-col-1   relative overflow-hidden", className)}
    >
      <div className="h-full min-h-screen pl-8 sm:pl-16 md:pl-20 lg:pl-24 pr-4  py-4 sm:py-6 md:py-8 lg:py-10  inline-flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
        <Stroke size={1} />
        <PanelIndex index={'Active'} />
        <PanelSimiTitle className="font-bold">{title}</PanelSimiTitle>
        <Stroke>
          <div className="w-full">
            {data && (
              <PanelDescription className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full">
                {data.map((item: SocialLink) => (
                  <span className="block mt-1" key={item.label}>
                    <Link href={item.url} target="_blank" className="h-20 w-20 sm:h-24 sm:w-24 md:h-30 md:w-30 lg:h-40 lg:w-40 flex items-center justify-center shadow rounded-2xl  p-2 md:p-4 transition-all duration-700 hover:scale-110 ">
                      <Icon
                        iconName={item.icon}
                        className="h-full w-auto"
                      />
                    </Link>
                  </span>
                ))}
              </PanelDescription>
            )}
          </div>
        </Stroke>
      </div>
    </section>
  );
};

export default PanelSocial;
