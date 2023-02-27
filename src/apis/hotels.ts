import axios from '../lib/axios';
import { IHotel, IHotelWCity, IHotelWCountry } from '../types';

type GetHotelsParams = {
  withCity?: boolean;
  filter?: Partial<IHotel>;
  limit?: number;
  fields?: string[];
};

export function getHotels<T>(options: GetHotelsParams): Promise<{ data: T[] }> {
  const { withCity, filter = {}, limit = 6 } = options;

  const params = {
    withCity,
    filter: JSON.stringify(filter),
    range: [1, limit],
  };

  return axios.get(`/hotels`, { params });
}

export function getHotel(slug: string): Promise<{ data: IHotelWCountry }> {
  return axios.get(`/hotels/${slug}`, {
    params: {
      withCity: true,
      withCountry: true,
    },
  });
}

export function getFeaturedHotels() {
  return getHotels<IHotelWCountry>({
    filter: {
      isFeatured: true,
    },
    withCity: true,
  });
}

export function getFeaturedHotelsSlugs() {
  return getHotels<{ slug: string }>({
    filter: {
      isFeatured: true,
    },
    fields: ['slug'],
  });
}
