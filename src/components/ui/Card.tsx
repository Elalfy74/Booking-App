type CardProps = React.ComponentProps<"div">;

const Card = (props: CardProps) => {
  const { children, className, ...rest } = props;

  const baseStyle = "bg-white shadow rounded-xl";

  const allStyles = `${baseStyle} ${className}`;

  return (
    <div className={allStyles} {...rest}>
      {children}
    </div>
  );
};

export default Card;
