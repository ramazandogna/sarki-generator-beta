import React, { useContext } from 'react';

import GlobalContext from '../context/GlobalContext';

export const Column2 = () => {
   const { muzikKonu, sayi, secim } = useContext(GlobalContext);
   return (
      <div className=" bg-violet-200 rounded-xl h-full border-3 p-4 max-w-full">
         <div className=" p-2 my-3 rounded-lg italic bg-violet-50">
            Giriş Dizisi: {muzikKonu}
         </div>
         <div className=" p-2 my-3 rounded-lg italic bg-violet-50">
            Kelime Sayisi: {sayi}
         </div>
         <div className=" p-2 my-3 rounded-lg italic bg-violet-50">
            Türü değeri: {secim}
         </div>
         <div className=" p-2 my-3 rounded-lg italic bg-violet-50">ID: #43</div>
         <p className=" text-center mt-8">
            Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
            metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
            numune kitabı oluşturmak üzere bir yazı galerisini alarak
            karıştırdığı 1500'lerden beri endüstri standardı sahte metinler
            olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle
            kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de
            sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset
            yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi
            Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile
            popüler olmuştur.
         </p>
      </div>
   );
};

export default Column2;
