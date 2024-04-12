import "./Episode.css";
import { MainLayout } from "../Layouts/MainLayout.jsx";
import { CardEpisode } from "../components/Episodes/CardEpisode.jsx";
import { useEffect, useState } from "react";
import { LoadingData } from "../components/LoadingData.jsx";
import { PaginationEpisodes } from "../components/Episodes/PaginationEpisodes.jsx";
import { SearchInfo } from "../components/SearchInfo.jsx";
import { getEpisodes } from "../Services/RickAndMortyServices.js";
import { ErrorNotFound } from "../components/ErrorNotFound.jsx";

export const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberPages, setNumberPages] = useState(1);
  const [searchTermEpisodes, setSearchTermEpisodes] = useState("");
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setHasError(false);
      try {
        const response = await getEpisodes(numberPages, searchTermEpisodes);
        setEpisodes(response);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [numberPages, searchTermEpisodes]);

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
        <PaginationEpisodes
          numberPages={numberPages}
          addBackPage={addBackPage}
          addNextPage={addNextPage}
        />
        <section className="container-search">
          <SearchInfo
            value={searchTermEpisodes}
            onChange={(e) => setSearchTermEpisodes(e.target.value)}
          />
        </section>
        {loading ? (
          <LoadingData />
        ) : hasError ? (
          <ErrorNotFound />
        ) : (
          <section className="episodes">
            {episodes.map((episode) => {
              return <CardEpisode key={episode.id} episode={episode} />;
            })}
          </section>
        )}
        <PaginationEpisodes
          numberPages={numberPages}
          addBackPage={addBackPage}
          addNextPage={addNextPage}
        />
      </section>
    </MainLayout>
  );
};
