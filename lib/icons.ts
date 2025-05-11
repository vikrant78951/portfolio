
import {
    Clock,
    Activity,
    Languages,
    PackageCheck,
  } from 'lucide-react';
  
  import { LucideProps } from 'lucide-react';

  const iconMap: Record<string, React.FC<LucideProps>> = {
    duration: Clock,
    activity: Activity,
    language: Languages,
    includes: PackageCheck,
  };
  
  export function getLucideIconByName(name: string): React.FC<LucideProps> {
    return iconMap[name.toLowerCase()] || Clock;
  }
  