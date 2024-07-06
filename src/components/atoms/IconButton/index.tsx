import React from 'react';
import Icon, { IconProps } from '../Icon';
import { IconName } from '../Icon/iconsMap';
import { TextColorsOptions } from '@/styles/textStyles';

interface IconButtonProps extends IconProps {
  name: IconName;
  onClick?: () => void;
  color?: TextColorsOptions;
}

const IconButton: React.FC<IconButtonProps> = ({
  name,
  onClick,
  size,
  color,
}) => {
  return (
    <button onClick={onClick}>
      <Icon
        name={name}
        size={size}
        color={color}
        className={'hover:opacity-90 active:opacity-70'}
      />
    </button>
  );
};

export default IconButton;
