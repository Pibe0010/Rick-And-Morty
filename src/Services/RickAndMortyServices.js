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
console.log(getCharacters);

export const getEpisodes = async () => {
  const response = await fetch(`${API_URL}/episode`);
  const data = await response.json();
  return data.results;
};

export const getLocations = async () => {
  const response = await fetch(`${API_URL}/location`);
  const data = await response.json();
  return data.results;
};
