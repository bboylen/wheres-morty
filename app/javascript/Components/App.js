import React from 'react'
import GameDisplay from './GameDisplay';
import InfoDisplay from './InfoDisplay';
import {useState, useEffect} from 'react';

const App = (props) => {
  const [locationSelected, setLocationSelected] = useState(false);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("/api/v1/characters/index")
    .then(response => {
      return response.json()
    })
    .then(data => setCharacters(data))
    .then(error => console.log(error))
  }, characters)

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
      <InfoDisplay characters={characters}/>
      <GameDisplay handleLocationSelect={handleLocationSelect} locationSelected={locationSelected}/>
      
    </div>
  )
}

export default App;