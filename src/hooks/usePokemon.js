import useSwr from "swr";

const BASE_URL = "https://pokeapi.co/api/v2/";

export const usePokemon = (path, name) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = name ? `${BASE_URL}${path}/${name}` : BASE_URL + path;
  const { data, error, isLoading } = useSwr(url.toString());

  return { data, error, isLoading };
};
