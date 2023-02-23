import axios from '../lib/axios';
import { ICountry } from '../types';

type GetCountriesParams = {
  withCitiesCount?: boolean;
  filter?: Partial<ICountry>;
  limit?: number;
  fields?: string[];
};

export function getCountries(options: GetCountriesParams) {
  const { withCitiesCount, filter = {}, limit = 6, fields } = options;

  const params = {
    withCitiesCount,
    filter: JSON.stringify(filter),
    range: [1, limit],
    fields,
  };

  return axios.get(`/countries`, { params });
}

export function getFeaturedCountries(withCitiesCount?: boolean) {
  return getCountries({
    withCitiesCount,
    filter: { isFeatured: true },
  });
}

export function getCountriesIds(): Promise<{ data: { _id: string }[] }> {
  return getCountries({
    fields: ['_id'],
    limit: 0,
  });
}
