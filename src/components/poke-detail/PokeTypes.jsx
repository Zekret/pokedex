import { background } from "../../utils/BackgroundByType";

export const PokeTypes = ({ pokemon }) => {
  return (
    <div className='pt-4 flex items-center gap-4'>
    {pokemon?.types.map(({ type: { name } }) => (
      <div
        key={name}
        style={{ background: background[name] }}
        className='py-1 px-10 rounded-xl text-white font-bold capitalize text-lg'
      >
        {name}
      </div>
    ))}
  </div>
  )
}
