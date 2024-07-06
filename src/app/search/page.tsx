'use client';

import React, { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SearchInput from '@/components/atoms/SearchInput';
import useRecentSearches from '@/hooks/localStorage/useRecentSearches';
import IconButton from '@/components/atoms/IconButton';
import Typography from '@/components/atoms/Typography';
import ItemsCardList from '@/components/organisms/ItemsCardList';
import { items } from '../../mock/kpis';
import KPIModal from '@/components/templates/KPIModal';

export default function SearchResultsPage() {
  const { recentSearches, addSearch, removeSearch } = useRecentSearches();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const [searchInput, setSearchInput] = useState(query);
  const [activeItem, setActiveItem] = useState<string>();

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleClickItem = (id: string) => {
    setActiveItem(id);
    handleToggleModal();
  };

  const handleSearch = () => {
    addSearch(searchInput);
    router.push(`/search?query=${searchInput}`);
  };

  return (
    <div className="flex flex-1 max-w-screen-xl mx-auto relative mt-7">
      <div className="flex flex-col items-center p-12 gap-4 max-w-screen-lg mx-auto">
        <Typography variant="h1">Library</Typography>
        <SearchInput
          setSearchText={setSearchInput}
          searchText={searchInput}
          onSearch={handleSearch}
          className="w-full mt-7"
        />
        <div className="flex flex-col justify-start w-full">
          {recentSearches.length > 0 && (
            <Typography variant="p" color="contrast">
              RECENT SEARCHES
            </Typography>
          )}
          {recentSearches.map((search) => (
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
            items={items}
            background="white"
            itemAction={handleClickItem}
          />
          <KPIModal
            item={items.find((item) => item.id === activeItem)}
            isOpen={isModalOpen}
            setIsOpen={handleToggleModal}
          />
        </div>
      </div>
    </div>
  );
}
