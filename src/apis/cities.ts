import axios from "../lib/axios";

type GetCitiesParams = {
  featured?: boolean;
  limit?: number;
  country?: boolean;
};

export function getAllCitiesOrFeatured({
  featured,
  country,
  limit,
}: GetCitiesParams) {
  return axios.get(
    `/cities?featured=${featured}&country=${country}&limit=${limit}`
  );
}
