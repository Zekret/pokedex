import { getPokes } from "../hooks/getPokes";

export const Pokedex = () => {
    const { pokemon } = getPokes()
    console.log(pokemon)
    return (
        <div className="flex flex-col justify-center">
         <div>
          <h1>Hola</h1>
          <h1>Hola</h1>
          <h1>Hola</h1>
          <h1>Hola</h1>
         </div>
            
        </div>
    )
}