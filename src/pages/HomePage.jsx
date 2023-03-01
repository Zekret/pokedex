import React, { useContext } from "react";
import { PokemonList } from "../components/PokemonList";
import { FilterBar } from "../components/FilterBar"
import { FilterIcon } from "../icons/Icons";
import { ButtonMore } from "../components/ButtonMore";
import { PokemonContext } from "../context/PokemonContext";

export const HomePage = () => {
  const { active, setActive } = useContext(PokemonContext)
  return (
    <>
      <div className="px-12 m-auto flex">
        <FilterIcon handleFilter={() => setActive(!active)} />
      </div>
      <PokemonList />
      <FilterBar />
      <ButtonMore />
    </>
  );
};
