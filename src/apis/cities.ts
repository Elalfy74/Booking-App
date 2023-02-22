import axios from '../lib/axios';
import { Params } from './utils';

type GetCitiesParams = {
  isFeatured?: boolean;
  q?: string;
  limit?: number;
  withCountry?: boolean;
};

type CityParams = Omit<Params, 'filter'> & {
  filter: {
    isFeatured?: boolean;
    q?: string;
  };
  withCountry?: boolean;
};

export function getCities(options: GetCitiesParams) {
  const { isFeatured, withCountry, q, limit = 6 } = options;

  const params: CityParams = {
    filter: {},
    withCountry: withCountry,
    range: [1, limit],
  };

  if (isFeatured !== undefined) {
    params.filter.isFeatured = isFeatured;
  }

  if (q) {
    params.filter.q = q;
  }

  return axios.get(`/cities`, {
    params,
  });
}
