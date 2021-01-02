import React, { useState } from "react";
import { formatTime } from "../util";

function CongratsPopUp(props) {
  let [playerName, setPlayerName] = useState("");
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <div className="centering-wrapper">
      <div className="congrats-wrapper">
        <h1>You have found all the lost Pokemon!</h1>
        <div>Time Taken: {formatTime(props.currentTime)}</div>
        <form>
          <label>
            Enter your name to the Hall of Fame:
            <br />
            <input
              type="text"
              value={playerName}
              onChange={handleChange}
            ></input>
          </label>
          <button>Enter</button>
        </form>
      </div>
    </div>
  );
}

export default CongratsPopUp;
