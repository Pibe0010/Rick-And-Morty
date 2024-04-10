import "./Episode.css";
import { MainLayout } from "../Layouts/MainLayout.jsx";
import { CardEpisode } from "../components/CardEpisode.jsx";
import { useEffect, useState } from "react";
import { LoadingData } from "../components/LoadingData.jsx";
import { Button } from "../components/Button.jsx";

export const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberPages, setNumberPages] = useState(1);

  useEffect(() => {
    const isDataCharacter = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${numberPages}`
      );
      const data = await response.json();
      setLoading(false);
      setEpisodes(data.results);
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
      <section className="episode-container">
        <h1 className="title-episode">Episodes</h1>
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
          <section className="episodes">
            {episodes.map((episode) => {
              return <CardEpisode key={episode.id} episode={episode} />;
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
