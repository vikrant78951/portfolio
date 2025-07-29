import React from 'react';
import { cn } from '@/lib/utils';

interface TodaySheduleProps {
  className?: string;
}

const TodayShedule: React.FC<TodaySheduleProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>TodayShedule</div>
  );
};

export default TodayShedule;