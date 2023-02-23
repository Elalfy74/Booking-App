import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ParsedUrlQuery } from 'querystring';

import { getCitiesOfCountry, getCountriesIds } from '@/apis';
import { Banner, EntityList } from '@/components/countries';
import { ICityWCountry } from '@/types/cities';

const CitiesOfCountry = ({
  cities,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='overflow-hidden'>
      <Banner
        text={`All our destinations in \n${cities[0].country.name}`}
        image={cities[0].country.photo}
      />

      <EntityList entityList={cities} />
    </div>
  );
};

export default CitiesOfCountry;

interface IProps {
  cities: ICityWCountry[];
}
interface IParams extends ParsedUrlQuery {
  id: string;
}

export const getStaticProps: GetStaticProps<IProps> = async (context) => {
  const { id } = context.params as IParams;

  const cities = await getCitiesOfCountry(true, id);

  return {
    props: {
      cities: cities.data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: countries } = await getCountriesIds();

  return {
    paths: countries.map((country) => ({ params: { id: country._id } })),
    fallback: false,
  };
};
