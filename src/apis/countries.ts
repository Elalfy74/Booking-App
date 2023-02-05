import axios from "../lib/axios";
import { Params } from "./utils";

type GetCountriesParams = {
  isFeatured?: boolean;
  limit?: number;
};

export function getCountries(options: GetCountriesParams) {
  const { isFeatured, limit = 6 } = options;

  const params: Params = {
    filter: {},
    range: [1, limit],
  };

  if (String(isFeatured)) {
    params.filter.isFeatured = isFeatured;
  }
  return axios.get(`/countries`, { params });
}
