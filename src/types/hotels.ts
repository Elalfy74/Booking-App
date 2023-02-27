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
  city: string;
  photos: string[];
  features: string[];
  stars: number;
  rooms: IRoom[];
  isFeatured: boolean;
  reviews: Object[];
}
export interface IHotelWCity extends Omit<IHotel, 'city'> {
  city: {
    _id: string;
    name: string;
  };
}

export interface IHotelWCountry extends IHotelWCity {
  city: {
    _id: string;
    name: string;
    country: {
      _id: string;
      name: string;
    };
  };
}
