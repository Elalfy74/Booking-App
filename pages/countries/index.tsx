import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { getCountries, getCountriesIds } from '@/apis';
import { Banner, EntityList } from '@/components/countries';
import { ICountryWCityCount } from '@/types/countries';

const Countries = ({
  countries,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='overflow-hidden'>
      
      <Banner
        text='All our destinations in the world'
        image={'/images/world.jpeg'}
      />

      <EntityList entityList={countries} />
    </div>
  );
};

interface IProps {
  countries: ICountryWCityCount[];
}

export const getStaticProps: GetStaticProps<IProps> = async (context) => {
  const countries = await getCountries({ withCitiesCount: true });

  return {
    props: {
      countries: countries.data,
    },
  };
};

export default Countries;
