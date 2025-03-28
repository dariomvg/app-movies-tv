import { options, url_api } from "../utils/options";

const getGenresMovies = async () => {
  const response = await fetch(`${url_api}/genre/tv/list?lenguage=en`, options);
  const res = await response.json();
  return res.genres;
};

const getGenresTv = async () => {
  const response = await fetch(
    `${url_api}/genre/movie/list?language=`,
    options
  );
  const res = await response.json();
  return res.genres;
};

export const getGenres = async () => {
  const [genresMovies, genresTv] = await Promise.all([
    getGenresMovies(),
    getGenresTv(),
  ]);

  if (genresMovies.length > 0 && genresTv.length > 0) {
    const genres = [...genresMovies, ...genresTv];
    return genres;
  }
};
