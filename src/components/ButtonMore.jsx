import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const ButtonMore = ({ pokemons }) => {
  const { onClickLoadMore } = useContext(PokemonContext);
  return (
    <div className="flex justify-center mb-5 mt-5">
      {pokemons.length !== 0 && (
        <button
          onClick={onClickLoadMore}
          className="border-none py-4 px-10 font-sans text-white rounded-xl cursor-pointer bg-blue-600"
        >
          Cargar más
        </button>
      )}
    </div>
  );
};
