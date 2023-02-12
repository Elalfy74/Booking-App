import axios from "../lib/axios";
import { Params } from "./utils";

type GetHotelsParams = {
  isFeatured?: boolean;
  limit?: number;
  withCity?: boolean;
};

type CityParams = Params & {
  withCity?: boolean;
};

export function getHotels(options: GetHotelsParams) {
  const { isFeatured, limit = 6, withCity } = options;

  const params: CityParams = {
    filter: {},
    range: [1, limit],
    withCity,
  };

  if (isFeatured !== undefined) {
    params.filter.isFeatured = isFeatured;
  }
  return axios.get(`/hotels`, { params });
}
