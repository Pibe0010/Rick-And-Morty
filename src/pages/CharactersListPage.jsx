import "./CharactersList.css";
import { useEffect, useState } from "react";
import { Character } from "../components/Character";
import { MainLayout } from "../Layouts/MainLayout";
import { LoadingData } from "../components/LoadingData";
import { Button } from "../components/Button.jsx";

export const CharactersListPage = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberPages, setNumberPages] = useState(1);

  useEffect(() => {
    const isDataCharacter = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${numberPages}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results);
    };
    isDataCharacter();
  }, [numberPages]);

  const addNextPage = () => {
    setNumberPages(numberPages + 1);
  };
  const addBackPage = () => {
    setNumberPages(numberPages - 1);
  };

  return (
    <MainLayout>
      <section className="characterList-container">
        <hi className="title">Characters</hi>
        <section className="btn-page">
          <Button
            page={numberPages}
            onClick={() => setNumberPages(addBackPage)}>
            Page {numberPages}
          </Button>
          <Button
            page={numberPages}
            onClick={() => setNumberPages(addNextPage)}>
            Page {numberPages + 1}
          </Button>
        </section>

        {loading ? (
          <LoadingData />
        ) : (
          <section className="characters">
            {characters.map((character) => {
              return <Character key={character.id} character={character} />;
            })}
          </section>
        )}
        <section className="btn-page">
          <Button
            page={numberPages}
            onClick={() => setNumberPages(addBackPage)}>
            Page {numberPages}
          </Button>
          <Button
            page={numberPages}
            onClick={() => setNumberPages(addNextPage)}>
            Page {numberPages + 1}
          </Button>
        </section>
      </section>
    </MainLayout>
  );
};
