import React from 'react';
import { cn } from '@/lib/utils';

interface EmailProps {
  className?: string;
}

const Email: React.FC<EmailProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>Email</div>
  );
};

export default Email;