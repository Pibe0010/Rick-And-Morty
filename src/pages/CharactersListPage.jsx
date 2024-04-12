import "./CharactersList.css";
import { useEffect, useState } from "react";
import { Character } from "../components/Character";
import { MainLayout } from "../Layouts/MainLayout";
import { LoadingData } from "../components/LoadingData";
import { SearchInfo } from "../components/SearchInfo.jsx";
import { Paginations } from "../components/Characters/Paginations.jsx";
import { getCharacters } from "../Services/RickAndMortyServices.js";
import { FilterStatus } from "../components/Characters/FilterStatus.jsx";
import { FilterSpecies } from "../components/Characters/FilterSpecies.jsx";
import { FilterGender } from "../components/Characters/FilterGender.jsx";

export const CharactersListPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberPages, setNumberPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const isDataCharacter = async () => {
      try {
        const response = await getCharacters(
          numberPages,
          searchTerm,
          statusFilter,
          speciesFilter,
          genderFilter
        );
        setCharacters(response);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };
    isDataCharacter();
  }, [numberPages, searchTerm, statusFilter, speciesFilter, genderFilter]);

  const addNextPage = () => {
    if (numberPages < 42) {
      setNumberPages(numberPages + 1);
    } else {
      setNumberPages(1);
    }
  };
  const addBackPage = () => {
    if (numberPages > 1) {
      setNumberPages(numberPages - 1);
    } else {
      setNumberPages(1);
    }
  };
  return (
    <MainLayout>
      <section className="characterList-container">
        <h1 className="title">Characters</h1>
        <Paginations
          numberPages={numberPages}
          addBackPage={addBackPage}
          addNextPage={addNextPage}
        />
        <section className="container-search">
          <SearchInfo
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </section>
        <section className="container-filters">
          <FilterStatus
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          />
          <FilterSpecies
            value={speciesFilter}
            onChange={(e) => setSpeciesFilter(e.target.value)}
          />
          <FilterGender
            value={genderFilter}
            onChange={(e) => setGenderFilter(e.target.value)}
          />
        </section>
        {loading ? (
          <LoadingData />
        ) : hasError ? (
          <p> ERROR: Not Found</p>
        ) : (
          <section className="characters">
            {characters.map((character) => {
              return <Character key={character.id} character={character} />;
            })}
          </section>
        )}
        <Paginations
          numberPages={numberPages}
          addBackPage={addBackPage}
          addNextPage={addNextPage}
        />
      </section>
    </MainLayout>
  );
};
