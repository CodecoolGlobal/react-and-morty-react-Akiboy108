import React from "react";
import { useState, useEffect } from "react";
import { useCharacters } from "../../api/useData";

export default function Characters() {
  const [page, setPage] = useState(1);
  const characters = useCharacters(page);
  console.log(characters);

  const newPage = (newPage = 1) => {
    setPage(newPage);
    console.log(page);
  };

  useEffect(() => {}, []);

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
          : characters.results.map((character, index) => (
              <div key={index}>{character.name}</div>
            ))}
      </div>
    </div>
  );
}
