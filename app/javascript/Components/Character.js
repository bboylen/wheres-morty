import React from 'react';

const Character = (props) => {
  return (
    <div className="character">
      <img src={props.characterImageUrl}></img>
      <h3>{props.characterName}</h3>
    </div>
  )
}

export default Character;