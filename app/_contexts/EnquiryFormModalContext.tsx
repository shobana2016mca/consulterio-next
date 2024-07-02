'use client';

// import necessary dependencies
import { createContext, useContext, useState } from 'react';

// create a context
const EnquiryModalContext = createContext({
  isOpenEnquiryModal: false,
  onToogle: () => {},
});

// export the context
export default function EnquiryModalContextProvider({
  children,
}: ChildrenPropType) {
  const [isOpenEnquiryModal, setIsOpenEnquiryModal] = useState(false);

  function toggleModal() {
    setIsOpenEnquiryModal((prev) => !prev);
  }

  return (
    <EnquiryModalContext.Provider
      value={{ isOpenEnquiryModal, onToogle: toggleModal }}>
      {children}
    </EnquiryModalContext.Provider>
  );
}

// create a custom hook
export function useEnquiryModalContext() {
  const context = useContext(EnquiryModalContext);

  if (!context) {
    throw new Error(
      'useEnquiryModalContext must be used within EnquiryModalContextProvider'
    );
  }

  return context;
}
