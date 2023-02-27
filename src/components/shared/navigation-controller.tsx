import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type NavigationControllerProps = {
  handleSwiperChange: (dir: 'prev' | 'next') => void;
  status: {
    isBeginning: boolean;
    isEnd: boolean;
  };
};

const NavigationController = ({
  handleSwiperChange,
  status,
}: NavigationControllerProps) => {
  const btnStyle =
    'rounded-full bg-gray-200 p-2 duration-main hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed';

  return (
    <div className='flex gap-2'>
      <button
        disabled={status.isBeginning}
        className={btnStyle}
        onClick={() => handleSwiperChange('prev')}
      >
        <ChevronLeftIcon width={15} className='text-gray-600' />
      </button>
      <button
        disabled={status.isEnd}
        className={btnStyle}
        onClick={() => handleSwiperChange('next')}
      >
        <ChevronRightIcon width={15} className='text-gray-600' />
      </button>
    </div>
  );
};

export default NavigationController;
