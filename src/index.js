import App from './App';
import { GlobalProvider } from './context/GlobalContext';
import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <GlobalProvider>
         <App />
      </GlobalProvider>
   </React.StrictMode>
);
