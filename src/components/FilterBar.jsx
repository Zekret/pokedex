import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const FilterBar = () => {

  const { active } = useContext(PokemonContext)
  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div className="flex flex-col gap-5">
        <span className="font-bold text-2xl">Tipo</span>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="grass"
            id="grass"
          />
          <label className="cursor-pointer"  htmlFor="grass">Planta</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="fire"
            id="fire"
          />
          <label className="cursor-pointer" htmlFor="fire">Fuego</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="bug"
            id="bug"
          />
          <label className="cursor-pointer" htmlFor="bug">Bicho</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="fairy"
            id="fairy"
          />
          <label className="cursor-pointer" htmlFor="fairy">Hada</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="dragon"
            id="dragon"
          />
          <label className="cursor-pointer" htmlFor="dragon">Dragón</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="shadow"
            id="shadow"
          />
          <label className="cursor-pointer" htmlFor="shadow">Fantasma</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="ground"
            id="ground"
          />
          <label className="cursor-pointer" htmlFor="ground">Tierra</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="normal"
            id="normal"
          />
          <label className="cursor-pointer" htmlFor="normal">Normal</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="psychic"
            id="psychic"
          />
          <label className="cursor-pointer" htmlFor="psychic">Psíquico</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="steel"
            id="steel"
          />
          <label className="cursor-pointer" htmlFor="steel">Acero</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="dark"
            id="dark"
          />
          <label className="cursor-pointer" htmlFor="dark">Siniestro</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="electric"
            id="electric"
          />
          <label className="cursor-pointer" htmlFor="electric">Eléctrico</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="fighting"
            id="fighting"
          />
          <label className="cursor-pointer" htmlFor="fighting">Lucha</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="flying"
            id="flying"
          />
          <label className="cursor-pointer" htmlFor="flying">Volador</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="ice"
            id="ice"
          />
          <label className="cursor-pointer" htmlFor="ice">Hielo</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="poison"
            id="poison"
          />
          <label className="cursor-pointer" htmlFor="poison">Veneno</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="rock"
            id="rock"
          />
          <label className="cursor-pointer" htmlFor="rock">Roca</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            name="water"
            id="water"
          />
          <label className="cursor-pointer" htmlFor="water">Agua</label>
        </div>
      </div>
    </div>
  );
};
