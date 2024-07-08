'use client';

import { useState } from 'react';
import Button from '../../atoms/Button';
import { ButtonVariantOptions } from '../../atoms/Button/styles';

type option = { label: string; route: string };

interface ButtonMenuProps {
  options: option[];
  onChange: (route: string) => void;
}

const ButtonMenu: React.FC<ButtonMenuProps> = ({ options, onChange }) => {
  const [selectedButton, setSelectedButton] = useState(options[0].route);

  const handleButtonClick = (option: option) => {
    if (option.route !== selectedButton) {
      setSelectedButton(option.route);
      onChange(option.route);
    }
  };

  const getButtonVariant = (route: string): ButtonVariantOptions =>
    selectedButton === route ? 'menu-active' : 'menu';

  const getXsClass = (index: number) =>
    options.length % 2 !== 0 && index === 0 ? 'w-full' : 'w-1/2';

  return (
    <div className="flex flex-wrap sm:flex-nowrap w-full bg-accent p-1 rounded-md">
      {options.map((option, index) => {
        return (
          <Button
            key={index}
            title={option.label}
            onClick={() => handleButtonClick(option)}
            variant={getButtonVariant(option.route)}
            className={`${getXsClass(index)} sm:w-full`}
          />
        );
      })}
    </div>
  );
};

export default ButtonMenu;
