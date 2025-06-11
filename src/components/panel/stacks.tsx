import React from "react";
import { Badge } from "@/src/components/ui/badge";
import { cn } from "@/lib/utils";

const Stacks = ({ data ,className = ''}: { data: string[], className? : string }) => {
  return (
    <div className={cn('flex flex-wrap gap-2 mt-2',className)}>
      {data.map((stack) => (
        <Badge key={stack} variant="secondary" className=" text-sm md:text-md">
          # {stack}
        </Badge>
      ))}
    </div>
  );
};

export default Stacks;
