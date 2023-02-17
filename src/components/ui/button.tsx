import { forwardRef } from 'react';

type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'primary' | 'black' | 'default';
  fullWidth?: Boolean;
  size?: 'sm' | 'md' | 'square';
  as?: 'span';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = 'primary',
    size = 'md',
    fullWidth,
    children,
    className = '',
    as,
    ...rest
  } = props;

  const fullWidthStyle = fullWidth ? 'w-full' : '';

  const allStyles = `${baseStyle} ${sizes[size]} ${variants[variant]} ${fullWidthStyle} ${className}`;

  if (as === 'span') {
    return (
      <span {...rest} className={allStyles} ref={ref}>
        {children}
      </span>
    );
  } else {
    return (
      <button {...rest} className={allStyles} ref={ref}>
        {children}
      </button>
    );
  }
});

Button.displayName = 'Button';

export default Button;

const baseStyle =
  'block text-sm font-medium capitalize transition-colors duration-200 rounded-md focus:outline-none focus:ring-opacity-80 focus:ring-4';

const variants = {
  default: 'text-gray-500 bg-gray-200 hover:bg-gray-300',
  primary:
    'text-white bg-primary hover:bg-primary-hover focus:ring-primary-focus',
  black: 'text-white bg-thirdBlack hover:bg-secondBlack',
};

const sizes = {
  sm: 'px-3 py-2',
  md: 'px-5 py-2.5',
  square: 'p-2.5',
};
