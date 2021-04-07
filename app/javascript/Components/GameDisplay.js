import React from "react";
import SelectionDisplay from "./SelectionDisplay";

const GameDisplay = (props) => {
  return (
    <div id="game-display" onClick={props.handleLocationSelect}>
      {props.locationSelected ? (
        <SelectionDisplay
          locationSelected={props.locationSelected}
          handleCharacterSelect={props.handleCharacterSelect}
          characters={props.characters}
        />
      ) : null}
      {props.locationsFound.map((coordinates) => {
        return (
          <div
            id="selection-target"
            className="correct"
            style={{
              left: coordinates[0] - 42,
              top: coordinates[1] + 110,
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default GameDisplay;
