import React from "react";

const SelectionDisplay = (props) => {
  console.log(props.locationSelected[0]);
  console.log(props.locationSelected[1]);
  let horizontalOffset =
    props.locationSelected[0] / window.outerWidth > 0.5 ? -190 : 60;
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
        <li>Amish Cyborg</li>
        <li>Pencilvester</li>
        <li>Mini Cowboy</li>
      </ul>
    </div>
  );
};

export default SelectionDisplay;
