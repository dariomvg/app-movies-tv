import { useEffect, useState } from "react";
import { searchMovie } from "../services/searchMovie";
import { UseSearchMovies } from "../types/hooks.types";
import { Content } from "../types/types";

export const useSearch = (query: string): UseSearchMovies => {
  const [content, setContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (query) {
      const handleSearchMovie = async () => {
        try {
          const data = await searchMovie(query);
          setContent(data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      handleSearchMovie();
    }
  }, [query]);

  return { content, loading };
};
