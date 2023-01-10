import React, { useContext } from 'react';

import GlobalContext from '../context/GlobalContext';

function Column3() {
   const { setId } = useContext(GlobalContext); //bu kısma contexten aldığımız veriler gelcek

   return (
      <div className=" text-center bg-blue-200 rounded-xl h-5/6 border-3 p-4 max-h-full">
         <h2 className=" text-4xl underline font-semibold">Şarkı Bul</h2>
         <div className="mt-24">
            <label
               className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 italic"
               for="grid-zip"
            >
               Şarkı #ID
            </label>
            <input
               className=" mt-1 w-1/2 flex ml-auto mr-auto appearance-none bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
               id="grid-first-name"
               type="number"
               onChange={(event) => setId(event.target.value)}
               placeholder="Şarkı ID"
            />
            <button
               type="submit"
               className=" flex mx-auto mt-10 text-gray-100 bg-gray-800 transition-transform hover:bg-gray-400 hover:text-black px-4 py-2 rounded-tr-xl rounded-bl-xl"
            >
               Getir
            </button>
         </div>
      </div>
   );
}

export default Column3;
