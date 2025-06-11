import PanelSocial from "../panel/social";
import type { SocialLink } from "@/lib/defination";

import React from "react";

const SocialLinks = ({ data }: { data: SocialLink[] }) => {
  return <PanelSocial title="Social Links"  data={data} />;
};

export default SocialLinks;
