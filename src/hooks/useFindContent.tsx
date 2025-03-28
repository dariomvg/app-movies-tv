import { useEffect, useState } from "react";
import { filterTrailer } from "../services/filterTrailer";
import { getContentAndTrailer } from "../services/getContentAndTrailer";
import { UseFindContent } from "../types/hooks.types";

export const useFindContent = (id: string, media: string): UseFindContent => {
  const [trailer, setTrailer] = useState(null);
  const [infoMovie, setInfoMovie] = useState(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getInfoData = async () => {
      try {
        const movie = await getContentAndTrailer(parseInt(id), media);
        const localTrailer = filterTrailer(movie);
        setInfoMovie(movie);
        setTrailer(localTrailer[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getInfoData();
  }, [id]);

  return { trailer, infoMovie, loading };
};
