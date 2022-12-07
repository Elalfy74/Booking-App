import * as Label from "@radix-ui/react-label";
import { useField } from "formik";

export type AuthInputProps = {
  type: "email" | "password" | "text";
  label: string;
  name: string;
  placeHolder: string;
  autoFocus?: boolean;
};

const AuthInput = (props: AuthInputProps) => {
  const { type, label, name, placeHolder, autoFocus = false } = props;
  const [field, meta, helpers] = useField(name);

  const error = meta.error && meta.touched;

  const errorStyle = error ? "border border-red-500 bg-white" : "bg-[#e7ecf2]";

  return (
    <div>
      <div>
        <Label.Root htmlFor={name} className="block text-sm text-mainBlack">
          {label}
        </Label.Root>
        <input
          id={name}
          autoFocus={autoFocus}
          {...field}
          type={type}
          placeholder={placeHolder}
          className={`${errorStyle} input mt-2 w-full py-2 text-thirdBlack focus:border-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-40 `}
        />
      </div>
      {error && (
        <div className="mt-1 ml-1 text-xs text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

export default AuthInput;
