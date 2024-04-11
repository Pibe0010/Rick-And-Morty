const API_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async () => {
  const response = await fetch(`${API_URL}/character`);
  return response.data.results;
};

export const getEpisodes = async () => {
  const response = await fetch(`${API_URL}/episode`);
  return response.data.results;
};

export const getLocations = async () => {
  const response = await fetch(`${API_URL}/location`);
  return response.data.results;
};
