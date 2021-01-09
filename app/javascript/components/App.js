import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Map from "./Map";
import PopUp from "./PopUp";
import CongratsPopUp from "./CongratsPopUp";
import Instructions from "./Instructions"

function App() {
  let [numFound, setNumFound] = useState(3);
  let [openInstructions, setOpenInstructions] = useState(true);

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

  function closeInstructions() {
    setOpenInstructions(false);
  }

  return (
    <React.Fragment>
      <div className="container" onClick={closeInstructions}>
        <Navbar numFound={numFound} currentTime={currentTime} />
        {numFound == 0 && <CongratsPopUp currentTime={currentTime} />}
        {openInstructions && <Instructions closeInstructions={closeInstructions}/>}
        <PopUp />
        <Map reduceCounter={reduceCounter} numFound={numFound} />
      </div>
    </React.Fragment>
  );
}

export default App;
