import "./Location.css";
import { MainLayout } from "../Layouts/MainLayout.jsx";
import { useEffect, useState } from "react";
import { Button } from "../components/Button.jsx";
import { LoadingData } from "../components/LoadingData.jsx";
import { LocationCard } from "../components/LocationCard.jsx";

export const LocationPage = () => {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberPages, setNumberPages] = useState(1);

  useEffect(() => {
    const isDataEpisodes = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/location?page=${numberPages}`
      );
      const data = await response.json();
      setLoading(false);
      setEpisodes(data.results);
    };
    isDataEpisodes();
  }, [numberPages]);

  const addNextPage = () => {
    if (numberPages < 7) {
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
      <section className="locatios-container">
        <h1 className="title-location">Locations</h1>
        <section className="btn-page">
          <Button
            page={numberPages}
            onClick={() => setNumberPages(addBackPage)}
            disabled={numberPages === 1}>
            {numberPages > 1 ? `Page ${numberPages - 1}` : "Initial"}
          </Button>
          <Button
            page={numberPages}
            onClick={() => setNumberPages(addNextPage)}
            disabled={numberPages === 4}>
            {numberPages < 7 ? `Page ${numberPages + 1}` : "Finally"}
          </Button>
        </section>
        {loading ? (
          <LoadingData />
        ) : (
          <section className="episodes">
            {episodes.map((location) => {
              return <LocationCard key={location.id} location={location} />;
            })}
          </section>
        )}
      </section>
      <section className="btn-page">
        <Button
          page={numberPages}
          onClick={() => setNumberPages(addBackPage)}
          disabled={numberPages === 1}>
          {numberPages > 1 ? `Page ${numberPages - 1}` : "Initial"}
        </Button>
        <Button
          page={numberPages}
          onClick={() => setNumberPages(addNextPage)}
          disabled={numberPages === 4}>
          {numberPages < 3 ? `Page ${numberPages + 1}` : "Finally"}
        </Button>
      </section>
    </MainLayout>
  );
};
