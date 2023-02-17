import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ParsedUrlQuery } from "querystring";
import { Rating } from "react-simple-star-rating";

import { getFeaturedHotelsSlugs, getHotelBySlug } from "@/apis";
import {
  BookingSummary,
  Gallery,
  HotelTabs,
  HotelTags,
  ReviewForm,
  ReviewsList,
  RoomsList,
  TrendingHotels,
} from "@/components/hotel-details";
import { Breadcrumbs, ContactBanner } from "@/components/shared";
import { Divider } from "@/components/ui";
import { Footer } from "@/layouts/footer";
import { IHotelWCountry } from "@/types/hotels";

const HotelDetails = ({
  hotel,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  if (!hotel) return <div>Loading</div>;

  return (
    <div>
      <div className="px-4 py-10 md:px-20">
        <Breadcrumbs />
        <div>
          <h1 className="my-4 text-4xl font-semibold text-secondBlack">
            {hotel?.name}
          </h1>
          <div className="mb-4 flex items-center gap-10">
            <Rating readonly initialValue={hotel.stars} size={18} />
            <p className="capitalize">
              {hotel.city.name}, {hotel.city.country.name}
            </p>
          </div>
          <Gallery photos={hotel.photos} />
          <HotelTags />
        </div>

        <div className="mb-10 flex flex-col justify-between gap-10 lg:flex-row xl:gap-20 2xl:gap-28">
          {/* Description */}
          {/* Heading */}
          <div className="mt-5 w-full lg:w-2/3">
            <HotelTabs desc={hotel.desc} features={hotel.features} />
          </div>
          <div className="w-full lg:w-1/3">
            <BookingSummary />
          </div>
        </div>
        <Divider />

        <div className="container mt-20 flex flex-col gap-20 xl:w-[70%]">
          <RoomsList rooms={hotel.rooms} />
          <ReviewForm />
          <ReviewsList />
        </div>
      </div>

      <div className="container">
        <TrendingHotels />
      </div>
      <ContactBanner />
      <Footer />
    </div>
  );
};

export default HotelDetails;

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps<{
  hotel?: IHotelWCountry;
}> = async (context) => {
  const { slug } = context.params as IParams;

  const { data: hotel } = await getHotelBySlug(slug);
  return {
    props: {
      hotel,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: hotels } = await getFeaturedHotelsSlugs();

  return {
    paths: hotels.map((hotel) => ({ params: { slug: hotel.slug } })),
    fallback: true,
  };
};
