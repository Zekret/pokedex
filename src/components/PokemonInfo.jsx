import React from 'react'

export const PokemonInfo = ({ pokemon }) => {
  return (
    <>
            <div className="mt-5 flex items-center relative">
              <span className="absolute top-[-130px] left-0 text-[200px] font-bold text-[#83c5be]">
                #{pokemon.id}
              </span>
              <div className="order-2 flex-1 pt-6 pr-6 pb-6 pl-0 h-[400px]">
                <img
                  className="h-full w-full"
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={`Pokemon ${pokemon?.name}`}
                />
              </div>
              <div className="flex flex-col order-1 flex-1">
                <h1 className="text-right text-6xl">
                  {pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}
                </h1>
                <div className="flex gap-3 mt-3">
                  {pokemon.types.map((type) => (
                    <span
                      key={type.type.name}
                      className={`${type.type.name} text-xs py-1 px-5 text-white font-bold rounded-md`}
                    >
                      {type.type.name}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between mt-5">
                  <div className="flex flex-col gap-3">
                    <p className="font-bold text-xl">Altura</p>
                    <span>{pokemon.height}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="font-bold text-xl">Peso</p>
                    <span>{pokemon.weight}KG</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-12 items-center">
              <h1>Estadísticas</h1>
              <div className="flex flex-col gap-5 flex-1">
                <div className="flex items-center gap-5">
                  <span className="flex-[20%] font-medium text-lg">Hp</span>
                  <div className="w-full h-[30px] rounded-xs bg-[#006d77]"></div>
                  <span className="counter-sta">
                    {pokemon.stats[0].base_stat}
                  </span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="flex-[20%] font-medium text-lg">Attack</span>
                  <div className="w-full h-[30px] rounded-xs bg-[#006d77]"></div>
                  <span>{pokemon.stats[1].base_stat}</span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="flex-[20%] font-medium text-lg">
                    Defense
                  </span>
                  <div className="w-full h-[30px] rounded-xs bg-[#006d77]"></div>
                  <span>{pokemon.stats[2].base_stat}</span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="flex-[20%] font-medium text-lg">
                    Special Attack
                  </span>
                  <div className="w-full h-[30px] rounded-xs bg-[#006d77]"></div>
                  <span>{pokemon.stats[3].base_stat}</span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="flex-[20%] font-medium text-lg">
                    Special Defense
                  </span>
                  <div className="w-full h-[30px] rounded-xs bg-[#006d77]"></div>
                  <span>{pokemon.stats[4].base_stat}</span>
                </div>
                <div className="flex items-center gap-5">
                  <span className="flex-[20%] font-medium text-lg">Speed</span>
                  <div className="w-full h-[30px] rounded-xs bg-[#006d77]"></div>
                  <span>{pokemon.stats[5].base_stat}</span>
                </div>
              </div>
            </div>
          </>
  )
}
