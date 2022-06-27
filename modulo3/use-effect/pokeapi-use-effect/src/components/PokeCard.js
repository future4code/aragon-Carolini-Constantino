import axios from "axios";
import { useEffect, useState } from "react";

export default function PokeCard(props) {
  // Passo 4b
 const [pokemon, setPokemon] = useState("")
  // Passo 4c
  // componentDidMount() {
  //   this.pegaPokemon(this.props.pokeName);
  // };

  // Passo 4c
  // componentDidUpdate(prevProps) {
  //   if (prevProps.pokeName !== this.props.pokeName) {
  //     this.pegaPokemon(this.props.pokeName);
  //   };
  // };

  // Passo 4c
  // pegaPokemon = (pokeName) => {
  //   axios
  //     .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
  //     .then((res) => {
  //       this.setState({ pokemon: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };


useEffect (() => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${props.pokeName}`)
    .then((res) => {
      console.log(res)
      setPokemon( res.data );
    })
    .catch((err) => {
      alert("Erro ao buscar seu pokemon")
    });
}, [props.pokeName])

  return (
    <figure>
   
      <strong>{pokemon.name && pokemon.name.toUpperCase()}</strong>
      
      {pokemon.weight && <p>Peso: {pokemon.weight} Kilos</p>}
    
      {pokemon.types && <p>Tipo: {pokemon.types[0].type.name }</p>}
     
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}

    </figure>
  )
}
