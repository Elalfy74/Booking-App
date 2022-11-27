import { Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import cx from "classnames";
import React, { Fragment, useState } from "react";

interface Props {
  children: React.ReactNode;
  placeholder: string;
}

const Dialog = (props: Props) => {
  const { children, placeholder } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>
        <button className="search-input w-full rounded-lg py-4.5 text-left text-mainGray ">
          {placeholder}
        </button>
      </DialogPrimitive.Trigger>
      <Transition.Root show={isOpen}>
        <DialogPrimitive.Portal>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              className={cx(
                "fixed top-0 z-50 h-full",
                "w-full max-w-md rounded-lg p-4 md:w-full",
                " left-[50%] -translate-x-[50%] ",
                "bg-white dark:bg-gray-800",
                "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
              )}
            >
              <div className="mt-20">{children}</div>
              <DialogPrimitive.Close
                className={cx(
                  "absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1",
                  "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
              >
                <XMarkIcon className="w-4 h-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </Transition.Child>
        </DialogPrimitive.Portal>
      </Transition.Root>
    </DialogPrimitive.Root>
  );
};

export default Dialog;
