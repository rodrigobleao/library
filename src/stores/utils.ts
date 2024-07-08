export const loadFromLocalStorage = (localStorageKey: string): string[] => {
  try {
    const storedData = localStorage.getItem(localStorageKey);
    if (storedData) return JSON.parse(storedData);
  } catch (error) {
    if (typeof window !== 'undefined')
      console.error('Error loading from local storage:', error);
  }
  return [];
};

export const updateStorage = (localStorageKey: string, searches: string[]) => {
  localStorage.setItem(localStorageKey, JSON.stringify(searches));
};
