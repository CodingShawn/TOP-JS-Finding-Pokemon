import React from "react";
import Timer from "./Timer";

let Navbar = (props) => {
  return (
    <div className="navbar">
      <h1>Find the Missing Pokemon!</h1>
      <div className="navbar-section">
        <div className="counter">{props.numFound}</div>
        <Timer currentTime={props.currentTime} />
      </div>
    </div>
  );
};

export default Navbar;
