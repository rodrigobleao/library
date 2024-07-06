import Icon from '../Icon';

interface SearchProps {
  placeholder?: string;
  searchText?: string;
  setSearchText: (query: string) => void;
  className?: string;
  onSearch: () => void;
}

const SearchInput: React.FC<SearchProps> = ({
  placeholder = 'Type to search...',
  searchText,
  setSearchText,
  className,
  onSearch,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div
      className={`flex items-center px-4 py-1 bg-white border-2 border-accent rounded-lg shadow-sm ${className}`}
    >
      <Icon name="search" color="contrast" size={18} />
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 p-2 focus:outline-none"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchInput;
