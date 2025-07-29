import React from 'react';
import { cn } from '@/lib/utils';

interface TrackerProps {
  className?: string;
}

const Tracker: React.FC<TrackerProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>Tracker</div>
  );
};

export default Tracker;