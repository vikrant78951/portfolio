"use client";
import React from "react";
import Stroke from "@/src/components/ui/stroke";
import PanelSimiTitle from "@/src/components/panel/simi-title";
import PanelDescription from "@/src/components/panel/description";
import PanelIndex from "@/src/components/panel";
import { cn } from "@/lib/utils";
import type { Education} from "@/lib/defination";

const PanelEducation = ({
  index = "01",
  data,
  className = "",
}: {
  index?: string;
  data:Education;
  className?: string;
}) => {
  const { degree, institution, duration, cgpa ,description} = data;
  return (
       <section
        className={cn(
          "grid grid-col-1   relative overflow-hidden",
          className
        )}
      >
        <div className="min-h-screen pl-8 sm:pl-16 md:pl-20 lg:pl-24 pr-4  py-4 sm:py-6 md:py-8 lg:py-10  inline-flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7">
          {index && <PanelIndex index={index} />}
         
          {degree && (
            <PanelSimiTitle className="font-bold">{degree}</PanelSimiTitle>
          )}

          <Stroke>
            <div className="mb-2 md:mb-4 h-full pr-3 md:pr-6 z-10">
              {institution && (
                <h1 className="font-bold text-lg">{institution}</h1>
              )}
              {duration && (
                <p className="italic  ">{duration}</p>
              )}
              {cgpa && (
                <p className="italic  ">
                  <strong>CGPA : </strong>
                  {cgpa}
                </p>
              )}

              <PanelDescription className="mt-4">{description}</PanelDescription>
            </div>
          </Stroke>
        </div>
      </section>
   );
};

export default PanelEducation;
