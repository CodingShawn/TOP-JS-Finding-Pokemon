import React from "react";
import Timer from "./Timer";

let Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="counter">{props.numFound}</div>
      <Timer currentTime={props.currentTime} />
    </div>
  );
};

export default Navbar;
