const useStorage = () => {
  const getItem = (key: string) => {
    if (typeof window === 'undefined') return null;
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };

  const setItem = (key: string, value: any) => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  return { getItem, setItem };
};

export default useStorage;
