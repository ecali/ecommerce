import React from 'react'

import Header from './Components/Header'
import Homepage from './Pages/Hompage'
import './default.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <Homepage />
      </div>
    </div>
  );
}

export default App;
