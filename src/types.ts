type URL = string;

export type Priority = 1 | 2 | 3;
export interface ImdbApiResponse<T> {
  results: T[];
}

export interface Movie {
  id: string;
  title: string;
}

export interface SimilarMovie extends Movie {
  image: URL;
  rating: string;
}

export interface MovieResult extends Movie {
  resultType: string;
  image: URL;
  description: string;
}

interface Actor {
  id: string;
  image: URL;
  name: string;
  asCharacter: string;
}

export interface MovieDetailsResponse extends Movie {
  fullTitle: string;
  year: string; // to number
  image: URL;
  releaseDate: string; // fmt 2022-09-02,
  runtimeStr: string;
  plot: string;
  directors: string;
  actorList?: Actor[];
  imDbRating: string;
  similars: SimilarMovie[];
}

export interface TitleSimilar {
  similars: SimilarMovie[];
  priority: Priority;
}
