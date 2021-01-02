import React from 'react'
import Timer from './Timer'

let Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="counter">{props.numFound}</div>
      <Timer/>
    </div>
  )
}

export default Navbar