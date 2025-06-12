import { cn } from "@/lib/utils";
import React from "react";

const PanelDescription = ({
  children = "",
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm sm:text-md md:text-lg  lg:text-xl leading-[100%]    ",
        "",
        className
      )}
    >
      {children}
    </p>
  );
};

export default PanelDescription;
