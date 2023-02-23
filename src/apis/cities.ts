import axios from '../lib/axios';
import { ICity } from '../types';

type GetCitiesParams = {
  filter?: Partial<ICity>;
  limit?: number;
  withCountry?: boolean;
};

export function getCities(options: GetCitiesParams) {
  const { filter = {}, withCountry, limit = 6 } = options;

  const params = {
    filter,
    withCountry,
    range: [1, limit],
  };

  return axios.get(`/cities`, {
    params,
  });
}

export function getFeaturedCities(withCountry = false) {
  return getCities({
    withCountry,
    filter: { isFeatured: true },
  });
}

export function getCitiesOfCountry(withCountry = false, country: string) {
  return getCities({
    withCountry,
    filter: { country },
  });
}
