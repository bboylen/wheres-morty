import React from "react";
import GameDisplay from "./GameDisplay";
import InfoDisplay from "./InfoDisplay";
import { useState, useEffect } from "react";

const App = (props) => {
  const [locationSelected, setLocationSelected] = useState(false);
  const [characters, setCharacters] = useState([]);
  const [locationsFound, setLocationsFound] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    setGameOver(false);

    fetch("/api/v1/characters/index")
      .then((response) => {
        return response.json();
      })
      .then((data) => setCharacters(data))
      .catch((error) => console.log("Error:", error));
  }, [gameOver]);

  const handleLocationSelect = (e) => {
    if (locationSelected) {
      setLocationSelected(false);
    } else {
      let clickCoordinates = [e.nativeEvent.offsetX, e.nativeEvent.offsetY];
      setLocationSelected(clickCoordinates);
    }
  };

  const handleCharacterSelect = (charId, guessCoordinates) => {
    setCharacterFound(charId);
    setLocationsFound((locationsFound) => [
      ...locationsFound,
      guessCoordinates,
    ]);
  };

  const updateCharacterState = (id, newCharacter) => {
    let updatedCharacters = [...characters];
    let charIndex = updatedCharacters.findIndex(
      (character) => character.id == id
    );
    updatedCharacters[charIndex] = newCharacter;
    setCharacters(updatedCharacters);
  };

  const updateCharacter = async (character_id, data) => {
    const token = document.querySelector('meta[name="csrf-token"]').content;
    await fetch(`/api/v1/characters/${character_id}`, {
      method: "PATCH",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        return response.json();
      })
      .then((newCharacter) => updateCharacterState(character_id, newCharacter))
      .catch((error) => console.log("Error:", error));
  };

  const setCharacterFound = (character_id) => {
    const data = {
      found: true,
    };
    updateCharacter(character_id, data);
  };

  const resetCharacters = async () => {
    const data = {
      found: false,
    };
    for (let i = 1; i <= 3; i++) {
      await updateCharacter(String(i), data);
    }
  };

  const [modalActive, setModalActive] = useState(false);
  const [victoryMessage, setVictoryMessage] = useState("You found them all!");

  //Checks if game is over
  useEffect(() => {
    let gameOver = [];
    for (let char in characters) {
      gameOver.push(characters[char].found ? true : false);
    }
    if (gameOver.every((character) => character) && gameOver.length > 0) {
      endGame();
    }
  }, [characters]);

  const endGame = async () => {
    setModalActive(true);
  };

  const handleRestartGame = async () => {
    setModalActive(false);
    await resetCharacters();
    setLocationsFound([]);
    setGameOver(true);
  }

  return (
    <div id="app">
      <InfoDisplay characters={characters} />
      <GameDisplay
        handleLocationSelect={handleLocationSelect}
        locationSelected={locationSelected}
        handleCharacterSelect={handleCharacterSelect}
        characters={characters}
        locationsFound={locationsFound}
        modalActive={modalActive}
        handleRestartGame={handleRestartGame}
        victoryMessage={victoryMessage}
      />
    </div>
  );
};

export default App;
