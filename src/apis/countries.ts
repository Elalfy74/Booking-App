import axios from "../lib/axios";
import { Params } from "./utils";

type GetCountriesParams = {
  withCitiesCount?: boolean;
  isFeatured?: boolean;
  limit?: number;
};

type CountryParams =
  | Params
  | {
      withCitiesCount: boolean;
    };

export function getCountries(options: GetCountriesParams) {
  const { withCitiesCount, isFeatured, limit = 6 } = options;

  let params: CountryParams;

  if (withCitiesCount) {
    params = {
      withCitiesCount,
    };
  } else {
    params = {
      filter: {},
      range: [1, limit],
    };

    if (isFeatured !== undefined) {
      params.filter.isFeatured = isFeatured;
    }
  }

  return axios.get(`/countries`, { params });
}
