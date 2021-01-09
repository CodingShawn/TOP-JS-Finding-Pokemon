import React from "react";
import { useState } from "react";
import pokeImg from "../../assets/images/pokemon.png";
import TargetBox from "./TargetBox";
import DropBox from "./DropBox";
import { capitalise } from "../util";

let Map = (props) => {
  let [ifTargeted, setIfTargeted] = useState(false);
  let [targetBoxCoords, setTargetBoxCoords] = useState(null);
  let [pokemonFoundStatus, setPokemonFoundStatus] = useState({
    magikarp: false,
    porygon: false,
    togepi: false,
  });
  let [dropBoxXOffset, setDropBoxXOffset] = useState(null);
  let [dropBoxYOffset, setDropBoxYOffset] = useState(null);

  let popUp = document.querySelector(".pop-up");

  function placeTargetBox(event) {
    const { pageX, pageY } = event;
    setOffset(pageX, pageY, event);
    setIfTargeted(!ifTargeted);
    setTargetBoxCoords([pageX, pageY]);
  }

  function setOffset(pageX, pageY, event) {
    var horizontalOffset;
    var verticalOffset = -25;
    if (pageX + 300 > event.target.width) {
      horizontalOffset = -250;
    } else {
      horizontalOffset = 40;
    }
    if (pageY + 300 > event.target.height) {
      verticalOffset = -185;
    }
    setDropBoxXOffset(horizontalOffset);
    setDropBoxYOffset(verticalOffset);
  }

  function checkPosition(pokemon) {
    if (pokemonFoundStatus[pokemon]) {
      ifPokemonFoundAlready(pokemon);
    } else {
      let mapImage = document.querySelector(".map");
      let mapWidth = mapImage.width;
      let mapHeight = mapImage.height;
      let xPercent = (targetBoxCoords[0] / mapWidth) * 100;
      //To minus off height of navbar(70)
      let yPercent = ((targetBoxCoords[1] - 70) / mapHeight) * 100;
      let urlRequest = `/maps/check${pokemon}?x=${xPercent}&y=${yPercent}`;
      sendCheckRequest(urlRequest, pokemon);
    }
  }

  async function sendCheckRequest(urlRequest, pokemon) {
    let response = await fetch(urlRequest);
    let isFoundStatus = await response.json();
    if (isFoundStatus.checkStatus) {
      addFoundPokemonChanges(pokemon);
    } else {
      let popUpText = "Opps! That doesn't seem like the right Pokemon";
      showPopUp(popUpText, false);
    }
  }

  function addFoundPokemonChanges(pokemon) {
    let myStyleSheet = document.styleSheets[0];
    myStyleSheet.addRule(
      "#" + pokemon + "-card",
      "background-color: rgba(170,170,170, 0.9)"
    );
    myStyleSheet.addRule("#" + pokemon + "-card", "color: rgb(160, 160, 160)");
    let popUpText = `You found ${capitalise(pokemon)}!`;
    showPopUp(popUpText, true);
    props.reduceCounter();
    setPokemonToFound(pokemon);
  }

  function showPopUp(popUpText, isFound) {
    popUp.textContent = popUpText;
    if (isFound) {
      popUp.classList.add("found");
      setTimeout(removeFoundClass, 2000);
    } else {
      popUp.classList.add("not-found");
      setTimeout(removeNotFoundClass, 2000);
    }
    setIfTargeted(false);
  }

  function removeFoundClass() {
    popUp.classList.remove("found");
  }

  function removeNotFoundClass() {
    popUp.classList.remove("not-found");
  }

  function ifPokemonFoundAlready(pokemon) {
    let popUpText = `You already found ${capitalise(pokemon)}!`;
    showPopUp(popUpText, false);
  }

  function setPokemonToFound(pokemon) {
    setPokemonFoundStatus({ ...pokemonFoundStatus, [pokemon]: true });
  }

  return (
    <div className="image-container">
      <img className="map" src={pokeImg} onClick={placeTargetBox} />
      {props.numFound !== 0 && ifTargeted && (
        <TargetBox targetBoxCoords={targetBoxCoords} offset="25" />
      )}
      {props.numFound !== 0 && ifTargeted && (
        <DropBox
          targetBoxCoords={targetBoxCoords}
          checkPosition={checkPosition}
          xOffset={dropBoxXOffset}
          yOffset={dropBoxYOffset}
        />
      )}
    </div>
  );
};

export default Map;
