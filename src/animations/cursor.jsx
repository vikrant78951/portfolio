"use client";

import { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  const [primaryColor, setPrimaryColor] = useState("#ff3b3b"); // fallback red

  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    const cssPrimary = root.getPropertyValue("--color-primary").trim();
    if (cssPrimary) setPrimaryColor(cssPrimary);
  }, []);

  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      innerStyle={{
        backgroundColor: `${primaryColor}`,
      }}
      outerStyle={{
        border: `3px solid ${primaryColor}`,
      }}
    />
  );
};

export default CustomCursor;
