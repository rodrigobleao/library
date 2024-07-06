import { TEXT_COLORS, TextColorsOptions } from '@/styles/textStyles';
import iconsMap, { IconName } from './iconsMap';
import { IconBaseProps } from 'react-icons';

export interface IconProps extends IconBaseProps {
  name: IconName;
  color?: TextColorsOptions;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  className,
  color = 'white',
  ...props
}) => {
  const IconComponent = iconsMap[name].icon;
  const iconStyle = iconsMap[name].style || '';
  const iconColor = TEXT_COLORS[color];

  const mergedStyles = [iconStyle, iconColor].join(' ');

  return (
    <IconComponent
      className={`text-text-secondary ${mergedStyles} ${className}`}
      size={size}
      {...props}
    />
  );
};

export default Icon;
