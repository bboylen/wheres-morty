import React from 'react'
import GameDisplay from './GameDisplay';
import InfoDisplay from './InfoDisplay';

const App = (props) => {
  return (
    <div id="app">
      <InfoDisplay />
      <GameDisplay />
      
    </div>
  )
}

export default App;