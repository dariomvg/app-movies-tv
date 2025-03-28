import { Content } from "./types";

export interface UseContent {
    content: Content[] | null;
    nextPage: () => void;
    backPage: () => void;
    loading: boolean
}


export interface UseFindContent {
    trailer: {key: string} | null;
    infoMovie: Content | null;
    loading: boolean;
}


export interface UseMyList {
    list: Content[];
    addContent: (content: Content) => void;
    deleteContent: (id: number) => void;
}


export interface UseActorAndGenre {
    content: Content[]; 
    loading: boolean;
}

export interface UseSearchMovies {
    content: Content[]
    loading: boolean;
}



