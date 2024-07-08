import { ReactNode } from 'react';

interface EdgeContainerProps {
  children: ReactNode;
  className?: string;
  variant: 'top-left' | 'top-right';
}

const EdgeContainer: React.FC<EdgeContainerProps> = ({
  children,
  className = '',
  variant,
}) => {
  const variantClasses = {
    'top-left': 'left-0',
    'top-right': 'right-0',
  };

  const edgePositionClass = variantClasses[variant];

  return (
    <div className={`absolute p-5 top-0 ${edgePositionClass} ${className}`}>
      {children}
    </div>
  );
};

export default EdgeContainer;
