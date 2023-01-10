import { createContext, useRef, useState } from 'react';

import React from 'react';

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
   const [muzikKonu, setMuzikKonu] = useState('');
   const [secim, setSecim] = useState('Pop');
   const [sayi, setSayi] = useState('');

   const inputRef1 = useRef(null);
   const inputRef2 = useRef(null);
   const inputRef3 = useRef(null);

   const handleSubmit = (event) => {
      event.prevent.default();
      setMuzikKonu(inputRef1.current.value);
      setSecim(inputRef2.current.value);
      setSayi(inputRef3.current.value);
   };

   return (
      <GlobalContext.Provider
         value={{
            inputRef1,
            inputRef2,
            inputRef3,
            handleSubmit,
            muzikKonu,
            setMuzikKonu,
            secim,
            setSecim,
            sayi,
            setSayi,
         }}
      >
         {children}
      </GlobalContext.Provider>
   );
};

export default GlobalContext;
