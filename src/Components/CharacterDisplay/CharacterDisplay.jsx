import React from "react";
import "./CharacterDisplay.css";
import Episode from "./../Episode/Episode";

export default function CharacterDisplay({ character }) {
  return (
    <div className="Characterdisplay">
      <br />
      <div className="Characterdisplay__header">
        <h3 className="Characterdisplay__name">{character.name}</h3>
        <div className="Characterdisplay__img">
          <img src={character.image} alt={character.name} />
        </div>
      </div>
      <div className="Characterdisplay__details">
        <div className="Characterdisplay__gender">
          Gender: {character.gender}
        </div>
        <div className="Characterdisplay__species">
          Species: {character.species === "unknown"? "❓ unknown": character.species}
        </div>
        <div className="Characterdisplay__location">
          Location: {character.location.name === "unknown"? "❓ unknown": character.location.name}
        </div>
        <div className="Characterdisplay__origin">
          Origin: {character.origin.name === "unknown"? "❓ unknown": character.origin.name}
        </div>
        {character.type === "" ? (
          ""
        ) : (
          <div className="Characterdisplay__type">Type: {character.type}</div>
        )}

        <div className="Characterdisplay__status">
          Status: {character.status === "Dead" ? "💀 Dead" : character.status}
        </div>
      </div>
      <div className="Characterdisplay__episodes">
        <div>Appears in <strong>{character.episode.length}</strong> episodes: </div>
        <div>
          {character.episode.map((ep, index) => (
            <Episode episode={ep} index={index} key={index} />
          ))}
        </div>
      </div>
      <br />
    </div>
  );
}
