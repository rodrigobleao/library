import React from 'react';
import Typography from '../../atoms/Typography';
import { ItemCardBackgroundColorOptions } from '../../molecules/ItemCard/styles';
import ItemsCardList from '../ItemsCardList';
import { Asset } from '@/mock/data';

interface SectionProps {
  title?: string;
  subtitle?: string;
  items: Asset[];
  className?: string;
  activeItem?: string;
  setActiveItem?: (index: string) => void;
  background?: ItemCardBackgroundColorOptions;
  activeItemBackground?: ItemCardBackgroundColorOptions;
  itemAction: (id: string) => void;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  items,
  className,
  activeItem,
  background,
  activeItemBackground,
  itemAction,
}) => {
  return (
    <div className={`flex flex-col w-full gap-2 ${className}`}>
      <Typography variant="h2">{title}</Typography>
      <Typography variant="h3" color="contrast">
        {subtitle}
      </Typography>
      <ItemsCardList
        items={items}
        activeItem={activeItem}
        background={background}
        activeItemBackground={activeItemBackground}
        itemAction={itemAction}
      />
    </div>
  );
};

export default Section;
