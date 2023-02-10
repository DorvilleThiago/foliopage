import { createContext } from 'react';
import FixedStuff from './components/FixedStuff.jsx';
import NotFixed from './components/NotFixed.jsx';
function App() {

  const lugar = {
    place: ''
  }

  const lugarContext = createContext(lugar);

  return (
    <>
      <div className='container'>
        <FixedStuff className="fixed"></FixedStuff>
        <div className="barreira"></div>
        <NotFixed className="not-fixed"></NotFixed>
      </div>
   </>
  )
}

export default App
