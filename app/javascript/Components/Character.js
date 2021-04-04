import React from 'react';

const Character = (props) => {
  return (
    <div className="character">
      <img src={props.characterImageUrl}></img>
      <h3 className={(props.found) ? "found" : ""}>{props.characterName}</h3>
    </div>
  )
}

export default Character;