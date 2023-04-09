export interface ICard {
  name: string;
  gender: string;
  birthday: string;
  sphere: string;
  mail: string;
  movie: boolean;
  file: string;
  id: string;
}

export interface ICountry {
  abbreviation: string;
  capital: string;
  currency: string;
  name: string;
  phone: string;
  population: number;
  media: {
    flag: string;
    emblem: string;
    orthographic: string;
  };
  id: number;
}
