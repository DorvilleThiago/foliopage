import { createContext, useState, useEffect, useRef } from 'react';
import FixedStuff from './components/FixedStuff.jsx';
import NotFixed from './components/NotFixed.jsx';

export const lugarContext = createContext();

function App() {


  const [lugar, setLugar] = useState('');

  return (
    <lugarContext.Provider value={{lugar, setLugar}}>
      <div className='container'>
        <FixedStuff className="fixed"></FixedStuff>
        {<div className="barreira"></div>}
        <NotFixed className="not-fixed"></NotFixed>
      </div>
   </lugarContext.Provider>
  )
}

export default App
