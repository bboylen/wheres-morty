import React from 'react'
import SelectionDisplay from './SelectionDisplay';

const GameDisplay = (props) => {
  return (
    <div id="game-display" onClick={props.handleLocationSelect}>
      {(props.locationSelected) ? (<SelectionDisplay locationSelected={props.locationSelected}/>) : (null)}
      
    </div>
  )
}

export default GameDisplay;