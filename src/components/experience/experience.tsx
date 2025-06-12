import React from "react";
import Panel from "@/src/components/panel/panel";
import type { Experience } from "@/lib/defination";
import PanelExperience from "../panel/experience";

import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

const Experience = ({
  className = "",
  data,
  ref,
}: {
  ref: React.RefObject<SwiperType | null>;
  className?: string;
  data: Experience[];
}) => {
  return (
    <>
      <Swiper
        onSwiper={(swiper) => (ref.current = swiper)}
        modules={[Pagination, Mousewheel, Keyboard]}
        direction={"horizontal"}
        pagination={{
          dynamicBullets: true,
        }}
        scrollbar={{
          hide: true,
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 10,
          releaseOnEdges: false,
        }}
        keyboard={{ enabled: true }}
        className="h-screen  w-screen"
      >
        <SwiperSlide>
          <Panel subtitle="4.6 year" title="experience" className={className} />
        </SwiperSlide>

        {data &&
          data.map((exp, index) => (
            <SwiperSlide key={exp.company}>
              <PanelExperience
                data={exp}
                index={String(`${index < 10 ? "0" : ""}${index + 1}`)}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Experience;
