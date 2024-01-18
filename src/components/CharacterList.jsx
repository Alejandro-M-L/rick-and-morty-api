import { useEffect, useState } from "react";
import Character from "./Character";

function NavPage(props){
  return(
    <header className="d-flex justify-content-between align-items-center">
      <p>Pagina: {props.page}</p>
      <button className="btn btn-primary btn-sm" 
      onClick={() => props.setPage(props.page + 1) }>Pagina: {props.page + 1}</button>
    </header>
  )
}

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1)
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      // console.log(data.results)
      setLoading(false);
      setCharacters(data.results);
    }
    fetchData();
  }, [page]);

  return (
    <div className="container">
    <NavPage page={page} setPage={setPage} />
      {loading ? (
        <h1>Cargando...</h1>
      ) : (
        <div className="row">
          {characters.map((character) => {
            {
              /* hiba dentro del return, pero marca error
            <div key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
          </div>  */
            }
            return (
              <div key={character.id} className="col-md-4">
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
