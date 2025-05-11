import Panel from "@/src/components/panel/panel";
import type { PersonalInfoData } from "@/lib/defination";

import React from "react";

const Intro = ({ data }: { data: PersonalInfoData }) => {
  const {
    firstName,
    lastName,
    dob: { day, month, year },
    summary,
    specialization,
  } = data;
  return (
    <Panel
      title={`${firstName} ${lastName}`}
      subtitle={`${day}/${month}/${year}`}
      description={summary}
      stacks={specialization}
    />
  );
};

export default Intro;
