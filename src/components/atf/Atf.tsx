import { getCurrentYear } from "@/lib/utils";
import Panel from "@/src/components/panel/panel";

import React from 'react'

const Atf = ({title} : {title : string}) => {
  return (
    <Panel
    title="portfolio" 
    subtitle={getCurrentYear()}
    badge = {title}
    />
  )
}

export default Atf