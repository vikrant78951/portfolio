import React from 'react';
import { cn } from '@/lib/utils';

interface AddDetailsProps {
  className?: string;
}

const AddDetails: React.FC<AddDetailsProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>AddDetails</div>
  );
};

export default AddDetails;