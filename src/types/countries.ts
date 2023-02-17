export interface ICountry {
  _id: string;
  name: string;
  slug: number;
  photo: string;
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface ICountryWCityCount extends ICountry {
  cityCount: number;
}
