import { useEffect, useState } from "react";
import { Content } from "../types/types";
import { getMoviesActor } from "../services/getMoviesActor";
import { UseActorAndGenre } from "../types/hooks.types";
import { getContentGenres } from "../services/getContentGenres";

export const useActorAndGenre = (id: number, url: string): UseActorAndGenre => {
  const [content, setContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const page = "actor";

  useEffect(() => {
    const handleData = async () => {
      try {
        if (url === page) {
          const response = await getMoviesActor(id);
          if (response) setContent(response);
        } else {
          const response = await getContentGenres(id);
          console.log(response)
          if (response) setContent(response);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handleData();
  }, [id, url]);

  return { content, loading };
};
