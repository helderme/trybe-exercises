import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "../data";

class Pokedex extends React.Component {
  render() {
    return <div>
      <h1>Pokedex</h1>
      <div className='pokedex'>
        {pokemons.map((pokemon) => <Pokemon name={pokemon.name} type={pokemon.type} weigth={pokemon.averageWeight.value} unit={pokemon.averageWeight.measurementUnit} image={pokemon.image}/>)}
      </div>

    </div>
  }
}

export default Pokedex