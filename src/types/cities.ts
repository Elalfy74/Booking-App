import { ICountry } from './countries';

export interface ICity {
  _id: string;
  name: string;
  slug: string;
  country: string;
  photos: string[];
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ICityWCountry extends Omit<ICity, 'country'> {
  country: ICountry;
}
