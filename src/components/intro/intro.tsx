"use client";
import React from "react";
import Panel from "@/src/components/panel/panel";
import type { PersonalInfoData } from "@/lib/defination";

const Intro = ({ data }: { data: PersonalInfoData }) => {
  const {
    firstName,
    lastName,
    dob: { day, month, year },
    summary,
    specialization,
  } = data;

  return (
   <div>
     <Panel
      title={`${firstName} ${lastName}`}
      subtitle={`${day}/${month}/${year}`}
      description={summary}
      stacks={specialization}
    />
   </div>
  );
};

export default Intro;
