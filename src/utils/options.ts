export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_OPTIONS,
  },
};

export const api_key = import.meta.env.VITE_API_KEY

export const url_api: string = "https://api.themoviedb.org/3"
export const url_image: string = "https://image.tmdb.org/t/p"
export const url_trailer: string = "https://www.youtube.com/watch?v="

export const full_image: string = `${url_image}/original`
export const poster_image: string = `${url_image}/w300`

