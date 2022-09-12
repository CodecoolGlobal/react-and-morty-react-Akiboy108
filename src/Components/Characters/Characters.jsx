import React from "react";
import { useState, useEffect } from "react";
import { useCharacters } from "../../api/useData";

export default function Characters({startpage = 1}) {
  const [page, setPage] = useState(startpage);
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
          <button
            data-page={characters.info.prev[characters.info.prev.length - 1]}
            onClick={(e) => newPage(e.target.dataset.page)}
          >
            Prev
          </button>
        )}

        <span> {page} </span>

        {characters.info.next === null ? (
          <button disabled>Next</button>
        ) : (
          <button
            data-page={characters.info.next[characters.info.next.length - 1]}
            onClick={(e) => newPage(e.target.dataset.page)}
          >
            Next
          </button>
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
              <div key={index}>
                {character.name} {character.status === "Dead" ? "†" : ""}
              </div>
            ))}
      </div>
    </div>
  );
}
