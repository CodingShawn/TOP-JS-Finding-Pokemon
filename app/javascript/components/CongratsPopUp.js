import React, { useState } from "react";
import { formatTime } from "../util";

function CongratsPopUp(props) {
  let [playerName, setPlayerName] = useState("");
  let [topScorers, setTopScorers] = useState(null);
  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function submitScore(event) {
    event.preventDefault();
    let url = "/players";
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    let data = {
      playerName: playerName,
      score: props.currentTime,
    };
    let otherParam = {
      headers: { "X-CSRF-Token": csrf, "Content-Type": "application/json" },
      body: JSON.stringify(data),
      method: "POST",
    };
    sendSubmitScoreRequest(url, otherParam);
  }

  async function sendSubmitScoreRequest(url, otherParam) {
    let response = await fetch(url, otherParam);
    let { topscorers: returnDataArray } = await response.json();
    setTopScorers(returnDataArray);
  }

  function TopScorersReceived() {
    if (topScorers) {
      return (
        <div className="top-scorer-wrapper">
          <h2>Best Times</h2>
          {topScorers.map((topScorer, index) => (
            <div className="top-scorer">
              <div>
                {index + 1}. {topScorer.name}
              </div>{" "}
              <div>{formatTime(topScorer.score)}</div>
            </div>
          ))}
        </div>
      );
    } else return null;
  }

  return (
    <div className="centering-wrapper">
      <div className="congrats-wrapper center-popup">
        <h1>You have found all the lost Pokemon!</h1>
        <div>Time Taken: {formatTime(props.currentTime)}</div>
        {!topScorers && (
          <form className="score-form"  onSubmit={submitScore}>
            <label>
              Enter your name to the Hall of Fame:
              <br />
              <input
                type="text"
                value={playerName}
                onChange={handleChange}
                required
              ></input>
            </label>
            <button>Enter</button>
          </form>
        )}
        <TopScorersReceived />
      </div>
    </div>
  );
}

export default CongratsPopUp;
