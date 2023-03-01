import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

export const fetchPokemonById = () => {
  const { getPokemonByID } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});

  const { id } = useParams();

  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return { pokemon, loading }
};
