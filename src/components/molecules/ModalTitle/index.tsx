import React, { ReactNode } from 'react';
import Typography from '../../atoms/Typography';
import BackgroundContainer from '../BackgroundContainer';

interface ModalTitleProps {
  title: string;
  titleLabel: string;
  TitleDescription: string;
  children: ReactNode;
}

const ModalTitle: React.FC<ModalTitleProps> = ({
  title,
  titleLabel,
  TitleDescription,
  children,
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <BackgroundContainer className="mb-4 p-3 rounded-xl">
        {children}
      </BackgroundContainer>
      <div className="flex items-center gap-3">
        <Typography variant="h2">{title}</Typography>
        <BackgroundContainer className="py-0 px-2 rounded">
          <Typography variant="span" color="contrast">
            {titleLabel}
          </Typography>
        </BackgroundContainer>
      </div>
      <Typography variant="h3" className="text-contrast">
        {TitleDescription}
      </Typography>
    </div>
  );
};

export default ModalTitle;
