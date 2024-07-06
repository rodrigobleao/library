import React, { useState } from 'react';
import ModalBase from '../../organisms/ModalBase';
import ModalTitle from '../../molecules/ModalTitle';
import Icon from '../../atoms/Icon';
import EdgeContainer from '../../molecules/EdgeContainer';
import IconButton from '../../atoms/IconButton';
import BackgroundContainer from '../../molecules/BackgroundContainer';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import TagsList from '../../molecules/TagsList';
import ItemsCardList from '../../organisms/ItemsCardList';
import { KPIProps } from '@/mock/kpis';
import AttachToLayoutModal from '../AttachToLayoutModal';
import RequestAccessModal from '../RequestAccessModal';

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

type KPIModalProps = {
  item?: KPIProps;
  isOpen: boolean;
  setIsOpen: () => void;
};

const KPIModal: React.FC<KPIModalProps> = ({ item, isOpen, setIsOpen }) => {
  const [activeItem, setActiveItem] = useState<string>();
  const [isActionModalOpen, setIsActionModalOpen] = useState(false);

  const handleToggleActionModal = () => {
    setIsActionModalOpen((prev) => !prev);
  };

  if (!item) return null;

  return (
    <ModalBase isOpen={isOpen} setIsOpen={setIsOpen}>
      {item.access ? (
        <AttachToLayoutModal
          isOpen={isActionModalOpen}
          setIsOpen={handleToggleActionModal}
          item={item}
          className="z-100 mr-4"
        />
      ) : (
        <RequestAccessModal
          isOpen={isActionModalOpen}
          setIsOpen={handleToggleActionModal}
          item={item}
          className="z-100 mr-4"
        />
      )}
      {!item.access && (
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
      )}
      <EdgeContainer>
        <div
          className={`flex gap-1 rounded-lg ${!item.access && 'bg-accent p-1'}`}
        >
          <IconButton
            name={item.access ? 'create' : 'unlock'}
            color="black"
            onClick={handleToggleActionModal}
          />
          <IconButton name="link" color="black" />
          <IconButton name="close" color="black" onClick={setIsOpen} />
        </div>
      </EdgeContainer>
      <ModalTitle
        title="INTES"
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
      <Typography variant="strong" className="text-3xl">
        Business Questions
      </Typography>
      <ItemsCardList
        items={questions}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        activeItemBackground="accent"
      />
      <Button
        title="Favorite Item"
        variant="modal"
        className="w-full mt-6 relative"
      >
        <Icon name="bookmark" className="text-white" />
      </Button>
    </ModalBase>
  );
};

export default KPIModal;
