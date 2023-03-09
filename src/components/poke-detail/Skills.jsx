import { SkillsIcon } from "../../icons/Icons";

export const Skills = ({ pokemon }) => {
  const { abilities } = pokemon;
  return (
    <div style={{ margin: "0.5rem 0" }} className="w-full flex justify-evenly">
      {abilities.map((ability) => {
        return (
          <div className="flex flex-col items-center gap-2">
            <SkillsIcon />
            <span className="font-medium">{ability.ability.name}</span>
          </div>
        );
      })}
    </div>
  );
};
