import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CardPokemon } from "../components/CardPokemon";
import { PokemonContext } from "../context/PokemonContext";

export const SearchPage = () => {
  //Se utiliza para obtener el estado del navigate en el buscador.
  const location = useLocation();

  const { globalPokemons } = useContext(PokemonContext);
  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );
  return (
    <div style={{ margin: '0 auto' }} className="max-w-[1200px] py-4 px-8">
      <p className="mb-8 text-2xl px-10">
        Se encontraron <span className="font-bold">{filteredPokemons.length}</span> resultados:
      </p>
      <div className="grid grid-cols-4 gap-5 px-10 mt-8">
        {filteredPokemons.map(pokemon => <CardPokemon pokemon={pokemon} key={pokemon.id} />)}
      </div>
    </div>
  );
};
