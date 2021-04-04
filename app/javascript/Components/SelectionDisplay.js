import React from "react";

const SelectionDisplay = (props) => {
  console.log(props.characters);

  let charInfo = {};
  for (let char in props.characters) {
    charInfo[props.characters[char].id] = {
      found: props.characters[char].found,
      xcoordinate: props.characters[char].xcoordinate,
      ycoordinate: props.characters[char].ycoordinate,
    };
  }

  console.log(charInfo);
  let horizontalOffset =
    props.locationSelected[0] / window.outerWidth > 0.5 ? -190 : 60;

  const checkGuess = (guessCharId) => {
    let xcoordinate = charInfo[guessCharId].xcoordinate;
    let ycoordinate = charInfo[guessCharId].ycoordinate;
    let xguess = props.locationSelected[0];
    let yguess = props.locationSelected[1];

    if (
      Math.abs(xcoordinate - xguess) < 63 &&
      Math.abs(ycoordinate - yguess) < 63
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleGuess = (e) => {
    let guessCharId = e.target.id;
    if (charInfo[guessCharId].found === false) {
      if (checkGuess(guessCharId) === true) {
        props.handleCharacterSelect(guessCharId);
      }
    }
  };

  return (
    <div id="selection-display">
      <div
        id="selection-target"
        style={{
          left: props.locationSelected[0] - 42,
          top: props.locationSelected[1] + 110,
        }}
      ></div>
      <ul
        id="selection-list"
        style={{
          left: props.locationSelected[0] + horizontalOffset,
          top: props.locationSelected[1] + 32,
        }}
      >
        <li id="1" onClick={handleGuess}>
          Amish Cyborg
        </li>
        <li id="2" onClick={handleGuess}>
          Pencilvester
        </li>
        <li id="3" onClick={handleGuess}>
          Mini Cowboy
        </li>
      </ul>
    </div>
  );
};

export default SelectionDisplay;
