import React from 'react';
import { cn } from '@/lib/utils';

interface DashboardProps {
  className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>Dashboard</div>
  );
};

export default Dashboard;