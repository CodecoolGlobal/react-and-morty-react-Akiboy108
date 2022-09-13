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
          Gender:{" "}
          {character.gender === "unknown"
            ? "❓ " + character.gender
            : character.gender === "Male"
            ? "♂️ " + character.gender
            : character.gender === "Female"
            ? "♀️ " + character.gender
            : character.gender}
        </div>
        <div className="Characterdisplay__species">
          Species:{" "}
          {character.species === "unknown"
            ? "❓ " + character.species
            : character.species === "Human"
            ? "🧍 " + character.species
            : "👽 " + character.species}
        </div>
        <div className="Characterdisplay__location">
          Location:{" "}
          {character.location.name === "unknown"
            ? "❓ " + character.location.name
            : character.location.name.includes("Earth")
            ? "🌎 " + character.location.name
            : character.location.name.name}
        </div>
        <div className="Characterdisplay__origin">
          Origin:{" "}
          {character.origin.name === "unknown"
            ? "❓ " + character.origin.name
            : character.origin.name.includes("Earth")
            ? "🌎 " + character.origin.name
            : character.origin.name}
        </div>
        {character.type === "" ? (
          ""
        ) : (
          <div className="Characterdisplay__type">Type: {character.type}</div>
        )}

        <div className="Characterdisplay__status">
          Status:{" "}
          {character.status === "Dead"
            ? "💀 " + character.status
            : character.status === "Alive"
            ? "❤️ " + character.status
            : character.status}
        </div>
      </div>
      <div className="Characterdisplay__episodes">
        <div>
          Appears in <strong>{character.episode.length}</strong> episodes:{" "}
        </div>
        <div className="characterEpisodes">
          {character.episode.map((ep, index) => (
            <Episode episode={ep} index={index} key={index} />
          ))}
        </div>
      </div>
      <br />
    </div>
  );
}
