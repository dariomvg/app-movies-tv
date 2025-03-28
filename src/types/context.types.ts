import { ReactNode } from "react";
import { Content, Genre } from "./types";

export interface ChildrenContext {
    children: ReactNode
}

export interface ProviderMovies {
    genres: Genre[];
    movies: Content[];
    series: Content[];
    moviesUpcoming: Content[];
    loading: boolean; 
}


