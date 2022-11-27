import { XMarkIcon } from "@heroicons/react/24/solid";
import * as Popover from "@radix-ui/react-popover";

import Button from "../../../ui/button ";
import OpenButton from "./OpenButton";

type PopOverProps = {
  children: React.ReactNode;
  label: string;
  hasValue: boolean;
};

const CustomPopover = ({ children, label, hasValue }: PopOverProps) => (
  <Popover.Root>
    <Popover.Trigger className="w-full ">
      <Button
        as="span"
        fullWidth
        className="main-border relative inline-flex h-[58px] items-center justify-between rounded-lg bg-[#F6F7F9]  text-mainGray hover:bg-gray-200"
        aria-label={`Trigger ${label} Input`}
      >
        <span
          className={`${
            hasValue && "text-thirdBlack"
          } pr-2 font-dm_sans font-light`}
        >
          {label}
        </span>
        <OpenButton as="span" />
      </Button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content sideOffset={5} className="z-10">
        {children}
        <Popover.Close
          className="absolute w-5 h-5 top-2 right-2"
          aria-label="Close"
        >
          <XMarkIcon />
        </Popover.Close>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default CustomPopover;
