const API_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async (
  numberPages,
  searchTerm,
  statusFilter,
  speciesFilter,
  genderFilter
) => {
  const response = await fetch(
    `${API_URL}/character?page=${numberPages}&name=${searchTerm}&status=${statusFilter}&species=${speciesFilter}&gender=${genderFilter}`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed not found");
  }
  return data.results;
};

export const getEpisodes = async (numberPages, searchTermEpisodes) => {
  const response = await fetch(
    `${API_URL}/episode?page=${numberPages}&name=${searchTermEpisodes}`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed not found");
  }
  return data.results;
};

export const getLocations = async (
  numberPages,
  searchTermLocations,
  typesFilter
) => {
  const response = await fetch(
    `${API_URL}/location?page=${numberPages}&name=${searchTermLocations}&type=${typesFilter}`
  );
  const data = await response.json();
  if (!response.ok) {
    throw new Error("Failed not found");
  }
  return data.results;
};
