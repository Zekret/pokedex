import React from "react";
import { Link } from "react-router-dom";

export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} className="cursor-pointer no-underline">
      <div className="bg-[#f2f2f2] flex items-center justify-center rounded-md h-[250px]">
        <img
          className="w-full h-full"
          src={pokemon.sprites.other.dream_world.front_default}
          alt={`Pokemon ${pokemon.name}`}
        />
      </div>
      <div className="p-4">
        <span className="block text-[#888] mb-4">N° {pokemon.id}</span>
        <h3 className="text-[#333] font-bold text-lg">{pokemon.name}</h3>
        <div className="card-types">
          {pokemon.types.map(type => (
            <span
              key={type.type.name}
              className={type.type.name}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};
