import React from 'react';
import { cn } from '@/lib/utils';

interface CompanyProps {
  className?: string;
}

const Company: React.FC<CompanyProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>Company</div>
  );
};

export default Company;