//import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList";

function App() {
  // const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("https://rickandmortyapi.com/api/character");
  //     const data = await response.json();
  //     // console.log(data.results)
  //     setCharacters(data.results);
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">Rick and Morty</h1>
      <CharacterList/>
      {/* {characters.map((character) => {
        return (
          <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>
        );
      })} */}
    </div>
  );
}

export default App;
// https://rickandmortyapi.com/
// https://rickandmortyapi.com/documentation/

// Estilos: lo agrego en main.js
// npm i bootstrap@5.3.2