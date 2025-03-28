import { api_key, url_api } from "../utils/options";

export const searchMovie = async (query:string) => {
  try {
    const res = await fetch(`${url_api}/search/movie?api_key=${api_key}&query=${query}`),
      data = await res.json();

    return data.results;
  } catch (error) {
    console.log(error);
  }
};
