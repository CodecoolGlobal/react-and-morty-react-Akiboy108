import React from "react";
import "./Episode.css"

export default function Episode({ episode, index }) {
  const ep = episode.split("/");
  return (
    <span className="characterEpisode" key={index}>
      {`${ep[ep.length - 1]}`}
    </span>
  );
}
