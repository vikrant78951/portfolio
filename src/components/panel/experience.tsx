 'use client'
import React from "react";
import Stroke from "@/src/components/ui/stroke";
import PanelSimiTitle from "@/src/components/panel/simi-title";
import PanelDescription from "@/src/components/panel/description";
import PanelIndex from "@/src/components/panel";
import Stacks from "./stacks";
import { cn } from "@/lib/utils";
import type { Experience } from "@/lib/defination";
import Collage from "@/src/components/ui/collage";

 
const PanelExperience = ({
  index = "01",
  data,
  className = "",
}: {
  index?: string;
  data: Experience;
  className?: string;
}) => {
  const {
    role,
    company,
    duration,
    technologies,
    responsibilities,
    screenshots,
  } = data;
  return (
       <section
        className={cn(
          "grid grid-col-1 lg:grid-cols-2 relative overflow-hidden",
          className
        )}
      >
        <div className="h-full min-h-screen pl-8 sm:pl-16 md:pl-20 lg:pl-24 pr-4  py-4 sm:py-6 md:py-8 lg:py-10  inline-flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {index && <PanelIndex index={index} />}
          {role && (
            <PanelSimiTitle className="font-bold">{role}</PanelSimiTitle>
          )}

          <Stroke>
            <div className="mb-2 md:mb-4">
              {company && <h1 className="font-bold text-lg">{company}</h1>}
              {duration && (
                <p className="italic text-neutral-400">{duration}</p>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full">
              {responsibilities && (
                <PanelDescription className="leading-normal text-sm sm:text-sm md:text-sm  lg:text-md">
                  {responsibilities.map((item) => (
                    <span className="block mt-1" key={item}>
                      {item}
                    </span>
                  ))}
                </PanelDescription>
              )}
              {technologies && <Stacks data={technologies} />}
            </div>

            <Collage
              className="hidden lg:flex lg:absolute w-full lg:w-1/2 lg:right-0 lg:top-0 pr-4 sm:pr-6 md:pr-8 lg:pr-10  "
              data={screenshots}
            />
          </Stroke>
        </div>
      </section>
   );
};

export default PanelExperience;
