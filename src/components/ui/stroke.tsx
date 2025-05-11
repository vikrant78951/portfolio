import React from "react";
import { cn } from "@/lib/utils"; // Adjust path if needed

type StrokeProps = {
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  className?: string;
  children?: React.ReactNode;
};

const Stroke: React.FC<StrokeProps> = ({ size = 12, className, children }) => {
  return (
    <div
      className={cn(
        `flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-grow max-h-${size}/12 `,
        className
      )}
    >
      <div
        className={cn(
          `w-1 bg-gray-700 h-full flex-shrink-0 ml-1 md:ml-2 lg:ml-3`
        )}
      />
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default Stroke;
