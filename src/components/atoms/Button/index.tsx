import React, { ReactNode, ButtonHTMLAttributes } from 'react';
import buttonVariantsStyle, { ButtonVariantOptions } from './styles';
import Typography from '../Typography';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  title?: string;
  variant: ButtonVariantOptions;
}

const Button: React.FC<CustomButtonProps> = ({
  children,
  title,
  variant,
  className,
  ...props
}) => {
  const { buttonStyle, textStyle } = buttonVariantsStyle[variant];

  return (
    <button
      {...props}
      className={`flex flex-row gap-2 items-center justify-center px-4 py-2
        rounded-md hover:opacity-95 active:opacity-90 select-none ${buttonStyle} ${className}`}
    >
      {children && children}
      {title && (
        <Typography variant="span" className={textStyle}>
          {title}
        </Typography>
      )}
    </button>
  );
};

export default Button;
