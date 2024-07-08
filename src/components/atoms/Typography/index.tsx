import { TEXT_COLORS, TextColorsOptions } from '@/styles/textStyles';
import React, { ReactNode } from 'react';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'strong';
  children: ReactNode;
  className?: string;
  color?: TextColorsOptions;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  children,
  color = 'black',
  className,
}) => {
  const colorClass = TEXT_COLORS[color];

  switch (variant) {
    case 'h1':
      return (
        <h1 className={`text-6xl font-bold ${colorClass} ${className}`}>
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2 className={`text-4xl font-semibold ${colorClass} ${className}`}>
          {children}
        </h2>
      );

    case 'h3':
      return <h3 className={`${colorClass} ${className}`}>{children}</h3>;

    case 'p':
      return (
        <p className={`text-start ${colorClass} ${className}`}>{children}</p>
      );

    case 'span':
      return <span className={`${colorClass} ${className}`}>{children}</span>;

    case 'strong':
      return (
        <strong className={`text-lg font-semibold ${colorClass} ${className}`}>
          {children}
        </strong>
      );
  }
};

export default Typography;
