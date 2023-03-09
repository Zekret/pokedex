import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, PokeballIconBig } from "../../icons/Icons";

export const Header = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <header className="max-w-[1000px] flex justify-between items-center w-full py-8">
      <div className='flex items-center gap-4'>
        <ArrowLeftIcon onClick={() => navigate(-1)} />
        <span className="font-bold capitalize text-[32px]">{pokemon?.name}</span>
      </div>
      <p className="font-bold text-2xl" >#{pokemon?.id}</p>
    </header>
  );
};