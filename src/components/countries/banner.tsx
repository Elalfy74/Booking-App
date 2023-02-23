import Image from 'next/image';

interface IProps {
  image: string;
  text: string;
}

const Banner = ({ image, text }: IProps) => {
  return (
    <div className='overlay h-[500px] w-screen overflow-hidden'>
      <Image
        src={image}
        alt='cover'
        width={1920}
        height={1000}
        className='h-full object-cover'
      />
      <pre>
        <h1 className='text-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-6xl capitalize text-white'>
          {text}
        </h1>
      </pre>
    </div>
  );
};

export default Banner;
