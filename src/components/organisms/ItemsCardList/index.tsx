import React from 'react';
import ItemCard from '../../molecules/ItemCard';
import { ItemCardBackgroundColorOptions } from '../../molecules/ItemCard/styles';
import { KPIProps } from '@/mock/kpis';

interface SectionProps {
  items: KPIProps[];
  className?: string;
  activeItem?: string;
  background?: ItemCardBackgroundColorOptions;
  activeItemBackground?: ItemCardBackgroundColorOptions;
  itemAction?: (id: string) => void;
}

const ItemsCardList: React.FC<SectionProps> = ({
  items,
  className,
  activeItem,
  background,
  activeItemBackground,
  itemAction,
}) => {
  const handleClickItem = (index: number) => {
    itemAction && itemAction(items[index].id);
  };
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mt-7 ${className}`}>
      {items.map((item, index) => (
        <ItemCard
          key={index}
          item={item}
          className="w-full"
          itemAction={() => handleClickItem(index)}
          background={
            item.id === activeItem ? activeItemBackground : background
          }
        />
      ))}
    </div>
  );
};

export default ItemsCardList;
