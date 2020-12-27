import React from "react";

function DropBoxCard(props) {
  let { cardImage, cardDescription, checkPosition } = props;

  return (
    <div
      className="drop-box-card"
      id={cardDescription + "-card"}
      onClick={() => checkPosition(cardDescription)}
    >
      <div className="card-image-wrapper">
        <img className={cardDescription} src={cardImage} />
      </div>
      <div className="card-description">{cardDescription.toUpperCase()}</div>
    </div>
  );
}

export default DropBoxCard;
