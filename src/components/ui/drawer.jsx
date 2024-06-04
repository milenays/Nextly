import * as React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import { cx } from 'class-variance-authority';

const Drawer = ({ children, title, open, onOpenChange }) => (
  <Dialog.Root open={open} onOpenChange={onOpenChange}>
    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
    <Dialog.Content className={cx('fixed right-0 top-0 h-full w-96 p-4 bg-white shadow-lg')}>
      <Dialog.Title className="text-lg font-medium">{title}</Dialog.Title>
      <Dialog.Close asChild>
        <button className="absolute top-4 right-4">
          <Cross2Icon />
        </button>
      </Dialog.Close>
      <div className="mt-4">{children}</div>
    </Dialog.Content>
  </Dialog.Root>
);

export default Drawer;
