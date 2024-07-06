'use client';

import { useState } from 'react';
import Button from '../../atoms/Button';
import { ButtonVariantOptions } from '../../atoms/Button/styles';

interface ButtonMenuProps {
  options: { title: string; onClick: () => void }[];
  className: string;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ options, className }) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

  const handleButtonClick = (index: number) => {
    if (index !== selectedButtonIndex) {
      setSelectedButtonIndex(index);
      options[index].onClick();
    }
  };

  const getButtonVariant = (index: number): ButtonVariantOptions =>
    selectedButtonIndex === index ? 'menu-active' : 'menu';

  const getXsClass = (index: number) =>
    options.length % 2 !== 0 && index === 0 ? 'w-full' : 'w-1/2';

  return (
    <div
      className={`flex flex-wrap sm:flex-nowrap w-full bg-accent p-1 rounded-md ${className}`}
    >
      {options.map((button, index) => {
        return (
          <Button
            key={index}
            title={button.title}
            onClick={() => handleButtonClick(index)}
            variant={getButtonVariant(index)}
            className={`${getXsClass(index)} sm:w-full`}
          />
        );
      })}
    </div>
  );
};

export default ButtonMenu;
