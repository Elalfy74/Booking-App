import useSWR from 'swr';

import { getCities } from '@/apis';

import { ICityWCountry } from '../types';

const useCitiesSearch = (q: string) => {
  // url[1] containing the query search parameter
  // when we have q we search for all cities otherwise only featured
  const { data } = useSWR(['/cities', q], (url) =>
    getCities({
      filter: {
        isFeatured: url[1] ? undefined : true,
        q: url[1] || undefined,
      },
      withCountry: true,
    })
  );

  return {
    cities: data?.data as ICityWCountry[] | undefined,
  };
};
export default useCitiesSearch;
