import axios from "../lib/axios";

type GetCountriesParams = {
  featured?: boolean;
  limit?: number;
};

export function getAllCountriesOrFeatured({
  featured,
  limit,
}: GetCountriesParams) {
  return axios.get(`/countries?featured=${featured}&limit=${limit}`);
}
