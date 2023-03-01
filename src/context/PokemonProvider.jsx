import { useState } from "react";
import { getAllPokemons } from "../hooks/getAllPokemons";
import { getPokemons } from "../hooks/getPokemons";
import { useForm } from "../hooks/useForm";
import { PokemonContext } from "./PokemonContext";

const baseURL = "https://pokeapi.co/api/v2/";

export const PokemonProvider = ({ children }) => {
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState(false);
  const { allPokemons } = getPokemons({ baseURL, offset, setLoading });
  const { globalPokemons } = getAllPokemons({ baseURL, setLoading })
 
  const { valueSearch, onInputChange, onResetForm } = useForm({
		valueSearch: '',
	});

  const getPokemonByID = async (id) => {
    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  const onClickLoadMore = () => {
    setOffset(offset + 50)
  }

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonByID,
        onClickLoadMore,
        loading,
        active,
        setActive
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
