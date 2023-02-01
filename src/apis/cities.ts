import axios from "../lib/axios";

type GetCitiesParams = {
  featured: boolean;
  country: boolean;
};

export function getAllCitiesOrFeatured({ featured, country }: GetCitiesParams) {
  return axios.get(`/cities?featured=${featured}&country=${country}`);
}
