import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Map from "./Map";
import PopUp from "./PopUp";
import CongratsPopUp from "./CongratsPopUp";

function App() {
  let [numFound, setNumFound] = useState(3);

  function reduceCounter() {
    setNumFound(numFound - 1);
  }

  let [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => setCurrentTime(currentTime + 1), 1000);
    return () => clearInterval(timer);
  });

  return (
    <React.Fragment>
      <div className="container">
        <Navbar numFound={numFound} currentTime={currentTime} />
        <PopUp />
        <Map reduceCounter={reduceCounter} />
        <CongratsPopUp currentTime={currentTime} />
      </div>
    </React.Fragment>
  );
}

export default App;
