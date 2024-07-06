import { useState, useEffect } from 'react';
import useStorage from './useStorage';

const RECENT_SEARCHES_KEY = 'recentSearches';
const MAX_RECENT_SEARCHES = 10;

interface UseRecentSearchesReturnType {
  recentSearches: string[];
  addSearch: (search: string) => void;
  removeSearch: (search: string) => void;
}

const useRecentSearches = (): UseRecentSearchesReturnType => {
  const { getItem, setItem } = useStorage();
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const storedSearches = getItem(RECENT_SEARCHES_KEY);
    if (storedSearches) {
      setRecentSearches(storedSearches);
    }
  }, []);

  const addSearch = (search: string): void => {
    const updatedSearches = [
      search,
      ...recentSearches.filter(
        (item) => item.toLowerCase() !== search.toLowerCase()
      ),
    ];

    if (updatedSearches.length > MAX_RECENT_SEARCHES) {
      updatedSearches.pop();
    }

    setRecentSearches(updatedSearches);
    setItem(RECENT_SEARCHES_KEY, updatedSearches);
  };

  const removeSearch = (search: string): void => {
    const updatedSearches = recentSearches.filter((item) => item !== search);
    setRecentSearches(updatedSearches);
    setItem(RECENT_SEARCHES_KEY, updatedSearches);
  };

  return {
    recentSearches,
    addSearch,
    removeSearch,
  };
};

export default useRecentSearches;
