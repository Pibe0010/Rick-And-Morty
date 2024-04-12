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
    const isDataEpisodes = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/episode?page=${numberPages}`
      );
      const data = await response.json();
      setLoading(false);
      setEpisodes(data.results);
    };
    isDataEpisodes();
  }, [numberPages]);

  const addNextPage = () => {
    if (numberPages < 3) {
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
      <section className="episode-container">
        <h1 className="title-episode">Episodes</h1>
        <section className="btn-page">
          <Button
            page={numberPages}
            onClick={addBackPage}
            disabled={numberPages === 1}>
            {numberPages > 1 ? `Page ${numberPages - 1}` : "Initial"}
          </Button>
          <Button
            page={numberPages}
            onClick={addNextPage}
            disabled={numberPages === 4}>
            {numberPages < 3 ? `Page ${numberPages + 1}` : "Finally"}
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
            onClick={addBackPage}
            disabled={numberPages === 1}>
            {numberPages > 1 ? `Page ${numberPages - 1}` : "Initial"}
          </Button>
          <Button
            page={numberPages}
            onClick={addNextPage}
            disabled={numberPages === 4}>
            {numberPages < 3 ? `Page ${numberPages + 1}` : "Finally"}
          </Button>
        </section>
      </section>
    </MainLayout>
  );
};
