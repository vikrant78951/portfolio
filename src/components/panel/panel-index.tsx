import { cn } from "@/lib/utils";
import { raleway } from "@/src/fonts/raleway";

import React from "react";

const PanelIndex = ({
  className,
  index = "01",
}: {
  className?: string;
  index: string;
}) => {
  return (
    <h1
      className={cn(
        "text-xl   sm:text-1xl   md:text-2xl  lg:text-4xl leading-[100%]  ",
        raleway.className,
        className
      )}
    >
      {index}
    </h1>
  );
};

export default PanelIndex;
