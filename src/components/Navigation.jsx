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
    <>
      <header className="flex items-center justify-between py-10 px-10 container">
        <Link to="/" className="flex flex-row items-center gap-4">
          <img className="w-16" src={pokedexIcon} />
          <span className="text-3xl font-semibold tracking-widest">
            Pokedex
          </span>
        </Link>
        <form onSubmit={onSearchSubmit} className="flex items-center gap-4">
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
      </header>
      <Outlet />
    </>
  );
};
