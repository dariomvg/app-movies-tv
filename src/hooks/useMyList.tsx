import { useEffect, useState } from "react";
import { Content } from "../types/types";
import { UseMyList } from "../types/hooks.types";

export const useMyList = (): UseMyList => {
  const [list, setList] = useState<Content[]>(() => {
    const localList = localStorage.getItem("list-content");
    return localList ? JSON.parse(localList) : [];
  });

  useEffect(() => {
    if (list.length > 0) {
      localStorage.setItem("list-content", JSON.stringify(list));
    }
  }, [list]);

  const addContent = (content: Content) => {
    const localContent = list.find((item) => item.id === content.id);
    if (!localContent) {
      setList((prevList) => [...prevList, content]);
    }
  };

  const deleteContent = (id: number) => {
    setList((prevList) => {
      const updatedList = prevList.filter((item) => item.id !== id);
      localStorage.setItem("list-content", JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return { list, addContent, deleteContent };
};
