import React, { ReactNode } from 'react';

interface BackgroundContainerProps {
  children: ReactNode;
  border?: boolean;
  className?: string;
}

const BackgroundContainer: React.FC<BackgroundContainerProps> = ({
  children,
  className,
  border,
}) => {
  const borderStyle = border ? 'border-2' : '';
  return (
    <div className={`p-2 bg-accent rounded-md ${borderStyle} ${className}`}>
      {children}
    </div>
  );
};

export default BackgroundContainer;
