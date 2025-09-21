import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface UnderlineLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export const UnderlineLink = ({ href, children, className, external = false }: UnderlineLinkProps) => {
  const linkProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  
  return (
    <a 
      href={href} 
      className={cn("underline-link inline-block text-text-primary hover:text-text-secondary transition-colors", className)}
      {...linkProps}
    >
      {children}
    </a>
  );
};