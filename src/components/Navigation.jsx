import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { SearchIcon } from "../icons/Icons";
import pokedexIcon from "../assets/icon.png";
import { PokemonContext } from "../context/PokemonContext";

export const Navigation = () => {
  const { valueSearch, onInputChange, onResetForm } =
    useContext(PokemonContext);
  const navigate = useNavigate();
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });

    onResetForm();
  };
  return (
    <div className="max-w-[100vw] min-h-[100vh]">
      <header
        style={{ margin: "0 auto" }}
        className="p-4 w-full flex items-center justify-center"
      >
        <Link
          to="/"
          className="w-fit cursor-pointer flex items-center justify-center gap-4"
        >
          <img className="w-16" src={pokedexIcon} />
          <span className="text-3xl font-semibold tracking-widest">
            Pokedex
          </span>
        </Link>
      </header>
      <form
        onSubmit={onSearchSubmit}
        className="flex items-center gap-4 justify-center"
      >
        <div className="flex items-center gap-3 border-[1px] border-solid border-slate-300 px-5 py-4 rounded-xl">
          <SearchIcon />
          <input
            className="w-[300px] border-none outline-none text-base"
            type="search"
            name="valueSearch"
            id=""
            value={valueSearch}
            onChange={onInputChange}
            placeholder="Buscar nombre de pokemon"
          />
        </div>

        <button className="border-none outline-none rounded-xl py-4 px-8 cursor-pointer font-medium bg-blue-600 text-white">
          Buscar
        </button>
      </form>
      <Outlet />
    </div>
  );
};
