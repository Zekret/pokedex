import { useEffect, useState } from "react";

export const Pokedex = () => {
    const [pokemon, setPokemon] = useState()
    console.log(pokemon)
    const getPokemon = async () => {
        const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=12`).then((res) => res.json());
        setPokemon(data.results)
    }


    useEffect(() => {
        getPokemon()
    }, [])
    return (
        <div>
            <h1>Hola</h1>
        </div>
    )
}