import React from "react";
import { useState, useEffect } from "react";
import { useCharacters } from "../../api/useData";
import "./Characters.css";
import CharacterDisplay from "../CharacterDisplay/CharacterDisplay";

export default function Characters() {
  const [page, setPage] = useState(1);
  const characters = useCharacters(page);
  const [character, setCharacter] = useState("");

  const newPage = (newPage = 1) => {
    //console.log(page);
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

  function Pages() {
    return (
      <div id="characterPagination" className="characterRow characterHeader">
        <div className="characterLeft">
          {characters.info.pages} pages ({characters.info.count} items)
        </div>
        <div className="characterRight">
          {characters.info.prev === null ? (
            <button className="button" disabled>Prev</button>
          ) : (
            <button className="button pointer" onClick={() => newPage(page - 1)}>
              Prev
            </button>
          )}

          <span className="characterPageCounter">{page}</span>

          {characters.info.next === null ? (
            <button className="button" disabled>Next</button>
          ) : (
            <button className="button pointer" onClick={() => newPage(page + 1)}>
              Next
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div id="characters">
      <h2>Characters</h2>
      {characters === "Loading..." ? 0 : Pages()}
      <div id="characterList">
        {characters === "Loading..."
          ? characters
          : characters.results.map((char, index) => (
              <>
                <div className="characterRow">
                  <div
                    className="characterLeft pointer"
                    key={index}
                    onClick={(e) => selectCharacter(e.target.innerText)}
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
              </>
            ))}
      </div>
    </div>
  );
}
