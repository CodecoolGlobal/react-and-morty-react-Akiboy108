import React from "react";
import { useState, useEffect } from "react";
import { useCharacters } from "../../api/useData";
import Characterdisplay from "../CharacterDisplay/Characterdisplay";

export default function Characters() {
  const [page, setPage] = useState(1);
  const characters = useCharacters(page);
  const [character, setCharacter] = useState("");

  const newPage = (newPage = 1) => {
    console.log(page);
    setPage(newPage);
  };

  const selectCharacter = (newCharacter) => {
    console.log(newCharacter);
    setCharacter(newCharacter);
  };

  function Pages() {
    return (
      <>
        <span>
          {characters.info.pages} pages ({characters.info.count} items) |{" "}
        </span>

        {characters.info.prev === null ? (
          <button disabled>Prev</button>
        ) : (
          <button onClick={() => newPage(page - 1)}>Prev</button>
        )}

        <span> {page} </span>

        {characters.info.next === null ? (
          <button disabled>Next</button>
        ) : (
          <button onClick={() => newPage(page + 1)}>Next</button>
        )}
      </>
    );
  }

  return (
    <div id="characters">
      <h2>Characters</h2>
      <div id="characterPagination">
        {characters === "Loading..." ? 0 : Pages()}
      </div>
      <div id="characterList">
        {characters === "Loading..."
          ? characters
          : characters.results.map((char, index) => (
              <div>
                <div
                  key={index}
                  onClick={(e) => selectCharacter(e.target.innerText)}
                >
                  {char.name}
                </div>
                {character === char.name ? (
                  <div>
                    <Characterdisplay character={char} />
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
      </div>
    </div>
  );
}
