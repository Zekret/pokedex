import { PokemonInfo } from "../components/PokemonInfo";
import { Loader } from "../components/Loader";
import { fetchPokemonById } from "../hooks/fetchPokemonById";

export const PokemonPage = () => {
  const { pokemon, loading } = fetchPokemonById();
  return (
    <main className="flex flex-col contents container">
      {loading ? <Loader /> : <PokemonInfo pokemon={pokemon} />}
    </main>
  );
};
