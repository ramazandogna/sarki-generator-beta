import GlobalContext from '../context/GlobalContext';
import React from 'react';
import { useContext } from 'react';

function Column1() {
   const {
      setSecim,
      setMuzikKonu,
      setSayi,
      sayi,
      handleSubmit,
      inputRef1,
      inputRef2,
      inputRef3,
      muzik,
      secim,
   } = useContext(GlobalContext);

   return (
      <form
         className=" bg-slate-100 rounded-xl h-5/6  max-w-full p-4 max-w-lg"
         onSubmit={handleSubmit}
      >
         <h2 className=" text-4xl underline text-center font-semibold">
            Şarkı Üret
         </h2>
         <div className="flex mt-20  flex-wrap -mx-3 mb-6">
            <div className="w-full text-center m-auto md:w-1/2 px-3 mb-3 md:mb-0">
               <label
                  className=" block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
               >
                  Giriş Dizini
               </label>
               <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Şarkının giriş dizini"
                  onChange={(event) => setMuzikKonu(event.target.value)}
                  ref={inputRef1}
               />
               <p className="text-gray-500 text-xs italic">
                  Lütfen boşlukları doğru şekilde doldurun.
               </p>
            </div>
         </div>
         <div className="flex flex-wrap justify-center mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
               <label
                  className="block text-center uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
               >
                  Şarkı Türü
               </label>
               <div className="relative">
                  <select
                     className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                     id="grid-state"
                     onChange={(event) => setSecim(event.target.value)}
                     ref={inputRef2}
                  >
                     <option value="none" selected disabled hidden>
                        Tür
                     </option>
                     <option>Pop</option>
                     <option>Rock</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                     <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                     >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                     </svg>
                  </div>
               </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
               <label
                  className="block uppercase text-center tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-zip"
               >
                  Karakter
               </label>
               <input
                  className=" w-full appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-zip"
                  type="number"
                  placeholder="Ör: 123"
                  ref={inputRef3}
                  onChange={(event) => setSayi(event.target.value)}
               />
            </div>
         </div>
         <button
            type="submit"
            className=" flex mx-auto mt-10 text-gray-100 bg-gray-800 transition-transform hover:bg-gray-400 hover:text-black px-4 py-2 rounded-tr-xl rounded-bl-xl"
         >
            Getir
         </button>
      </form>
   );
}

export default Column1;
