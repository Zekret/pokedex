import { useEffect, useState } from "react";

const POKES_ENDPOINT = `https://pokeapi.co/api/v2/pokemon?limit=12`;

export const getPokes = () => {
  const [pokemon, setPokemon] = useState();
  const getPokemon = async () => {
    const data = await fetch(POKES_ENDPOINT).then((res) => res.json());
    const { results } = data;
    setPokemon(results);
  };

  useEffect(() => {
    getPokemon();
  }, []);

  return { pokemon }
};
