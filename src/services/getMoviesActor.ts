import { options, url_api } from "../utils/options";

export const getMoviesActor = async (id: number) => {
  const response = await fetch(
    `${url_api}/person/${id}/movie_credits`,
    options
  );
  const res = await response.json();
  const result = res.cast.slice(0, 30)
  return result;
};
