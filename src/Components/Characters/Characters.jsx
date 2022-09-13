import React from "react";
import { useState } from "react";
import { useCharacters } from "../../api/useData";
import "./Characters.css";
import CharacterDisplay from "../CharacterDisplay/CharacterDisplay";
import Pagination from "../Pagination/Pagination";
import { Fragment } from "react";
import ToTopButton from "../ToTopButton/ToTopButton";

export default function Characters() {
  const [page, setPage] = useState(1);
  const characters = useCharacters(page);
  const [character, setCharacter] = useState("");

  const newPage = (newPage = 1) => {
    setPage(newPage);
  };

  const selectCharacter = (newCharacter) => {
    console.log(newCharacter);
    console.log(character);
    if (newCharacter === character) {
      setCharacter("");
    } else {
      setCharacter(newCharacter);
    }
  };

  return (
    <div id="characters">
      <h2>Characters</h2>
      {characters === "Loading..." ? (
        0
      ) : (
        <Pagination data={characters} page={page} newPage={newPage} />
      )}
      <div id="characterList">
        {characters === "Loading..."
          ? characters
          : characters.results.map((char, index) => (
            <Fragment key={index}>
              <div className="characterRow">
                <div
                  className="characterLeft pointer"
                  key={index}
                  onClick={(e) => selectCharacter(char.name)} //
                >
                  {char.name}
                </div>
                <div className="characterRight">{char.species}</div>
              </div>
              {character === char.name ? (
                <div id="characterDisplay" className="characterRow">
                  <CharacterDisplay character={char} />
                </div>
              ) : (
                ""
              )}
            </Fragment>
          ))}
        <ToTopButton />
      </div>
    </div>
  );
}
