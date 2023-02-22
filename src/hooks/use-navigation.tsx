import { useRef, useState } from 'react';
import SwiperCore from 'swiper';

const useNavigation = () => {
  const swiperRef = useRef<SwiperCore>();
  const [status, setStatus] = useState({
    isBeginning: true,
    isEnd: false,
  });

  function handleSwiperChange(dir: 'prev' | 'next') {
    if (dir === 'prev') {
      swiperRef.current?.slidePrev();
    } else {
      swiperRef.current?.slideNext();
    }
  }

  function handleCurrentStatus(newStatus: typeof status) {
    setStatus(newStatus);
  }

  return {
    setSwiperRef: (swiper: SwiperCore) => (swiperRef.current = swiper),
    handleSwiperChange,
    status,
    handleCurrentStatus,
  };
};

export default useNavigation;
