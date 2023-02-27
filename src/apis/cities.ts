import axios from '../lib/axios';
import { ICity } from '../types';

type GetCitiesParams = {
  filter?: Partial<ICity> & { q?: string };
  limit?: number;
  withCountry?: boolean;
};

export function getCities(options: GetCitiesParams) {
  const { filter = {}, withCountry, limit = 6 } = options;

  const params = {
    withCountry,
    filter,
    range: [1, limit],
  };

  return axios.get(`/cities`, {
    params,
  });
}

export function getCity(id: string, withCountry = false) {
  if (id.length == 0) return;

  const params = {
    withCountry,
  };

  return axios.get(`/cities/${id}`, {
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
