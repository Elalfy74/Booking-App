import Checkbox from "./checkbox";

const CheckBoxList = () => {
  return (
    <ul className="flex flex-col gap-3">
      <li>
        <Checkbox label={"Hotels"} />
      </li>
      <li>
        <Checkbox label={"Breakfast and Dinner"} />
      </li>

      <li>
        <Checkbox label={"Free Cancellation"} />
      </li>

      <li>
        <Checkbox label={"No preypayment"} />
      </li>
    </ul>
  );
};

export default CheckBoxList;
