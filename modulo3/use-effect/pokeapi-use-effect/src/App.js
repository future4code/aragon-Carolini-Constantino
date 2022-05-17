import axios from "axios";
import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";

export default function App() {

  const [pokeList, setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {

    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then((res) => {
        console.log(res.data)
        setPokeList(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });

  },[])


  const changePokeSelect = (event) => {
  setPokeName(event.target.value)
  };

  const pokeOptions = pokeList.map((pokemon) => {
    return <option key={pokemon.name} value={pokemon.name}>{pokemon.name}
      </option>
  })

  // Passo 4a
  const pokemon = true && <PokeCard pokeName={pokeName}/>;

  return (
    <>
      <header>
        <h1>Exibir Pokémon</h1>
      </header>
      <hr />
      <nav>
        <label htmlFor={"select-pokemon"}>Selecione um pokemon: </label> 
        <select id={"select-pokemon"} onChange={changePokeSelect}>
          <option value={""}>Nenhum</option>
          {pokeOptions}
        </select>
      </nav>
      <main>
        {pokemon}
      </main>
    </>
  );
  }