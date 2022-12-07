const Divider = ({ text, my }: { text?: string; my?: number }) => {
  const styles = `flex items-center my-${my ?? 4}`;

  return (
    <div className={styles}>
      <div className="flex-grow border-t "></div>
      {text && <span className="flex-shrink mx-4 text-mainGray">{text}</span>}
      <div className="flex-grow border-t "></div>
    </div>
  );
};

export default Divider;
