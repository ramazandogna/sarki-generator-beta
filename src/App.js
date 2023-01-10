import './App.css';

import Column1 from './components/Column1';
import Column2 from './components/Column2';
import Column3 from './components/Column3';
import Footer from './components/Footer';
import Menu from './components/Menu.jsx';

function App() {
   return (
      <>
         <Menu />
         <div className="  max-h-screen h-full max-w-full grid grid-cols-3 gap-2 ">
            <span className="max-w-full col-span-1 ">
               <Column1 />
            </span>
            <span className="w-full col-span-1">
               <Column2 />
            </span>
            <span className=" w-full col-span-1">
               <Column3 />
            </span>
         </div>
      </>
   );
}

export default App;
