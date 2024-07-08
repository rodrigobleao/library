'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import IconButton from '@/components/atoms/IconButton';
import Typography from '@/components/atoms/Typography';
import ItemsCardList from '@/components/organisms/ItemsCardList';
import EdgeContainer from '@/components/molecules/EdgeContainer';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import KPIModal from '../_modals/AssetModal';
import { Asset, assets, Kpi } from '@/mock/data';
import useFavoriteItemStore from '@/stores/favoriteItemsStore';

export default function SearchResultsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const router = useRouter();
  const { favorites } = useFavoriteItemStore();

  const filterKPIsByIds = (assets: Asset[], ids: string[]) => {
    let filteredKPIs: Kpi[] = [];

    assets.forEach((asset) => {
      asset.kpis.forEach((kpi) => {
        if (ids.includes(kpi.id)) {
          filteredKPIs.push(kpi);
        }
      });
    });

    return filteredKPIs;
  };

  const filteredKPIs = filterKPIsByIds(assets, favorites);
  const selectedAsset = assets.find((item) => item.id === activeItem);

  const handleItemAction = (id: string) => {
    setActiveItem(id);
    handleToggleModal();
  };

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="flex flex-1 max-w-screen-xl mx-auto relative mt-7">
      <EdgeContainer variant="top-left">
        <IconButton
          name="arrow-back"
          onClick={() => router.push(`/`)}
          color="black"
        />
      </EdgeContainer>
      <EdgeContainer variant="top-right">
        <Button
          variant="contrast"
          title="Request"
          className="px-3 py-1 sm:px-6 sm:py-3"
        >
          <Icon name="box-add" size={20} className="text-white" />
        </Button>
      </EdgeContainer>
      <div className="flex flex-col items-center p-12 gap-4 max-w-screen-lg mx-auto">
        <Typography variant="h1">KPIs</Typography>
        <Typography variant="h2" className="self-start text-lg">
          Favorite KPIs:
        </Typography>
        <ItemsCardList
          items={filteredKPIs}
          background="white"
          itemAction={handleItemAction}
        />
        <KPIModal
          asset={selectedAsset}
          isOpen={isModalOpen}
          setIsOpen={handleToggleModal}
        />
      </div>
    </div>
  );
}
