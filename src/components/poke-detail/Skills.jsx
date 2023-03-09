import { SkillsIcon } from "../../icons/Icons";

export const Skills = () => {    
  return (
    <div style={{ margin: "0.5rem 0" }} className="w-full flex justify-evenly">
      <div className="flex flex-col items-center gap-2">
        <SkillsIcon className="w-[30px] h-[30px] object-contain" />
        {/* <span>{pokemon?.weight}</span> */}
      </div>
      <div className="flex flex-col items-center gap-2">
        <SkillsIcon className="w-[30px] h-[30px] object-contain" />
        {/* <span>{pokemon?.height} </span> */}
      </div>
    </div>
  );
};
