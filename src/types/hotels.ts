export interface IRoom {
  _id?: string;
  name: string;
  maxPeople: {
    adults: number;
    children: number;
  };
  beds: string;
  currentPrice: number;
}
export interface IHotel {
  _id: string;
  name: string;
  slug: string;
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
  rooms: IRoom[];
  isFeatured: boolean;
  reviews: Object[];
}

export interface IHotelWCountry extends IHotel {
  city: {
    _id: string;
    name: string;
    country: {
      _id: string;
      name: string;
    };
  };
}
