import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export const Link = ({
  href,
  children,
  className = '',
  external = false,
  onClick,
}: LinkProps) => {
  const baseClasses = 'transition-colors duration-300';
  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      className={`${baseClasses} ${className}`}
      onClick={onClick}
      {...externalProps}>
      {children}
    </a>
  );
};
