import { Header } from "../components/poke-detail/Header";
import { PokeTypes } from "../components/poke-detail/PokeTypes";
import { Title } from "../components/poke-detail/Title";
import { Stats } from "../components/poke-detail/Stats";
import { BaseStats } from "../components/poke-detail/BaseStats";
import { background } from "../utils/BackgroundByType";
import { PokeballIconBig } from "../icons/Icons";
import { Skills } from "./poke-detail/Skills";

export const PokemonInfo = ({ pokemon }) => {
  console.log(pokemon)
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];
  return (
    <div className="w-full flex justify-center flex-col items-center">
      <Header pokemon={pokemon} />
      <div className="w-full px-8 flex flex-row justify-center gap-12">
        <div
          className="flex justify-center w-[500px] h-[500px] relative flex-col rounded-xl border-[1px] border-solid"
          style={{ borderColor: backgroundSelected }}
        >
          <div
            className="h-[300px] rounded-t-lg"
            style={{ background: backgroundSelected }}
          />
          <PokeballIconBig className="h-fit absolute top-0 right-0 mr-4 mt-4 w-[230px]" />
          <img
            className="h-[200px] bottom-40 right-0 left-0 absolute"
            style={{ margin: "0 auto" }}
            src={
              pokemon?.sprites?.other?.dream_world?.front_default ||
              pokemon?.sprites?.front_default
            }
            alt={pokemon?.name}
          />
          <div className="h-[200px] rounded-b-lg flex justify-center flex-col items-center">
            <h1 className="text-black text-xl font-bold">Tipo</h1>
            <PokeTypes pokemon={pokemon} />
          </div>
        </div>
        <div
          className="flex justify-center w-[500px] h-[500px] relative flex-col rounded-xl border-[1px] border-solid"
          style={{ borderColor: backgroundSelected }}
        >
          <div className="flex flex-col justify-center">
            <Title
              content="Información"
              backgroundSelected={backgroundSelected}
            />
            <Stats pokemon={pokemon} />
            <Title
              content="Habilidad"
              backgroundSelected={backgroundSelected}
            />
            <Skills />
            <Title
              content="Puntos base"
              backgroundSelected={backgroundSelected}
            />
            <BaseStats
              pokemon={pokemon}
              backgroundSelected={backgroundSelected}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
