import { useEffect, useState } from "react";

export const getPokemons = ({ baseURL, offset, setLoading }) => {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async (limit = 50) => {
    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  useEffect(() => {
    getAllPokemons();
  }, [offset]);

  return { allPokemons }

};
