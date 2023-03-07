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
    <div style={{ margin: '0.5rem 0' }} className='w-full flex flex-col'>
      {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
        return (
          <div key={name} className='w-full flex'>
            <span style={{ color: backgroundSelected }}>
              {baseStatsNames[name]}
            </span>
            <div className='w-[60%] flex items-center gap-4'>
              <p>0{base_stat}</p>
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