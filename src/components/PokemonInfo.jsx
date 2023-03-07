import { Header } from "../components/poke-detail/Header";
import { PokeTypes } from "../components/poke-detail/PokeTypes";
import { Title } from "../components/poke-detail/Title";
import { Stats } from "../components/poke-detail/Stats";
import { BaseStats } from "../components/poke-detail/BaseStats";
import { background } from "../utils/BackgroundByType";

export const PokemonInfo = ({ pokemon }) => {
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];
  return (
    <div style={{ background: backgroundSelected }} className="min-h-[100vh] relative flex flex-col justify-between items-center">
      <Header pokemon={pokemon} />
      <div className="max-w-[650px] w-[95%] bg-white h-[65vh] bottom-0 relative mb-4 rounded-lg flex flex-col items-center">
        <img
          style={{ margin: '0 auto', marginTop: '-200px' }}
          className="absolute w-[275px] h-[275px] object-contain"
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
        />
        <PokeTypes pokemon={pokemon} />
        <Title content="Información" backgroundSelected={backgroundSelected} />
        <Stats pokemon={pokemon} />
        <Title content="Puntos base" backgroundSelected={backgroundSelected} />
        <BaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} />
      </div>
    </div>
  );
};
