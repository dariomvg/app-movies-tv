import { options, url_api } from "../utils/options";

export const getSeries = async (page:number) => {
  const res = await fetch(`${url_api}/trending/tv/day?language=en-US&page=${page}`, options);
  const data = await res.json();
  return data.results;
};
