import React from 'react';
import { cn } from '@/lib/utils';

interface LogsProps {
  className?: string;
}

const Logs: React.FC<LogsProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>Logs</div>
  );
};

export default Logs;