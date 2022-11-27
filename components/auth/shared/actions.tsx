type ActionsProps = {
  text: string;
  label: string;
  path: string;
};

const Actions = (props: ActionsProps) => {
  const { text, label, path } = props;
  return (
    <p className="mt-6 text-xs font-light text-center text-gray-500">
      {text}{" "}
      <a
        href={path}
        className="font-medium text-primary hover:text-primary-hover hover:underline "
      >
        {label}
      </a>
    </p>
  );
};

export default Actions;
