import { options, url_api } from "../utils/options";


export const getMoviesUpcoming = async () => {
  const res = await fetch(`${url_api}/movie/upcoming`,options);
  const data = await res.json();
  return data.results;
}