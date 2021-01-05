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
    if (numFound !== 0) {
      var timer = setInterval(() => setCurrentTime(currentTime + 1), 1000);
    }
    return () => clearInterval(timer);
  });

  return (
    <React.Fragment>
      <div className="container">
        <Navbar numFound={numFound} currentTime={currentTime} />
        {numFound == 0 && <CongratsPopUp currentTime={currentTime} />}
        <PopUp />
        <Map reduceCounter={reduceCounter} numFound={numFound} />
      </div>
    </React.Fragment>
  );
}

export default App;
