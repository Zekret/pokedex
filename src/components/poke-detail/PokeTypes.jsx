import { background } from "../../utils/BackgroundByType";

export const PokeTypes = ({ pokemon }) => {
  return (
    <div className='mt-[75px] pt-4 flex items-center gap-4'>
    {pokemon?.types.map(({ type: { name } }) => (
      <div
        key={name}
        style={{ background: background[name] }}
        className='py-1 px-4 rounded-2xl text-white font-bold capitalize'
      >
        {name}
      </div>
    ))}
  </div>
  )
}
