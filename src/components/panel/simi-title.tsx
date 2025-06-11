"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { raleway } from "@/src/fonts/raleway";
import { TypeAnimation } from "react-type-animation";

const PanelSimiTitle = ({
  children,
  className = "",
  animate = false,
}: {
  children: string;
  className?: string;
  animate?: boolean;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <h1
      className={cn(
        "text-2xl sm:text-3xl md:text-4xl  lg:text-5xl leading-[100%]  ",
        raleway.className,
        className
      )}
    >
      {animate ? (
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={cn(
            "text-2xl   sm:text-3xl   md:text-4xl  lg:text-5xl leading-[100%] min-h-20",
            className
          )}
        >
          {inView && (
            <TypeAnimation
              cursor={false}
              sequence={[children]}
              speed={50}
              wrapper="span"
            />
          )}
        </motion.div>
      ) : (
        children
      )}
    </h1>
  );
};

export default PanelSimiTitle;
