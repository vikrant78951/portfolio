import React from "react";
import type { Screenshots } from "@/lib/defination";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CollageProps {
  className?: string;
  data: Screenshots[];
}

const Collage = ({ className = "", data }: CollageProps) => {
  const splitter = (data: Screenshots[], size = 2): Screenshots[][] => {
    const result: Screenshots[][] = [];
    for (let i = 0; i < data.length; i += size) {
      result.push(data.slice(i, i + size));
    }
    return result;
  };

  const rows = splitter(data);

  return (
    <div className={cn("flex gap-4 md:gap-8 flex-wrap mt-8 sm:mt-10 md:mt-12 xl:mt-0  ", className)}>
      {rows.map((row, i) => (
        <div key={i} className="flex flex-col gap-8  lg:justify-center lg:rotate-12   lg:-translate-y-30 ">
          {row.map((img, j) => (
            <Image
              src={img.src}
              alt={img.alt}
              width={300}
              height={500}
              key={j}
              className="w-full h-auto md:max-w-48 lg:max-w-64 "
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Collage;
