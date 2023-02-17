import { useRef } from 'react';
import SwiperCore from 'swiper';

const useNavigation = () => {
  const swiperRef = useRef<SwiperCore>();

  function handleSwiperChange(dir: 'prev' | 'next') {
    if (dir === 'prev') {
      swiperRef.current?.slidePrev();
    } else {
      swiperRef.current?.slideNext();
    }
  }

  return {
    setSwiperRef: (swiper: SwiperCore) => (swiperRef.current = swiper),
    handleSwiperChange,
  };
};

export default useNavigation;
