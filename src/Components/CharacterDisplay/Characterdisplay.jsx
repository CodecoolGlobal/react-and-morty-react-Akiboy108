import React from "react";
import Episode from "./../Episode/Episode";

export default function Characterdisplay({ character }) {
  console.log(character);
  return (
    <div className="Characterdisplay">
      <br />
      <div className="Characterdisplay__header">
        <span className="Characterdisplay__name">Name: {character.name}</span>
        <span className="Characterdisplay__gender">
          Gender: {character.gender}
        </span>
        <image className="Characterdisplay__img" src={character.image} alt="" />
      </div>
      <div className="Characterdisplay__details">
        <div className="Characterdisplay__species">
          Species: {character.species}
        </div>
        <div className="Characterdisplay__location">
          Location: {character.location.name}
        </div>
        <div className="Characterdisplay__origin">
          Origin: {character.origin.name}
        </div>
        <span className="Characterdisplay__type">Type: {character.type}</span> |{" "}
        <span className="Characterdisplay__status">
          Status: {character.status}
        </span>
      </div>
      <div className="Characterdisplay__episodes">
        Appears in episode:{" "}
        {character.episode.map((ep, index) => (
          <Episode episode={ep} index={index} />
        ))}
      </div>
      <br />
    </div>
  );
}
