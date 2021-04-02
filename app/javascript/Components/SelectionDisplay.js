import React from 'react';

const SelectionDisplay = (props) => {
  return (
    <div id="selection-display">
      <div id="selection-target" style={{left: props.locationSelected[0]-62, top: props.locationSelected[1]-62}} ></div>
      <ul id="selection-list" style={{left: props.locationSelected[0]+32, top: props.locationSelected[1]+32}}>
        <li>Amish Cyborg</li>
        <li>Pencilvester</li>
        <li>Mini Cowboy</li>
      </ul>
    </div>
  )
}

export default SelectionDisplay;