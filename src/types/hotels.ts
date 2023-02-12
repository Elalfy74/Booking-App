export interface IHotel {
  _id: string;
  name: string;
  desc: string;
  cheapestPrice: number;
  address: string;
  distanceToDTInKm: number;
  category: string;
  city: {
    _id: string;
    name: string;
  };
  photos: string[];
  features: string[];
  stars: number;
  rooms: Object[];
  isFeatured: boolean;
  reviews: Object[];
}
