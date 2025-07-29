import React from 'react';
import { cn } from '@/lib/utils';

interface AuthProps {
  className?: string;
}

const Auth: React.FC<AuthProps> = ({ className }) => {
  return (
    <div className={cn('', className)}>Auth</div>
  );
};

export default Auth;