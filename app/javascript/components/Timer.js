import React, { useEffect, useState } from "react";

function Timer() {
  let [currentTime, setCurrentTime] = useState(0);

  function formatTime(time) {
    let mins = Math.floor(time / 60);
    let seconds = time % 60;
    let formattedSeconds = addZero(seconds);

    if (mins < 60) {
      let formattedMins = addZero(mins);
      return `${formattedMins}:${formattedSeconds}`;
    } else {
      let hours = Math.floor(mins / 60);
      mins = mins % 60;
      let formattedMins = addZero(mins);
      return `${hours}:${formattedMins}:${formattedSeconds}`;
    }
  }

  function addZero(num) {
    if (num == 0) {
      num = "00";
    } else if (num < 10) {
      num = "0" + num;
    }
    return num;
  }

  useEffect(() => {
    let timer = setInterval(() => setCurrentTime(currentTime + 1), 1000);
    return () => clearInterval(timer);
  });

  return <div className="timer">{formatTime(currentTime)}</div>;
}

export default Timer;
