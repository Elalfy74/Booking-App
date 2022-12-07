import { CheckIcon } from "@heroicons/react/24/solid";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import * as LabelPrimitive from "@radix-ui/react-label";

type CheckboxProps = {
  label: string;
};

const Checkbox = (props: CheckboxProps) => {
  const { label } = props;

  return (
    <div className="flex items-center">
      <CheckboxPrimitive.Root
        id="c1"
        defaultChecked
        className="w-5 h-5 rounded main-border center focus:outline-none focus-visible:ring focus-visible:ring-primary-300 focus-visible:ring-opacity-75 radix-state-checked:bg-primary radix-state-unchecked:bg-transparent"
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="self-center w-4 h-4 text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <LabelPrimitive.Root
        htmlFor="c1"
        className="ml-3 text-sm font-medium select-none text-thirdBlack"
      >
        {label}
      </LabelPrimitive.Root>
    </div>
  );
};

export default Checkbox;
