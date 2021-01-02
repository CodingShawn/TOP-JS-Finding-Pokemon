import React from "react";
import { formatTime } from "../util";

function Timer(props) {
  return <div className="timer">{formatTime(props.currentTime)}</div>;
}

export default Timer;
