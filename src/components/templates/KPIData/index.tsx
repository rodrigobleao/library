import React, { useState } from 'react';
import ModalTitle from '../../molecules/ModalTitle';
import Icon from '../../atoms/Icon';
import BackgroundContainer from '../../molecules/BackgroundContainer';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import TagsList from '../../molecules/TagsList';
import ItemsCardList from '../../organisms/ItemsCardList';
import useFavoriteItemStore from '@/stores/favoriteItemsStore';
import { Kpi } from '@/mock/data';

const questions = [
  {
    id: '1',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    content: null,
  },
  {
    id: '2',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    content: null,
  },
  {
    id: '3',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    content: null,
  },
  {
    id: '4',
    title: 'Item Name',
    description: 'Sort description of the item goes nicely here.',
    content: null,
  },
];

const labels = ['comms', 'coverage', 'stakeholders'];

type KPIDataProps = {
  item?: Kpi;
};

const KPIData: React.FC<KPIDataProps> = ({ item }) => {
  const [activeItem, setActiveItem] = useState<string>();
  const { favorites, toggleFavorite } = useFavoriteItemStore();

  if (!item) return null;

  const isFavorite = favorites.includes(item.id);

  return (
    <div>
      <ModalTitle
        title={item.title}
        titleLabel="Layout"
        TitleDescription="Descriptive name of the Layout"
      >
        <Icon name="grid" size={44} color="contrast" />
      </ModalTitle>
      <Typography variant="p" className="mt-5 !text-center">
        Those options are already baked in with this model shoot me an email
        clear blue water but we need distributors to evangelize the new line to
        local markets.
      </Typography>
      <div className="flex w-full justify-center my-3">
        <TagsList tags={labels} />
      </div>
      <BackgroundContainer className="my-8">
        <div className="flex flex-1 w-full h-80"></div>
      </BackgroundContainer>
      <Typography variant="strong" className="text-2xl">
        Business Questions
      </Typography>
      <ItemsCardList
        items={questions}
        activeItem={activeItem}
        itemAction={setActiveItem}
        activeItemBackground="accent"
      />
      <Button
        title={`${isFavorite ? 'Remove from favorites' : 'Favorite Item'}`}
        variant="modal"
        className="w-full mt-6 relative z-50"
        onClick={() => toggleFavorite(item.id)}
      >
        <Icon
          name={isFavorite ? 'bookmark-fill' : 'bookmark'}
          className="text-white"
        />
      </Button>
    </div>
  );
};

export default KPIData;
