export const BaseStats = ({ pokemon, backgroundSelected }) => {
  const maxStat = 255;

  const baseStatsNames = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "satk",
    "special-defense": "sdef",
    speed: "spd",
  };

  return (
    <div className='w-full flex flex-col m-2'>
      {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
        return (
          <div key={name} className='w-full flex'>
            <span className="font-bold text-sm uppercase text-right w-[20%] pr-4" style={{ borderRight: '1px solid #e0e0e0', margin: '0 1rem',color: backgroundSelected }}>
              {baseStatsNames[name]}
            </span>
            <div className='w-[60%] flex items-center gap-4'>
              <p className="w-[10%]">0{base_stat}</p>
              <div className='w-full relative'>
                <div
                  className='w-full h-[10px] opacity-50 rounded-lg'
                  style={{ background: backgroundSelected }}
                />
                <div
                  className='absolute left-0 h-[10px] top-0 rounded-lg'
                  style={{
                    background: backgroundSelected,
                    opacity: "1",
                    width: `${(base_stat / maxStat) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};