'use client';

import { useState } from 'react';
import Icon from '../components/atoms/Icon';
import Button from '../components/atoms/Button';
import Typography from '../components/atoms/Typography';
import SearchInput from '../components/atoms/SearchInput';
import ButtonMenu from '../components/molecules/ButtonMenu';
import EdgeContainer from '../components/molecules/EdgeContainer';
import Section from '../components/organisms/Section';
import KPIModal from '../components/templates/KPIModal';
import { useRouter } from 'next/navigation';
import { items } from '../mock/kpis';
import useRecentSearches from '@/hooks/localStorage/useRecentSearches';

const buttons = [
  { title: 'Featured', onClick: () => console.log('Featured') },
  { title: 'KPI', onClick: () => console.log('KPI') },
  { title: 'Layouts', onClick: () => console.log('Layouts') },
  { title: 'Storyboards', onClick: () => console.log('Storyboards') },
];

export default function Home() {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addSearch } = useRecentSearches();

  const handleToggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const handleSearch = () => {
    router.push(`/search?query=${searchText}`);
    addSearch(searchText);
  };

  return (
    <main className="flex flex-1 max-w-screen-xl mx-auto relative">
      <EdgeContainer>
        <Button
          variant="contrast"
          title="Request"
          className="px-3 py-1 sm:px-6 sm:py-3"
        >
          <Icon name="boxAdd" size={20} className="text-white" />
        </Button>
      </EdgeContainer>
      <div className="flex flex-col items-center p-12 max-w-screen-lg mx-auto">
        <Typography variant="h1" className="mt-7">
          Library
        </Typography>
        <Typography variant="p" className="text-xl py-4 mt-7">
          Browse for assets needed to report and present analysis.
        </Typography>
        <SearchInput
          searchText={searchText}
          setSearchText={setSearchText}
          className="w-full mt-7"
          onSearch={handleSearch}
        />
        <ButtonMenu options={buttons} className="mt-7" />
        <Section
          title="Featured"
          subtitle="Curated top picks from this week"
          items={items.slice(0, 4)}
          className="mt-5"
          background="white"
          itemAction={handleToggleModal}
        />
        <Section
          title="Trending"
          subtitle="Most popular by community"
          items={items.slice(7)}
          className="mt-5"
          itemAction={handleToggleModal}
        />
      </div>
      <KPIModal
        item={items[0]}
        isOpen={isModalOpen}
        setIsOpen={handleToggleModal}
      />
    </main>
  );
}
