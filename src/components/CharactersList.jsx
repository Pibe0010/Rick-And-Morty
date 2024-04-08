import { useState } from "react";
import { Character } from "./Character";
import { MainLayout } from "../Layouts/MainLayout";
import "./CharactersList.css";
import { Loading } from "./Loading";

export const CharactersList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const isDataCharacter = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    setLoading(false);
    setCharacters(data.results);
  };
  isDataCharacter();

  return (
    <MainLayout>
      <section className="characterList-container">
        <h1 className="title">Rick And Morty</h1>
        {loading ? (
          <Loading />
        ) : (
          <section className="characters">
            {characters.map((character) => {
              return <Character key={character.id} character={character} />;
            })}
          </section>
        )}
      </section>
    </MainLayout>
  );
};
