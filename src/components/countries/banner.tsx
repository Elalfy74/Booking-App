import Image from 'next/image';

interface IProps {
  image: string;
  text: string;
}

const Banner = ({ image, text }: IProps) => {
  return (
    <div className='overlay h-[250px] w-screen overflow-hidden lg:h-[500px]'>
      <Image
        src={image}
        alt='cover'
        width={1920}
        height={1000}
        className='h-full object-cover'
      />
      <h1 className='text-bold absolute left-1/2 top-1/2 w-3/4 -translate-x-1/2 -translate-y-1/2 whitespace-normal text-center text-2xl capitalize text-white lg:text-6xl'>
        {text}
      </h1>
    </div>
  );
};

export default Banner;
