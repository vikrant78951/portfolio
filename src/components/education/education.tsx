import React from "react";
import Panel from "@/src/components/panel/panel";
import type { Education, Certification } from "@/lib/defination";
import PanelEducation from "../panel/panel-education";
import PanelCertification from "../panel/panel-certification";

import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";

const Education = ({
  className = "",
  data,
  ref,
}: {
  ref: React.RefObject<SwiperType | null>;
  className?: string;
  data: { education: Education[]; certifications: Certification[] };
}) => {
  return (
    <>
      <Swiper
        onSwiper={(swiper) => (ref.current = swiper)}
        modules={[Pagination, Mousewheel, Keyboard]}
        direction={"horizontal"}
        pagination={{ clickable: true }}
        mousewheel={{
          forceToAxis: true,    // Required for vertical-only control
          sensitivity: 1,       // Lower = less sensitive, can tweak
          releaseOnEdges: false // Prevents bubbling into parent scroll
        }}
        keyboard={{ enabled: true }}
        className="h-screen  w-screen"
        threshold={30}
 
       >
        <SwiperSlide>
          <Panel
            subtitle="2020"
            title="Education"
            badge="& Certification"
            className={className}
          />
        </SwiperSlide>

        {data &&
          data.education.map((education, index) => (
            <SwiperSlide key={education.institution}>
              <PanelEducation
                data={education}
                index={String(`${index < 10 ? "0" : ""}${index + 1}`)}
              />
            </SwiperSlide>
          ))}

        {data &&
          data.certifications.map((certifications, index) => (
            <SwiperSlide key={certifications.title}>
              <PanelCertification
                data={certifications}
                index={String(`${index < 10 ? "0" : ""}${index + 1}`)}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
};

export default Education;
