import { options, url_api } from "../utils/options";

const getMovies = async (id: number) => {
  const response = await fetch(
    `${url_api}/discover/movie?with_genres=${id}`,
    options
  );
  const res = await response.json();
  return res.results;
};

const getSeries = async (id: number) => {
  const response = await fetch(
    `${url_api}/discover/tv?with_genres=${id}`,
    options
  );
  const res = await response.json();
  return res.results;
};

export const getContentGenres = async (id: number) => {
  const [movies, series] = await Promise.all([getMovies(id), getSeries(id)]);

  if (movies.length > 0 && series.length > 0) {
    const content = [...movies, ...series];
    console.log(content);
    return content;
  }
};
