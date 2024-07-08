import create from 'zustand';
import { loadFromLocalStorage, updateStorage } from './utils';

const localStorageKey = 'favorite-items';

interface FavoriteItemStore {
  favorites: string[];
  toggleFavorite: (item: string) => void;
  removeFavorite: (item: string) => void;
}

const useFavoriteItemStore = create<FavoriteItemStore>((set) => ({
  favorites: loadFromLocalStorage(localStorageKey),

  toggleFavorite: (item) =>
    set((state) => {
      const newItems = state.favorites.includes(item)
        ? state.favorites.filter((i) => i !== item)
        : [item, ...state.favorites];
      updateStorage(localStorageKey, newItems);
      return { favorites: newItems };
    }),

  removeFavorite: (item) =>
    set((state) => {
      const newItems = state.favorites.filter((i) => i !== item);
      updateStorage(localStorageKey, newItems);
      return { favorites: newItems };
    }),
}));

export default useFavoriteItemStore;
