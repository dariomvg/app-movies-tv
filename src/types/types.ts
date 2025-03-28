export interface Content {
  id: number;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids?: number[];
  original_language: string;
  original_title?: string;
  title?: string;
  original_name?: string;
  name?: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_count: number;
  vote_average: number;
  release_date?: string;
  first_air_date?: string;
  video?: boolean;
  origin_country?: string[];
  genres?: { id: number; name: string }[];
  homepage?: string;
  number_of_episodes?: number;
number_of_seasons?: number;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path?: string;
  };
  budget?: number;
  imdb_id?: string;
  production_companies?: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  production_countries?: {iso_3166_1: string, name: string}[];
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: {
    english_name: string;
    iso_639_1: string;
    name: string;
  }[];
  status?: string; 
  tagline?: string;
  videos?: {
    results: Video[];
  };
  cast?: CastMember[];
  director?: CrewMember;
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  cast_id?: number;
  character: string;
  credit_id: string;
  order: number;
}

interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}

export interface PropsCardContent {
  content: Content;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Credits {
  cast: Content[];
  director: {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
  };
}
