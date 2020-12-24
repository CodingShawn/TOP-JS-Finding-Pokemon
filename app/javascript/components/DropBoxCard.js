import React from 'react';

function DropBoxCard(props) {
  let {cardImage, cardDescription } = props
  return (
    <div className="drop-box-card">
      <div className="card-image-wrapper">
        <img className={cardDescription} src={cardImage}/>
      </div>
      <div className="card-description">
        {cardDescription.toUpperCase()} 
      </div>
    </div>
  )
}

export default DropBoxCard