type ButtonProps = React.ComponentProps<"button"> & {
  variant?: "primary" | "black";
  fullWidth?: Boolean;
  size?: "sm" | "md" | "square";
  as?: "span";
};

const Button = (props: ButtonProps) => {
  const {
    variant = "primary",
    size = "md",
    fullWidth,
    children,
    className = "",
    as,
    ...rest
  } = props;

  const baseStyle =
    "block text-sm font-medium capitalize transition-colors duration-200 rounded-md focus:outline-none focus:ring-opacity-80 focus:ring-4";

  let btnSize;

  switch (size) {
    case "sm":
      btnSize = "px-3 py-2";
      break;
    case "square":
      btnSize = "p-2.5";
      break;
    default:
      btnSize = "px-5 py-2.5";
  }

  const btnVariant = colorsStyles[variant];

  const fullWidthStyle = fullWidth ? "w-full" : "";

  const allStyles = `${baseStyle} ${btnSize} ${btnVariant} ${fullWidthStyle} ${className}`;

  if (as === "span") {
    return (
      <span {...rest} className={allStyles}>
        {children}
      </span>
    );
  } else {
    return (
      <button {...rest} className={allStyles}>
        {children}
      </button>
    );
  }
};

export default Button;

const colorsStyles = {
  primary:
    "text-white bg-primary hover:bg-primary-hover focus:ring-primary-focus",
  black: "text-white bg-thirdBlack hover:bg-secondBlack",
};
