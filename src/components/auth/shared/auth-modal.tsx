import { Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/solid';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import cx from 'classnames';
import { Fragment, useState } from 'react';

import { ModalContent, useAuthModal } from '@/store';

import { Button } from '../../ui';
import { Login, PasswordRecovery, SignUp } from '..';

const AuthModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { modalContent, changeContent } = useAuthModal();

  const widthStyle =
    modalContent === ModalContent.SIGNUP ? 'max-w-md' : 'max-w-sm';

  function handleCloseDialog() {
    setIsOpen((prevState) => !prevState);
    changeContent(ModalContent.LOGIN);
  }

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={handleCloseDialog}>
      <DialogPrimitive.Trigger>
        <Button as='span'>Login</Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <DialogPrimitive.Overlay
              forceMount
              className='fixed inset-0 z-20 bg-black/50'
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <DialogPrimitive.Content
              className={cx(
                'fixed z-50 w-full',
                `${widthStyle}`,
                'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
              )}
            >
              {modalContent === ModalContent.LOGIN && <Login />}
              {modalContent === ModalContent.SIGNUP && <SignUp />}
              {modalContent === ModalContent.PASSWORD_RECOVERY && (
                <PasswordRecovery />
              )}

              <DialogPrimitive.Close
                className={cx(
                  'absolute top-3.5 right-3.5 inline-flex items-center justify-center rounded-full p-1',
                  'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
                )}
              >
                <XMarkIcon className='h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400' />
              </DialogPrimitive.Close>
            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default AuthModal;
