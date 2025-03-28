import { createContext, useContext, useState, useEffect } from "react";
import { ChildrenContext, ProviderMovies } from "../types/context.types";
import { getMovies } from "../services/getMovies";
import { getMoviesUpcoming } from "../services/getUpcomings";
import { getSeries } from "../services/getSeries";
import { getGenres } from "../services/getGenres";
import { Content, Genre } from "../types/types";


const ContextMovies = createContext<ProviderMovies | null>(null);

export const useContextMovies = () => {
  const context = useContext(ContextMovies);
  if (!context) throw new Error("Context insufficient");
  return context;
};

export default function ProviderContext({ children }: ChildrenContext) {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [movies, setMovies] = useState<Content[]>([]);
  const [series, setSeries] = useState<Content[]>([]);
  const [moviesUpcoming, setMoviesUpcoming] = useState<Content[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getContent = async () => {
      try {
        const localMovies = await getMovies(1);
        const localSeries = await getSeries(1);
        const localUpcomings = await getMoviesUpcoming();
        const localGenres = await getGenres();
        
        if (localMovies && localSeries && localUpcomings && localGenres) {
          setMovies(localMovies);
          setSeries(localSeries);
          setMoviesUpcoming(localUpcomings);
          const newGenres = Array.from(
            new Map(localGenres.map((e) => [e.id, e])).values()
          );
          setGenres(newGenres);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getContent();
  }, []);

  return (
    <ContextMovies.Provider value={{ genres, movies, series, moviesUpcoming, loading }}>
      {children}
    </ContextMovies.Provider>
  );
}
