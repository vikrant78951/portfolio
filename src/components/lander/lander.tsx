import React from "react";
import Panel from "@/src/components/panel/panel";
import type { Lander } from "@/lib/defination";
import PanelLander from "../panel/lander";

import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

const Lander = ({
  className = "",
  data,
  ref,
}: {
  ref: React.RefObject<SwiperType | null>;
  className?: string;
  data: Lander[];
}) => {
  return (
    <>
      <Swiper
        onSwiper={(swiper) => (ref.current = swiper)}
        modules={[Pagination, Mousewheel, Keyboard]}
        direction={"horizontal"}
        pagination={{ clickable: true }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          releaseOnEdges: false,
        }}
        keyboard={{ enabled: true }}
        className="h-screen  w-screen"
      >
        <SwiperSlide>
          <Panel
            subtitle="Pixel Perfect"
            title="landers"
            badge="& Website"
            className={className}
          />
        </SwiperSlide>

        {data &&
          data.map((landers, index) => (
            <SwiperSlide key={landers.name}>
              <PanelLander
                data={landers}
                index={String(`${index < 10 ? "0" : ""}${index + 1}`)}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Lander;
