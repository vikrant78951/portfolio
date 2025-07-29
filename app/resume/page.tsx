import React from 'react';
import { cn } from '@/lib/utils';

interface ResumeProps {
  className?: string;
}

const Resume: React.FC<ResumeProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>Resume</div>
  );
};

export default Resume;