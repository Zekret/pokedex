import { getPokes } from "../hooks/getPokes";

export const Pokedex = () => {
    const { pokemon } = getPokes()
    console.log(pokemon)
    return (
        <div>
            <h1>Hola</h1>
        </div>
    )
}