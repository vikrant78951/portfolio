import React from "react";
import Panel from "@/src/components/panel/panel";
import type { Education, Certification } from "@/lib/defination";
import PanelEducation from "../panel/education";
import PanelCertification from "../panel/certification";

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
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={{
          forceToAxis: true, 
          sensitivity: 10, 
          releaseOnEdges: false, 
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
