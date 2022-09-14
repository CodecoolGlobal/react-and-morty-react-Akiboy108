import React from "react";
import { useState, useRef, useCallback, Fragment } from "react";
import { useCharacters } from "../../api/useData";
import "./Characters.css";
import Pagination from "../Pagination/Pagination";
import CharacterDisplay from "../CharacterDisplay/CharacterDisplay";
import ToTopButton from "../ToTopButton/ToTopButton";
import useScrollList from "../../Hooks/useScrollList";


export default function Characters() {
  const [page, setPage] = useState(1);
  const charactersData = useCharacters(page);

  const [characterSelect, setCharacterSelect] = useState("");

  const [pageScroll, setPageScroll] = useState(page);
  const { items, setItems, hasMore, loading, error } = useScrollList(
    pageScroll,
    "character"
  );

  const observer = useRef();
  const lastCharElementRef = useCallback(
    (node) => {
      // console.log(node);
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          // console.log("Last item element visible");
          setPageScroll((prevPageScroll) => prevPageScroll + 1);
          // console.log(pageScroll);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const newPage = (newPage = 1) => {
    setPage(newPage);
    setItems([]);
    setPageScroll(newPage);
  };

  const selectCharacter = (newCharacter) => {
    if (newCharacter === characterSelect) {
      setCharacterSelect("");
    } else {
      setCharacterSelect(newCharacter);
    }
  };

  return (
    <div id="characters">
      <h2>Characters</h2>
      {charactersData === "Loading..." ? (
        0
      ) : (
        <Pagination data={charactersData} page={page} newPage={newPage} />
      )}
      <div id="characterList">
        {!items
          ? "Loading..."
          : items.map((char, index) => {
              return (
                <Fragment key={char.name + index}>
                  <div
                    className="characterRow"
                    ref={items.length === index + 1 ? lastCharElementRef : null}
                  >
                    <div
                      className="characterLeft pointer"
                      onClick={(e) => selectCharacter(e.target.innerText)}
                    >
                      {char.name}
                    </div>
                    <div className="characterRight">{char.species}</div>
                  </div>
                  {characterSelect === char.name ? (
                    <div className="characterRow">
                      <CharacterDisplay character={char} />
                    </div>
                  ) : (
                    ""
                  )}
                  <div>{loading && "Loading..."}</div>
                  <div>{error && "Error"}</div>
                </Fragment>
              );
            })}
            <ToTopButton />
      </div>
    </div>
  );
}
