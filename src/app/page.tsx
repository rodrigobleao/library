'use client';

import { useState } from 'react';
import Icon from '../components/atoms/Icon';
import Button from '../components/atoms/Button';
import Typography from '../components/atoms/Typography';
import SearchInput from '../components/atoms/SearchInput';
import ButtonMenu from '../components/molecules/ButtonMenu';
import EdgeContainer from '../components/molecules/EdgeContainer';
import Section from '../components/organisms/Section';
import { useRouter } from 'next/navigation';
import KPIModal from './_modals/AssetModal';
import { useRecentSearchStore } from '@/stores';
import { assets } from '@/mock/data';

const buttons = [
  { label: 'Featured', route: '/' },
  { label: 'KPI', route: '/KPI' },
  { label: 'Layouts', route: '/Layouts' },
  { label: 'Storyboards', route: '' },
];

export default function Home() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState('');
  const { addSearch } = useRecentSearchStore();

  const selectedAsset = assets.find((item) => item.id === selectedItemId);

  const handleItemAction = (id: string) => {
    setSelectedItemId(id);
    handleToggleModal();
  };

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      router.push(`/search?query=${searchText}`);
      addSearch(searchText);
    }
  };

  const handleMenuOnChange = (route: string) => {
    router.push(`${route}`);
  };

  return (
    <main className="flex flex-1 max-w-screen-xl mx-auto relative">
      <EdgeContainer variant="top-right">
        <Button
          variant="contrast"
          title="Request"
          className="px-3 py-1 sm:px-6 sm:py-3"
        >
          <Icon name="box-add" size={20} className="text-white" />
        </Button>
      </EdgeContainer>
      <div className="flex flex-col items-center p-12 gap-7 max-w-screen-lg mx-auto">
        <Typography variant="h1" className="mt-4">
          Library
        </Typography>
        <Typography variant="p" className="text-xl my-8">
          Browse for assets needed to report and present analysis.
        </Typography>
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          className="w-full"
          onSearch={handleSearch}
        />
        <ButtonMenu options={buttons} onChange={handleMenuOnChange} />
        <Section
          title="Featured"
          subtitle="Curated top picks from this week"
          items={assets.slice(0, 4)}
          className="mt-5"
          background="white"
          itemAction={handleItemAction}
        />
        <Section
          title="Trending"
          subtitle="Most popular by community"
          items={assets.slice(5, 9)}
          className="mt-5"
          itemAction={handleItemAction}
        />
      </div>
      <KPIModal
        asset={selectedAsset}
        isOpen={isModalOpen}
        setIsOpen={handleToggleModal}
      />
    </main>
  );
}
