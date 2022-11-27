import React from 'react';
import ReactDOM from 'react-dom/client';
import ContentBox from './Components/Organisms/ContentBox';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//e: React.ChangeEvent<HTMLInputElement>

function oi(e: React.MouseEvent) {
  console.log("oi")
}

root.render(
  <React.StrictMode>
    
  </React.StrictMode>
);
