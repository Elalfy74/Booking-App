import { XMarkIcon } from '@heroicons/react/24/solid';
import * as Popover from '@radix-ui/react-popover';

import { Button } from '@/components/ui';

import OpenButton from './open-button';

type PopoverProps = {
  children: React.ReactNode;
  label: string;
};

const InputPopover = ({ children, label }: PopoverProps) => (
  <Popover.Root>
    <Popover.Trigger className='w-full'>
      <Button
        as='span'
        fullWidth
        className='main-border relative inline-flex h-[58px] items-center justify-between rounded-lg bg-[#F6F7F9]  text-mainGray hover:bg-gray-200'
        aria-label={`Trigger ${label} Input`}
      >
        <span className='pr-2 font-dm_sans font-light text-thirdBlack'>
          {label}
        </span>
        <OpenButton as='span' />
      </Button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        sideOffset={5}
        className='z-10 rounded-2xl bg-white p-6 shadow'
      >
        {children}
        <Popover.Close
          className='absolute top-2 right-2 h-5 w-5'
          aria-label='Close'
        >
          <XMarkIcon />
        </Popover.Close>
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default InputPopover;
