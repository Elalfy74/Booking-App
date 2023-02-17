import { motion } from 'framer-motion';
import React from 'react';

import useMobileDetector from '@/hooks/use-mobile-detector';
import { ICity } from '@/types/cities';

import { CardSwiper } from './card-swiper';

type DestinationProps = {
  selectedId: string | null;
  handleSelect: (id: string | null) => void;
  city: ICity;
};

const Destination = ({ selectedId, handleSelect, city }: DestinationProps) => {
  const isMobile = useMobileDetector();

  let cityProps =
    selectedId === city._id ? city : { ...city, photos: [city.photos[0]] };

  // Switch to normal Swiper on mobile
  if (isMobile) {
    cityProps = city;
    handleSelect = () => {};
  }

  return (
    <motion.div
      className={selectedId === city._id ? 'opened-card' : 'layout-card'}
      layout
      onClick={() => handleSelect(city._id)}
    >
      <CardSwiper city={cityProps} />
    </motion.div>
  );
};

export default Destination;
