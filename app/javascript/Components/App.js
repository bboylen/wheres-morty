import React from "react";
import GameDisplay from "./GameDisplay";
import InfoDisplay from "./InfoDisplay";
import { useState, useEffect } from "react";

const App = (props) => {
  const [locationSelected, setLocationSelected] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [locationsFound, setLocationsFound] = useState([]);

  useEffect(() => {
    fetch("/api/v1/characters/index")
      .then((response) => {
        return response.json();
      })
      .then((data) => setCharacters(data))
      .catch((error) => console.log('Error:', error));
  }, []);

  const handleLocationSelect = (e) => {
    if (locationSelected) {
      setLocationSelected(false);
    } else {
      let clickCoordinates = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
      setLocationSelected(clickCoordinates);
    }
  };

  const handleCharacterSelect = (charId) => {
    setCharacterFound(charId);
  };

  const setCharacterFound = (character_id) => {
    const data = {
      found: true
    }
    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(`/api/v1/characters/${character_id}`, {
      method: "PATCH",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        return response.json();
      })
      .then((newCharacter) => updateCharacterState(character_id, newCharacter))
      .catch((error) => console.log('Error:', error));
  };

  const updateCharacterState = (id, newCharacter) => {
    let updatedCharacters = [...characters];
    let charIndex = updatedCharacters.findIndex(character => character.id == id);
    updatedCharacters[charIndex] = newCharacter;
    setCharacters(updatedCharacters);
  }

  return (
    <div id="app">
      <InfoDisplay characters={characters} />
      <GameDisplay
        handleLocationSelect={handleLocationSelect}
        locationSelected={locationSelected}
        handleCharacterSelect={handleCharacterSelect}
        characters={characters}
      />
    </div>
  );
};

export default App;
