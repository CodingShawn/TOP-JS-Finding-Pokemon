import React from "react"
import Navbar from "./Navbar"
import Map from "./Map"
import PopUp from "./PopUp";

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="container">
          <Navbar/>
          <PopUp/>
          <Map/>
        </div>
      </React.Fragment>
    );
  }
}

export default App
