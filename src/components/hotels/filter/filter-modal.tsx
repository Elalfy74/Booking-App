import { Transition } from "@headlessui/react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/solid";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import cx from "classnames";
import { Fragment, useState } from "react";

import Filter from "./filter";

const FilterModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Trigger asChild>
        <button className="p-2 rounded-full hover:bg-gray-50">
          <FunnelIcon className="w-5 h-5 " />
        </button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <Transition.Root show={isOpen}>
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
              className={cx(
                "container fixed top-0 left-0 z-50 h-full w-screen overflow-auto bg-white"
              )}
            >
              <div className="flex items-center justify-between py-8">
                <DialogPrimitive.Close className="p-1 rounded-full ">
                  <XMarkIcon className="w-6 h-6 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
                </DialogPrimitive.Close>
                <h1 className="text-base font-medium">Filters</h1>
                <button className="text-gray-600">Clear</button>
              </div>
              <div className="mb-10 border-b main-border"></div>
              <Filter />
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default FilterModal;
