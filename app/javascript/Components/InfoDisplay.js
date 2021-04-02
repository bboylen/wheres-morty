import React from "react";
import Character from "./Character";
import amishCyborgImage from "../../assets/images/amish-cyborg.png";
import pencilvesterImage from "../../assets/images/pencilvester.png";
import cowboyImage from "../../assets/images/mini-cowboy.png";


const InfoDisplay = (props) => {
  return (
    <div id="info-display">
      <div id="character-info">
        <h1>Characters:</h1>
        <div id="character-list">
          <Character
            characterName="Amish Cyborg"
            characterImageUrl={amishCyborgImage}
          />
          <Character
            characterName="Pencilvester"
            characterImageUrl={pencilvesterImage}
          />
          <Character
            characterName="Mini Cowboy"
            characterImageUrl={cowboyImage}
          />
        </div>
      </div>

      <h1>Time:</h1>
    </div>
  );
};

export default InfoDisplay;
