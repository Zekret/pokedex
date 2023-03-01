import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";
import { Loader } from "./Loader";

export const PokemonList = () => {
  const { allPokemons, loading } = useContext(PokemonContext);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-4 gap-5 px-10 py-10 mt-8 container">
          {allPokemons.map((pokemon) => (
            <CardPokemon pokemon={pokemon} key={pokemon.id} />
          ))}
        </div>
      )}
    </>
  );
};
