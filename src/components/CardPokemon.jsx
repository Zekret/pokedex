import React from "react";
import { Link } from "react-router-dom";
import { background } from "../utils/BackgroundByType";

export const CardPokemon = ({ pokemon }) => {
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];
  return (
    <Link
      to={`/pokemon/${pokemon.id}`}
      className="w-full max-w-[350px] rounded-lg flex flex-col cursor-pointer no-underline text-inherit"
    >
      <div style={{ borderColor: backgroundSelected }} className="flex flex-col border-transparent border-solid border-[1px] rounded-t-lg">
        <span style={{ color: backgroundSelected, padding: '4px 8px 0px' }} className="text-end">#{pokemon?.id}</span>
        <img
          className="w-[90%] h-[140px] object-contain self-center py-2 px-4"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div style={{ background: backgroundSelected }} className="text-base leading-4 p-4 rounded-b-lg text-center capitalize text-white font-medium">
        {pokemon?.name}
      </div>
    </Link>
  );
};
