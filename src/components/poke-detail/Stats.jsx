import { HeightIcon, WeightIcon } from "../../icons/Icons";

export const Stats = ({ pokemon }) => {
  return (
    <div style={{ margin: "0.5rem 0" }} className="w-full flex justify-evenly">
      <div className="flex flex-col items-center gap-2">
        <WeightIcon className='w-[30px] h-[30px] object-contain' />
        <span>{pokemon?.weight}</span>
        <p className="text-gray-500">Peso</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <HeightIcon className='w-[30px] h-[30px] object-contain' />
        <span>{pokemon?.height} </span>
        <p className="text-gray-500">Altura</p>
      </div>
    </div>
  );
};
