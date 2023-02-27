import { ICityWCountry } from '@/types/cities';
import { ICountryWCityCount } from '@/types/countries';

import SingleTopTour from '../home/top-tour/single-top-tour';

const entityList = ({
  entityList,
}: {
  entityList: ICountryWCityCount[] | ICityWCountry[];
}) => {
  return (
    <ul className='section grid grid-cols-3-auto gap-20'>
      {entityList.map((entity) => (
        <SingleTopTour key={entity._id} entity={entity} />
      ))}
    </ul>
  );
};

export default entityList;
