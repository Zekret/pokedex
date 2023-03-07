import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon, PokeballIconBig } from "../../icons/Icons";

export const Header = ({ pokemon }) => {
  const navigate = useNavigate();

  return (
    <header className="relative max-w-[650px] flex justify-between items-center w-full p-8 text-white">
      <PokeballIconBig className='h-fit absolute top-0 right-0 mr-4 mt-4 w-[250px]' />
      <div className='flex items-center gap-4'>
        <ArrowLeftIcon onClick={() => navigate(-1)} />
        <span className="font-bold capitalize text-[32px]">{pokemon?.name}</span>
      </div>
      <p className="font-bold text-base" >#{pokemon?.id}</p>
    </header>
  );
};