import "./Location.css";
import { MainLayout } from "../Layouts/MainLayout.jsx";
import { useEffect, useState } from "react";
import { LoadingData } from "../components/LoadingData.jsx";
import { LocationCard } from "../components/Locations/LocationCard.jsx";
import { PaginationLocations } from "../components/Locations/PaginationLocations.jsx";
import { ErrorNotFound } from "../components/ErrorNotFound.jsx";
import { SearchInfo } from "../components/SearchInfo.jsx";
import { getLocations } from "../Services/RickAndMortyServices.js";
import { FilterType } from "../components/Locations/FilterType.jsx";

export const LocationPage = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [numberPages, setNumberPages] = useState(1);
  const [searchTermLocations, setSearchTermLocations] = useState("");
  const [typesFilter, setTypesFilter] = useState("");

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setHasError(false);
      try {
        const response = await getLocations(
          numberPages,
          searchTermLocations,
          typesFilter
        );
        setLocations(response);
      } catch (error) {
        setHasError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [numberPages, searchTermLocations, typesFilter]);

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
        <PaginationLocations
          numberPages={numberPages}
          addBackPage={addBackPage}
          addNextPage={addNextPage}
        />
        <section className="container-search">
          <SearchInfo
            value={searchTermLocations}
            onChange={(e) => setSearchTermLocations(e.target.value)}
          />
        </section>
        <section className="container-filters">
          <FilterType
            value={typesFilter}
            onChange={(e) => setTypesFilter(e.target.value)}
          />
        </section>
        {loading ? (
          <LoadingData />
        ) : hasError ? (
          <ErrorNotFound />
        ) : (
          <section className="episodes">
            {locations.map((location) => {
              return <LocationCard key={location.id} location={location} />;
            })}
          </section>
        )}
      </section>
      <PaginationLocations
        numberPages={numberPages}
        addBackPage={addBackPage}
        addNextPage={addNextPage}
      />
    </MainLayout>
  );
};
