import { api_key, options, url_api } from "../utils/options";

const getTrailer = async (id: number, media: string) => {
  try {
    const response = await fetch(
      `${url_api}/${media}/${id}?api_key=${api_key}&append_to_response=videos`,
      options
    );
    const res = await response.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};
const getCredits = async (id: number, media: string) => {
  const response = await fetch(`${url_api}/${media}/${id}/credits`, options);
  const res = await response.json();
  const result = { cast: res.cast.slice(0, 5), director: res.crew[0] };
  return result;
};

export const getContentAndTrailer = async (id: number, media: string) => {
  try {
    const [contentData, credits] = await Promise.all([
      getTrailer(id, media),
      getCredits(id, media),
    ]);

    const result = { ...contentData, ...credits };
    return result;
  } catch (error) {
    console.log(error);
  }
};
