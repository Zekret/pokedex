import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

export const FilterBar = () => {

  const { active, handleCheckbox } = useContext(PokemonContext)
  return (
    <div className={`container-filters ${active ? "active" : ""}`}>
      <div className="flex flex-col gap-5">
        <span className="font-bold text-2xl">Tipo</span>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="grass"
            id="grass"
          />
          <label className="cursor-pointer"  htmlFor="grass">Planta</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fire"
            id="fire"
          />
          <label className="cursor-pointer" htmlFor="fire">Fuego</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="bug"
            id="bug"
          />
          <label className="cursor-pointer" htmlFor="bug">Bicho</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fairy"
            id="fairy"
          />
          <label className="cursor-pointer" htmlFor="fairy">Hada</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="dragon"
            id="dragon"
          />
          <label className="cursor-pointer" htmlFor="dragon">Dragón</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="shadow"
            id="shadow"
          />
          <label className="cursor-pointer" htmlFor="shadow">Fantasma</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="ground"
            id="ground"
          />
          <label className="cursor-pointer" htmlFor="ground">Tierra</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="normal"
            id="normal"
          />
          <label className="cursor-pointer" htmlFor="normal">Normal</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="psychic"
            id="psychic"
          />
          <label className="cursor-pointer" htmlFor="psychic">Psíquico</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="steel"
            id="steel"
          />
          <label className="cursor-pointer" htmlFor="steel">Acero</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="dark"
            id="dark"
          />
          <label className="cursor-pointer" htmlFor="dark">Siniestro</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="electric"
            id="electric"
          />
          <label className="cursor-pointer" htmlFor="electric">Eléctrico</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="fighting"
            id="fighting"
          />
          <label className="cursor-pointer" htmlFor="fighting">Lucha</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="flying"
            id="flying"
          />
          <label className="cursor-pointer" htmlFor="flying">Volador</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="ice"
            id="ice"
          />
          <label className="cursor-pointer" htmlFor="ice">Hielo</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="poison"
            id="poison"
          />
          <label className="cursor-pointer" htmlFor="poison">Veneno</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="rock"
            id="rock"
          />
          <label className="cursor-pointer" htmlFor="rock">Roca</label>
        </div>
        <div className="flex gap-5 ml-4">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            name="water"
            id="water"
          />
          <label className="cursor-pointer" htmlFor="water">Agua</label>
        </div>
      </div>
    </div>
  );
};
