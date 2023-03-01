import { PokemonInfo } from "../components/PokemonInfo";
import { Loader } from "../components/Loader"
import { fetchPokemonById } from "../hooks/fetchPokemonById";

export const PokemonPage = () => {
  const { pokemon, loading } = fetchPokemonById()
  return (
    <main>
      <main className="flex flex-col mt-[100px] mb-[50px]">
        {loading ? <Loader /> : <PokemonInfo pokemon={pokemon} />}
      </main>
    </main>
  );
};
