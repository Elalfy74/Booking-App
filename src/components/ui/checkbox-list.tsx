import Checkbox from "./checkbox";

type CheckBoxListProps = {
  items: string[];
};

const CheckBoxList = (props: CheckBoxListProps) => {
  const { items } = props;

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <li key={i}>
          <Checkbox label={item} />
        </li>
      ))}
    </ul>
  );
};

export default CheckBoxList;
