import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { Container } from "./components/styles/Container.styled";
import Global from "./components/styles/Global.styled";
import { ThemeProvider } from "styled-components";
import RandomCharacter from "./components/RandomCharacter";
import CharacterList from "./components/CharacterList";
import Filters from "./components/Filters";
import SearchBar from "./components/SearchBar";
import Pagination from "./components/Pagination";
import {
  GET_TOTAL_CHARACTERS,
  GET_CHARACTER,
  GET_CHARACTERS_BY_NAME,
  GET_PAGINATED_CHARACTERS,
} from "./api/queries";

const theme = {
  colors: {
    body: "#002449",
  },
  mobile: "768px",
};

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const { data: totalCharactersData } = useQuery(GET_TOTAL_CHARACTERS);
  const [getCharacter, { loading: randomLoading, data: characterData }] =
    useLazyQuery(GET_CHARACTER);
  const [getPaginatedCharacters, { loading: listLoading, data: listData }] =
    useLazyQuery(GET_PAGINATED_CHARACTERS);
  const [getCharactersByName, { loading: searchLoading, data: searchData }] =
    useLazyQuery(GET_CHARACTERS_BY_NAME);

  const handleButtonClick = useCallback(() => {
    if (totalCharactersData && totalCharactersData.characters) {
      const totalCharacters = totalCharactersData.characters.info.count;
      const randomId = Math.floor(Math.random() * totalCharacters) + 1;
      getCharacter({ variables: { id: randomId } });
    }
  }, [totalCharactersData, getCharacter]);

  const handleSearchChange = useCallback((event) => {
    setSearchQuery(event.target.value);
  }, []);

  useEffect(() => {
    handleButtonClick();
  }, [handleButtonClick]);

  useEffect(() => {
    if (!searchQuery) {
      getPaginatedCharacters({
        variables: {
          status: statusFilter,
          gender: genderFilter,
          page: currentPage,
        },
      });
    }
  }, [searchQuery, statusFilter, genderFilter, currentPage, getPaginatedCharacters]);

  useEffect(() => {
    if (searchQuery) {
      getCharactersByName({ variables: { name: searchQuery } });
    }
  }, [searchQuery, getCharactersByName]);

  useEffect(() => {
    if (characterData) {
      setRandomCharacter(characterData.character);
    }
  }, [characterData]);

  const characterList = useMemo(() => {
    return (
      (searchData && searchData.characters.results) ||
      (listData && listData.characters.results)
    );
  }, [searchData, listData]);

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Container>
        <RandomCharacter
          character={randomCharacter}
          onButtonClick={handleButtonClick}
          loading={randomLoading}
        />
        <Filters
          statusFilter={statusFilter}
          genderFilter={genderFilter}
          onStatusChange={(e) => setStatusFilter(e.target.value)}
          onGenderChange={(e) => setGenderFilter(e.target.value)}
        />
        <SearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={listData ? listData.characters.info.pages : 0}
          onPageChange={setCurrentPage}
        />
        <CharacterList
          characters={characterList}
          loading={searchLoading || listLoading}
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
