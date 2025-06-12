"use client";
import { user } from "@/lib/data";
import Atf from "@/src/components/atf/Atf";
import Intro from "@/src/components/intro/intro";
import Experience from "@/src/components/experience/experience";
import Education from "@/src/components/education/education";
import Lander from "@/src/components/lander/lander";
import SocialLinks from "@/src/components/social/social";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/pagination";

export default function Page() {
  const {
    personalInfo,
    experience,
    education,
    certifications,
    landers,
    socialLinks,
  } = user;
  const experienceSwipterRef = useRef<SwiperType | null>(null);
  const educationSwipterRef = useRef<SwiperType | null>(null);
  const landerSwipterRef = useRef<SwiperType | null>(null);
  const outerSwiperRef = useRef<SwiperType | null>(null);

  const handleOuterSlideChange = () => {
    if (outerSwiperRef.current?.activeIndex !== 2) {
      experienceSwipterRef.current?.slideTo(0);
    }
    if (outerSwiperRef.current?.activeIndex !== 3) {
      educationSwipterRef.current?.slideTo(0);
    }
    if (outerSwiperRef.current?.activeIndex !== 4) {
      landerSwipterRef.current?.slideTo(0);
    }
  };

  return (
    <main>
      <Swiper
        nested={true}
        modules={[Pagination, Mousewheel, Keyboard]}
        direction={"vertical"}
        
        pagination={{
          clickable: true,
          bulletClass: "swiper-pagination-bullet custom-bullet bg-foreground ",
          bulletActiveClass:
            "swiper-pagination-bullet-active custom-bullet-active bg-primary",
        }}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 1,
          thresholdDelta: 20,
          thresholdTime: 500,
          releaseOnEdges: false,
        }}
        keyboard={{ enabled: true }}
        className="h-screen  w-screen"
        onSwiper={(swiper) => (outerSwiperRef.current = swiper)}
        onSlideChange={handleOuterSlideChange}
      >
        <SwiperSlide>
          <Atf title={`${personalInfo.title}`} />
        </SwiperSlide>
        <SwiperSlide>
          <Intro data={personalInfo} />
        </SwiperSlide>
        <SwiperSlide>
          <Experience data={experience} ref={experienceSwipterRef} />
        </SwiperSlide>
        <SwiperSlide>
          <Education
            data={{ education: education, certifications: certifications }}
            ref={educationSwipterRef}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Lander data={landers} ref={landerSwipterRef} />
        </SwiperSlide>

        <SwiperSlide>
          <SocialLinks data={socialLinks} />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
