import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

type NavigationControllerProps = {
  handleSwiperChange: (dir: 'prev' | 'next') => void;
};

const NavigationController = ({
  handleSwiperChange,
}: NavigationControllerProps) => {
  return (
    <div className='flex gap-2'>
      <button
        className='rounded-full bg-gray-200 p-2 duration-main hover:bg-gray-300 disabled:bg-gray-100'
        onClick={() => handleSwiperChange('prev')}
      >
        <ChevronLeftIcon width={15} className='text-gray-600' />
      </button>
      <button
        className='rounded-full bg-gray-200 p-2 duration-main hover:bg-gray-300'
        onClick={() => handleSwiperChange('next')}
      >
        <ChevronRightIcon width={15} className='text-gray-600' />
      </button>
    </div>
  );
};

export default NavigationController;
