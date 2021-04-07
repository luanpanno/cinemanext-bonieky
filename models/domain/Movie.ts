export interface Movie {
  poster_path: string;
  adult: boolean;
  backdrop_path: string;
  id: number;
  vote_count: number;
  vote_average: number;
  title: string;
  video: boolean;
  release_date: string;
  genre_ids: number[];
  original_language: string;
  overview: string;
  original_title: string;
  popularity: number;
  media_type: string;
}
