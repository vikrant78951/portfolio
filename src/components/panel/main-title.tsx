import { cn } from "@/lib/utils";
import React from "react";
const PanelMainTitle = ({
  children = "",
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1
      className={cn(
        "text-4xl sm:text-5xl md:text-7xl  lg:text-8xl leading-[100%] font-bold uppercase",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default PanelMainTitle;
