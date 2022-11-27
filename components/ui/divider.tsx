const Divider = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center my-4">
      <div className="flex-grow border-t "></div>
      <span className="flex-shrink mx-4 text-mainGray">{text}</span>
      <div className="flex-grow border-t "></div>
    </div>
  );
};

export default Divider;
