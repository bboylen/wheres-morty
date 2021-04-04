import React from "react";
import Character from "./Character";
import amishCyborgImage from "../../assets/images/amish-cyborg.png";
import pencilvesterImage from "../../assets/images/pencilvester.png";
import cowboyImage from "../../assets/images/mini-cowboy.png";


const InfoDisplay = (props) => {
  let characterFound = [];
  for (let character of props.characters) {
    characterFound.push(character.found);
  }

  return (
    <div id="info-display">
      <div id="character-info">
        <h1>Characters:</h1>
        <div id="character-list">
          <Character
            characterName="Amish Cyborg"
            characterImageUrl={amishCyborgImage}
            found={characterFound[0]}
          />
          <Character
            characterName="Pencilvester"
            characterImageUrl={pencilvesterImage}
            found={characterFound[1]}
          />
          <Character
            characterName="Mini Cowboy"
            characterImageUrl={cowboyImage}
            found={characterFound[2]}
          />
        </div>
      </div>

      <h1>Time:</h1>
    </div>
  );
};

export default InfoDisplay;
