import { useEffect, useState } from "react";
import { getMovies } from "../services/getMovies";
import { useNavigate } from "react-router-dom";
import { UseContent } from "../types/hooks.types";
import { Content } from "../types/types";
import { getSeries } from "../services/getSeries";

export const useContent = (id: number, url: string): UseContent => {
  const [content, setContent] = useState<Content[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  const movies = "movies";

  useEffect(() => {
    const handleData = async () => {
      try {
        if (url === movies) {
          const data = await getMovies(id);
          setContent(data);
        } else {
          const data = await getSeries(id);
          setContent(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    handleData();
  }, [id, url]);

  const backPage = () => {
    const newId = id - 1;
    navigate(`/${url}/${newId}`);
  };

  const nextPage = () => {
    const newId = id + 1;
    navigate(`/${url}/${newId}`);
  };

  return { content, backPage, nextPage, loading };
};
