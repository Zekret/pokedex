import React, { useContext } from "react";
import { PokemonContext } from '../context/PokemonContext';
import { CardPokemon } from './CardPokemon'


export const PokemonList = () => {
  const { allPokemons } = useContext(PokemonContext)
  return (
    <>
      <div className="grid grid-cols-4 gap-5 px-10 mt-8">
        {allPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
      </div>
    </>
  );
};
