type Heading = {
  title: string;
  desc: string;
  center?: boolean;
};

const Heading = ({ title, desc, center }: Heading) => {
  const style = center ? 'text-center' : '';

  return (
    <div className={style}>
      <h2>{title}</h2>
      <p className='mb-4 font-light text-thirdBlack'>{desc}</p>
    </div>
  );
};

export default Heading;
