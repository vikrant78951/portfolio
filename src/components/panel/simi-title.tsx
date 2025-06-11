
import { raleway } from '@/src/fonts/raleway';

import { cn } from '@/lib/utils';
import React from 'react'

const PanelSimiTitle = (
    {
        children = '' ,
        className
    }:{
        children : React.ReactNode,
        className? : string;
    }
) => {
  return (
    <h1 className={cn('text-2xl   sm:text-3xl   md:text-4xl  lg:text-5xl leading-[100%]  ',raleway.className,className)}>{children}</h1>
  )
}

export default PanelSimiTitle