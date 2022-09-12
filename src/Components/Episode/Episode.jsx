import React from "react";

export default function Episode({ episode, index }) {
  const ep = episode.split("/");
  return (
    <span className="Episode" key={index}>
      {`${ep[ep.length - 1]}, `}
    </span>
  );
}
