import React, { useContext } from "react";
import { PokemonList } from "../components/PokemonList";
import { FilterBar } from "../components/FilterBar"
import { FilterIcon } from "../icons/Icons";
import { ButtonMore } from "../components/ButtonMore";
import { PokemonContext } from "../context/PokemonContext";

export const HomePage = () => {
  const { active, setActive, allPokemons } = useContext(PokemonContext)
  return (
    <>
      <div className="px-12 flex container max-w-[1200px]" style={{ margin: '0 auto' }}>
        <FilterIcon handleFilter={() => setActive(!active)} />
      </div>
      <PokemonList />
      <FilterBar />
      <ButtonMore pokemons={allPokemons} />
    </>
  );
};
