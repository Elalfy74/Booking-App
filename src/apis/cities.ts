import axios from "../lib/axios";
import { Params } from "./utils";

type GetCitiesParams = {
  isFeatured?: boolean;
  limit?: number;
  withCountry?: boolean;
};

type CityParams = Params & {
  withCountry?: boolean;
};

export function getCities(options: GetCitiesParams) {
  const { isFeatured, withCountry, limit = 6 } = options;

  const params: CityParams = {
    filter: {},
    withCountry: withCountry,
    range: [1, limit],
  };

  if (isFeatured !== undefined) {
    params.filter.isFeatured = isFeatured;
  }

  return axios.get(`/cities`, {
    params,
  });
}
