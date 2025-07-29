import React from 'react';
import { cn } from '@/lib/utils';

interface PreviewProps {
  className?: string;
}

const Preview: React.FC<PreviewProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>Preview</div>
  );
};

export default Preview;