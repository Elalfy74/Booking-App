type WrapperProps = {
  children: React.ReactNode;
  width?: "md" | "sm";
};

const Wrapper = (props: WrapperProps) => {
  const { children, width } = props;

  const style = `${width === "md" ? "max-w-md" : "max-w-sm"} `;

  return <div className={`${style} card mx-auto p-10`}>{children}</div>;
};

export default Wrapper;
