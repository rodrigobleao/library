import React, { ReactNode } from 'react';

interface EdgeContainerProps {
  children: ReactNode;
  className?: string;
}

const EdgeContainer: React.FC<EdgeContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`absolute p-5 top-0 right-0 ${className}`}>{children}</div>
  );
};

export default EdgeContainer;
