import React from "react";

const GameOverModal = (props) => {
  return (
    <div id="game-over-modal">
      <div class="modal-content">
        <p>{props.victoryMessage}</p>
        <button id="restart-game-btn" onClick={props.handleRestartGame}>
          Reset?
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
