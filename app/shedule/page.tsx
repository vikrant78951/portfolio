import React from 'react';
import { cn } from '@/lib/utils';

interface SheduleLogsProps {
  className?: string;
}

const SheduleLogs: React.FC<SheduleLogsProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>SheduleLogs</div>
  );
};

export default SheduleLogs;