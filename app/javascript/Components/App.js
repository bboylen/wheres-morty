import React from 'react'
import GameDisplay from './GameDisplay';
import InfoDisplay from './InfoDisplay';
import {useState} from 'react';

const App = (props) => {
  const [locationSelected, setLocationSelected] = useState(false);

  const handleLocationSelect = (e) => {
    if (locationSelected) {
      setLocationSelected(false);
    } else {
      let clickCoordinates = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
      setLocationSelected(clickCoordinates);
    }
  }

  return (
    <div id="app">
      <InfoDisplay />
      <GameDisplay handleLocationSelect={handleLocationSelect} locationSelected={locationSelected}/>
      
    </div>
  )
}

export default App;