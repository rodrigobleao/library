'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SearchInput from '@/components/atoms/SearchInput';
import IconButton from '@/components/atoms/IconButton';
import Typography from '@/components/atoms/Typography';
import ItemsCardList from '@/components/organisms/ItemsCardList';
import { useRecentSearchStore } from '@/stores';
import EdgeContainer from '@/components/molecules/EdgeContainer';
import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import KPIModal from '../_modals/AssetModal';
import { assets } from '@/mock/data';

export default function SearchResultsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const { searches, addSearch, removeSearch } = useRecentSearchStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchInput, setSearchInput] = useState(query);
  const [filteredAssets, setFilteredAssets] = useState(assets);

  useEffect(() => {
    const results = assets.filter((asset) =>
      asset.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredAssets(results);
  }, [searchInput]);

  const selectedAsset = assets.find((item) => item.id === activeItem);

  const handleSearch = () => {
    if (searchInput.trim()) {
      addSearch(searchInput);
      router.push(`/search?query=${searchInput}`);
    }
  };

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
        <Typography variant="h1">Library</Typography>
        <SearchInput
          setSearchText={setSearchInput}
          searchText={searchInput}
          onSearch={handleSearch}
          className="w-full mt-7"
        />
        <div className="flex flex-col justify-start w-full">
          {searches.length > 0 && (
            <Typography variant="p" color="contrast">
              RECENT SEARCHES
            </Typography>
          )}
          {searches.map((search) => (
            <div key={search} className="flex flex-1 gap-1 items-center">
              <IconButton
                name="close"
                color="contrast"
                size={16}
                onClick={() => removeSearch(search)}
              />
              <Typography variant="p" color="black" className="truncate">
                {search}
              </Typography>
            </div>
          ))}
          <ItemsCardList
            items={filteredAssets}
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
    </div>
  );
}
