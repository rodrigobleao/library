import { create } from 'zustand';
import { loadFromLocalStorage, updateStorage } from './utils';

const localStorageKey = 'recent-searches';

interface RecentSearchStore {
  searches: string[];
  addSearch: (search: string) => void;
  removeSearch: (search: string) => void;
}

const searchStore = create<RecentSearchStore>((set) => {
  return {
    searches: loadFromLocalStorage(localStorageKey),

    addSearch: (search) =>
      set((state) => {
        const normalizedSearch = search.toLowerCase();
        const filteredSearches = state.searches.filter(
          (s) => s.toLowerCase() !== normalizedSearch
        );
        const newSearches = [search, ...filteredSearches].slice(0, 10);
        updateStorage(localStorageKey, newSearches);
        return {
          searches: newSearches,
        };
      }),

    removeSearch: (search) =>
      set((state) => {
        const newSearches = state.searches.filter(
          (s) => s.toLowerCase() !== search.toLowerCase()
        );
        updateStorage(localStorageKey, newSearches);
        return {
          searches: newSearches,
        };
      }),
  };
});

export default searchStore;
