import React from 'react'
import * as Toast from '@radix-ui/react-toast';

export default function Toaster({ isOpen, setIsOpen }) {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="bg-[--primary] rounded-md shadow-lg data-[swipe=end]:animate-swipeOut flex p-4 text-white"
        open={isOpen}
        onOpenChange={setIsOpen}
      >
        <Toast.Title className="mb-[5px] font-medium text-[15px]">
          Mesajınız başarıyla gönderildi
        </Toast.Title>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />
    </Toast.Provider>
  )
}
