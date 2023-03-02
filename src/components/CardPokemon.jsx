import React from "react";
import { Link } from "react-router-dom";

export const CardPokemon = ({ pokemon }) => {
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="w-full max-w-[350px] rounded-lg flex flex-col cursor-pointer no-underline text-inherit"
    >
      <div className="flex flex-col border-transparent border-solid border-[1px]">
        <span className="text-end p-[4px 8px 0px]">#{pokemon?.id}</span>
        <img
          className="w-[90%] h-[140px] object-contain self-center py-2 px-4"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className="text-base leading-4 p-4 rounded-b-lg text-center capitalize">
        {pokemon?.name}
      </div>
    </Link>
  );
};
