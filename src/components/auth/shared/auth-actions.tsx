type ActionsProps = {
  text: string;
  label: string;
  handleClick: () => void;
};

const AuthActions = (props: ActionsProps) => {
  const { text, label, handleClick } = props;
  return (
    <p className="mt-6 text-xs font-light text-center text-gray-500">
      {text}{" "}
      <button
        onClick={handleClick}
        className="font-medium text-primary hover:text-primary-hover hover:underline "
      >
        {label}
      </button>
    </p>
  );
};

export default AuthActions;
