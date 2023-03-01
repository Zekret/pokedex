import { useEffect } from "react";

export const getAllPokemons = ({ baseURL, setLoading }) => {
    const [globalPokemons, setGlobalPokemons] = useState([]);
    const getGlobalPokemons = async () => {
    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setLoading(false);
  };

   useEffect(() => {
    getGlobalPokemons();
  }, []);

  return { globalPokemons }
}