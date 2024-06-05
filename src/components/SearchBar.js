import React from 'react';
import { SearchContainer, SearchInput } from './styles/Search.styled';

const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={onSearchChange}
        placeholder="Buscar personaje por nombre..."
      />
    </SearchContainer>
  );
};

export default SearchBar;