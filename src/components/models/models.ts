export interface ICard {
  title: string;
  year: number;
  creator: Array<string>;
  rating: string;
  genre: Array<string>;
  runtime_in_minutes: number;
  episodes: number;
  image: string;
  id: number;
}

export interface ServerResponse<T> {
  total_count: number;
  incopmlete_results: boolean;
  items: T[];
}
