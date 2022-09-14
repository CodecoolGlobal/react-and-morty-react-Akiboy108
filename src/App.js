import React from "react";
import "./App.css";
import { useCharacters, useLocations } from "./api/useData";
import Layout from "./Components/Layout/layout";

function App() {
  const characters = useCharacters(1);
  const locations = useLocations(1);

  console.log("Characters data: ");
  console.log(characters);
  console.log("Locations data: ");
  console.log(locations);

  return (
    <div className="App">
      <Layout
        characters={characters}
        locations={locations}
      ></Layout>
    </div>
  );
}

export default App;
