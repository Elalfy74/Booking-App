import axios from "../lib/axios";

type GetCountriesParams = {
  featured: boolean;
};

export function getAllCountriesOrFeatured({ featured }: GetCountriesParams) {
  return axios.get(`/countries?featured=${featured}`);
}
