import React from "react";
import { PokemonList } from "../components/PokemonList";
import { FilterBar } from "../components/FilterBar"
import { FilterIcon } from "../icons/Icons";
import { ButtonMore } from "../components/ButtonMore";

export const HomePage = () => {
  return (
    <>
      <div className="px-12 m-auto flex">
        <FilterIcon />
      </div>
      <PokemonList />
      <FilterBar />
      <ButtonMore />
    </>
  );
};
