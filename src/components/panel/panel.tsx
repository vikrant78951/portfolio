import React from "react";
import Stroke from "@/src/components/ui/stroke";
import PanelMainTitle from "@/src/components/panel/main-title";
import PanelSimiTitle from "@/src/components/panel/simi-title";
import PanelDescription from "@/src/components/panel/description";
import Stacks from "./stacks";
import { cn } from "@/lib/utils";

const Panel = ({
  title,
  subtitle,
  badge,
  description,
  stacks,
  className = "",
}: {
  title?: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  stacks?: string[];
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "h-full px-8 sm:px-16 md:px-20 lg:px-24 py-4 sm:py-6 md:py-8 lg:py-10 inline-flex flex-col justify-center gap-4 sm:gap-5 md:gap-6 lg:gap-7  ",
        className
      )}
    >
      <Stroke size={2} />

      {subtitle && <PanelSimiTitle>{subtitle}</PanelSimiTitle>}
      {title && <PanelMainTitle>{title}</PanelMainTitle>}

      <Stroke>
        <div className="flex flex-col gap-2 w-full">
          {badge && (
            <PanelSimiTitle className="sm:text-right">{badge}</PanelSimiTitle>
          )}
          {description && (
            <PanelDescription className="leading-normal">
              {description}
            </PanelDescription>
          )}
          {stacks && <Stacks data={stacks} />}
        </div>
      </Stroke>
    </section>
  );
};

export default Panel;
