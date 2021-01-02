import React, { useState } from "react"
import Navbar from "./Navbar"
import Map from "./Map"
import PopUp from "./PopUp";

function App() {
  let [numFound, setNumFound] = useState(3);

  function reduceCounter() {
    setNumFound(numFound - 1);
  }

    return (
      <React.Fragment>
        <div className="container">
          <Navbar numFound={numFound}/>
          <PopUp/>
          <Map reduceCounter={reduceCounter}/>
        </div>
      </React.Fragment>
    );
}

export default App
